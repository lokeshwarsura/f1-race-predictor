import fastf1

import pandas as pd

import random

fastf1.Cache.enable_cache('cache')

races = [

    ('Bahrain', 2024),

    ('Saudi Arabian', 2024),

    ('Monaco', 2024),

    ('Silverstone', 2023),

    ('Monza', 2023),

    ('Spa', 2023)

]

dataset = []

for race, year in races:

    print(f'Loading {race} {year}')

    session = fastf1.get_session(

        year,

        race,

        'R'

    )

    session.load()

    results = session.results

    laps = session.laps

    for _, row in results.iterrows():

        driver_code = row['Abbreviation']

        driver_laps = laps.pick_drivers(

            driver_code

        )

        avg_lap_time = 90.0

        if len(driver_laps) > 0:

            lap_times = driver_laps[

                'LapTime'

            ].dropna()

            if len(lap_times) > 0:

                avg_lap_time = (

                    lap_times.dt.total_seconds()

                    .mean()

                )

        tire_value = 2

        compound_data = driver_laps[

            'Compound'

        ].dropna()

        if len(compound_data) > 0:

            tire = compound_data.mode()[0]

            tire_map = {

                'SOFT': 1,

                'MEDIUM': 2,

                'HARD': 3,

                'INTERMEDIATE': 4,

                'WET': 5

            }

            tire_value = tire_map.get(

                str(tire).upper(),

                2

            )

        weather = random.randint(1, 4)

        pit_stops = len(

            driver_laps[

                'PitOutTime'

            ].dropna()

        )

        dataset.append({

            'Grid':

                int(row['GridPosition']),

            'QualifyingPosition':

                int(row['GridPosition']),

            'Points':

                float(row['Points']),

            'AverageLapTime':

                round(

                    avg_lap_time,

                    2

                ),

            'TireCompound':

                tire_value,

            'Weather':

                weather,

            'PitStops':

                pit_stops,

            'DriverEncoded':

                hash(

                    row['Abbreviation']

                ) % 100,

            'TeamEncoded':

                hash(

                    row['TeamName']

                ) % 100,

            'Winner':

                1 if row['Position'] == 1 else 0

        })

df = pd.DataFrame(dataset)

df.to_csv(

    'data/f1_data.csv',

    index=False

)

print('Dataset created successfully!')