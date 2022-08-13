module.exports = ({
    name: "pause",
    code: `
    $deletecommand
    $title[1;Pausing Song]
    $pauseTrack
    $description[1;Song has been paused]
    $footer[1;Paused by $userTag[$authorID]]
    
    $deleteIn[5s]

    $onlyif[$voiceId!=;join a voice channel before using play cmd]
    $onlyForRoles[$getVar[botownerrole];$getVar[moderatorrole];:x: You must be <@$getVar[moderatorrole]>, or higher!!]





    `
})