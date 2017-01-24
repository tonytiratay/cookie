import './colonnegauche.html';

Template.colonnegauche.events({
  'click .cookie-btn' (e){
    let newScore = Session.get('score') + Session.get('compteur');
    Session.set('score', newScore);
  }
});
