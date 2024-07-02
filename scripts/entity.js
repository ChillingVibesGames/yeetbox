var entity = {
  init: (self) => {
    for (var i = 0; i < self.properties.entities.length; i++) {
      var o = self.properties.entities[i];
      o.init(o);
    }
  },
  update: (camera, level, player, self) => {
    for (var i = 0; i < self.properties.entities.length; i++) {
      var o = self.properties.entities[i];
      if ((((o.properties.x + o.properties.width) - camera.properties.x) >= 0 && (o.properties.x - camera.properties.x) < camera.properties.width) && (((o.properties.y + o.properties.height) - camera.properties.y) >= 0 && (o.properties.y - camera.properties.y) < camera.properties.height)) {
        o.update(camera, level, player, o);
      }
    }
  },
  properties: {
    entities: [],
  },
  helpers: {
    addEntity: (data, self) => {
      self.properties.entities.push(data);
    }
  },
};

var entityBuilders = {
  enemy: (data) => {
    var data2 = {
      init: (self) => {
        self.respawn(self);
      },
      update: (camera, level, player, self) => {
        self.helpers.render(camera, self);
        self.helpers.update(level, player, self);
      },
      properties: {
        x: 0,
        y: 0,
        respawnx: 0,
        respawny: 0,
        dx: 0,
        dy: 0,
        width: 20,
        height: 20,
        health: 1,
        maxhealth: 1,
        accely: 0.25,
        maxspeedy: 16,
        collisionbufferx: 2,
        collisionbuffery: 17,
        color: '#f00',
      },
      helpers: {
        update: (level, player, self) => {
          self.properties.x += self.properties.dx;
          self.properties.y += self.properties.dy;
          self.properties.dy += self.properties.accely;
          self.properties.dy = Math.min(self.properties.maxspeedy, self.properties.dy);
          var onground = false;
          if (!self.properties.dx) {
            self.properties.dx = 1;
          }
          for (var i = 0; i < level.properties.terrain.length; i++) {
            var o = level.properties.terrain[i];
            for (var j = self.properties.y; j < self.properties.y + (self.properties.height / 2); j++) {
              if (self.properties.x > o.properties.x - self.properties.width && self.properties.x < (o.x - self.properties.x) + self.properties.collisionbufferx && (j >= o.properties.y && j <= o.properties.y + o.properties.height)) {
                self.properties.x = o.properties.x - self.properties.width;
                self.properties.dx = -1;
              }
            }
            for (var j = self.properties.y + 1; j < self.properties.y + (self.properties.height / 2); j++) {
              if (self.properties.x < o.properties.x + o.width && self.properties.x > (o.properties.x + o.properties.width) - self.properties.collisionbufferx && (j >= o.properties.y && j <= o.prperties.y + o.properties.height)) {
                self.properties.x = o.properties.x + o.properties.width;
                self.properties.dx = 1;
              }
            }
            for (var j = self.properties.x + 1; j < self.properties.x + self.properties.width - 1; j++) {
              if (self.properties.y > o.properties.y - self.properties.height && self.properties.y < (o.properties.y - self.properties.height) + self.properties.collisionbuffery && (j >= o.properties.x && j <= o.properties.x + o.properties.width)) {
                onground = true;
                self.properties.y = o.properties.y - self.properties.height;
                self.properties.y += 1;
                self.properties.dy = 0;
              }
            }
            for (var j = self.properties.x + 1; j < self.properties.x + self.properties.width - 1; j++) {
              if (self.properties.y < o.properties.y + o.properties.height && self.properties.y > (o.properties.y + o.properties.height) - self.properties.collisionbuffery && (j >= o.properties.x && j <= o.properties.x + o.properties.width)) {
                self.properties.y = o.properties.y + o.properties.height;
                self.properties.y -= 0;
                self.properties.dy = 0;
              }
            }
          }
          var fallingleft = true;
          var fallingright = true;
          var j;
          for (var i = 0; i < level.properties.terrain.length; i++) {
            var o = level.properties.terrain[i];
            j = self.properties.x + 1;
            if (self.properties.y > o.properties.y - self.properties.height && self.properties.y < (o.properties.y - self.properties.height) + self.properties.collisionbuffery && (j >= o.properties.x && j <= o.properties.x + o.properties.width)) {
              fallingleft = false;
            }
            j = self.properties.x + (self.properties.width - 2);
            if (self.properties.y > o.properties.y - self.properties.height && self.properties.y < (o.properties.y - self.properties.height) + self.properties.collisionbuffery && (j >= o.properties.x && j <= o.properties.x + o.properties.width)) {
              fallingright = false;
            }
          }
          if (fallingleft && fallingright) {
            fallingleft = false;
            fallingright = false;
            //self.properties.dx = self.properties.dx;
          }
          if (fallingleft) {
            self.properties.dx = 1;
            console.log('whyleft');
          }
          if (fallingright) {
            self.properties.dx = -1;
            console.log('whyright');
          }
          
          if (self.properties.x >= player.properties.x - self.properties.width && self.properties.x <= player.properties.x + player.properties.width && self.properties.y >= player.properties.y - self.properties.height && self.properties.y <= player.properties.y + player.properties.height && !player.properties.cooldown) {
            player.properties.health--;
            player.properties.cooldown = 60;
          }
        },
        render: (camera, self) => {
          camera.properties.ctx.fillStyle = self.properties.color;
          camera.properties.ctx.fillRect(Math.round(self.properties.x - camera.properties.x), Math.round(self.properties.y - camera.properties.y), self.properties.width, self.properties.height);
        },
      },
    };
    for (var i in data) {
      data2[i] = data[i];
    }
    return data2;
  },
}

/*
function defaultEntityUpdate(camera, level, player, self) {
  
}
*/

function updateEntities(ctx) {
  
}
/*
function renderEntities(ctx) {
  for (var i = 0; i < entities.length; i++) {
    var o = entities[i];
    if ((((o.x + o.width) - camera.x) >= 0 && (o.x - camera.x) < SCREENWIDTH) && (((o.y + o.height) - camera.y) >= 0 && (o.y - camera.y) < SCREENHEIGHT)) {
      o.render(ctx, o);
    }
  }
}
*/
/*
function createEntityData(data) {
  var data2 = {...data};
  if (!data2.render) {
    data2.render = (camera, self) => {
      camera.properties.ctx.fillStyle = self.properties.color;
      camera.properties.ctx.fillRect(Math.round(self.x - camera.x), Math.round(self.y - camera.y), self.width, self.height);
    };
  }
  data2.dx = 0;
  data2.dy = 0;
  if (!data2.update) {
    data2.update = defaultEntityUpdate;
  }
  return data2;
}
*/