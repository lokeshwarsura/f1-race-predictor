import pandas as pd

from sklearn.ensemble import RandomForestClassifier

# Load dataset
data = pd.read_csv(

    'data/f1_data.csv'

)

# Features
X = data[[

    'Grid',

    'QualifyingPosition',

    'Points',

    'AverageLapTime',

    'TireCompound',

    'Weather',

    'DriverEncoded',

    'TeamEncoded'

]]

# Target
y = data['Winner']

# Train ML model
model = RandomForestClassifier(

    n_estimators=500,

    max_depth=6,

    random_state=42

)

model.fit(X, y)

def predict_win_probability(

    grid,

    qualifying_position,

    points,

    average_lap_time,

    tire_compound,

    weather,

    driver,

    team

):

    prediction = model.predict_proba([[

        grid,

        qualifying_position,

        points,

        average_lap_time,

        tire_compound,

        weather,

        driver,

        team

    ]])[0][1]

    return round(

        float(prediction),

        2

    )