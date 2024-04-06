const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['919539901834']
global.ownername = "𝒇𝒂𝒍𝒔𝒆 𝒆𝒚𝒆"//owner name
global.ytname = "Telegram: @false_eye"
global.socialm = "Instagram: @false_eye"
global.location = "Epstein Island"

global.botname = '9ine.x3' //name of the bot

//sticker details
global.stickername = '9ine.x3 ft. false eye'
global.packname = '9ine.x3'
global.author = '@false_eye'
//console view/theme
global.themeemoji = '💤'
global.wm = "9ine.x3"

//theme link
global.link = 'https://t.me/sarca_stics'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!*',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
