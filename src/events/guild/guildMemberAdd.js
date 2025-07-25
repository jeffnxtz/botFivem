const { EmbedBuilder } = require("discord.js");

module.exports = class guildMemberAdd extends events {
  constructor(...args) {
    super(...args);
    this.event = "guildMemberAdd";
  }

  async exec(member) {
    // Adiciona cargo de turista ao novo membro
    await member?.roles
      .add(process.env.idcargoTurista)
      .catch((err) =>
        console.error("Erro ao adicionar cargo de turista:", err)
      );

    // Monta a embed de log de entrada
    const embed = new EmbedBuilder()
      .setAuthor({
        name: "Novo Membro no Servidor",
        iconURL: member.guild.iconURL(),
      })
      .addFields(
        {
          name: "👤 | Usuário",
          value: `<@${member.user.id}> \`(${member.user.tag})\``,
          inline: false,
        },
        {
          name: "🆔 | ID do Discord",
          value: `\`\`\`${member.user.id}\`\`\``,
          inline: true,
        },
        {
          name: "📅 | Conta Criada em",
          value: `<t:${Math.floor(member.user.createdTimestamp / 1000)}:F>`,
          inline: true,
        },
        {
          name: "📆 | Entrada no Servidor",
          value: `<t:${Math.floor(Date.now() / 1000)}:F>`,
          inline: true,
        }
      )
      .setColor("#7289DA")
      .setThumbnail(member.user.displayAvatarURL())
      .setFooter({
        text: `Monitoramento de Entradas`,
      })
      .setTimestamp();

    // Envia no canal de logs de entrada
    const canalLogs = member.guild.channels.cache.get(
      process.env.idCanalLogsEntradaServidor
    );
    if (canalLogs) {
      canalLogs.send({ embeds: [embed] });
    }
  }
};
