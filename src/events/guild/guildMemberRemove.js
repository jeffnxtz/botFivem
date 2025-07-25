const { EmbedBuilder } = require("discord.js");

module.exports = class guildMemberRemove extends events {
  constructor(...args) {
    super(...args);
    this.event = "guildMemberRemove";
  }

  async exec(member) {
    // Monta a embed de log de saída
    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Membro Saiu do Servidor",
        iconURL: member.guild.iconURL(),
      })
      .addFields(
        {
          name: "👤 | Usuário",
          value: `\`${member.user?.tag || "Desconhecido"}\``,
          inline: false,
        },
        {
          name: "🆔 | ID do Discord",
          value: `\`\`\`${member.id}\`\`\``,
          inline: true,
        },
        {
          name: "📅 | Conta Criada em",
          value: `<t:${Math.floor(member.user?.createdTimestamp / 1000)}:F>`,
          inline: true,
        },
        {
          name: "📤 | Saiu do Servidor em",
          value: `<t:${Math.floor(Date.now() / 1000)}:F>`,
          inline: true,
        }
      )
      .setColor("#ED4245")
      .setThumbnail(member.user?.displayAvatarURL?.() || null)
      .setFooter({
        text: "Monitoramento de Saídas",
      })
      .setTimestamp();

    // Envia no canal de logs de saida
    const canalLogs = member.guild.channels.cache.get(
      process.env.idCanalLogsSaidaServidor
    );
    if (canalLogs) {
      canalLogs.send({ embeds: [embed] });
    }
  }
};
