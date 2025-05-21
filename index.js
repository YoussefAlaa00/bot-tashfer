const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const Discord = require('discord.js');
const client = new Discord.Client({
  intents: 131071,
});
client.once('ready', () => {
  console.clear();
  const line = '─'.repeat(50);
  console.log(line);
  console.log(`🌐 ${client.user.tag} is now online!`);
  console.log(line);
  console.log(`🤖 Bot Username  : ${client.user.username}`);
  console.log(`🆔 Bot ID        : ${client.user.MTM3NDY1NDUyMDczMDA1ODc1Mg.GoBW26.GwyaC9mjgKdgk559tmNDgvT4UA4ZOIPl849jvQ}`);
  console.log(`📅 Launched On   : ${new Date().toLocaleString()}`);
  console.log(line);
  console.log(`📊 Connected to  : ${client.guilds.cache.size} servers`);
  console.log(`👥 Total Users   : ${client.users.cache.size}`);
  console.log(`© 2025  Dark Developers - All Rights Reserved.`);
  console.log(`🔗 GitHub: https://github.com/flex82/`);
  console.log(`💬 Discord: https://discord.gg/YtfcfeDD5c`);
  console.log(line);
  console.log('✅ Bot is fully operational and ready to serve!');
  console.log(line);
  client.user.setActivity(`# ~ Dark Developers`, { type: 'WATCHING' })
client.user.setStatus("idle");
});
const prefix = "-"

const replace = [
  {
    word: "متوفر",
    replace: "مت9فر"
  },
  {
    word: "بيع",
    replace: "بي3"
  },
  {
    word: "شوب",
    replace: "ش9ب"
  },
  {
    word: "ديسكورد",
    replace: "ديس_ورد"
  },
  {
    word: "تبادل",
    replace: "تبا1دل"
  },
  {
    word: "توكن",
    replace: "ت9كن"
  },
  {
    word: "بوست",
    replace: "ب9ست"
  },
  {
    word: "توكنات",
    replace: "ت9كنات"
  },
  {
    word: "بوستات",
    replace: "ب9ستات"
  },
  {
    word: "حساب",
    replace: "حس1ب"
  },
  {
    word: "حسابات",
    replace: "حس1ب1ت"
  },
  {
    word: "نتفيلكس",
    replace: "ن$$فيلكس"
  },
  {
    word: "اون",
    replace: "ا9ن"
  },
  {
    word: "متوفر",
    replace: "مت9فر"
  },
  {
    word: "بيع",
    replace: "بي3"
  },
  {
    word: "شوب",
    replace: "ش9ب"
  },
  {
    word: "ديسكورد",
    replace: "ديس_ورد"
  },
  {
    word: "للبيع",
    replace: "للـب-ع"
  },
  {
    word: "حساب",
    replace: "7ساب"
  },
  {
    word: "سعر",
    replace: "س3ر"
  },
  {
    word: "شحن",
    replace: "شـ7ن"
  },
  {
    word: "فيزا",
    replace: "فـيز-"
  },
  {
    word: "سيرفر",
    replace: "سيرفr"
  },
  {
    word: "شراء",
    replace: "شـrاء"
  },
  {
    word: "نيترو",
    replace: "نيتر9"
  },
  {
    word: "كردت",
    replace: "كرد3"
  },
  {
    word: "ثمن",
    replace: "ثم3"
  },

]

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "تشفير")) {
    if (!message.member.permissions.has("ADMINISTRATOR")) return;
    const embed = new MessageEmbed()
      .setTitle("تشفير منشورك")
      .setDescription("** لتشفير منشورك يرجى الضغط على تشفير منشورك ووضع منشورك ويتم تشفيره مباشر وقم بنسخه فقط .**")
      .setColor("c1e1f3")
      .setImage("https://i.postimg.cc/QCyCW7Hb/116-20250323234708.png")
      .setThumbnail(message.guild.iconURL())

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle("SUCCESS")
          .setLabel("تشفير")
          .setCustomId('replace')


      )
    message.channel.send({ embeds: [embed], components: [row] })
  }
})


client.on("interactionCreate", async i => {
  if (!i.isButton()) return;
  if (i.customId == "replace") {
    const modal = new Modal()
      .setTitle('تشفير')
      .setCustomId('rep')

    const replacer = new TextInputComponent()
      .setCustomId('replacetext')
      .setLabel(`قم بكتابة منشورك الذي تريد تشفيره`)
      .setMaxLength(2000)
      .setRequired(true)
      .setStyle("PARAGRAPH")

    const rows = [replacer].map(
      (component) => new MessageActionRow().addComponents(component)
    )
    modal.addComponents(...rows);
    i.showModal(modal);

  }

})

client.on("interactionCreate", async i => {
  if (!i.isModalSubmit()) return;
  if (i.customId == "rep") {
    let text = i.fields.getTextInputValue('replacetext');
    let replaced = false;

    replace.forEach(t => {
      const regex = new RegExp(t.word, 'g');
      if (regex.test(text)) {
        text = text.replace(regex, t.replace);
        replaced = true;
      }
    });


    if (replace) {
      i.reply({ content: `\`تم بنجاح تشفير منشورك :\`\n\n ${text}`, ephemeral: true })
    } else {
      i.reply({ content: "**عذرا حدث خطأ ما منشور غير صالح برجاء تاكد من منشورك ومحاولة مره اخرى.**", ephemeral: true })
    }
  }

})

client.login("MTM3NDY1NDUyMDczMDA1ODc1Mg.GoBW26.GwyaC9mjgKdgk559tmNDgvT4UA4ZOIPl849jvQ")
