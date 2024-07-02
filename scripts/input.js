var input = {
  init: (self) => {
    onkeydown = (e) => {
      input.properties.keyspressed[e.code] = true;
      if (e.code == 'KeyX') {
        player.helpers.respawn(player);
        level.helpers.generate();
      } else if (e.code == 'KeyC' && e.ctrlKey) {
        location.reload();
      }
    }

    onkeyup = (e) => {
      input.properties.keyspressed[e.code] = false;
    }
  },
  update: (self) => {
    
  },
  properties: {
    keyspressed: {},
    
  },
  helpers: {
    
  },
};