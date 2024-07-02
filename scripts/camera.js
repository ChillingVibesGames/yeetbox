var camera = {
  init: (self) => {
    self.properties.output = document.querySelector('#output');
    self.properties.output.width = self.properties.width;
    self.properties.output.height = self.properties.height;
    
    self.properties.output.style.display = 'block';
    
    self.properties.ctx = self.properties.output.getContext('2d');
  },
  update: (timestamp, player, self) => {
    self.properties.x = player.properties.x - self.properties.width / 2;
    self.properties.y = player.properties.y - self.properties.height / 2;
    
    self.properties.x += Math.floor(Math.random() * ((self.properties.vibratedistance * 2) + 1)) - self.properties.vibratedistance;
    self.properties.y += Math.floor(Math.random() * ((self.properties.vibratedistance * 2) + 1)) - self.properties.vibratedistance;
    
    self.properties.x = Math.round(self.properties.x);
    self.properties.y = Math.round(self.properties.y);
    
    self.properties.fps++;
    if (timestamp - lasttimestamp >= 1000) {
      lasttimestamp = timestamp;
      self.properties.fps2 = self.properties.fps;
      self.properties.fps = 0;
    }
  },
  properties: {
    output: null,
    ctx: null,
    x: 0,
    y: 0,
    width: 600,
    height: 400,
    vibratedistance: 0,
    vibratedecrement: 0.5,
    fps: 0,
    fps2: 0,
  },
  helpers: {
    setUpFrame(self) {
      self.properties.width = document.documentElement.clientWidth;
      self.properties.height = document.documentElement.clientHeight;
      
      self.properties.output.width = self.properties.width;
      self.properties.output.height = self.properties.height;
      self.properties.ctx.clearRect(0, 0, self.properties.width, self.properties.height);
    }
  },
}