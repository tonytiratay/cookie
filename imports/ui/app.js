
import { Template } from 'meteor/templating';

import './app.html';
import './colonnegauche/colonnegauche.html';
import './colonnedroite/colonnedroite.html';
import './colonnemilieu/colonnemilieu.html';

Template.body.helpers({
  storeElements: [
    { titre: "Grand mère"},
    { titre: "Curseur"},
    { titre: "Ferme"},
    { titre: "Usine"}
  ] ,

  titreDuSite: "Cookie Clicker nouvelle version",
});


// Template.nomduTemplate.events
