import './colonnegauche.html';
import {Score, Compteur} from '/imports/components/system.js';

Template.colonnegauche.events({
  'click .cookie-btn' (e){
    const NewScore = Score.get() + Compteur.get();
    Score.set(NewScore);
  }
});
