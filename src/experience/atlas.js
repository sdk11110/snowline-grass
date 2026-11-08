/** A bounded, static contour atlas. Uses the shipped DEM once it is ready. */
export function paintAtlas(canvas, mode, heightfield){
  const rect=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);
  const w=Math.max(rect.width,1),h=Math.max(rect.height,1);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
  const c=canvas.getContext('2d');c.scale(dpr,dpr);c.clearRect(0,0,w,h);
  const ocean=mode==='ocean',meadow=mode==='meadow',ink=ocean?'#438893':meadow?'#648167':'#708881';
  const size=Math.min(w,h)*.92,ox=(w-size)/2,oy=(h-size)/2,n=91,step=size/(n-1),values=[];
  const half=heightfield?.half||2500,center=heightfield?.center||[0,0];
  for(let z=0;z<n;z++)for(let x=0;x<n;x++){
    const u=x/(n-1),v=z/(n-1);
    let elevation;
    if(ocean)elevation=90*Math.sin(u*12+v*5)+42*Math.cos(v*17-u*2)+30*Math.sin(u*24-v*8);
    else if(heightfield)elevation=heightfield.heightAt(center[0]+(u-.5)*half*1.6,center[1]+(v-.5)*half*1.6);
    else elevation=1500+540*Math.exp(-((u-.58)**2*13+(v-.35)**2*10))+280*Math.exp(-((u-.2)**2*16+(v-.73)**2*13))+100*Math.sin(u*6+v*4);
    values.push(elevation);
  }
  const min=Math.min(...values),max=Math.max(...values),interval=(max-min)/25;
  c.save();c.beginPath();c.rect(ox,oy,size,size);c.clip();
  for(let level=min+interval;level<max;level+=interval){
    const major=Math.round((level-min)/interval)%5===0;
    c.beginPath();c.strokeStyle=ink;c.globalAlpha=major?.55:.24;c.lineWidth=major?1.1:.65;
    for(let z=0;z<n-1;z++)for(let x=0;x<n-1;x++){
      const corners=[values[z*n+x],values[z*n+x+1],values[(z+1)*n+x+1],values[(z+1)*n+x]],points=[];
      const coords=[[x,z],[x+1,z],[x+1,z+1],[x,z+1]];
      for(let e=0;e<4;e++){
        const j=(e+1)%4,a=corners[e],b=corners[j];
        if((a<level)===(b<level)||a===b)continue;
        const t=(level-a)/(b-a);points.push([ox+(coords[e][0]+(coords[j][0]-coords[e][0])*t)*step,oy+(coords[e][1]+(coords[j][1]-coords[e][1])*t)*step]);
      }
      for(let k=0;k+1<points.length;k+=2){c.moveTo(...points[k]);c.lineTo(...points[k+1]);}
    }c.stroke();
  }
  c.globalAlpha=.10;c.strokeStyle=ink;c.lineWidth=.65;
  for(let x=0;x<=size;x+=size/6){c.beginPath();c.moveTo(ox+x,oy);c.lineTo(ox+x,oy+size);c.stroke();}
  for(let y=0;y<=size;y+=size/6){c.beginPath();c.moveTo(ox,oy+y);c.lineTo(ox+size,oy+y);c.stroke();}
  c.restore();c.globalAlpha=1;
  // The orange track is a route, with a clear point of departure and a destination.
  const route=[[.32,.19],[.45,.28],[.37,.39],[.58,.49],[.48,.61],[.62,.72],[.69,.84]];
  c.beginPath();route.forEach(([x,y],i)=>i?c.lineTo(ox+x*size,oy+y*size):c.moveTo(ox+x*size,oy+y*size));c.setLineDash([3,5]);c.strokeStyle=ocean?'#bc653c':'#bd5c37';c.lineWidth=1.8;c.stroke();c.setLineDash([]);
  for(const [x,y]of [route[0],route.at(-1)]){c.beginPath();c.arc(ox+x*size,oy+y*size,5,0,Math.PI*2);c.fillStyle='#f4f0e4';c.fill();c.strokeStyle='#bd5c37';c.lineWidth=1.8;c.stroke();}
  c.font='14px "Patrick Hand",sans-serif';c.fillStyle='#536d64';
  c.fillText(ocean?'OPEN WATER':meadow?'THE GREEN SLOPES':'THE SNOW RIDGE',ox+size*.46,oy+size*.16);
  c.font='11px "Patrick Hand",sans-serif';c.fillText('START HERE',ox+size*.72,oy+size*.85);
  c.save();c.translate(ox+size*.88,oy+size*.13);c.strokeStyle='#526960';c.lineWidth=1;c.beginPath();c.moveTo(-12,0);c.lineTo(12,0);c.moveTo(0,-17);c.lineTo(0,17);c.moveTo(-4,-9);c.lineTo(0,-17);c.lineTo(4,-9);c.stroke();c.font='12px "Patrick Hand",sans-serif';c.fillText('N',-4,-24);c.restore();
}
