var level = {
  init: (levelcode, self) => {
    self.helpers.generate = new Function(levelcode);
    self.helpers.generate();
  },
  update: (camera, self) => {
    self.helpers.render(camera, self);
    self.helpers.renderBounds(camera, self);
  },
  properties: {
    width: 16384, // 16384
    height: 16384, // 16384
    color: '#0F0',
    boundscolor: '#003',
    terrain: [],
  },
  helpers: {
    generate: null,
    createTerrainData: (data) => {
      var data2 = {
        properties: {
          x: data.x,
          y: data.y,
          width: data.width,
          height: data.height,
        },
        helpers: {
          render: (camera, level, self) => {
            camera.properties.ctx.fillStyle = level.properties.color;
            camera.properties.ctx.fillRect(Math.round(self.properties.x - camera.properties.x), Math.round(self.properties.y - camera.properties.y), self.properties.width, self.properties.height);
          },
        },
      };
      
      return data2;
    },
    render: (camera, self) => {
      for (var i = 0; i < self.properties.terrain.length; i++) {
        var o = self.properties.terrain[i];
        if ((((o.properties.x + o.properties.width) - camera.properties.x) >= 0 && (o.properties.x - camera.properties.x) < camera.properties.width) && (((o.properties.y + o.properties.height) - camera.properties.y) >= 0 && (o.properties.y - camera.properties.y) < camera.properties.height)) {
          o.helpers.render(camera, self, o);
        }
      }
    },
    renderBounds: (camera, self) => {
      camera.properties.ctx.fillStyle = self.properties.boundscolor;
      if (camera.properties.x + camera.properties.width > self.properties.width) {
        camera.properties.ctx.fillRect(self.properties.width - camera.properties.x, 0, camera.properties.width - (self.properties.width - camera.properties.x), camera.properties.height);
      }
      if (camera.properties.x < 0) {
        camera.properties.ctx.fillRect(0, 0, -camera.properties.x, camera.properties.height);
      }
      
      if (camera.properties.y + camera.properties.height > self.properties.height) {
        camera.properties.ctx.fillRect(0, self.properties.height - camera.properties.y, camera.properties.width, camera.properties.height - (self.properties.height - camera.properties.y));
      }
      if (camera.properties.y < 0) {
        camera.properties.ctx.fillRect(0, 0, camera.properties.width, -camera.properties.y);
      }
    },
  }
};