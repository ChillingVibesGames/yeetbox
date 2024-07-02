var player = {
  init: (self) => {
    self.helpers.respawn(self);
  },
  update: (camera, level, input, self) => {
    self.helpers.render(camera, self);
    self.helpers.movement(input, self);
    self.helpers.collide(camera, level, input, self);
    
    if (self.properties.cooldown > 0) {
      self.properties.cooldown--;
    }
    if (self.properties.health == 0) {
      self.helpers.respawn(self);
    }
  },
  properties: {
    width: 20,
    height: 20,
    x: 0,
    y: 0,
    dx: 0,
    dy: 0,
    respawnx: 0,
    respawny: 0,
    jumpspeed: 8,
    walljumpspeed: 2,
    accelx: 0.125,
    accely: 0.25,
    maxspeedx: 4,
    maxspeedy: 16,
    collisionbufferx: 5,
    collisionbuffery: 17,
    health: 5,
    maxhealth: 5,
    cooldown: 0,
    vibrated: false,
    jumping: false,
  },
  helpers: {
    respawn: (self) => {
      self.properties.health = self.properties.maxhealth;
      self.properties.x = self.properties.respawnx;
      self.properties.y = self.properties.respawny;
      self.properties.dx = 0;
      self.properties.dy = 0;
    },
    render: (camera, self) => {
      //console.log(this);
      camera.properties.ctx.fillStyle = '#fff';
      camera.properties.ctx.textBaseline = 'top';
      camera.properties.ctx.fillText(camera.properties.fps2, 0, 0);
      camera.properties.ctx.fillStyle = '#' + Math.round((self.properties.cooldown / 60) * 255).toString(16).padStart(2, '0') + '00' + Math.round(255 - ((self.properties.cooldown / 60) * 255)).toString(16).padStart(2, '0');
      camera.properties.ctx.fillRect(Math.round(self.properties.x - camera.properties.x), Math.round(self.properties.y - camera.properties.y), self.properties.width, self.properties.height);
    },
    movement: (input, self) => {
      if (input.properties.keyspressed.ArrowLeft && !input.properties.keyspressed.ArrowRight) {
        self.properties.dx -= self.properties.accelx;
      }
      if (input.properties.keyspressed.ArrowRight && !input.properties.keyspressed.ArrowLeft) {
        self.properties.dx += self.properties.accelx;
      }
      
      if (self.properties.dx > self.properties.maxspeedx) {
        self.properties.dx = self.properties.maxspeedx;
      }
      if (self.properties.dx < -self.properties.maxspeedx) {
        self.properties.dx = -self.properties.maxspeedx;
      }
      
      if ((!input.properties.keyspressed.ArrowLeft && !input.properties.keyspressed.ArrowRight) || (input.properties.keyspressed.ArrowLeft && input.properties.keyspressed.ArrowRight)) {
        if (self.properties.dx >= self.properties.accelx) {
          self.properties.dx -= self.properties.accelx;
        }
        if (self.properties.dx <= -self.properties.accelx) {
          self.properties.dx += self.properties.accelx;
        }
        if (Math.abs(self.properties.dx) < self.properties.accelx) {
          self.properties.dx = 0;
        }
      }
      
      self.properties.x += self.properties.dx;
      
      
      if (input.properties.keyspressed.Space && !self.properties.jumping) {
        self.properties.jumping = true;
        self.properties.dy = self.properties.jumpspeed;
      }
      self.properties.y -= self.properties.dy;
      self.properties.dy -= self.properties.accely;
      if (self.properties.dy < -self.properties.maxspeedy) {
        self.properties.dy = -self.properties.maxspeedy;
      }
    },
    collide: (camera, level, input, self) => {
      let touchingleft = false;
      let touchingright = false;
      let touchingup = false;
      let touchingdown = false;
      let colliding = false;
      if (camera.properties.vibratedistance > 0) {
        camera.properties.vibratedistance -= camera.properties.vibratedecrement;
      }
      var reservedy = self.properties.dy;
      for (var i = 0; i < level.properties.terrain.length; i++) {
        var o = level.properties.terrain[i];
        for (var j = self.properties.y + 1; j < self.properties.y + (self.properties.height / 2) - 1; j++) {
          if (self.properties.x > o.properties.x - self.properties.width && self.properties.x < (o.properties.x - self.properties.width) + self.properties.collisionbufferx && (j >= o.properties.y && j <= o.properties.y + o.properties.height)) {
            touchingright = true;
            colliding = true;
            if (input.properties.keyspressed.Space && input.properties.keyspressed.ArrowRight) {
              camera.properties.vibratedistance = Math.abs(self.properties.dx) * 4;
              self.properties.x = o.properties.x - self.properties.width;
              self.properties.dx = -self.properties.walljumpspeed;
              self.properties.dy = self.properties.jumpspeed;
            } else {
              self.properties.x = o.properties.x - self.properties.width;
              self.properties.dx = 0;
            }
          }
        }
        for (var j = self.properties.y + 1; j < self.properties.y + (self.properties.height / 2) - 1; j++) {
          if (self.properties.x < o.properties.x + o.properties.width && self.properties.x > (o.properties.x + o.properties.width) - self.properties.collisionbufferx && (j >= o.properties.y && j <= o.properties.y + o.properties.height)) {
            touchingleft = true;
            colliding = true;
            if (input.properties.keyspressed.Space && input.properties.keyspressed.ArrowLeft) {
              camera.properties.vibratedistance = Math.abs(self.properties.dx) * 4;
              self.properties.x = o.properties.x + o.properties.width;
              self.properties.dx = self.properties.walljumpspeed;
              self.properties.dy = self.properties.jumpspeed;
            } else {
              self.properties.x = o.properties.x + o.properties.width;
              self.properties.dx = 0;
            }
          }
        }
      }
      
      if (self.properties.x + self.properties.width > level.properties.width) {
        self.properties.x = level.properties.width - self.properties.width;
        self.properties.dx = 0;
        touchingright = true;
        colliding = true;
      }
      if (self.properties.x < 0) {
        self.properties.x = 0;
        self.properties.dx = 0;
        touchingleft = true;
        colliding = true;
      }
      if (self.properties.y + self.properties.height >= level.properties.height) {
        //self.y = LEVELHEIGHT - self.height;
        self.helpers.respawn(self);
        touchingdown = true;
        colliding = true;
        //generate();
      }
      if (self.properties.y < 0) {
        self.properties.y = 0;
        self.properties.dy = 0;
        touchingup = true;
        colliding = true;
      }

      for (var i = 0; i < level.properties.terrain.length; i++) {
        var o = level.properties.terrain[i];
        for (var j = self.properties.x + 1; j < self.properties.x + self.properties.width - 1; j++) {
          if (self.properties.y > o.properties.y - self.properties.height && self.properties.y < (o.properties.y - self.properties.height) + self.properties.collisionbuffery && (j >= o.properties.x && j <= o.properties.x + o.properties.width)) {
            touchingdown = true;
            colliding = true;
            self.properties.y = o.properties.y - self.properties.height;
            self.properties.y += 1;
            self.properties.dy = 0;
          }
        }
        for (var j = self.properties.x + 1; j < self.properties.x + self.properties.width - 1; j++) {
          if (self.properties.y < o.properties.y + o.properties.height && self.properties.y > (o.properties.y + o.properties.height) - self.properties.collisionbuffery && (j >= o.properties.x && j <= o.properties.x + o.properties.width)) {
            touchingup = true;
            colliding = true;
            self.properties.y = o.properties.y + o.properties.height;
            self.properties.y -= 0;
            self.properties.dy = 0;
          }
        }
      }
      if ((touchingup || touchingdown) && !self.properties.vibrated) {
        self.properties.vibrated = true;
        //vibratedistance = vibratestartdistance;
        camera.properties.vibratedistance = Math.round(Math.abs(reservedy));
      }
      if (!(touchingup || touchingdown)) {
        self.properties.vibrated = false;
      }
      if (touchingdown) {
        self.properties.jumping = false;
      }
    },
  }
};