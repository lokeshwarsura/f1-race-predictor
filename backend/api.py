from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

import fastf1

from predictor import predict_win_probability

app = FastAPI()

fastf1.Cache.enable_cache('cache')

app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)

@app.get("/predict")

def predict(

    grid: int,

    qualifying_position: int,

    points: int,

    average_lap_time: float,

    tire_compound: int,

    weather: int,

    driver: int,

    team: int

):

    probability = predict_win_probability(

        grid,

        qualifying_position,

        points,

        average_lap_time,

        tire_compound,

        weather,

        driver,

        team

    )

    return {

        "win_probability": probability

    }

@app.get("/live_driver_data")

def live_driver_data():

    session = fastf1.get_session(

        2024,

        'Monaco',

        'R'

    )

    session.load()

    laps = session.laps

    fastest_lap = laps.pick_fastest()

    return {

        "driver":

            fastest_lap['Driver'],

        "lap_time":

            str(

                fastest_lap['LapTime']

            ),

        "position":

            int(

                fastest_lap['Position']

            ),

        "track_status":

            int(

                fastest_lap['TrackStatus']

            ),

        "speed":

            320

    }

@app.get("/historical_data")

def historical_data(

    year: int,

    gp: str,

    session_type: str

):

    session = fastf1.get_session(

        year,

        gp,

        session_type

    )

    session.load()

    laps = session.laps

    fastest_lap = laps.pick_fastest()

    return {

        "driver":

            fastest_lap['Driver'],

        "lap_time":

            str(

                fastest_lap['LapTime']

            ),

        "position":

            int(

                fastest_lap['Position']

            ),

        "track_status":

            int(

                fastest_lap['TrackStatus']

            ),

        "speed":

            320

    }

@app.get("/compare_drivers")

def compare_drivers():

    session = fastf1.get_session(

        2024,

        'Monaco',

        'R'

    )

    session.load()

    laps = session.laps

    ham_lap = laps.pick_drivers(

        'HAM'

    ).pick_fastest()

    ver_lap = laps.pick_drivers(

        'VER'

    ).pick_fastest()

    return {

        "hamilton": {

            "lap_time":

                str(

                    ham_lap['LapTime']

                ),

            "speed":

                315

        },

        "verstappen": {

            "lap_time":

                str(

                    ver_lap['LapTime']

                ),

            "speed":

                322

        }

    }

@app.get("/strategy_recommendation")

def strategy_recommendation(

    tire_compound: int,

    weather: int,

    pit_stops: int

):

    if weather >= 3:

        recommendation = (

            "Switch to Intermediate Tires"

        )

    elif tire_compound == 1 and pit_stops == 0:

        recommendation = (

            "Pit Soon - Soft tires degrading"

        )

    elif tire_compound == 3:

        recommendation = (

            "Stay Out - Hard tires stable"

        )

    else:

        recommendation = (

            "Push Current Stint"

        )

    return {

        "strategy":

            recommendation

    }

@app.get("/race_control")

def race_control():

    return {

        "flag":

            "Green Flag",

        "drs":

            "Enabled",

        "safety_car":

            "No",

        "lap":

            42

    }