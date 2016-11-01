'use strict';

function Item(name, effect) {
  this.name = name;
  this.effect = effect;
}

function Weapon(name, damage, extraEffect) {
  extraEffect = extraEffect || new Effect({});
  // Haz que Weapon sea subtipo de Item haciendo que llame al constructor de
  // de Item.
}
// Termina de implementar la herencia haciendo que la propiedad prototype de
// Item sea el prototipo de Weapon.prototype y recuerda ajustar el constructor.

function Scroll(name, cost, effect) {
  Item.call(this, name, effect);
  this.cost = cost;
}
Scroll.prototype = Object.create(Item.prototype);
Scroll.prototype.constructor = Scroll;

Scroll.prototype.canBeUsed = function (mp) {
  // El pergamino puede usarse si los puntos de maná son superiores o iguales
  // al coste del hechizo.
 // if (mp >== this.cost) return true;
};

function Effect(variations) {
  this.initiative = variations.initiative;
  this.defense = variations.defense;
  this.hp = variations.hp;
  this.maxHp = variations.maxHP;
  this.mp = variations.mp;
  this.maxMp = variations.maxMp;
  // Copia las propiedades que se encuentran en variations como propiedades de
  // este objeto.
}

module.exports = {
  Item: Item,
  Weapon: Weapon,
  Scroll: Scroll,
  Effect: Effect
};
