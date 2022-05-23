const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const axios = require("axios");
const price = require('./commands/price');

const client =  new Client({ intents: [Intents.FLAGS.GUILDS] });


client.once('ready', () => {
    console.log('Crypto Price Bot logged in');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply(`Latency is **${Date.now() - interaction.createdTimestamp}ms**. API Latency is **${Math.round(client.ws.ping)}ms**.`);
    } else if (commandName === 'price') {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=doge-dash&vs_currencies=USD');
            await interaction.reply(JSON.stringify(response.data));
        } catch (error) {
            await interaction.reply('Oops, we just ran into an error. Please try again in a few minutes, if this error persists, please let us know!');
            console.log(error);
        }
    }
});

client.login(token);
