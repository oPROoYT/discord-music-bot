module.exports = ({
    name: "loop",
    $if: "v4",
    code: `
    $deletecommand
    $title[1;Loop Status]
    $description[1;Looping has been set to $loopStatus]
    $footer[1;Requested by e]


    $if[$message==song]
    
    $loopMode[song]
    
    $endIf

    $if[$message==queue]
    
    $loopMode[queue]
    
    $endIf

    $if[$message==disabled]
    
    $loopMode[none]
    
    $endIf
    
    $onlyif[$voiceId!=;join a voice channel before using this cmd]
    $onlyForRoles[$getVar[botownerrole];$getVar[moderatorrole];:x: You must be <@$getVar[moderatorrole]>, or higher!!]
    
    `
})