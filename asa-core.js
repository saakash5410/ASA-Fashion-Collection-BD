const ASA={
 phone:'01626201990',wa:'8801626201990',
 getCart(){try{return JSON.parse(localStorage.getItem('asa_cart')||'[]')}catch{return[]}},
 setCart(c){localStorage.setItem('asa_cart',JSON.stringify(c));this.refreshBadges()},
 add(p,qty=1,variant={}){let c=this.getCart(),key=String(p.id)+'|'+(variant.size||'')+'|'+(variant.color||'');let x=c.find(i=>i.key===key);if(x)x.qty+=qty;else c.push({key,id:p.id,name:p.name,price:Number(p.price)||0,image:p.image||'',qty,category:p.category,size:variant.size||'',color:variant.color||''});this.setCart(c);this.toast('কার্টে যোগ হয়েছে');},
 remove(key){this.setCart(this.getCart().filter(x=>x.key!==key));},
 count(){return this.getCart().reduce((s,x)=>s+(Number(x.qty)||0),0)},
 total(){return this.getCart().reduce((s,x)=>s+(Number(x.price)||0)*(Number(x.qty)||0),0)},
 wish(){try{return JSON.parse(localStorage.getItem('asa_wishlist')||'[]')}catch{return[]}},
 toggleWish(id){let a=this.wish(),n=Number(id);a=a.includes(n)?a.filter(x=>x!==n):[...a,n];localStorage.setItem('asa_wishlist',JSON.stringify(a));this.refreshBadges();return a.includes(n)},
 compare(){try{return JSON.parse(localStorage.getItem('asa_compare')||'[]')}catch{return[]}},
 toggleCompare(id){let a=this.compare(),n=Number(id);if(a.includes(n))a=a.filter(x=>x!==n);else if(a.length<4)a.push(n);else return false;localStorage.setItem('asa_compare',JSON.stringify(a));return a.includes(n)},
 refreshBadges(){document.querySelectorAll('[data-cart-count]').forEach(e=>e.textContent=this.count());document.querySelectorAll('[data-wish-count]').forEach(e=>e.textContent=this.wish().length);},
 money(n){return '৳ '+Number(n||0).toLocaleString('en-BD')},
  getCoupon(){try{return JSON.parse(localStorage.getItem('asa_coupon')||'null')}catch{return null}},
  applyCoupon(code,subtotal){const c=String(code||'').trim().toUpperCase();const coupons={WELCOME10:{type:'percent',value:10,min:500},SAVE100:{type:'flat',value:100,min:1000},FREESHIP:{type:'shipping',value:1,min:800}};const x=coupons[c];if(!x||subtotal<x.min)return null;const discount=x.type==='percent'?Math.round(subtotal*x.value/100):x.type==='flat'?x.value:0;const out={code:c,discount,freeShipping:x.type==='shipping'};localStorage.setItem('asa_coupon',JSON.stringify(out));return out},
  clearCoupon(){localStorage.removeItem('asa_coupon')},
 toast(t){let e=document.getElementById('asaToast');if(!e){e=document.createElement('div');e.id='asaToast';e.className='toast';document.body.appendChild(e)}e.textContent=t;e.classList.add('show');clearTimeout(this._t);this._t=setTimeout(()=>e.classList.remove('show'),1800)},
 escape(s){return String(s??'').replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]))}
};
window.ASA=ASA;
window.addEventListener('DOMContentLoaded',()=>ASA.refreshBadges());
