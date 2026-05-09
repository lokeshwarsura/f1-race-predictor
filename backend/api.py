from fastapi import FastAPI
import joblib
import pandas as pd

app = FastAPI()

# Load trained model
model = joblib.load("../models/f1_model.pkl")

@app.get("/")
def home():
    return {
        "message": "F1 Predictor API Running"
    }

@app.get("/predict")
def predict(
    grid: int,
    points: int,
    driver: int,
    team: int
):

    sample_driver = pd.DataFrame(
        [[grid, points, driver, team]],
        columns=[
            'Grid',
            'Points',
            'DriverEncoded',
            'TeamEncoded'
        ]
    )

    probability = model.predict_proba(sample_driver)

    return {
        "win_probability": float(probability[0][1])
    }