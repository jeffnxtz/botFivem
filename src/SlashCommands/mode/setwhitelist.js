const {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = class ping extends Command {
  constructor(...args) {
    super(...args);
    this.name = "setwhitelist";
    this.description = "Envia o painel de whitelist com formulário.";
  }

  async run(client, interaction) {
    await interaction.deferReply({ ephemeral: true });

    if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator))
      return interaction.editReply({
        content: `❌ | Você não tem permissão para utilizar este comando.`,
      });

    const embed = new EmbedBuilder()
      .setAuthor({
        name: "🔐 | Sistema de Whitelist",
        iconURL: interaction.guild.iconURL(),
      })
      .setDescription(
        "Preencha um breve formulário de identificação.\n" +
          "**O que você precisa informar:**\n" +
          "```• Seu ID```" +
          "```• Seu nome completo no RP```\n" +
          ""
      )
      .setColor("#FFFFFF")
      .setImage(process.env.linkImagem || null)
      .setFooter({
        text: `Clique no botão abaixo para iniciar o processo`,
      });

    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("botaowl")
        .setEmoji("🔓")
        .setLabel("Iniciar Whitelist")
        .setStyle("Primary")
    );

    await interaction.channel.send({ embeds: [embed], components: [button] });
    await interaction.editReply({
      content: "✅ | Painel de whitelist enviado com sucesso!",
    });
  }
};
