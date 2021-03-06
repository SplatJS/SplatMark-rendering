"use strict";

var random = require("../../random");

var sprites = [
  "kickbot",
  "fluffykins",
  "carrot",
  "cartboy",
  "gingerboss",
  "stanley"
];
var index = 0;

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
  ecs.add(function addSprite(elapsed) { // eslint-disable-line no-unused-vars
    if (game.inputs.buttonPressed("action")) {
      index++;
      if (index >= sprites.length) {
        index = 0;
      }
    }
    if (game.inputs.button("action")) {
      var newSprite = game.instantiatePrefab(sprites[index]);
      game.entities.set(newSprite, "velocity", {
        "x": random.inRange(0.5, 1),
        "y": 0.5
      });
    }
  });
};
