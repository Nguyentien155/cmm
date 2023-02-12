const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require('../../ayarlar.json');
var img = ayarlar.img;
let cpuStat = require("cpu-stat");
require("moment-duration-format");
const os = require("os");

module.exports = {
  name: "status",
  description: "Xem trạng thái bot",
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
      .setTitle(`\`🔎 Số liệu thống kê của ${client.user.username}\``)
      .setColor(client.embedColor)
      .setFields([
        {
          name: "**`💻 Máy chủ`**",
          value: `\`\`\`css\n[ ${serverCount} ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`📁 Kênh`**",
          value: `\`\`\`css\n[ ${channelCount} ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`👪 Thành Viên`**",
          value: `\`\`\`css\n[ ${memberCount} ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`⌚️ Thời Gian Hoạt Động`**",
          value: `\`\`\`css\n[ ${uptime} ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`👾 Discord.js`**",
          value: `\`\`\`css\n[ ${Discord.version} ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`🔰 NodeJS`**",
          value: `\`\`\`css\n[ ${process.version} ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`🏓 Ping`**",
          value: `\`\`\`css\n[ ${client.ws.ping} ms ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`⏳ RAM`**",
          value: `\`\`\`css\n[ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`🤖 CPU Đang Dùng`**",
          value: `\`\`\`css\n[ ${percent.toFixed(2)} % ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`🤖 CPU`**",
          value: `\`\`\`css\n[ ${os.cpus().map((i) => `${i.model}`)[0]} ]\n\`\`\``,
          inline: true,
        },
      ])
      .setFooter('© Developer: Nguyễn Quốc Khánh IT#7524', img)
      .setTimestamp();
    interaction.editReply({ embeds: [statusEmbed] });
  })
  },
};