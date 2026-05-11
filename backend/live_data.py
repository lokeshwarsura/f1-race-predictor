import fastf1

# Enable cache
fastf1.Cache.enable_cache('cache')

# Load latest race session
session = fastf1.get_session(

    2024,

    'Monaco',

    'R'

)

print("Loading session...")

session.load()

print("Session Loaded!")

# Get lap data
laps = session.laps

# Show fastest laps
fastest = laps.pick_fastest()

print("\nFastest Lap Data:\n")

print(fastest)