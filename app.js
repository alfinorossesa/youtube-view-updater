const cron = require('node-cron')

const shell = require('shelljs')

cron.schedule("* * * * * *", function(){
    shell.exec('node server.js')
})