var entities = [];

function defaultEntityUpdate(ctx, self) {
  self.x += self.dx;
  self.y += self.dy;
  self.dy += ACCELY;
  self.dy = Math.min(MAXSPEEDY, self.dy);
  var onground = false;
  if (!self.dx) {
    self.dx = 1;
  }
  for (var i = 0; i < terrain.length; i++) {
    var o = terrain[i];
    for (var j = self.y; j < self.y + self.height; j++) {
      if (self.x > o.x - self.width && self.x < (o.x - self.x) + COLLISIONBUFFERX && (j >= o.y && j <= o.y + o.height)) {
        self.x = o.x - self.width;
        self.dx = -1;
      }
    }
    for (var j = self.y + 1; j < self.y + (self.height / 2); j++) {
      if (self.x < o.x + o.width && self.x > (o.x + o.width) - COLLISIONBUFFERX && (j >= o.y && j <= o.y + o.height)) {
        self.x = o.x + o.width;
        self.dx = 1;
      }
    }
    for (var j = self.x + 1; j < self.x + self.width - 1; j++) {
      if (self.y > o.y - self.height && self.y < (o.y - self.height) + COLLISIONBUFFERY && (j >= o.x && j <= o.x + o.width)) {
        onground = true;
        self.y = o.y - self.height;
        self.y += 1;
        self.dy = 0;
      }
    }
    for (var j = self.x + 1; j < self.x + self.width - 1; j++) {
      if (self.y < o.y + o.height && self.y > (o.y + o.height) - COLLISIONBUFFERY && (j >= o.x && j <= o.x + o.width)) {
        self.y = o.y + o.height;
        self.y -= 0;
        self.dy = 0;
      }
    }
  }
  var fallingleft = true;
  var fallingright = true;
  var j;
  for (var i = 0; i < terrain.length; i++) {
    var o = terrain[i];
    j = self.x + 1;
    if (self.y > o.y - self.height && self.y < (o.y - self.height) + COLLISIONBUFFERY && (j >= o.x && j <= o.x + o.width)) {
      fallingleft = false;
    }
    j = self.x + (self.width - 2);
    if (self.y > o.y - self.height && self.y < (o.y - self.height) + COLLISIONBUFFERY && (j >= o.x && j <= o.x + o.width)) {
      fallingright = false;
    }
  }
  if (fallingleft && fallingright) {
    fallingleft = false;
    fallingright = false;
    self.dx = self.dx;
  }
  if (fallingleft) {
    self.dx = 1;
    console.log('whyleft');
  }
  if (fallingright) {
    self.dx = -1;
    console.log('whyright');
  }
  
  if (self.x >= player.x - self.width && self.x <= player.x + PLAYERWIDTH && self.y >= player.y - self.height && self.y <= player.y + PLAYERHEIGHT && !player.cooldown) {
    player.health--;
    player.cooldown = 60;
  }
}

function updateEntities(ctx) {
  for (var i = 0; i < entities.length; i++) {
    var o = entities[i];
    if ((((o.x + o.width) - camera.x) >= 0 && (o.x - camera.x) < SCREENWIDTH) && (((o.y + o.height) - camera.y) >= 0 && (o.y - camera.y) < SCREENHEIGHT)) {
      o.update(ctx, o);
    }
  }
}

function renderEntities(ctx) {
  for (var i = 0; i < entities.length; i++) {
    var o = entities[i];
    if ((((o.x + o.width) - camera.x) >= 0 && (o.x - camera.x) < SCREENWIDTH) && (((o.y + o.height) - camera.y) >= 0 && (o.y - camera.y) < SCREENHEIGHT)) {
      o.render(ctx, o);
    }
  }
}

function createEntityData(data) {
  var data2 = {...data};
  if (!data2.render) {
    data2.render = (ctx, self) => {
      ctx.fillStyle = ENEMYCOLOR;
      ctx.fillRect(Math.round(self.x - camera.x), Math.round(self.y - camera.y), self.width, self.height);
    };
  }
  data2.dx = 0;
  data2.dy = 0;
  if (!data2.update) {
    data2.update = defaultEntityUpdate;
  }
  return data2;
}