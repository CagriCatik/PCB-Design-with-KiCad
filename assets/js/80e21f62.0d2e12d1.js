"use strict";(self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[]).push([[5207],{7262:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"design_principles/gold-fingers","title":"Gold Fingers","description":"Gold fingers, also known as edge connectors, are gold-plated contact pads located on the edge of a Printed Circuit Board (PCB). They serve as reliable and durable connectors for interconnecting PCBs or attaching peripheral devices. This documentation provides a comprehensive analysis of gold fingers, their design, manufacturing process, and applications in advanced PCB design. The content is tailored for advanced users, emphasizing technical precision and practical insights.","source":"@site/docs/05_design_principles/13_gold-fingers.md","sourceDirName":"05_design_principles","slug":"/design_principles/gold-fingers","permalink":"/PCB-Design-with-KiCad/docs/design_principles/gold-fingers","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05_design_principles/13_gold-fingers.md","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{},"sidebar":"designPrinciplesSidebar","previous":{"title":"Surface Mounted Devices (SMDs)","permalink":"/PCB-Design-with-KiCad/docs/design_principles/smd"},"next":{"title":"Panel","permalink":"/PCB-Design-with-KiCad/docs/design_principles/panel"}}');var s=i(4848),a=i(8453);const o={},t="Gold Fingers",l={},c=[{value:"Definition and Function",id:"definition-and-function",level:2},{value:"Composition and Manufacturing",id:"composition-and-manufacturing",level:2},{value:"Gold Plating",id:"gold-plating",level:3},{value:"Manufacturing Process",id:"manufacturing-process",level:3},{value:"Design Considerations",id:"design-considerations",level:2},{value:"Geometry and Layout",id:"geometry-and-layout",level:3},{value:"Electrical Performance",id:"electrical-performance",level:3},{value:"Mechanical Durability",id:"mechanical-durability",level:3},{value:"Advanced Applications",id:"advanced-applications",level:2},{value:"High-Density Interconnect (HDI) PCBs",id:"high-density-interconnect-hdi-pcbs",level:3},{value:"High-Frequency and RF Design",id:"high-frequency-and-rf-design",level:3},{value:"Industrial and Automotive Applications",id:"industrial-and-automotive-applications",level:3},{value:"Practical Example",id:"practical-example",level:2},{value:"Example: Microbit Educational Single Board Computer",id:"example-microbit-educational-single-board-computer",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={br:"br",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"gold-fingers",children:"Gold Fingers"})}),"\n",(0,s.jsx)(n.p,{children:"Gold fingers, also known as edge connectors, are gold-plated contact pads located on the edge of a Printed Circuit Board (PCB). They serve as reliable and durable connectors for interconnecting PCBs or attaching peripheral devices. This documentation provides a comprehensive analysis of gold fingers, their design, manufacturing process, and applications in advanced PCB design. The content is tailored for advanced users, emphasizing technical precision and practical insights."}),"\n",(0,s.jsx)(n.h2,{id:"definition-and-function",children:"Definition and Function"}),"\n",(0,s.jsx)(n.p,{children:"Gold fingers are gold-plated connectors typically placed along the edge of a PCB. They are designed to provide a robust and reliable electrical connection between the PCB and another device, such as a motherboard, expansion card, or peripheral module. Key functions of gold fingers include:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Interconnection"}),":",(0,s.jsx)(n.br,{}),"\n","Gold fingers enable the PCB to be inserted into a slot or connector, facilitating electrical connections between multiple boards or devices."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Durability"}),":",(0,s.jsx)(n.br,{}),"\n","The gold plating provides excellent wear resistance, allowing for repeated insertion and removal without significant degradation."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Signal Integrity"}),":",(0,s.jsx)(n.br,{}),"\n","Gold is an excellent conductor with low contact resistance, ensuring reliable signal transmission, particularly in high-frequency applications."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"composition-and-manufacturing",children:"Composition and Manufacturing"}),"\n",(0,s.jsx)(n.h3,{id:"gold-plating",children:"Gold Plating"}),"\n",(0,s.jsx)(n.p,{children:"Gold fingers are typically plated with a layer of hard gold, which is an alloy of gold and other metals such as cobalt or nickel. This hard gold plating provides the necessary durability and conductivity. Key characteristics of gold plating include:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Thickness"}),":",(0,s.jsx)(n.br,{}),"\n","The thickness of the gold plating is critical for ensuring durability and wear resistance. Typical thicknesses range from 3 to 50 microinches (\xb5in), with thicker plating used for applications requiring frequent insertion and removal."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Adhesion Layer"}),":",(0,s.jsx)(n.br,{}),"\n","A layer of nickel is often applied beneath the gold plating to improve adhesion and prevent diffusion of the underlying copper into the gold layer."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Surface Finish"}),":",(0,s.jsx)(n.br,{}),"\n","The surface of the gold fingers must be smooth and free of defects to ensure reliable contact and minimize wear."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"manufacturing-process",children:"Manufacturing Process"}),"\n",(0,s.jsx)(n.p,{children:"The manufacturing process for gold fingers involves several key steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Edge Preparation"}),":",(0,s.jsx)(n.br,{}),"\n","The edge of the PCB is prepared by milling or routing to create a smooth and precise edge for the gold fingers."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Plating"}),":",(0,s.jsx)(n.br,{}),"\n","The edge connectors are plated with nickel and then gold using an electroplating process. The plating thickness and quality are carefully controlled to meet the design specifications."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Inspection"}),":",(0,s.jsx)(n.br,{}),"\n","The gold fingers are inspected for thickness, adhesion, and surface quality to ensure they meet the required standards."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"design-considerations",children:"Design Considerations"}),"\n",(0,s.jsx)(n.h3,{id:"geometry-and-layout",children:"Geometry and Layout"}),"\n",(0,s.jsx)(n.p,{children:"The geometry and layout of gold fingers are critical for ensuring reliable connections and mechanical stability. Key considerations include:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Finger Width and Spacing"}),":",(0,s.jsx)(n.br,{}),"\n","The width and spacing of the gold fingers must match the corresponding connector or slot. Typical widths range from 0.5 to 1.0 mm, with spacing of 0.5 to 1.0 mm between fingers."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Length"}),":",(0,s.jsx)(n.br,{}),"\n","The length of the gold fingers must be sufficient to ensure reliable contact when inserted into the connector. Typical lengths range from 5 to 10 mm."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Chamfering"}),":",(0,s.jsx)(n.br,{}),"\n","The edges of the gold fingers are often chamfered to facilitate insertion into the connector and reduce wear."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"electrical-performance",children:"Electrical Performance"}),"\n",(0,s.jsx)(n.p,{children:"The electrical performance of gold fingers is critical for ensuring reliable signal transmission. Key considerations include:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Contact Resistance"}),":",(0,s.jsx)(n.br,{}),"\n","The gold plating must provide low contact resistance to ensure reliable electrical connections. Proper plating thickness and surface finish are essential for minimizing contact resistance."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Signal Integrity"}),":",(0,s.jsx)(n.br,{}),"\n","In high-frequency applications, the design of the gold fingers must minimize signal reflections and losses. Controlled impedance routing and proper grounding are critical for optimizing performance."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"mechanical-durability",children:"Mechanical Durability"}),"\n",(0,s.jsx)(n.p,{children:"The mechanical durability of gold fingers is essential for applications requiring frequent insertion and removal. Key considerations include:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Plating Thickness"}),":",(0,s.jsx)(n.br,{}),"\n","Thicker gold plating provides greater durability and wear resistance, particularly for applications requiring thousands of insertion cycles."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Surface Finish"}),":",(0,s.jsx)(n.br,{}),"\n","A smooth and defect-free surface finish is essential for minimizing wear and ensuring reliable contact over time."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"advanced-applications",children:"Advanced Applications"}),"\n",(0,s.jsx)(n.h3,{id:"high-density-interconnect-hdi-pcbs",children:"High-Density Interconnect (HDI) PCBs"}),"\n",(0,s.jsx)(n.p,{children:"In HDI PCBs, gold fingers are used to provide high-density interconnections between multiple boards or modules. Advanced techniques, such as laser drilling and microvia technology, are employed to achieve the required precision and reliability."}),"\n",(0,s.jsx)(n.h3,{id:"high-frequency-and-rf-design",children:"High-Frequency and RF Design"}),"\n",(0,s.jsx)(n.p,{children:"In high-frequency and RF applications, gold fingers are used to ensure reliable signal transmission with minimal loss and reflection. Controlled impedance routing and careful design of the gold finger geometry are critical for optimizing performance."}),"\n",(0,s.jsx)(n.h3,{id:"industrial-and-automotive-applications",children:"Industrial and Automotive Applications"}),"\n",(0,s.jsx)(n.p,{children:"In industrial and automotive applications, gold fingers are used in harsh environments where durability and reliability are critical. Thicker gold plating and robust design are essential for ensuring long-term performance in these applications."}),"\n",(0,s.jsx)(n.h2,{id:"practical-example",children:"Practical Example"}),"\n",(0,s.jsx)(n.h3,{id:"example-microbit-educational-single-board-computer",children:"Example: Microbit Educational Single Board Computer"}),"\n",(0,s.jsx)(n.p,{children:"The Microbit educational single board computer features gold fingers that enable it to connect to other devices, such as motor controllers and sensors, via a slot. The gold fingers provide a reliable and durable connection, allowing for repeated insertion and removal without significant wear. This design enables the Microbit to be used in a wide range of educational and prototyping applications."}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"Gold fingers are essential components in modern PCB design, providing reliable and durable interconnections for a wide range of applications. By understanding the design considerations and advanced applications of gold fingers, engineers can create robust and high-performance electronic assemblies. Mastery of gold finger technology is critical for meeting the demands of today's electronic applications, from consumer electronics to industrial systems."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var r=i(6540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);