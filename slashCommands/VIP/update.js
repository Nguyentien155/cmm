const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'checkupdate',
    description: 'XEM UPDATE BOT',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`\`${client.user.username} UPDATE V3\``)
            .setDescription(`\`\`\`ini\n[ THÊM STATUS , PING , SPAM SMS ]\n\`\`\``)
            .setColor("RANDOM")
            .setFooter('© Developer: Nguyễn Quốc Khánh IT#7524')
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    },
};