const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('greet')
		.setDescription('Greets!')
        .addStringOption(option =>
            option
            .setName('language')
            .setDescription('言語を指定します')
            .setRequired(true)
            .addChoice('Japanese','ja')
            .addChoice('Japanese','ja')
        ),
    async execute(interaction) {
        if (interaction.options.getString('language') === 'Japanese') {
			await interaction.reply('こんにちは！');
        } else {
            await interaction.reply('Hello!');
        }
    }
}