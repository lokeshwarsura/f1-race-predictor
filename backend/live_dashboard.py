import fastf1
import matplotlib.pyplot as plt

# Enable cache
fastf1.Cache.enable_cache('cache')

# Load session
session = fastf1.get_session(
    2023,
    'Monaco Grand Prix',
    'Q'
)

session.load()

# Fastest lap
lap = session.laps.pick_driver('VER').pick_fastest()

# Telemetry
tel = lap.get_car_data().add_distance()

# Create dashboard
fig, axs = plt.subplots(
    3,
    1,
    figsize=(14, 12)
)

# Speed
axs[0].plot(
    tel['Distance'],
    tel['Speed']
)

axs[0].set_title('Speed Telemetry')

axs[0].set_ylabel('Speed')

axs[0].grid()

# Throttle
axs[1].plot(
    tel['Distance'],
    tel['Throttle']
)

axs[1].set_title('Throttle Telemetry')

axs[1].set_ylabel('Throttle %')

axs[1].grid()

# Brake
axs[2].plot(
    tel['Distance'],
    tel['Brake'] * 100
)

axs[2].set_title('Brake Telemetry')

axs[2].set_xlabel('Distance')

axs[2].set_ylabel('Brake %')

axs[2].grid()

# Layout
plt.tight_layout()

# Show dashboard
plt.show()