const { SlashCommandBuilder } = require("discord.js");
const index = require("../../index");
const fs = require("fs");
const ytdl = require("ytdl-core");
try {
  const { joinVoiceChannel } = require("@discordjs/voice");
} catch (e) {
  console.error(e);
}

module.exports = {
  data: new SlashCommandBuilder().setName("music").setDescription("유튜브 주소로 음악 틀기"),
  async execute(interaction) {
    await interaction.reply("주소를 입력해주세요.");

    index.client.once("messageCreate", async (message) => {
      if (message.author.bot) return;

      if (!message.guild) return;

      const voice_channel = message.member.voice.channel;
      try {
        const connection = joinVoiceChannel({
          channelId: voice_channel.id,
          guildId: voice_channel.guild.id,
          adapterCreator: voice_channel.guild.voiceAdapterCreator,
        });

        const command = message.content;

        const dispatcher = connection.play(ytdl(command, { filter: "audioonly" }));
      } catch (e) {
        console.error(e);
        return message.reply("오류가 발생했습니다.");
      }
    });
  },
};
