import './colonnedroite.html';
import {Score, StoreElements, AutoClick, Compteur, BoughtElements} from '/imports/components/system.js';


Template.colonnedroite.helpers({
  storeElements: StoreElements.get(),
});

Template.element.helpers({
  isDisabled: (price)=> {
    if(Score.get() < price){
      return 'disabled';
    }
  }
});

Template.element.events({
  'click' (e){

    // Trier dans le tableau "elements" pour retrouver l'objet
    // avec l'id de l'élément sur lequel nous avons cliqué
    const results = $.grep(StoreElements.get(), function(elem){
      return elem.titre == e.target.id;
    });

    const result = results[0];
    Score.set( Score.get() - result.price );

    if(result.titre == "Auto Click"){
      AutoClick.set(!AutoClick.get())
    }
    if(result.titre == "Multiplier"){
      Compteur.set( Compteur.get() + 1);
      let bought = BoughtElements.get();
      bought.push(result);
      BoughtElements.set(bought);
    }
    if(result.titre == "Grand Mère"){
      let bought = BoughtElements.get();
      bought.push(result);
      BoughtElements.set(bought);
    }

  }
});
