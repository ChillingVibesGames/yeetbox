var audio = {
  init: async (self) => {
    self.properties.ctx = new AudioContext();
    self.properties.analyser = self.properties.ctx.createAnalyser();
    
    var buffer = await self.helpers.getFile('./assets/underground.wav', self);
    
    self.properties.music = self.properties.ctx.createBufferSource();
    self.properties.music.buffer = buffer;
    self.properties.music.connect(self.properties.analyser);
    self.properties.analyser.connect(self.properties.ctx.destination);
    self.properties.music.loop = true;
    self.properties.music.start();
    
    self.properties.osc = self.properties.ctx.createOscillator();
    self.properties.osc.frequency.value = 440;
    self.properties.osc.type = 'square';
    
    self.properties.gain = self.properties.ctx.createGain();
    self.properties.gain.gain.value = 0;
    self.properties.osc.connect(self.properties.gain);
    self.properties.gain.connect(self.properties.analyser);
    
    self.properties.osc.start();
  },
  update: (camera, self) => {
    self.properties.osc.frequency.value = camera.properties.vibratedistance * 10;
    self.properties.gain.gain.value = (camera.properties.vibratedistance > 0) / 4;
  },
  properties: {
    ctx: null,
    music: null,
    osc: null,
    gain: null,
    analyser: null,
  },
  helpers: {
    getFile: async (filepath, self) => {
      var response = await fetch(filepath);
      var arrayBuffer = await response.arrayBuffer();
      var audioBuffer = await self.properties.ctx.decodeAudioData(arrayBuffer);
      return audioBuffer;
    }
  },
}