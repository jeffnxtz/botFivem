# Guia Rápido de Configuração e Início do Seu Bot Discord

Bem-vindo ao guia de início rápido do seu novo bot Discord! Este documento foi criado para ajudá-lo a configurar e colocar seu bot online de forma eficiente, focando apenas nos passos essenciais. Se você já possui os arquivos do bot, este guia o levará do registro no Discord Developer Portal até a execução do bot em seu servidor.

Vamos direto ao ponto para que você possa aproveitar todas as funcionalidades do seu bot o mais rápido possível!



## 1. Criando seu Aplicativo no Discord Developer Portal

Para que seu bot funcione, você precisa registrá-lo no [Discord Developer Portal](https://discord.com/developers/applications). Siga os passos:

1.  **Crie uma Nova Aplicação**: Clique em "New Application" (Nova Aplicação) no canto superior direito. Dê um nome ao seu bot e clique em "Create" (Criar).

2.  **Adicione um Bot**: No menu lateral esquerdo, vá em "Bot". Clique em "Add Bot" (Adicionar Bot) e confirme. Você verá as informações do seu bot.

3.  **Copie o Token do Bot**: Na seção "TOKEN", clique em "Copy" (Copiar). **Este token é secreto e crucial para o funcionamento do seu bot. Nunca o compartilhe!** Guarde-o em um local seguro, pois você precisará dele para o arquivo `.env`.

4.  **Configure as Intents (Privilégios de Gateway)**: Ainda na página "Bot", role para baixo até "Privileged Gateway Intents". Para o funcionamento básico do seu bot, você **deve ativar** as seguintes intents:
    *   `PRESENCE INTENT`
    *   `SERVER MEMBERS INTENT`
    *   `MESSAGE CONTENT INTENT` (essencial para o bot ler o conteúdo das mensagens e responder a comandos).
    Após marcar as caixas, clique em "Save Changes" (Salvar Alterações).

5.  **Convide o Bot para o seu Servidor**: No menu lateral esquerdo, vá em "OAuth2" e depois em "URL Generator".
    *   Em "SCOPES", marque `bot` e `applications.commands`.
    *   Em "BOT PERMISSIONS", selecione as permissões que seu bot precisará (ex: "Send Messages", "Read Message History", "Administrator" se for um bot de gerenciamento).
    *   Uma URL será gerada na seção "Generated URL". Copie-a, cole no seu navegador e siga as instruções para adicionar o bot ao seu servidor. Certifique-se de ter permissões de "Gerenciar Servidor" no servidor de destino.



## 2. Configurando o Arquivo `.env`

O arquivo `.env` contém as configurações sensíveis e específicas do seu bot, como o token e IDs de canais/cargos. Ele já deve estar presente na pasta raiz do seu bot. Abra-o com um editor de texto simples (como Bloco de Notas, VS Code, Sublime Text) e preencha as informações conforme o exemplo abaixo:

```
token=

linkImagem=https://i.postimg.cc/NffVpMSg/71a3c397823222c4142383958b7ce98d-2.gif
colorButton=Primary
idCanalLogsAprovado=
idCanalLogsEntradaServidor=
idCanalLogsSaidaServidor=

idcargoCidadao=
idcargoTurista=

connect=127.0.0.1
port=3306
userdb=root
passwordb=
database=
```

**Preencha as seguintes variáveis:**

*   `token`: Cole o token do seu bot que você copiou do Discord Developer Portal.
*   `linkImagem`: URL de uma imagem para aparecer nas embeds. Se não quiser, deixe em branco.
*   `colorButton`: Cor dos botões (Primary, Secondary, Success, Danger).
*   `idCanalLogsAprovado`: ID do canal onde o bot enviará logs de aprovação de whitelist.
*   `idCanalLogsEntradaServidor`: ID do canal para logs de entrada de membros.
*   `idCanalLogsSaidaServidor`: ID do canal para logs de saída de membros.
*   `idcargoCidadao`: ID do cargo que será atribuído ao usuário após a aprovação na whitelist.
*   `idcargoTurista`: ID do cargo que será removido do usuário após a aprovação na whitelist.
*   `connect`: IP de conexão com o banco de dados (geralmente `127.0.0.1` para localhost).
*   `port`: Porta do banco de dados (padrão `3306` para MySQL).
*   `userdb`: Usuário do seu banco de dados (ex: `root`).
*   `passwordb`: Senha do seu banco de dados (deixe em branco se não houver).
*   `database`: Nome do banco de dados que o bot usará.

**Como obter IDs de Canais e Cargos no Discord:**

1.  Ative o Modo Desenvolvedor no Discord: Vá em `Configurações de Usuário` > `Avançado` e ative `Modo Desenvolvedor`.
2.  Clique com o botão direito no canal ou cargo desejado e selecione `Copiar ID`.



## 3. Instalação de Dependências e Início do Bot

Com o arquivo `.env` configurado, você está a um passo de colocar seu bot online. Certifique-se de ter o [Node.js e o npm](https://nodejs.org/) instalados em seu computador.

1.  **Instale as Dependências**: Abra o terminal ou prompt de comando na pasta raiz do seu bot (onde estão `package.json` e `index.js`). Execute o seguinte comando para instalar todas as bibliotecas necessárias:

    ```bash
    npm install
    ```

    Este comando lerá o arquivo `package.json` e instalará todas as dependências listadas.

2.  **Inicie o Bot**: Após a instalação das dependências, você tem duas opções para iniciar o bot:

    *   **Via Terminal**: No mesmo terminal, execute:

        ```bash
        node index.js
        ```

    *   **Via Arquivo `start.bat`**: Se o seu pacote inclui um arquivo `start.bat` (para Windows), basta dar um duplo clique nele. Este arquivo já está configurado para executar o bot.

Se tudo estiver correto, você verá mensagens no terminal indicando que o bot está online, e ele aparecerá como "Online" no seu servidor Discord. Parabéns, seu bot está funcionando!

## Próximos Passos

Agora que seu bot está online, você pode começar a testar suas funcionalidades. Lembre-se de que, para o bot permanecer online, o terminal ou o arquivo `start.bat` deve permanecer aberto. Para hospedagem 24/7, considere serviços de hospedagem de bots ou um VPS.

Esperamos que este guia rápido tenha sido útil!

