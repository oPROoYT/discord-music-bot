module.exports = ({
    name: "help",
    code: `
    
    $deletecommand
    $title[1;Command Help]
    $description[1;
    
    **!eval** : Evaluates an expression aka code. **IF YOU KNOW WHAT YOUR DOING THIS COMES IN HANDY**!

    **!loop song/queue/none** : Loops either the current playing song/queue. If you do not loop simply run the command again and do none.

    **!pause** : Pauses the current song | *Still a work in progress refer to github for the newest update*!

    **!play** : Play's a song of your choosing.

    **!queue** : Shows how many songs are left in the queue | **THE BOT MUST BE IN A VC/STAGE FOR THIS TO WORK**

    **!resume** : Resumes the current song | *Still a work in progress refer to github for the newest update*!

    **!skip** : Skips the current song | **THE BOT AND YOU MUST BE IN A VC/STAGE FOR THIS TO WORK**

    **!stop** : Stops the current song | **THE BOT AND YOU MUST BE IN A VC/STAGE FOR THIS TO WORK**

    **!help** : Shows all the commands you can use with this bot!!
    

    **DISCLAIMER | THIS BOT CAN DO 24/7 MUSIC IF YOU PUT IN A URL FROM YOUTUBE THAT IS PLAYING LIVE MUSIC**]

    $footer[1;Made by dreet]
    $addTimestamp[1]
    
    
    `
})