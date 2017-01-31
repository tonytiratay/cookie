import elements from '/imports/components/storeElements.js';

export const Score = new ReactiveVar(1);
export const Compteur = new ReactiveVar(1);
export const AutoClick = new ReactiveVar(false);
export const AutoClickDelay = new ReactiveVar(200);
export const StoreElements = new ReactiveVar(elements);
export const BoughtElements = new ReactiveVar([]);
