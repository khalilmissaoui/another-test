const EventEmitter = require('events');


class Logger extends EventEmitter {

      
        
    
    log(message){
        console.log(message);
    
       this.emit('loggedMessage');
    }

    GET(message){
        console.log(message);
    
       this.emit('GET',{id: 1,url:'httpRequest'} );
    }
    
}





module.exports =Logger;