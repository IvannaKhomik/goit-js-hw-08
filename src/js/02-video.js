// Import
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onUpdate = data => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};
player.on('timeupdate', throttle(onUpdate, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime).seconds;

if (savedTime) {
  player.setCurrentTime(parsedTime);
}
