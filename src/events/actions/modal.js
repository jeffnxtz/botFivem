const {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

require("dotenv").config();

module.exports = class interactionCreate extends events {
  constructor(...args) {
    super(...args);
    this.event = "interactionCreate";
  }
  async exec(interaction, client) {
    if (interaction.isButton()) {
      if (interaction.customId.startsWith("botaowl")) {
        const modal = new ModalBuilder()
          .setCustomId("whitelistModal")
          .setTitle("Informações do Personagem");

        const characterIdInput = new TextInputBuilder()
          .setCustomId("characterIdInput")
          .setLabel("ID do Personagem")
          .setStyle(TextInputStyle.Short)
          .setRequired(true);

        const characterNameInput = new TextInputBuilder()
          .setCustomId("characterNameInput")
          .setLabel("Nome do Personagem")
          .setStyle(TextInputStyle.Short)
          .setRequired(true);

        const firstActionRow = new ActionRowBuilder().addComponents(
          characterIdInput
        );
        const secondActionRow = new ActionRowBuilder().addComponents(
          characterNameInput
        );

        modal.addComponents(firstActionRow, secondActionRow);

        await interaction.showModal(modal);
      }
    }
  }
};
