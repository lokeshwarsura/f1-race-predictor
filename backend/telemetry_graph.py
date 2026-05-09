import fastf1
import matplotlib.pyplot as plt

# Enable cache
fastf1.Cache.enable_cache('cache')

# Load race session
session = fastf1.get_session(
    2023,
    'Monaco Grand Prix',
    'R'
)

session.load()

# Pick drivers
ver_lap = session.laps.pick_driver('VER').pick_fastest()

ham_lap = session.laps.pick_driver('HAM').pick_fastest()

# Get telemetry
ver_tel = ver_lap.get_car_data().add_distance()

ham_tel = ham_lap.get_car_data().add_distance()

# Create graph
plt.figure(figsize=(12, 6))

plt.plot(
    ver_tel['Distance'],
    ver_tel['Speed'],
    label='Max Verstappen'
)

plt.plot(
    ham_tel['Distance'],
    ham_tel['Speed'],
    label='Lewis Hamilton'
)

# Labels
plt.title('F1 Telemetry Comparison')

plt.xlabel('Distance')

plt.ylabel('Speed')

plt.legend()

plt.grid()

# Show graph
plt.show()