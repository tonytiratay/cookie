
import { Template } from 'meteor/templating';

Session.set('score', 1);
Session.set('compteur', 1);

import './app.html';
import './colonnegauche/gauche.js';
import './colonnedroite/droite.js';
import './colonnemilieu/milieu.js';



console.log(Session.get('score'));
console.log(Session.get('compteur'));
