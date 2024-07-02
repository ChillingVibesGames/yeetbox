const BACKGROUNDCOLOR = '#000';

var background = {
  init: (self) => {
    
  },
  update: (camera, audio, self) => {
    self.helpers.render(camera, audio, self);
  },
  properties: {
    color: '#000',
    lastAudioValue: 0,
    visualiserAColor: '#400',
    visualiserBColor: '#F00',
  },
  helpers: {
    render: (camera, audio, self) => {
      camera.properties.ctx.fillStyle = self.properties.color;
      camera.properties.ctx.fillRect(0, 0, camera.properties.width, camera.properties.height);
      const bufferLength = audio.properties.analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      
      camera.properties.ctx.fillStyle = self.properties.visualiserAColor;
      audio.properties.analyser.getByteFrequencyData(dataArray);
      
      for (var i = 0; i < dataArray.length; i++) {
        camera.properties.ctx.fillRect(i * (camera.properties.width / dataArray.length), camera.properties.height - ((dataArray[i] / 255) * camera.properties.height), camera.properties.width / dataArray.length, ((dataArray[i] / 255) * camera.properties.height));
      }
      const dataArray2 = new Uint8Array(bufferLength);
      
      camera.properties.ctx.strokeStyle = self.properties.visualiserBColor;
      audio.properties.analyser.getByteTimeDomainData(dataArray2);
      
      for (var i = 0; i < dataArray2.length; i++) {
        camera.properties.ctx.beginPath();
        camera.properties.ctx.moveTo((i - 1) * (camera.properties.width / dataArray2.length), ((255 - self.properties.lastAudioValue) / 255) * camera.properties.height);
        camera.properties.ctx.lineTo(i * (camera.properties.width / dataArray2.length), ((255 - dataArray2[i]) / 255) * camera.properties.height);
        camera.properties.ctx.stroke();
        self.properties.lastAudioValue = dataArray2[i];
      }
    },
  }
}