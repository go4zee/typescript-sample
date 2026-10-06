"use strict";
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 0] = "North";
    Directions[Directions["East"] = 1] = "East";
    Directions[Directions["South"] = 2] = "South";
    Directions[Directions["West"] = 3] = "West";
})(Directions || (Directions = {}));
;
let currentDir = Directions.North;
console.log(currentDir);
currentDir = Directions.North;
