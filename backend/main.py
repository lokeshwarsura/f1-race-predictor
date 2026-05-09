import requests
import pandas as pd

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder

import joblib

url = "https://api.jolpi.ca/ergast/f1/2023/results.json"

response = requests.get(url)

data = response.json()

races = data['MRData']['RaceTable']['Races']

race_results = []

for race in races:

    race_name = race['raceName']

    for result in race['Results']:

        driver = (
            result['Driver']['givenName']
            + " "
            + result['Driver']['familyName']
        )

        position = result['position']

        constructor = result['Constructor']['name']

        grid = result['grid']

        points = result['points']

        race_results.append({
            "Race": race_name,
            "Driver": driver,
            "Team": constructor,
            "Grid": grid,
            "Position": position,
            "Points": points
        })

df = pd.DataFrame(race_results)

# Create Winner Column
df['Winner'] = (df['Position'].astype(int) == 1).astype(int)

# Encode Text Columns
driver_encoder = LabelEncoder()
team_encoder = LabelEncoder()

df['DriverEncoded'] = driver_encoder.fit_transform(df['Driver'])

df['TeamEncoded'] = team_encoder.fit_transform(df['Team'])

print(df.head())

# Features and Target
X = df[['Grid', 'Points', 'DriverEncoded', 'TeamEncoded']]

y = df['Winner']

# Split Dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Train Model
model = RandomForestClassifier()

model.fit(X_train, y_train)

# Predictions
predictions = model.predict(X_test)

accuracy = accuracy_score(y_test, predictions)

print("Accuracy:", accuracy)

# Example Prediction
sample_driver = pd.DataFrame(
    [[10, 17, 19, 3]],
    columns=['Grid', 'Points', 'DriverEncoded', 'TeamEncoded']
)

probability = model.predict_proba(sample_driver)

print("Win Probability:", probability[0][1])

# Save Model
joblib.dump(model, "f1_model.pkl")
df.to_csv("f1_data.csv", index=False)