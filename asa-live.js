import { db } from './firebase-config.js';
import { collection, getDocs, getDoc, doc, query, orderBy } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js';
const cache={};
async function readCollection(name){
  const snap=await getDocs(collection(db,name));
  return snap.docs.map(d=>({id:d.data().id??(isNaN(Number(d.id))?d.id:Number(d.id)),...d.data(),_docId:d.id}));
}
async function settings(){
  try{const s=await getDoc(doc(db,'site_settings','public'));return s.exists()?s.data():null}catch(e){return null}
}
async function products(){
  try{const a=await readCollection('products'); if(a.length){a.sort((x,y)=>Number(x.id)-Number(y.id));cache.products=a;return a}}catch(e){}
  if(cache.products)return cache.products;
  try{return await fetch('products.json?'+Date.now()).then(r=>r.json())}catch(e){return []}
}
async function categories(){
  try{const a=await readCollection('categories');if(a.length){a.sort((x,y)=>Number(x.sort||0)-Number(y.sort||0));return a.map(x=>x.name)}}catch(e){}
  try{return await fetch('categories.json?'+Date.now()).then(r=>r.json())}catch(e){return []}
}
window.ASA_LIVE={settings,products,categories};
window.ASA_LIVE_READY=Promise.resolve(window.ASA_LIVE);
