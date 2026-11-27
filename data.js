/* =====================================================================
   MINIMALIST + — ALL CONTENT LIVES HERE  (edit this file only)
   index.html is the engine: you never need to touch it to add apps.

   HOW TO ADD A NEW APP  (copy the block, paste it inside APPS, edit):
   كيف تضيف تطبيقاً جديداً: انسخ الكتلة وألصقها داخل APPS ثم عدّل القيم.

     A({
       id:"my-app",                      // used in the link: index.html#my-app  (letters/numbers/-)
       name:"My App",
       cat:"tools",                      // a key from CATS below (or a new one you add to CATS)
       type:{en:"Notes",ar:"ملاحظات"},   // or a plain string
       size:"1 MB",
       url:"https://your-name.github.io/my-app/",   // the "Open app" button
       icon:'<svg viewBox="0 0 64 64"><rect width="64" height="64" fill="#2f55d4"/>...</svg>',
       desc:{en:"Short description.",ar:"وصف قصير."},
       shots:["my-app-1.png","my-app-2.png"],       // file names inside IMG_BASE, or full links
       // optional: ver, upd, plat, req, stack, langs, tags, safe
     }),

   • icon  = full SVG code, viewBox 0 0 64 64, FLAT colors only (no gradients / ids).
   • shots = screenshots uploaded to your GitHub repo.  No shots -> the section hides.
   • Coming soon: use  soon:true  (only id, name, cat, icon are needed).
   ===================================================================== */

/* ---------- Brand ---------- */
var SITE={
  dev:"Minimalist +",                        // shown as the developer name everywhere
  orderUrl:"https://t.me/kira_desu92i"       // where the "services" rows send people
};

/* ---------- Where screenshots live (GitHub raw folder) ----------
   Upload images to a repo, then use its raw link, ending with "/".
   Example: https://raw.githubusercontent.com/USER/REPO/refs/heads/main/screenshots/        */
var IMG_BASE="https://raw.githubusercontent.com/Kira92i/Personal-information/refs/heads/main/";

/* ---------- Home-page texts (override the defaults; keep {dev}) ---------- */
var TEXT={
  en:{heroTitle:"Discover {dev} apps",heroSub:"Light, fast tools — no ads"},
  ar:{heroTitle:"اكتشف تطبيقات {dev}",heroSub:"أدوات خفيفة وسريعة — بدون إعلانات"}
};

/* ---------- Categories (key -> label). Add a line for every new cat ---------- */
var CATS={
  religion:{en:"Religion",ar:"دين"},
  tools:{en:"Tools",ar:"أدوات"},
  soon:{en:"Coming soon",ar:"قريباً"}
};

/* ---------- Defaults used when an app doesn't set them ---------- */
var DEFAULTS={
  size:"1 MB",ver:"1.0",upd:"Nov 2026",
  plat:{en:"Web app",ar:"تطبيق ويب"},
  req:{en:"Any modern browser",ar:"أي متصفح حديث"},
  stack:"HTML · CSS · JavaScript",
  langs:{en:"Arabic",ar:"العربية"},
  shots:[]
};
function A(o){
  var k;
  for(k in DEFAULTS){ if(o[k]===undefined) o[k]=DEFAULTS[k]; }
  if(!o.tags) o.tags=[CATS[o.cat]||o.cat];
  if(!o.type) o.type=CATS[o.cat]||o.cat;
  return o;
}

/* ---------- "Data safety" cards shown on every app page ---------- */
var SAFE=[
  {en:["No data shared","This app doesn't share data with third parties"],ar:["لا تتم مشاركة البيانات","لا يشارك التطبيق بيانات مع جهات خارجية"]},
  {en:["No data collected","No personal data is collected"],ar:["لا تُجمع بيانات","لا يتم جمع أي بيانات شخصية"]},
  {en:["No ads","Free of ads and tracking"],ar:["بدون إعلانات","خالٍ من الإعلانات والتتبّع"]}
];

