(()=>{"use strict";var e,a,f,d,b,c={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=c,r.c=t,e=[],r.O=(a,f,d,b)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],b=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&b||c>=b)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,b<c&&(c=b));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[f,d,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var c={};a=a||[null,f({}),f([]),f(f)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,r.d(b,c),b},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({2:"2892dd0b",80:"6e0a0fe4",106:"50603359",127:"13cf8f05",152:"8c30b6eb",161:"d09082fa",180:"0f0bde0f",192:"d2b9bc2e",251:"23351b88",469:"d1358f09",711:"7046c86d",863:"a28951a9",867:"33fc5bb8",1096:"c08a6a66",1103:"95bae09a",1194:"c7a3ac4c",1233:"9ad82fbf",1235:"a7456010",1265:"8f8c7345",1302:"0c482493",1474:"46df1ae4",1553:"b0b9ad57",1704:"6429b826",1716:"0a07eafa",1718:"1195273a",1733:"4c35b25b",1813:"dd5d488e",1903:"acecf23e",1949:"5d69597a",2e3:"00295577",2017:"8b243379",2112:"892ede35",2120:"602ec8f5",2133:"2b4d59a3",2160:"d9179bcb",2182:"430eee05",2333:"a4df9e41",2358:"b2656d1c",2367:"b8895192",2384:"fc7ad925",2455:"30484d96",2481:"e900649a",2516:"042614bb",2555:"25f24f9f",2576:"2b91a464",2634:"c4f5d8e4",2693:"a3f737f3",2708:"8b307d96",2711:"9e4087bc",2724:"8864ca4e",2755:"6b683e46",2764:"8d6a42b0",2793:"4018eaa0",2835:"b5ac26c2",2857:"4b67d3c3",2892:"55623017",2937:"c3b7de71",3049:"78361dd3",3087:"978dc153",3180:"326fae5e",3201:"ce2f1063",3249:"ccc49370",3258:"ff6018ca",3477:"65dddfc6",3514:"9e9f46e3",3578:"efb4879b",3585:"361ffa07",3683:"dcae8dfc",3685:"d64674b1",3807:"890a2279",3831:"668a0a4d",3871:"a8fc1126",3912:"2d4dcfaa",3971:"ec79169b",3997:"7998b7a7",4010:"aa8b2227",4050:"415d7a50",4056:"331b0772",4076:"fd9d75b0",4112:"906a44f1",4124:"4775bea8",4134:"393be207",4135:"53d398ac",4212:"621db11d",4264:"03c0de8d",4265:"6cab3858",4378:"92be0717",4513:"89bb6d70",4528:"fbc0f44d",4656:"cc383f76",4678:"ae356e3e",4690:"326a8360",4768:"681a301e",4787:"232762e7",4804:"f088d0c0",4806:"3623c95d",4813:"6875c492",5e3:"98d8653b",5035:"0d3678a1",5422:"21514e41",5529:"5c2ffe2c",5549:"a68dad66",5664:"64973307",5668:"09161eb7",5701:"013f5559",5731:"acea5834",5736:"6de34d70",5742:"aba21aa0",5764:"9fd7844e",5783:"960a8260",5788:"2a2a0928",5824:"d53ce32b",5831:"c676f80f",5839:"a47df963",5933:"bb6ad966",5961:"ff9d134e",6048:"0bef1df9",6061:"1f391b9e",6065:"2b62dd9a",6071:"9fbea144",6092:"d0c56298",6155:"61b90a49",6306:"f1f54c46",6413:"079225c6",6504:"0c483203",6520:"f23b8a3d",6539:"fbae19e7",6572:"06db7154",6595:"527a3f33",6618:"63745e18",6623:"16fa5fed",6634:"9cb8804c",6667:"bbbbd854",6695:"59a4ce92",6721:"231bb0ca",6734:"70946db3",6749:"930271ac",6846:"356a2a70",6881:"defdfcc1",6916:"a54fb922",6969:"14eb3368",6988:"d1584a4d",7071:"151f3503",7081:"280f58cd",7098:"a7bd4aaa",7116:"32dbad74",7134:"8b5f7b45",7170:"98194552",7241:"8fb7a068",7245:"c302a74f",7250:"23f8ae4d",7257:"e4a9ecb9",7437:"5fcd312d",7447:"40a1fa16",7472:"814f3328",7490:"293b19dc",7524:"3f71ce57",7643:"a6aa9e1f",7718:"f215498f",7723:"2c786ee0",7799:"e3f08815",7825:"aaa1277f",7928:"92cc815b",8e3:"7327e256",8027:"b8cabd35",8132:"78477394",8177:"02e4a46f",8182:"710a91c7",8209:"01a85c17",8286:"ffb6f119",8311:"367067ba",8317:"260c773b",8401:"17896441",8408:"b8a1e3ad",8420:"4e56b294",8511:"4571bef4",8543:"631da2fa",8643:"82a8edb4",8676:"0dd9d6ac",8708:"bba41c97",8752:"548130ec",9032:"db50f87e",9048:"a94703ab",9104:"43be2485",9136:"688f6764",9242:"3def3462",9299:"ac7d4720",9303:"edd5469c",9368:"a24a2571",9431:"abc5096f",9623:"a1cbe983",9637:"acf27a86",9647:"5e95c892",9659:"4dba13e8",9669:"55781688",9744:"f01e95a2",9759:"56fb36e1",9858:"36994c47",9885:"919b2623"}[e]||e)+"."+{2:"29c77ca4",80:"48a1044c",106:"0b53e057",127:"2765390e",152:"6d437981",161:"ea8d2472",180:"747c3e17",192:"782eca59",251:"12da82a2",469:"20457af9",711:"a8bfef49",863:"1f88cef2",867:"ae036c1d",1096:"f4a43d46",1103:"7a223f79",1194:"30400312",1233:"5db83037",1235:"820c09d4",1265:"bc6c1552",1302:"6d46c89c",1474:"c862a5ed",1538:"c2f55fb6",1553:"d2db1c5b",1704:"9e7e68cc",1716:"3027d9a0",1718:"27b0feac",1733:"a1ca9551",1813:"afd1201d",1903:"a62a9815",1949:"f845d8d6",2e3:"6901d9ad",2017:"be402e97",2112:"8981a32d",2120:"8d807266",2133:"3dd1de1a",2160:"21267d6a",2182:"c1e63cf7",2237:"effb48f2",2333:"ebc23af1",2358:"da5548ec",2367:"c93093eb",2384:"b63ad1f9",2455:"26e8b813",2481:"99ac8d7c",2516:"912cec0c",2555:"cdfc24ef",2576:"e69a37fc",2634:"04514f88",2693:"8578908a",2708:"93ec74fd",2711:"abcc8371",2724:"d0563c26",2755:"ac574292",2764:"901d6ed3",2793:"4db4a7fe",2835:"a540a4f2",2857:"bb546dea",2892:"7d67d7f7",2937:"7d864b74",3049:"768ade31",3087:"bba6a43a",3180:"9ea6989c",3201:"56310553",3249:"e2c4b0ba",3258:"1a067ba8",3347:"5ab6abd6",3477:"9c9c933e",3514:"603289cf",3578:"f52902d1",3585:"44c47977",3683:"04953a73",3685:"ffa1ebdc",3807:"2d9f5901",3831:"494fcbb3",3871:"0ca1e2e0",3912:"f0733186",3971:"4d30cf49",3997:"8bef68f7",4010:"51326510",4050:"d070cccc",4056:"1636e611",4076:"48fc3272",4112:"166290d4",4124:"dd4a7d62",4134:"92b0fea1",4135:"43161533",4212:"e7f26fa0",4264:"c4495ab1",4265:"e08b9623",4378:"5eab0b72",4513:"3e95d5d9",4528:"14bcea1c",4656:"54970010",4678:"43a3d323",4690:"4350ebd2",4768:"1e198ad7",4787:"cfecd51b",4804:"9f55f6e1",4806:"538f7baa",4813:"e9d953b7",5e3:"f3e826a0",5035:"a6a982fd",5422:"abf8e9fe",5529:"070c9671",5549:"cf0a2887",5664:"8862d8fc",5668:"7a2aa50e",5701:"a5a7e55d",5731:"063ab8d1",5736:"035574e0",5742:"cd2ab47a",5764:"bf920a45",5783:"c8274243",5788:"5f65a86e",5824:"7acf400b",5831:"6dc60c96",5839:"0571b188",5933:"4db1fd85",5961:"3efbba10",6048:"48b99d04",6061:"af58c450",6065:"e1dfde58",6071:"3ab2ef15",6092:"c65b4a1b",6155:"efc8ed21",6306:"ec1c7289",6413:"3d8b81c6",6504:"130facac",6520:"b916cdfd",6539:"11439012",6572:"4917d04f",6595:"7fe96c95",6618:"fe94c3fe",6623:"605a9912",6634:"c0f93412",6667:"219a5725",6695:"c1086164",6721:"a85a261d",6734:"e7064bc4",6749:"3e95d789",6846:"9ad7f875",6881:"0eb4083b",6916:"26bdb0fd",6969:"a7444068",6988:"78d126a2",7071:"c1765ab2",7081:"4716bf33",7098:"e375e26c",7116:"1a106a0e",7134:"069d4bcf",7170:"5d44f365",7241:"b4e00c4b",7245:"9343ed2b",7250:"e3f6d2fb",7257:"c5066c73",7437:"4ae82c44",7447:"0c74a6bd",7472:"69eb96c3",7490:"bba0d2ed",7524:"f67fdc4f",7643:"747838ac",7718:"4822c0db",7723:"010c03ba",7799:"d4f1e3f9",7825:"b511d3b7",7928:"5708a177",8e3:"92c93b15",8027:"a029676f",8132:"7283a063",8177:"95743d67",8182:"0d5965b9",8209:"ae195aef",8286:"73026293",8311:"1ec968d2",8317:"77f00295",8401:"b5f8ce5f",8408:"200c90af",8420:"8286b916",8511:"0c3e6e1c",8543:"520cb0f8",8643:"f6770ea8",8676:"e919a859",8708:"534bc6eb",8752:"5c559c2e",9032:"212eeae1",9048:"a55bd1db",9104:"9c5dd523",9136:"1b818cbc",9242:"79540fc7",9299:"3ef2dbd3",9303:"64e42ed6",9368:"474ba64c",9431:"b83ce99c",9623:"5c955a8e",9637:"5842328d",9647:"ff7f3b29",9659:"94ed6089",9669:"5e64e90f",9744:"6c2539bb",9759:"e4ede816",9858:"58abd5d3",9885:"6da2ba19"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},b="PCB-Design:",r.l=(e,a,f,c)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+f),t.src=e),d[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var b=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/PCB-Design-with-KiCad/",r.gca=function(e){return e={17896441:"8401",50603359:"106",55623017:"2892",55781688:"9669",64973307:"5664",78477394:"8132",98194552:"7170","2892dd0b":"2","6e0a0fe4":"80","13cf8f05":"127","8c30b6eb":"152",d09082fa:"161","0f0bde0f":"180",d2b9bc2e:"192","23351b88":"251",d1358f09:"469","7046c86d":"711",a28951a9:"863","33fc5bb8":"867",c08a6a66:"1096","95bae09a":"1103",c7a3ac4c:"1194","9ad82fbf":"1233",a7456010:"1235","8f8c7345":"1265","0c482493":"1302","46df1ae4":"1474",b0b9ad57:"1553","6429b826":"1704","0a07eafa":"1716","1195273a":"1718","4c35b25b":"1733",dd5d488e:"1813",acecf23e:"1903","5d69597a":"1949","00295577":"2000","8b243379":"2017","892ede35":"2112","602ec8f5":"2120","2b4d59a3":"2133",d9179bcb:"2160","430eee05":"2182",a4df9e41:"2333",b2656d1c:"2358",b8895192:"2367",fc7ad925:"2384","30484d96":"2455",e900649a:"2481","042614bb":"2516","25f24f9f":"2555","2b91a464":"2576",c4f5d8e4:"2634",a3f737f3:"2693","8b307d96":"2708","9e4087bc":"2711","8864ca4e":"2724","6b683e46":"2755","8d6a42b0":"2764","4018eaa0":"2793",b5ac26c2:"2835","4b67d3c3":"2857",c3b7de71:"2937","78361dd3":"3049","978dc153":"3087","326fae5e":"3180",ce2f1063:"3201",ccc49370:"3249",ff6018ca:"3258","65dddfc6":"3477","9e9f46e3":"3514",efb4879b:"3578","361ffa07":"3585",dcae8dfc:"3683",d64674b1:"3685","890a2279":"3807","668a0a4d":"3831",a8fc1126:"3871","2d4dcfaa":"3912",ec79169b:"3971","7998b7a7":"3997",aa8b2227:"4010","415d7a50":"4050","331b0772":"4056",fd9d75b0:"4076","906a44f1":"4112","4775bea8":"4124","393be207":"4134","53d398ac":"4135","621db11d":"4212","03c0de8d":"4264","6cab3858":"4265","92be0717":"4378","89bb6d70":"4513",fbc0f44d:"4528",cc383f76:"4656",ae356e3e:"4678","326a8360":"4690","681a301e":"4768","232762e7":"4787",f088d0c0:"4804","3623c95d":"4806","6875c492":"4813","98d8653b":"5000","0d3678a1":"5035","21514e41":"5422","5c2ffe2c":"5529",a68dad66:"5549","09161eb7":"5668","013f5559":"5701",acea5834:"5731","6de34d70":"5736",aba21aa0:"5742","9fd7844e":"5764","960a8260":"5783","2a2a0928":"5788",d53ce32b:"5824",c676f80f:"5831",a47df963:"5839",bb6ad966:"5933",ff9d134e:"5961","0bef1df9":"6048","1f391b9e":"6061","2b62dd9a":"6065","9fbea144":"6071",d0c56298:"6092","61b90a49":"6155",f1f54c46:"6306","079225c6":"6413","0c483203":"6504",f23b8a3d:"6520",fbae19e7:"6539","06db7154":"6572","527a3f33":"6595","63745e18":"6618","16fa5fed":"6623","9cb8804c":"6634",bbbbd854:"6667","59a4ce92":"6695","231bb0ca":"6721","70946db3":"6734","930271ac":"6749","356a2a70":"6846",defdfcc1:"6881",a54fb922:"6916","14eb3368":"6969",d1584a4d:"6988","151f3503":"7071","280f58cd":"7081",a7bd4aaa:"7098","32dbad74":"7116","8b5f7b45":"7134","8fb7a068":"7241",c302a74f:"7245","23f8ae4d":"7250",e4a9ecb9:"7257","5fcd312d":"7437","40a1fa16":"7447","814f3328":"7472","293b19dc":"7490","3f71ce57":"7524",a6aa9e1f:"7643",f215498f:"7718","2c786ee0":"7723",e3f08815:"7799",aaa1277f:"7825","92cc815b":"7928","7327e256":"8000",b8cabd35:"8027","02e4a46f":"8177","710a91c7":"8182","01a85c17":"8209",ffb6f119:"8286","367067ba":"8311","260c773b":"8317",b8a1e3ad:"8408","4e56b294":"8420","4571bef4":"8511","631da2fa":"8543","82a8edb4":"8643","0dd9d6ac":"8676",bba41c97:"8708","548130ec":"8752",db50f87e:"9032",a94703ab:"9048","43be2485":"9104","688f6764":"9136","3def3462":"9242",ac7d4720:"9299",edd5469c:"9303",a24a2571:"9368",abc5096f:"9431",a1cbe983:"9623",acf27a86:"9637","5e95c892":"9647","4dba13e8":"9659",f01e95a2:"9744","56fb36e1":"9759","36994c47":"9858","919b2623":"9885"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,f)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var b=new Promise(((f,b)=>d=e[a]=[f,b]));f.push(d[2]=b);var c=r.p+r.u(a),t=new Error;r.l(c,(f=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var b=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+c+")",t.name="ChunkLoadError",t.type=b,t.request=c,d[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var d,b,c=f[0],t=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(f);n<c.length;n++)b=c[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},f=self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();