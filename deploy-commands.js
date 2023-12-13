const { REST, Routes } = require("discord.js");
const { clientId, guildId } = require("./config.json");
require("dotenv").config();

const token = process.env.BOT_TOKEN;

const commands = [
  {
    name: "ava",
    description: "喝汤拉",
  },
];

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

(async () => {
  try {
    console.log(`Started refreshing application (/) commands.`);

    await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands },
    );

    console.log(`Successfully reloaded application (/) commands.`);
  } catch (err) {
    console.error(err);
  }
})();
