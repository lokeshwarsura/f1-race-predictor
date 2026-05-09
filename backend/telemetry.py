import fastf1

fastf1.Cache.enable_cache('cache')

session = fastf1.get_session(
    2023,
    'Monaco Grand Prix',
    'R'
)

session.load()

fastest_lap = session.laps.pick_fastest()

driver = fastest_lap['Driver']

lap_time = fastest_lap['LapTime']

compound = fastest_lap['Compound']

print("Fastest Driver:", driver)

print("Lap Time:", lap_time)

print("Tyre Compound:", compound)