module.exports = ({
    name: "resume",
    code: `
    $deletecommand
    $title[1;Resuming Song]
    $resumeTrack
    $description[1;Song has been resumed]
    $footer[1;resumed by $userTag[$authorID]]
    
    $deleteIn[5s]

    $onlyif[$voiceId!=;join a voice channel before using this cmd]
    $onlyForRoles[$getVar[botownerrole];$getVar[moderatorrole];:x: You must be <@$getVar[moderatorrole]>, or higher!!]

    `
})