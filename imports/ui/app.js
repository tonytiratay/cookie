import { Template } from 'meteor/templating';
import {Score, Compteur, AutoClickDelay, AutoClick} from '/imports/components/system.js';

import './app.html';
import './colonnegauche/gauche.js';
import './colonnedroite/droite.js';
import './colonnemilieu/milieu.js';


setInterval(function() {
  if(AutoClick.get()){
    Score.set(Score.get() + Compteur.get() );
  }
}, AutoClickDelay.get())
