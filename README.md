# Welcome bot
- This bot was builded with Telegraf.js;


### Features

- Mention of a new user on a chat group, with custom welcome message;

------------

## How to use?
-  Put your ID Chat in `BOT_TOKEN`

```javascript
const { Telegraf } = require('telegraf');

BOT_TOKEN = ' ';
const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx) => ctx.reply('Hey, Im working'));
```


------------

You can add other functions. check the [Telegraf.js Docs](https://telegraf.js.org "Telegraf.js Docs") and [Telegram API docs](https://core.telegram.org/bots/api "Telegram API docs").


