import './colonnedroite.html';
import elements from '/imports/components/storeElements.js';

Template.colonnedroite.helpers({
  storeElements: elements,
});

Template.element.helpers({
  isDisabled: (price)=> {
    if(Session.get('score') < price){
      return 'disabled';
    }
  },
  isVisible: (price)=> {
    if(Session.get('score') < price * 10){
      return 'invisible';
    }
  },
});

Template.element.events({
  'click' (e){
    console.log("Click sur " + e.target.id);
  }
});
