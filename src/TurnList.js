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
  this._findActiveCharacter();
  var turno = {
    number: this.turnNumber,
    party: this._charactersById[this.activeCharacterId].party,
    activeCharacterId: this.activeCharacterId
  };

  return turno;
};
//función auxiliar que encuentra el character activo e ignora los muertos
TurnList.prototype._findActiveCharacter = function(){
 var cont = this.turnNumber;
  this.turnNumber ++;
  var found = false;
  var length = this.list.length;

  while (!found){
    cont = cont % length;
    
    var aux = this._charactersById[this.list[cont]].isDead();
    if (!aux){
      this.activeCharacterId = this.list[cont];
      found = true;
    }
    cont++;
  }

}

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

  aux.sort (function (a, b) {
    if(a.init < b.init){
      return 1;
    }
    if (a.init > b.init){
      return -1;
    }
    return 0;
  });

  for (var i in aux){
    list.push(aux[i].name);
  }

  return list;
};

module.exports = TurnList;
