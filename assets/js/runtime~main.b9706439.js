(()=>{"use strict";var e,a,f,d,b,c={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=c,r.c=t,e=[],r.O=(a,f,d,b)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],b=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&b||c>=b)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,b<c&&(c=b));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[f,d,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var c={};a=a||[null,f({}),f([]),f(f)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,r.d(b,c),b},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({29:"e8c0515a",99:"5502eb63",148:"4fe4cf85",193:"f141eeb0",283:"2b5ad9dc",417:"175ee182",545:"59090a17",661:"307db18a",693:"eb164846",713:"14a3a2f6",745:"c6ac103c",838:"3548d9e3",867:"33fc5bb8",893:"b0fb4358",1001:"97a44f3b",1010:"10a2e7b1",1016:"8981ab55",1060:"0d6e861e",1072:"35559e50",1079:"0d6dc0c6",1147:"a22ed1ed",1150:"b706e4bc",1186:"ade65422",1235:"a7456010",1308:"0bb8c6fb",1327:"04c73b1b",1429:"26e1ac79",1503:"b14ff3d4",1513:"a72ea59d",1675:"b1e0d336",1903:"acecf23e",1915:"b9643255",1934:"b0987b2e",1950:"e2abeee0",2013:"48c64a53",2015:"0835d86b",2017:"8b243379",2116:"27036924",2182:"b4a42fc1",2274:"9d54bc79",2459:"9a35dae8",2486:"25fae8d6",2513:"2062fba3",2634:"c4f5d8e4",2711:"9e4087bc",2750:"690468f2",2784:"d0b66f6a",2881:"fcf9f653",2883:"ca1afffd",2892:"55623017",2922:"d1327f7e",2953:"4f69fa17",2971:"c18faff5",2988:"20ab2fbb",3053:"6a437cd4",3236:"daee581d",3249:"ccc49370",3539:"5ea46a99",3581:"7600a954",3589:"bb631b4f",3590:"88a2325d",3742:"e7bdec61",3787:"d7008a60",3822:"71479056",3872:"24a4340c",3908:"8ccf4461",3918:"d3ae7764",3957:"e4f02af5",4006:"58a78ef9",4057:"f189d3f5",4076:"fd9d75b0",4134:"393be207",4212:"621db11d",4376:"0c94562d",4378:"92be0717",4436:"c0294e75",4516:"3bfc95f1",4656:"cc383f76",4669:"c71fbeb0",4699:"113f9d20",4732:"6d6d998a",4812:"62f4fefd",4813:"6875c492",4822:"eb560056",4894:"526180a8",4980:"87fee78c",5e3:"98d8653b",5017:"49f3227c",5022:"05bdd52e",5044:"e15eba88",5261:"135698bf",5304:"8845d741",5372:"95e79631",5528:"e52aaa39",5531:"3e2221e8",5626:"a387d3af",5718:"65699a7f",5739:"93c3759e",5742:"aba21aa0",5824:"d53ce32b",5905:"e967f29b",5927:"76c8b0f2",5959:"1111b899",6048:"0bef1df9",6061:"1f391b9e",6089:"dd7e7173",6170:"147e7be2",6268:"b91ca810",6306:"f1f54c46",6322:"9f598e5d",6338:"d5e0be4d",6340:"da9cabdc",6401:"4102d386",6602:"de4f4a83",6697:"7c0b0fec",6715:"23918c3e",6717:"0456927c",6734:"70946db3",6743:"40b4a067",6964:"f8d10a96",6969:"14eb3368",7044:"634e93cb",7061:"0fdda15e",7077:"dd915cca",7098:"a7bd4aaa",7122:"81f9694d",7143:"ccc2f95e",7229:"da4ad921",7245:"c302a74f",7246:"8d02b9bb",7273:"1ff89c9b",7324:"5ddc63a5",7435:"5831aca0",7472:"814f3328",7488:"255c6415",7518:"e6e23bc7",7524:"3f71ce57",7525:"8325881a",7541:"34d1916b",7564:"f6e59cb7",7643:"a6aa9e1f",7711:"458a41ef",7747:"ab99d5df",7760:"c9bba109",7799:"f03c3c15",7868:"3c1981e1",7988:"90efdeca",8160:"0be06b6d",8177:"02e4a46f",8182:"710a91c7",8209:"01a85c17",8365:"79e23442",8401:"17896441",8421:"fdb6e2bc",8511:"4571bef4",8554:"e7067dee",8559:"6f341042",8567:"a9af98c5",8608:"6e4939eb",8639:"f62053c3",8702:"60cb811f",8708:"bba41c97",8725:"9255263d",8752:"548130ec",8803:"01955df2",8869:"4f02fada",8940:"b4571a94",8956:"9b6b5ce1",9048:"a94703ab",9158:"da6b6cd1",9181:"da24505e",9257:"17d24d48",9261:"ad6e561d",9305:"b1aeda4b",9406:"b1109d37",9475:"e32c8e31",9488:"bcc54de5",9585:"edbf9e69",9597:"33e10617",9647:"5e95c892",9658:"332d7163",9669:"55781688",9723:"31d34933",9738:"c3c70e44",9858:"36994c47",9881:"89a9beaa",9959:"99b470b3",9991:"88c80391"}[e]||e)+"."+{29:"4474a63c",99:"ba1b9f82",148:"b809ac34",193:"1d5d7634",283:"b71ac50b",417:"a786ee8d",545:"b7db9819",661:"a6e34f13",693:"e1445d2b",713:"60564f30",745:"5f1610bf",838:"b339efd1",867:"ae036c1d",893:"10ea416f",1001:"0ddf13b7",1010:"8d73e438",1016:"0e87e0c0",1060:"a75a47eb",1072:"cd56e45b",1079:"82abca3b",1147:"691f89d7",1150:"567ca08c",1186:"9b353764",1235:"820c09d4",1308:"24559cad",1327:"6753089a",1429:"3471e191",1503:"15334912",1513:"5b48a676",1538:"c2f55fb6",1675:"245a0b24",1903:"a62a9815",1915:"cd683176",1934:"8f0ececb",1950:"c2b185fa",2013:"b02913bb",2015:"05b62aed",2017:"e0cf5489",2116:"134a010c",2182:"5ff84ccf",2237:"effb48f2",2274:"9b7b3054",2459:"0e17ed14",2486:"e09941f8",2513:"bc20eafd",2634:"04514f88",2711:"abcc8371",2750:"a26c168d",2784:"32ecc627",2881:"08e0ce4f",2883:"08956fea",2892:"7d67d7f7",2922:"964a4c72",2953:"58616bd5",2971:"ef26a4a1",2988:"32cd41b4",3053:"6f87d396",3236:"594dfd09",3249:"e2c4b0ba",3347:"5ab6abd6",3539:"c1afed91",3581:"2359fa15",3589:"3efb5a0b",3590:"d0ebd97a",3742:"a6afbed0",3787:"8483e8eb",3822:"b35f6ca0",3872:"a1a8e9d7",3908:"debda7ff",3918:"61c548b0",3957:"e4f7aefa",4006:"4b162bf9",4057:"6add6816",4076:"fb8f63bc",4134:"92b0fea1",4212:"e7f26fa0",4376:"3463050f",4378:"4b74a042",4436:"1c6f4531",4516:"93178e5c",4656:"54970010",4669:"7a04e78f",4699:"19ae738d",4732:"a0e0d8b0",4812:"1cd9c7e2",4813:"e9d953b7",4822:"be0c67d9",4894:"f552d7f1",4980:"c7f9a86c",5e3:"420a8165",5017:"8693fb0f",5022:"06d2c2ec",5044:"ae5f51d4",5261:"13953f4c",5304:"61ccb31c",5372:"16e44fc7",5528:"14d8d3f9",5531:"2c1942b0",5626:"86e610b5",5718:"5beb0ff2",5739:"10df0387",5742:"cd2ab47a",5824:"7acf400b",5905:"2b47bb8b",5927:"d87a9439",5959:"f082ac1b",6048:"af377662",6061:"af58c450",6089:"573bf206",6170:"649144c5",6268:"684861d8",6306:"ec1c7289",6322:"67084242",6338:"adaca83c",6340:"d4e14f97",6401:"1ce77a2e",6602:"4d97ba31",6697:"54b4ff6f",6715:"f6213417",6717:"1f80ed5b",6734:"b1602909",6743:"a63a9cfc",6964:"f84798a4",6969:"a7444068",7044:"efa6a157",7061:"6aafc4ff",7077:"990d3fbd",7098:"e375e26c",7122:"cbdc8bff",7143:"28f61953",7229:"246c5e79",7245:"1491e029",7246:"9a0dae7b",7273:"d389956d",7324:"5d674813",7435:"56857626",7472:"69eb96c3",7488:"2cd31094",7518:"e4af352a",7524:"f67d75a5",7525:"095f4b72",7541:"375e3410",7564:"f4898c00",7643:"747838ac",7711:"11c8ec7b",7747:"1dc1deca",7760:"ad30692d",7799:"333d1225",7868:"d0e9c4e1",7988:"97a8d72f",8160:"07fc2438",8177:"95743d67",8182:"48fc92cb",8209:"ae195aef",8365:"32b5267f",8401:"b5f8ce5f",8421:"c3630bc2",8511:"0c3e6e1c",8554:"4e738e56",8559:"cd93da9d",8567:"d74de614",8608:"a3174a29",8639:"335b0564",8702:"b2f95c18",8708:"534bc6eb",8725:"cfbedf36",8752:"5c559c2e",8803:"92566dd4",8869:"5b14b1e9",8940:"c391a2c5",8956:"521df816",9048:"bfd94d26",9158:"c8d39cc3",9181:"556b7df5",9257:"3dd2d6c4",9261:"08466e3e",9305:"eb771541",9406:"964da687",9475:"4d80b924",9488:"2471b2fe",9585:"adcd990f",9597:"f6e4d910",9647:"ff7f3b29",9658:"5c49d145",9669:"5e64e90f",9723:"ff8dbf4e",9738:"57dcd411",9858:"58abd5d3",9881:"5f5dce5f",9959:"2a8b62ae",9991:"86389ca7"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},b="PCB-Design:",r.l=(e,a,f,c)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+f),t.src=e),d[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var b=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/PCB-Design-with-KiCad/",r.gca=function(e){return e={17896441:"8401",27036924:"2116",55623017:"2892",55781688:"9669",71479056:"3822",e8c0515a:"29","5502eb63":"99","4fe4cf85":"148",f141eeb0:"193","2b5ad9dc":"283","175ee182":"417","59090a17":"545","307db18a":"661",eb164846:"693","14a3a2f6":"713",c6ac103c:"745","3548d9e3":"838","33fc5bb8":"867",b0fb4358:"893","97a44f3b":"1001","10a2e7b1":"1010","8981ab55":"1016","0d6e861e":"1060","35559e50":"1072","0d6dc0c6":"1079",a22ed1ed:"1147",b706e4bc:"1150",ade65422:"1186",a7456010:"1235","0bb8c6fb":"1308","04c73b1b":"1327","26e1ac79":"1429",b14ff3d4:"1503",a72ea59d:"1513",b1e0d336:"1675",acecf23e:"1903",b9643255:"1915",b0987b2e:"1934",e2abeee0:"1950","48c64a53":"2013","0835d86b":"2015","8b243379":"2017",b4a42fc1:"2182","9d54bc79":"2274","9a35dae8":"2459","25fae8d6":"2486","2062fba3":"2513",c4f5d8e4:"2634","9e4087bc":"2711","690468f2":"2750",d0b66f6a:"2784",fcf9f653:"2881",ca1afffd:"2883",d1327f7e:"2922","4f69fa17":"2953",c18faff5:"2971","20ab2fbb":"2988","6a437cd4":"3053",daee581d:"3236",ccc49370:"3249","5ea46a99":"3539","7600a954":"3581",bb631b4f:"3589","88a2325d":"3590",e7bdec61:"3742",d7008a60:"3787","24a4340c":"3872","8ccf4461":"3908",d3ae7764:"3918",e4f02af5:"3957","58a78ef9":"4006",f189d3f5:"4057",fd9d75b0:"4076","393be207":"4134","621db11d":"4212","0c94562d":"4376","92be0717":"4378",c0294e75:"4436","3bfc95f1":"4516",cc383f76:"4656",c71fbeb0:"4669","113f9d20":"4699","6d6d998a":"4732","62f4fefd":"4812","6875c492":"4813",eb560056:"4822","526180a8":"4894","87fee78c":"4980","98d8653b":"5000","49f3227c":"5017","05bdd52e":"5022",e15eba88:"5044","135698bf":"5261","8845d741":"5304","95e79631":"5372",e52aaa39:"5528","3e2221e8":"5531",a387d3af:"5626","65699a7f":"5718","93c3759e":"5739",aba21aa0:"5742",d53ce32b:"5824",e967f29b:"5905","76c8b0f2":"5927","1111b899":"5959","0bef1df9":"6048","1f391b9e":"6061",dd7e7173:"6089","147e7be2":"6170",b91ca810:"6268",f1f54c46:"6306","9f598e5d":"6322",d5e0be4d:"6338",da9cabdc:"6340","4102d386":"6401",de4f4a83:"6602","7c0b0fec":"6697","23918c3e":"6715","0456927c":"6717","70946db3":"6734","40b4a067":"6743",f8d10a96:"6964","14eb3368":"6969","634e93cb":"7044","0fdda15e":"7061",dd915cca:"7077",a7bd4aaa:"7098","81f9694d":"7122",ccc2f95e:"7143",da4ad921:"7229",c302a74f:"7245","8d02b9bb":"7246","1ff89c9b":"7273","5ddc63a5":"7324","5831aca0":"7435","814f3328":"7472","255c6415":"7488",e6e23bc7:"7518","3f71ce57":"7524","8325881a":"7525","34d1916b":"7541",f6e59cb7:"7564",a6aa9e1f:"7643","458a41ef":"7711",ab99d5df:"7747",c9bba109:"7760",f03c3c15:"7799","3c1981e1":"7868","90efdeca":"7988","0be06b6d":"8160","02e4a46f":"8177","710a91c7":"8182","01a85c17":"8209","79e23442":"8365",fdb6e2bc:"8421","4571bef4":"8511",e7067dee:"8554","6f341042":"8559",a9af98c5:"8567","6e4939eb":"8608",f62053c3:"8639","60cb811f":"8702",bba41c97:"8708","9255263d":"8725","548130ec":"8752","01955df2":"8803","4f02fada":"8869",b4571a94:"8940","9b6b5ce1":"8956",a94703ab:"9048",da6b6cd1:"9158",da24505e:"9181","17d24d48":"9257",ad6e561d:"9261",b1aeda4b:"9305",b1109d37:"9406",e32c8e31:"9475",bcc54de5:"9488",edbf9e69:"9585","33e10617":"9597","5e95c892":"9647","332d7163":"9658","31d34933":"9723",c3c70e44:"9738","36994c47":"9858","89a9beaa":"9881","99b470b3":"9959","88c80391":"9991"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,f)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var b=new Promise(((f,b)=>d=e[a]=[f,b]));f.push(d[2]=b);var c=r.p+r.u(a),t=new Error;r.l(c,(f=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var b=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+c+")",t.name="ChunkLoadError",t.type=b,t.request=c,d[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var d,b,c=f[0],t=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(f);n<c.length;n++)b=c[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},f=self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();