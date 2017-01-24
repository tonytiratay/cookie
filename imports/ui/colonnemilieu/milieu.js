import './colonnemilieu.html';


Template.colonnemilieu.helpers({
  score:() => {return Session.get('score')},
});

Template.colonnemilieu.events({
  'click #affichage' (e){
    console.log("Click sur zone d'affichage");
  }
});
