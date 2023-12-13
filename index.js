const { Client, GatewayIntentBits, Collection, EmbedBuilder, channelMention } = require(
  "discord.js",
);
const eventHandler = require("./handler/eventHandler");
require("dotenv").config();

const token = process.env.BOT_TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

eventHandler(client)
client.login(token);
