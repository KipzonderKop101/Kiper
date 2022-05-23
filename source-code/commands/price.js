const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('price')
		.setDescription('get the price of a crypto in your currency.')
        .addStringOption(option =>
            option.setName('currency')
                .setDescription('the currency to display the price')
                .setRequired(true)
                .addChoice('USD', 'US Dollar')
                .addChoice('EUR', 'Euro')),
	async execute(interaction) {
		await interaction.reply('...');
	},
};
