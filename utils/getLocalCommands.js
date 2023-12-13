const fs = require("fs")
const path = require("path")
module.exports = () => {
  let localCommands = []
  
  const commandPath = path.join(__dirname,  "../commands")
  const commands = fs.readdirSync(commandPath).filter(file => file.endsWith(".js"))

  for (const command of commands) {
    localCommands.push(require(path.join(commandPath,command)))
  }

  return localCommands
}
