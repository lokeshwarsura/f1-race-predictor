import fastf1
import matplotlib.pyplot as plt

# Enable cache
fastf1.Cache.enable_cache('cache')

# Load session
session = fastf1.get_session(
    2023,
    'Monaco Grand Prix',
    'R'
)

session.load()

# Pick drivers
ver_laps = session.laps.pick_driver('VER')

ham_laps = session.laps.pick_driver('HAM')

# Create graph
plt.figure(figsize=(12, 6))

# Verstappen
plt.scatter(
    ver_laps['LapNumber'],
    ver_laps['LapTime'].dt.total_seconds(),
    label='Verstappen',
    s=40
)

# Hamilton
plt.scatter(
    ham_laps['LapNumber'],
    ham_laps['LapTime'].dt.total_seconds(),
    label='Hamilton',
    s=40
)

# Labels
plt.title('F1 Tire Strategy Analysis')

plt.xlabel('Lap Number')

plt.ylabel('Lap Time (seconds)')

plt.legend()

plt.grid()

# Show graph
plt.show()