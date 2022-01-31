const fs = require('fs');

modules.export = (client, Discord) =>{
    const load_dir = (dir) =>{
        const event_files = fs.readdirSync(`./events/${file}`).filter(file => file.endsWith('.js'));
        
        for(const file of event_files){
            const event = require(`../events/${file}/${file}`);
            const event_name = file.split('.')[0];
            client.on(event_name, event.bind(null, Discord, client));
        }
    }
    
    ['client', 'guild'].forEach(e => load_dir(e));
}