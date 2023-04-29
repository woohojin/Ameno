const { SlashCommandBuilder, Client } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("test").setDescription("test about web"),
  async execute(interaction) {
    Client.on(
      "MessageCreate",
      (message) => {
        console.log(message.content);
        interaction.reply(message.content);
      },
      { once: true }
    );
    // interaction.guild is the object representing the Guild in which the command was run
    await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
  },
};
