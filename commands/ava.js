const { EmbedBuilder, channelMention } = require("discord.js");
module.exports = {
  name: "ava",
  description: "喝汤拉",
  callback: (client, interaction) => {
    const ascensionBuff = new EmbedBuilder()
      .setColor("Random")
      .setTitle("金洞喝汤团")
      .setDescription("基本上就是喝汤而已没有什么好说的")
      .setImage("https://media1.tenor.com/m/HbtBxeXWOWsAAAAC/spin-record.gif")
      .addFields(
        { name: "地图：6.0", value: "DPS IP 在1300以上" },
        { name: "配装参考:", value: channelMention("1180879904003338331") },
        { name: "\u200B", value: "\u200B" },
        { name: "副坦: ", value: "\u200B", inline: true },
        { name: "主奶: ", value: "\u200B", inline: true },
        { name: "副奶: ", value: "\u200B", inline: true },
        { name: "黑僧棍: ", value: "\u200B", inline: true },
        { name: "盾冲: ", value: "\u200B", inline: true },
        { name: "减疗: ", value: "\u200B", inline: true },
        { name: "冰法DPS: ", value: "\u200B", inline: true },
        { name: "火法DPS: ", value: "\u200B", inline: true },
        { name: "XBow DPS: ", value: "\u200B", inline: true },
      );

    interaction.channel.send({ embeds: [ascensionBuff] });
  },
};
