/** Personalize the three destinations here; terrain and movement live separately. */
const ALL_DESTINATIONS = Object.freeze([
  {id:'snow',name:'雪岭',subtitle:'雪山滑行',line:'穿过云杉与粉雪，把弧线留在山间。',terrain:'高山 · 林间雪道',action:'滑向雪岭',color:'#c25d38',paper:'#f0eee3',hint:'W 蹬地 / 压低身体　A D 刻滑　S 减速　空格 跳跃'},
  {id:'meadow',name:'青岚',subtitle:'草场漫游',line:'雪退去的山坡，藏着另一条自由的路。',terrain:'草坡 · 山地滑行',action:'出发去青岚',color:'#477051',paper:'#eeeedd',hint:'W 推进　A D 转向　S 制动　空格 跳跃'},
  {id:'ocean',name:'潮汐',subtitle:'海上冲浪',line:'等一阵海风，跟着浪的节奏向前。',terrain:'海湾 · 自由冲浪',action:'奔向潮汐海湾',color:'#217a89',paper:'#e6eeE7',hint:'W 划水加速　A D 压板转向　S 制动　空格 腾跃　R 回到起浪点'},
]);
const published = import.meta.env.VITE_DESTINATION;
const publishedDestinations = published ? ALL_DESTINATIONS.filter(item => item.id === published) : ALL_DESTINATIONS;
export const DESTINATIONS = Object.freeze(publishedDestinations.length ? publishedDestinations : ALL_DESTINATIONS);
export const destinationById=id=>DESTINATIONS.find(item=>item.id===id)||DESTINATIONS[0];
