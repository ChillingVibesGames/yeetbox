// Uncomment these comments for example level generation.


/*
// Add one enemy
entity.properties.entities = [];
entity.helpers.addEntity(entityBuilders.enemy({}, {x: 100}), entity);
*/

/*
// Add many enemies
entity.properties.entities = [];
for (var i = 0; i < 200; i++) {
  entity.helpers.addEntity(entityBuilders.enemy({}, {x: Math.floor(Math.random() * 1000), y: Math.floor(Math.random() * 1000)}), entity);
}
*/

/*
// Add a climbable staircase
level.properties.width = 2000;
level.properties.height = 2000;

for (var i = 0; i < 190; i++) {
  level.properties.terrain.push(level.helpers.createTerrainData({x: i * 10, y: (i * 10) + 100, width: 10, height: 10}));
}
*/

/*
// Level 1 - Blocks (Small level)
level.properties.terrain = [];

level.properties.width = 1024;
level.properties.height = 1024;

for (var i = 0; i < level.properties.height; i += 256) {
  for (var j = 0; j < level.properties.width; j += 128) {
    level.properties.terrain.push({x: j, y: i + (j % 256) + 64, width: 128, height: 64});
  }
}

for (var i = 0; i < level.properties.terrain.length; i++) {
  level.properties.terrain[i] = level.helpers.createTerrainData(level.properties.terrain[i]);
}
*/

/*
// Level 2 - Blocks (Smaller level)
level.properties.terrain = [];

level.properties.width = 256;
level.properties.height = 1024;

for (var i = 0; i < level.properties.height; i += 256) {
  for (var j = 0; j < level.properties.width; j += 128) {
    level.properties.terrain.push({x: j, y: i + (j % 256) + 64, width: 128, height: 64});
  }
}

for (var i = 0; i < level.properties.terrain.length; i++) {
  level.properties.terrain[i] = level.helpers.createTerrainData(level.properties.terrain[i]);
}
*/

/*
// Level 3 - Blocks (Huge level)
level.properties.terrain = [];

level.properties.width = 16384;
level.properties.height = 16384;

for (var i = 0; i < level.properties.width; i += 256) {
  for (var j = 0; j < level.properties.height; j += 128) {
    level.properties.terrain.push({x: j, y: i + (j % 256) + 64, width: 128, height: 64});
  }
}

for (var i = 0; i < level.properties.terrain.length; i++) {
  level.properties.terrain[i] = level.helpers.createTerrainData(level.properties.terrain[i]);
}
*/

/*
// Level 4 - Random Rectangles (Small level)
terrain = [];

LEVELWIDTH = 1024;
LEVELHEIGHT = 1024;

var numrects = 50;
var maxsize = 100;
var minsize = 32;

for (var i = 0; i < numrects; i++) {
  terrain.push({x: Math.floor(Math.random() * LEVELWIDTH), y: Math.floor(Math.random() * LEVELHEIGHT), width: Math.floor(Math.random() * (maxsize - minsize) + minsize), height: Math.floor(Math.random() * (maxsize - minsize) + minsize)});
}

for (var i = 0; i < terrain.length; i++) {
  terrain[i] = createTerrainData(terrain[i]);
}
*/


// Level 5 - Random Rectangles (Huge level)
level.properties.terrain = [];

level.properties.width = 16384;
level.properties.height = 16384;

var numrects = 10000;
var maxsize = 200;
var minsize = 32;

for (var i = 0; i < numrects; i++) {
  level.properties.terrain.push({x: Math.floor(Math.random() * level.properties.width), y: Math.floor(Math.random() * level.properties.height), width: Math.floor(Math.random() * (maxsize - minsize) + minsize), height: Math.floor(Math.random() * (maxsize - minsize) + minsize)});
}

for (var i = 0; i < level.properties.terrain.length; i++) {
  level.properties.terrain[i] = level.helpers.createTerrainData(level.properties.terrain[i]);
}
