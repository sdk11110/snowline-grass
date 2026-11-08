import './styles/game.css';
import './styles/studio.css';
import './styles/experience.css';
import { mountStudio } from './studio.js';
import { mountOpening } from './experience/opening.js';
import { mountExperience } from './experience/experience.js';

const opening=mountOpening();
mountStudio();
import('./recovered/main.js').then(()=>{
  mountExperience(window.__SNOWFIELD_GAME__,opening);
  window.dispatchEvent(new Event('snowfield:ready'));
}).catch(error=>{
  window.dispatchEvent(new CustomEvent('snowfield:error',{detail:error.message}));
  console.error('Snowline Roam could not start:',error);
});
