const { Telegraf } = require('telegraf')

BOT_TOKEN = ''
const bot = new Telegraf(BOT_TOKEN)
bot.start((ctx) => ctx.reply('Hey, Im working'))



bot.on('new_chat_members', async(ctx) => {
    var id = ctx.update.message.new_chat_member.id
    var user = await ctx.getChatMember(id)
    if (!user.user.username) {
        if (!user.user.lastname) {
            ctx.reply(`Welcome ${user.user.first_name}`)
        } else {
            ctx.reply(`Welcome ${user.user.first_name} ${user.user.last_name}`)
        }
    }

    ctx.reply(`Welcome ${user.user.username}`)


});


bot.launch()