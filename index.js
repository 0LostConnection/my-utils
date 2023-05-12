const DiscordClientHandler = require('./src/infra/structures/DiscordClientHandler')
const { GatewayIntentBits } = require('discord.js')
require('dotenv').config()

const botInstance = new DiscordClientHandler({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ]
})

botInstance.config = require('./config.js')
botInstance.login(process.env.BOT_TOKEN)