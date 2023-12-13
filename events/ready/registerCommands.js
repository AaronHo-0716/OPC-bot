const areCommandsDifferent = require("../../utils/areCommandsDifferent");
const getApplicationCommands = require("../../utils/getApplicationCommands");
const getLocalCommands = require("../../utils/getLocalCommands");

module.exports = async (client) => {
  try {
    const localCommmands = getLocalCommands(client);
    const applicationCommands = await getApplicationCommands(client);

    for (const localCommand of localCommmands) {
      const { name, description,options } = localCommand;

      const existingCommands = await applicationCommands.cache.find((cmd) => {
        cmd.name == name;
      });

      if (existingCommands) {
        if (localCommand.deleted) {
          await applicationCommands.deleted(existingCommands.id);
          console.log(`Deleted command ${name}`);
          continue;
        }

        if (areCommandsDifferent(existingCommands, localCommand)) {
          await applicationCommands.edit(existingCommands.id, {
            description,
            options,
          });
          console.log(`Updated command ${name}`);
        }
      } else {
        if (localCommand.deleted) {
          console.log(
            `Skipping registering command ${name} as it's set to delete`,
          );
          continue;
        }

        await applicationCommands.create({
          name,
          description,
          options,
        });

        console.log(`Registered command ${name}`)
      }
    }
  } catch (error) {
    console.error(error);
  }
};
