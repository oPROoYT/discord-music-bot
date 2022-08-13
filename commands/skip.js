module.exports = ({
    name: "skip",
    code: `
    $deletecommand
    $title[1;Skipping Song]
    $description[1;Song Skipped]
    $skipSong
    $footer[1;number of songs -> $queueLength]
    $deleteIn[5s]
    

    $onlyif[$voiceId!=;join a voice channel before using this cmd]
    $onlyForRoles[$getVar[botownerrole];$getVar[moderatorrole];:x: You must be <@$getVar[moderatorrole]>, or higher!!]
    
    `
})