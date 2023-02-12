const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require('../../ayarlar.json');
var img = ayarlar.img;
let cpuStat = require("cpu-stat");
require("moment-duration-format");
const os = require("os");

module.exports = {
  name: "buyplan",
  description: "mua plan spam sms",
  type: 'CHAT_INPUT',

  run: async (client, interaction) => {
    await interaction.deferReply({
      ephemeral: false,
    });

    const uptime = moment
      .duration(interaction.client.uptime)
      .format(" D [ngày], H [giờ], m [phút], s [giây]");
    let channelCount = client.channels.cache.size;
    let serverCount = client.guilds.cache.size;
    let memberCount = 0;
    client.guilds.cache.forEach((guild) => {
      memberCount += guild.memberCount;
    });

    cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
  }

  const statusEmbed = new MessageEmbed()
      .setTitle(`\`BUY PLAN SERVER DISCORD BINEK111 CODER\``)
      .setColor(client.embedColor)
      .setFields([
        {
          name: "**`BASIC - SMS`**",
          value: `\`\`\`css\n[ GIÁ : 20K ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`VIP - SMS`**",
          value: `\`\`\`css\n[ GIÁ : 60K ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`SUPER - SMS`**",
          value: `\`\`\`css\n[ GIÁ : 100K ]\n\`\`\``,
          inline: true,
        },
      ])
      .setFooter('© Developer: Nguyễn Quốc Khánh IT#7524', img)
      .setTimestamp();
    interaction.editReply({ embeds: [statusEmbed] });
  })
  },
};