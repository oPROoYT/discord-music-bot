module.exports = ({
    name: "update",
    code: `
    
    $title[1;Updating Commands]
    $description[1;Commands have been updated, Current Count: **$commandsCount**]

    $updateCommands
    
    $onlyForRoles[$getVar[botownerrole];:x: You must be the bot owner!!!]
    
    `
})