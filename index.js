const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(process.env.devStatus ? process.env.TOKEN_TEST : process.env.TOKEN_DEFAULT, {polling: true})
const channelIds = ['', '', '']
const sticker = '😜'

bot.on('message', msg => {
    if (msg.text === '/start'){
        channelIds.forEach((chat_id) => {
            bot.sendMessage(chat_id, `Ку ${sticker}`).then(() => {
                console.log(`the message with chat_id ${chat_id} sended succesfully`)
                .catch((error) => {
                    console.log(`error the message with chat_id ${chat_id} wasnt sended ${errror.message}`)
                })
        
            })
        })
        bot.sendMessage(msg.chat.id, "успех сообщение отправлено на канал")
    }
})

bot.on('channel_post', msg => {
    console.log(msg)
})

bot.on('polling_error', console.log)
