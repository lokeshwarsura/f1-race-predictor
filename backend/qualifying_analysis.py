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

# Drivers
drivers = ['VER', 'HAM', 'ALO', 'SAI', 'PER']

# Create graph
plt.figure(figsize=(12, 6))

# Plot lap times
for driver in drivers:

    laps = session.laps.pick_driver(driver)

    lap_times = laps['LapTime'].dt.total_seconds()

    lap_numbers = laps['LapNumber']

    plt.plot(
        lap_numbers,
        lap_times,
        marker='o',
        label=driver
    )

# Labels
plt.title('Qualifying Pace Analysis')

plt.xlabel('Lap Number')

plt.ylabel('Lap Time (seconds)')

plt.legend()

plt.grid()

# Show graph
plt.show()