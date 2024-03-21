import { LeetCode, type DailyChallenge } from "leetcode-query"
import { Client, Events, GatewayIntentBits } from "discord.js"
import { config } from "dotenv"
config({ path: "../../.env" })

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, client => {
  console.log(`🚀 Logged in as <${client.user.tag}>`);
});

// Login to Discord with your client's token
client.login(process.env.TOKEN)

const leetcode = new LeetCode()
leetcode.daily().then((data: DailyChallenge) => {
  console.log(data)
})

export default eventHandler((event) => {
  return "Start by editing <code>server/routes/index.ts</code>.";
});
