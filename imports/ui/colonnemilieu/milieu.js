import './colonnemilieu.html';
import {Score, BoughtElements} from '/imports/components/system.js';

Template.colonnemilieu.helpers({
  score:() => {
    return Score.get();
  },
  boughtElements:() => {
    return BoughtElements.get();
  }
});

Template.colonnemilieu.events({
  'click #affichage' (e){
    console.log("Click sur zone d'affichage");
  }
});
