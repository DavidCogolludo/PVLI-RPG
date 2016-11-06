'use strict';

function TurnList() {}

TurnList.prototype.reset = function (charactersById) {
  this._charactersById = charactersById;
  
  this._turnIndex = -1;
  this.turnNumber = 0;
  this.activeCharacterId = null;
  this.list = this._sortByInitiative();
};

TurnList.prototype.next = function () {
  // Haz que calcule el siguiente turno y devuelva el resultado
  // según la especificación. Recuerda que debe saltar los personajes
  // muertos.
    
  this.turnNumber ++;
  var i = 0;
  var found = false;
  var length = this.list.length;

  while (!found){
    i = i % length;
    
    var aux = this._charactersById[this.list[i]]._isDead;
    if (!aux){
      this.activeCharacterId = this.list[i];
      found = true;
    }
    i++;
  }

  var turno = {
    number: this.turnNumber,
    party: this._charactersById[this.activeCharacterId].party,
    activeCharacterId: this.activeCharacterId
  };

  return turno;
};

TurnList.prototype._sortByInitiative = function () {
  // Utiliza la función Array.sort(). ¡No te implementes tu propia
  // función de ordenación!
  var aux = [];
  var list = [];

  for (var obj in this._charactersById){
    aux.push({ name : obj,
      init: this._charactersById[obj].initiative
    })
  }
  //console.log(list);

  aux.sort (function (a, b) {
    if(a.init < b.init){
      return 1;s
    }
    if (a.init > b.init){
      return -1;
    }
    return 0;
  });

  for (var i in aux){
    list.push(aux[i].name);
  }

  //console.log(ini);
  return list;
};

module.exports = TurnList;
