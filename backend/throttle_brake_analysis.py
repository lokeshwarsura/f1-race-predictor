import fastf1
import matplotlib.pyplot as plt

# Enable cache
fastf1.Cache.enable_cache('cache')

# Load qualifying session
session = fastf1.get_session(
    2023,
    'Monaco Grand Prix',
    'Q'
)

session.load()

# Fastest laps
ver_lap = session.laps.pick_driver('VER').pick_fastest()

ham_lap = session.laps.pick_driver('HAM').pick_fastest()

# Telemetry
ver_tel = ver_lap.get_car_data().add_distance()

ham_tel = ham_lap.get_car_data().add_distance()

# Create graph
plt.figure(figsize=(14, 8))

# Verstappen throttle
plt.plot(
    ver_tel['Distance'],
    ver_tel['Throttle'],
    label='VER Throttle'
)

# Hamilton throttle
plt.plot(
    ham_tel['Distance'],
    ham_tel['Throttle'],
    label='HAM Throttle'
)

# Verstappen brake
plt.plot(
    ver_tel['Distance'],
    ver_tel['Brake'] * 100,
    label='VER Brake'
)

# Hamilton brake
plt.plot(
    ham_tel['Distance'],
    ham_tel['Brake'] * 100,
    label='HAM Brake'
)

# Labels
plt.title('Throttle and Brake Analysis')

plt.xlabel('Distance')

plt.ylabel('Throttle / Brake %')

plt.legend()

plt.grid()

# Show graph
plt.show()