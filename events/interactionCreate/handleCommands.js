const getLocalCommands = require("../../utils/getLocalCommands");

module.exports = async (client, interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const localCommands = getLocalCommands(client);

  try {
    const commandObject = localCommands.find((cmd) =>
      cmd.name == interaction.commandName
    );

    if (!commandObject) return;

    if (commandObject.permissionRequired?.length) {
      for (const permission of commandObject.permissionRequired) {
        if (!interaction.member.permissions.has(permission)) {
          interaction.reply({
            content: "Not enough permissions",
            ephemeral: true,
          });
          break;
        }
      }
    }

    await commandObject.callback(client, interaction);
  } catch (error) {
    console.error(error);
  }
};
