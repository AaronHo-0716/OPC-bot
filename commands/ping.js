module.exports = {
  name: 'ping',
  description: 'pong',
  callback: (client,interaction) => {
    interaction.reply("pong")
  }
}
