import StoreElement from'./storeElement.js';

let elements = [];

var autoClick = new StoreElement('Auto Click', 10, '/img/cursor.png');
elements.push(autoClick);

var multiplicateur = new StoreElement('Multiplier', 10, '/img/cursor.png');
elements.push(multiplicateur);

var grandMere = new StoreElement('Grand Mère', 100, '/img/grandma.png');
elements.push(grandMere);

var farm = new StoreElement('Ferme', 1000, '/img/farm.png');
elements.push(farm);

export default elements;
