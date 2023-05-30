import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const keyStorage = "videoplayer-current-time"
    
    const player = new Player(iframe);

    player.on('timeupdate', throttle(function(data) {
        localStorage.setItem(keyStorage, JSON.stringify(data.seconds))
    }), 1000);
   

   player.setCurrentTime(seconds).then(function(seconds) {
       seconds = JSON.parse(localStorage.getItem(keyStorage)) 
     
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
           
            break;

        default:
          
            break;
    }
});
   
