import Hapi from "@hapi/hapi"
import { LeetCode, type DailyChallenge } from "leetcode-query"
import { Client, Events, GatewayIntentBits, REST, SlashCommandBuilder, Routes } from "discord.js"
import { config } from "dotenv"
config({ path: "../../.env" })

const init = async () => {
  // Create an HTTP server with Hapi
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });
  await server.start();
  console.log('🚀 Server running on %s', server.info.uri);

  // Create a new Discord client instance
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  // When the client is ready, run this code (only once)
  client.once(Events.ClientReady, client => {
    console.log("🤖 Logged in to Discord as %s", client.user.tag);
  });

  // Login to Discord with your client's token
  client.login(process.env.TOKEN)

  // Utilize the REST interface from Discord.js
  const discord = new REST({ version: "10" })
    .setToken(process.env.TOKEN as string)

  // Create a new instance of LeetCode ORM
  const leetcode = new LeetCode()
  leetcode.daily().then((data: DailyChallenge) => {
    // console.log(data)
  })

  const command = new SlashCommandBuilder()
    .setName("daily")
    .setDescription("Fetch daily challenge from LeetCode")

  discord.put(Routes.applicationCommands(process.env.CLIENT_ID as string), {
    body: [command.toJSON()]
  })

  // TODO: Capture channel messages using Discord REST API
  // https://discord.com/developers/docs/interactions/receiving-and-responding

  // client.on(Events.InteractionCreate, async interaction => {
  //   if (!interaction.isChatInputCommand()) return;
  //
  //   if (interaction.commandName === "daily") {
  //     const data = await leetcode.daily();
  //     await interaction.reply(data.toString());
  //   }
  //
  //   console.log(interaction)
  // })
  //
  // client.on(Events.MessageCreate, async interaction => {
  //   console.log(interaction)
  // })

};

// Listen for unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
