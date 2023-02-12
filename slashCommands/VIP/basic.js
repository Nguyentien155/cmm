const { MessageEmbed } = require("discord.js")
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleIDbasic = ayarlar.roleIDbasic;
var img = ayarlar.img;

module.exports = {
    name: 'spam-basic',
    description: 'SPAM SMS V2',
    type: 'CHAT_INPUT',
    cooldown: 0,
    options: [
    {
      name: "phone",
      description: "SPAM SMS",
      required: true,
      type: "STRING",
    },
  ],

  run: async (client, interaction) => {

    if (!interaction.member.roles.cache.has(roleIDbasic))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleIDbasic}> mới được dùng lệnh này \n Liên Hệ Nguyễn Quốc Khánh IT#7524 Để Mua Nhé !`)
            .setFooter({ text: "© Developer: Nguyễn Quốc Khánh IT#7524" })
            .setTimestamp(),
        ],
      });   

    const phone = interaction.options.getString("phone")

    var exec = require('child_process').exec
      exec(`python sms.py ${phone} 100`, (error, stdout, stderr) => {
    });

    console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
        .setImage("https://media.giphy.com/media/H7BE9OpEfqjoq2rcBl/giphy.gif")
        .addFields(
          {
            name: "`TÀI KHOẢN SPAM`",
            value: ` ***[ ${interaction.user.username} ]*** `,
            inline: true,
          },
          {
            name: "`SỐ ĐIỆN THOẠI SPAM:`",
            value: ` ***[ ${phone} ]*** `,
            inline: true,
          },
          {
            name:  "`PLAN:`",
            value: ` ***[ SMS-BASIC ]*** `,
            inline: true,
          })
          .setFooter('© Developer: Nguyễn Quốc Khánh IT#7524', img)
          .setTimestamp();
            const countdownEmbed = new MessageEmbed()
              .setColor('RANDOM')
              .setTitle(version)
              .setDescription("WAIT LOAD CHECK PHONE NUKER...")
              .setImage("https://media4.giphy.com/media/Y5wlazC8lSVuU/giphy.gif")
              .setFooter('© Developer: Nguyễn Quốc Khánh IT#7524', img)
              .setTimestamp()
            interaction.reply({ embeds: [countdownEmbed] }).then((message) => {
                setTimeout(function () {
                  interaction.editReply({ embeds: [embed] });
                }, 1)
              })
      }
  }