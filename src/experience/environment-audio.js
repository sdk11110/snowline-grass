/** Mixes real speed/contact/wave energy into the existing user-controlled SFX bus. */
export function createEnvironmentAudio(game){
  let mode='snow',source=null,filter=null,gain=null,saved=null;
  function attach(){
    const s=game.sound,c=s.ctx;if(!c||source)return;
    source=c.createBufferSource();source.buffer=s.noiseBuf;source.loop=true;
    filter=c.createBiquadFilter();filter.type='lowpass';filter.frequency.value=900;filter.Q.value=.45;
    gain=c.createGain();gain.gain.value=0;source.connect(filter).connect(gain).connect(s.sfx);source.start();
  }
  return {
    setBiome(id){
      const s=game.sound;
      if(s.ctx&&!saved)saved={type:s.scrapeF.type,frequency:s.scrapeF.frequency.value};
      mode=id;
      if(s.ctx){s.scrapeF.type=id==='meadow'?'bandpass':saved?.type||'highpass';s.scrapeF.frequency.setTargetAtTime(id==='meadow'?850:saved?.frequency||1800,s.ctx.currentTime,.15);}
    },
    update(time){
      attach();const s=game.sound;if(!s.ctx||!gain)return;const now=s.ctx.currentTime;
      if(mode==='ocean'){
        const p=game.phys,w=p.surf||{},contact=w.contact!==false,energy=w.energy??.25;
        s.scrapeG.gain.setTargetAtTime(0,now,.035);
        s.waterG.gain.setTargetAtTime(.035+energy*.07+(contact?Math.min(p.speed/18,1)*.025:0),now,.18);
        s.waterF.frequency.setTargetAtTime(600+energy*900,now,.18);
        gain.gain.setTargetAtTime(.025+energy*.045+(w.spray||0)*.08,now,.12);
        filter.frequency.setTargetAtTime(450+energy*1200+(w.spray||0)*1000,now,.14);
      }else if(mode==='meadow'){
        gain.gain.setTargetAtTime(.008+.004*(.5+.5*Math.sin(time*.7)),now,.3);
        filter.frequency.setTargetAtTime(700,now,.3);
      }else gain.gain.setTargetAtTime(0,now,.15);
    },
    destroy(){if(source){source.stop();source.disconnect();filter.disconnect();gain.disconnect();}source=null;},
  };
}
