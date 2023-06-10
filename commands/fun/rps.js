const { SlashCommandBuilder } = require("discord.js");
const index = require("../../index");

module.exports = {
  data: new SlashCommandBuilder().setName("가위바위보").setDescription("Ameno와 가위바위보 하기"),
  async execute(interaction) {
    await interaction.reply("가위 | 바위 | 보 중에 입력하세요.");

    index.client.once("messageCreate", async (message) => {
      if (message.author.bot) return;

      const command = message.content;
      const rpsmap = new Map();

      rpsmap.set("가위", [1, 0, 2]); //win : 0 draw : 1 lose : 2
      rpsmap.set("바위", [2, 1, 0]);
      rpsmap.set("보", [0, 2, 1]);

      const acceptedReplies = ["가위", "바위", "보"];
      const random = Math.floor(Math.random() * acceptedReplies.length);
      const result = acceptedReplies[random];
      const dialogue = [` \`${result}\` 내가 이겼어~`, ` \`${result}\` 비겼어!`, ` \`${result}\` 너가 이겼어!`, `이 명령어만 사용 할 수 있습니다: \`${acceptedReplies.join(", ")}\``];

      if (acceptedReplies.includes(command)) {
        return message.reply(dialogue[rpsmap.get(command)[random]]);
      } else {
        return message.reply(dialogue[3]);
      }
    });
  },
};
