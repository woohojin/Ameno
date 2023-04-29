const { SlashCommandBuilder, Client, Events, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });
module.exports = {
  data: new SlashCommandBuilder().setName("test").setDescription("test about web"),
  async execute(interaction) {
    console.log("test");
    client.on("MessageCreate", (message) => {
        console.log("event test");
        console.log(message.content);
        interaction.reply(message.content);
    })
    // interaction.guild is the object representing the Guild in which the command was run
    await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
  },
};
