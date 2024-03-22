References [LeetCode-DiscordBot](https://github.com/unca-acm/LeetCode-DiscordBot)

# Requirements:
- Given a user, record their username to a database to fetch
- Get the problem of the day
- Select problems from time to time and display them
- Main Loop:
  - Fetch user's last 20 solved problems and append to database
  - Compare with bounty board of problems
  - Display a message in discord 
- Leaderboard with command
- Command to manually update problems and delete that message
- Graphs for users (Create with d3, upload it, then delete it on machine)
  - Github commit graph
  - Compare against everyone
  - Language type and runtime speeds

# Project Basics:
- Feature branches

# Hurdles
- Hardware architecture
- Automated CI/CD with that architecture (main->release branch)
- Figure out good testing philosophy
- Getting the bot up and running to begin with
