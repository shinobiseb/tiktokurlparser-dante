require('dotenv').config()
const { TOKEN } = process.env
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require(`discord.js`)

const prefix = '//'

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", ()=> {
    console.log("Bot is online")

    client.user.setActivity('Master Baiting', {type: "WATCHING"});

})

client.on("messageCreate", (message) => {

    //tiktok Parser

    if(message.content.startsWith(`https://www.tiktok.com/`)) {
        const urlf = message.content.slice(0,11)
        const urlb = message.content.slice(12, message.content.length)

        const output = urlf + ".df" + urlb

        message.channel.send(output)
    }

    if(!message.content.startsWith(prefix) || message.author.bot ) return;

    const args = message.content.slice(prefix.length).split(/ + /);

    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0]

    //commands

//responses

    const responses = [
        `You're doing great ${command}`, 
        `You got this ${command}`, 
        `If I were you I personally wouldn't let that slide ${command}`
]
    const randomChoice = (max) => {
        return Math.floor(Math.random() * max);
    }

    console.log(responses[randomChoice(responses.length)])

    //fun response command

    if(command === `rsnl` || command === 'sami' || command === 'jotaro' || command === 'kira' || command === 'dante') {
        message.channel.send(responses[randomChoice(responses.length)])
    }

    if(command === `sami`) {
        message.channel.send(`You doin anything later? You're kinda hot`)
    }


//test command

if(command === `test`) {
    message.channel.send("Bot is working")
}



























})















client.login( TOKEN )