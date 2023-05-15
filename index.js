const DiscordClientHandler = require('./src/infra/structures/DiscordClientHandler')
const APIServer = require('./src/api/Server')
const { GatewayIntentBits } = require('discord.js')
require('dotenv').config()

const botInstance = new DiscordClientHandler({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ]
})

new APIServer(8080).start()

botInstance.config = require('./config.js')
botInstance.login(process.env.BOT_TOKEN)