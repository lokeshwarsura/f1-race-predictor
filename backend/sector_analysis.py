import fastf1
import matplotlib.pyplot as plt
import numpy as np

# Enable cache
fastf1.Cache.enable_cache('cache')

# Load session
session = fastf1.get_session(
    2023,
    'Monaco Grand Prix',
    'Q'
)

session.load()

# Fastest laps
ver_lap = session.laps.pick_driver('VER').pick_fastest()

ham_lap = session.laps.pick_driver('HAM').pick_fastest()

# Sector times
ver_sectors = [

    ver_lap['Sector1Time'].total_seconds(),

    ver_lap['Sector2Time'].total_seconds(),

    ver_lap['Sector3Time'].total_seconds()

]

ham_sectors = [

    ham_lap['Sector1Time'].total_seconds(),

    ham_lap['Sector2Time'].total_seconds(),

    ham_lap['Sector3Time'].total_seconds()

]

# Labels
labels = ['Sector 1', 'Sector 2', 'Sector 3']

x = np.arange(len(labels))

width = 0.35

# Create graph
plt.figure(figsize=(10, 6))

plt.bar(
    x - width/2,
    ver_sectors,
    width,
    label='Verstappen'
)

plt.bar(
    x + width/2,
    ham_sectors,
    width,
    label='Hamilton'
)

# Labels
plt.ylabel('Time (seconds)')

plt.title('F1 Sector Time Comparison')

plt.xticks(x, labels)

plt.legend()

plt.grid(axis='y')

# Show graph
plt.show()