/* =====================  ★  YOUR APPS  ★  ===================== */
var APPS=[

  A({
    id:"remember-allah", name:"Remember Allah", cat:"religion",
    type:{en:"Adhkar",ar:"أذكار"}, size:"2 MB",
    url:"https://kira92i.github.io/Remember_Allah-/",
    icon:'<svg viewBox="0 0 64 64"><rect width="64" height="64" fill="#0f5132"/><path d="M40 12a21 21 0 1 0 0 40 16 16 0 0 1 0-40z" fill="#ffe600"/><path d="M47 17l2.200 4.800 5.200.6-3.900 3.500 1.100 5.100L47 28.400l-4.600 2.600 1.100-5.100-3.900-3.500 5.200-.6z" fill="#fff"/></svg>',
    desc:{en:"Daily adhkar and reminders in a light, fast design that runs right in your browser.",
          ar:"أذكار وتذكيرات يومية بتصميم خفيف وسريع يعمل مباشرة من المتصفح."},
    tags:[{en:"Religion",ar:"دين"},{en:"Adhkar",ar:"أذكار"}],
    shots:["remember-1.png","remember-2.png","remember-3.png"]
  }),

  A({
    id:"s-clipboard", name:"S.Clipboard", cat:"tools",
    type:{en:"Clipboard",ar:"حافظة"}, size:"1 MB",
    url:"https://kira92i.github.io/S.Clipboard/",
    icon:'<svg viewBox="0 0 64 64"><rect width="64" height="64" fill="#2f55d4"/><rect x="16" y="14" width="32" height="40" rx="6" fill="#fff"/><rect x="24" y="9" width="16" height="10" rx="3.500" fill="#ffe600"/><rect x="22" y="28" width="20" height="3.500" rx="1.800" fill="#2f55d4"/><rect x="22" y="36" width="20" height="3.500" rx="1.800" fill="#2f55d4"/><rect x="22" y="44" width="12" height="3.500" rx="1.800" fill="#2f55d4"/></svg>',
    desc:{en:"A smart clipboard manager to save copied text and bring it back fast.",
          ar:"مدير حافظة ذكي لحفظ النصوص المنسوخة واسترجاعها بسرعة."},
    tags:[{en:"Tools",ar:"أدوات"},{en:"Productivity",ar:"إنتاجية"}],
    shots:["clipboard-1.png","clipboard-2.png"]
  }),

  A({
    id:"new-app", name:{en:"New app",ar:"تطبيق جديد"}, cat:"soon", soon:true,
    icon:'<svg viewBox="0 0 64 64"><rect width="64" height="64" fill="#37393b"/><path d="M32 18v28M18 32h28" stroke="#ffe600" stroke-width="6" stroke-linecap="round"/></svg>'
  })

];

/* ---------- Drawer: 3 donation methods (put YOUR real details in "value") ---------- */
var DONATE=[
  {name:{en:"RedotPay",ar:"RedotPay"},        value:"1783993495",     path:"M3 6h18v12H3zM3 10h18"},
  {name:{en:"PayPal",ar:"PayPal"},            value:"billelabdiche92@gmail.com",  path:"M7 20l2-14h6a4 4 0 010 8H10"},
  {name:{en:"BaridiMob",ar:"بريدي موب"},      value:"00799999002279035770",   path:"M4 10l8-6 8 6M6 10v8M10 10v8M14 10v8M18 10v8M3 20h18"}
];

/* ---------- Drawer: contact the developer ---------- */
var CONTACT=[
  {n:{en:"Email",ar:"البريد الإلكتروني"}, v:"billel*******@gmail.com", h:"mailto:billelabdiche92@gmail.com", p:"M4 6h16v12H4zM4 7l8 6 8-6"},
  {n:"Discord",  v:{en:"Join the server",ar:"انضم إلى السيرفر"}, h:"https://discord.gg/SwDpfzqU4K",
   p:"M7 6.500c3-1.300 7-1.300 10 0 1.500 2.500 2.200 5.500 2 9-1.200 1-2.500 1.600-4 2l-1-1.700M7 6.500C5.500 9 4.800 12 5 15.500c1.200 1 2.500 1.600 4 2l1-1.700"},
  {n:"Telegram", v:{en:"Message us",ar:"راسلنا"}, h:"https://t.me/kira_desu92i", p:"M21 4L3 11l5.500 2L10 19l3-3.500L17.500 19zM8.500 13L21 4"},
  {n:"WhatsApp", v:{en:"Chat with us",ar:"تحدّث معنا"}, h:"https://wa.me/qr/SWRUOYDR2XA6J1", p:"M4 20l1.300-4.200A8 8 0 118.200 18.800z"}
];

/* ---------- Drawer: more online services (each opens SITE.orderUrl) ---------- */
var SERVICES=[
  {n:{en:"Personal page design",ar:"تصميم صفحات شخصية"}, p:"M3 5h18v14H3zM3 9h18"},
  {n:{en:"Game top-ups & gift cards",ar:"شحن الألعاب وبطاقات الهدايا"}, p:"M6 8h12a3 3 0 013 3v3a3 3 0 01-5 2l-1-1H9l-1 1a3 3 0 01-5-2v-3a3 3 0 013-3zM8 11v3M6.500 12.500h3"},
  {n:{en:"Genshin Impact maps farming",ar:"فارمنج خرائط Genshin Impact"}, p:"M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z"},
  {n:{en:"AliExpress shopping",ar:"التسوق من AliExpress"}, p:"M5 8h14l-1 12H6zM9 8a3 3 0 016 0"},
  {n:{en:"VISA & virtual cards",ar:"طلبات VISA والبطاقات الافتراضية"}, p:"M3 6h18v12H3zM3 10h18"},
  {n:{en:"US Google account",ar:"حساب Google أمريكي"}, p:"M12 4a4 4 0 100 8 4 4 0 000-8zM4 21c0-4 4-6 8-6s8 2 8 6"}
];
