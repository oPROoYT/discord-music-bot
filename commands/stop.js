module.exports = ({
    name: "stop",
    code: `
    $deletecommand
    $title[1;Stopping Music]
    $description[1;The music has stopped]
    $stop
    $footer[1;Requested by $userTag[$authorID]]
    $deleteIn[5s]


    $onlyif[$voiceId!=;join a voice channel before using this cmd]
    $onlyForRoles[$getVar[botownerrole];$getVar[moderatorrole];:x: You must be <@$getVar[moderatorrole]>, or higher!!]
    
    `
})