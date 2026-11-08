import './styles/game.css';
import './styles/diorama.css';
import './styles/studio.css';
import { PROJECT } from './customize/project-settings.js';

document.title=`${PROJECT.name} · 雪场沙盘`;
import('./recovered/diorama.js').catch(error=>{
  console.error('Snowfield Lab diorama:',error);
});
