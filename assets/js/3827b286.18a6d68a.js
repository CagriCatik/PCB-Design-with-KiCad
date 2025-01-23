"use strict";(self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[]).push([[6525],{153:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"pcb_design/what-is-a-pcb","title":"Components and Terminology","description":"In this part of the course, I want to share how my curiosity for electronics led to a deep fascination with the components and technology behind printed circuit boards (PCBs). In this lecture, we\'ll take a closer look at a few examples of PCBs to understand their features and the terminology used to describe them. This foundational understanding is crucial as we move forward in the course to explore the more technical aspects of PCB design and manufacturing.","source":"@site/docs/01_pcb_design/1_what-is-a-pcb.md","sourceDirName":"01_pcb_design","slug":"/pcb_design/what-is-a-pcb","permalink":"/PCB-Design-with-KiCad/docs/pcb_design/what-is-a-pcb","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01_pcb_design/1_what-is-a-pcb.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"pcbDesignSidebar","next":{"title":"PCB Design Process","permalink":"/PCB-Design-with-KiCad/docs/pcb_design/pcb-design-process"}}');var o=s(4848),t=s(8453);const a={},i="Components and Terminology",l={},c=[{value:"PCB Features and Key Terminology",id:"pcb-features-and-key-terminology",level:2},{value:"1. <strong>Through-Hole Components</strong>",id:"1-through-hole-components",level:3},{value:"2. <strong>Surface-Mount Devices (SMDs)</strong>",id:"2-surface-mount-devices-smds",level:3},{value:"3. <strong>Traces and Tracks</strong>",id:"3-traces-and-tracks",level:3},{value:"4. <strong>Solder Mask</strong>",id:"4-solder-mask",level:3},{value:"5. <strong>Silkscreen</strong>",id:"5-silkscreen",level:3},{value:"6. <strong>Vias</strong>",id:"6-vias",level:3},{value:"7. <strong>Copper Layers</strong>",id:"7-copper-layers",level:3},{value:"8. <strong>Thermal Reliefs</strong>",id:"8-thermal-reliefs",level:3},{value:"Example PCB Breakdown",id:"example-pcb-breakdown",level:2},{value:"Example 1: Breadboard Power Supply PCB",id:"example-1-breadboard-power-supply-pcb",level:3},{value:"Example 2: Raspberry Pi Zero PCB",id:"example-2-raspberry-pi-zero-pcb",level:3},{value:"Example 3: Multilayer Board with Copper Fill",id:"example-3-multilayer-board-with-copper-fill",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"components-and-terminology",children:"Components and Terminology"})}),"\n",(0,o.jsx)(n.p,{children:"In this part of the course, I want to share how my curiosity for electronics led to a deep fascination with the components and technology behind printed circuit boards (PCBs). In this lecture, we'll take a closer look at a few examples of PCBs to understand their features and the terminology used to describe them. This foundational understanding is crucial as we move forward in the course to explore the more technical aspects of PCB design and manufacturing."}),"\n",(0,o.jsx)(n.h2,{id:"pcb-features-and-key-terminology",children:"PCB Features and Key Terminology"}),"\n",(0,o.jsxs)(n.h3,{id:"1-through-hole-components",children:["1. ",(0,o.jsx)(n.strong,{children:"Through-Hole Components"})]}),"\n",(0,o.jsxs)(n.p,{children:["When you look at a PCB, one of the first things you'll notice is the presence of ",(0,o.jsx)(n.strong,{children:"holes"}),". These holes are designed for ",(0,o.jsx)(n.strong,{children:"through-hole components"}),", which are components with long leads or pins that pass through the board. These components are inserted into the holes and then soldered to pads on the opposite side of the board, securing them in place and ensuring an electrical connection."]}),"\n",(0,o.jsx)(n.p,{children:"Examples of through-hole components include resistors, capacitors, and connectors. These components are larger than surface-mount components and are often used in projects that require durability or easy replacement of parts."}),"\n",(0,o.jsxs)(n.h3,{id:"2-surface-mount-devices-smds",children:["2. ",(0,o.jsx)(n.strong,{children:"Surface-Mount Devices (SMDs)"})]}),"\n",(0,o.jsxs)(n.p,{children:["In contrast to through-hole components, ",(0,o.jsx)(n.strong,{children:"Surface-Mount Devices (SMDs)"})," are placed directly onto the surface of the PCB and do not require holes. They are mounted onto ",(0,o.jsx)(n.strong,{children:"pads"}),", which are flat areas of copper where the SMDs are soldered in place. Because SMDs are typically much smaller than through-hole components, they are commonly used in modern electronics, where space is at a premium."]}),"\n",(0,o.jsx)(n.p,{children:"Some SMDs are so tiny that placing them manually can be very challenging. Automated machines (robots) are usually employed to handle the precision placement and soldering of these components. However, there are larger SMD components that can be manipulated manually using tweezers, which is something you'll learn to do in the later projects of this course."}),"\n",(0,o.jsxs)(n.h3,{id:"3-traces-and-tracks",children:["3. ",(0,o.jsx)(n.strong,{children:"Traces and Tracks"})]}),"\n",(0,o.jsxs)(n.p,{children:["The thin ",(0,o.jsx)(n.strong,{children:"lines"})," you see running across the PCB are called ",(0,o.jsx)(n.strong,{children:"traces"})," or ",(0,o.jsx)(n.strong,{children:"tracks"}),". These lines are made of copper and serve as the electrical pathways that connect various components. They play a critical role in enabling communication and power distribution between different parts of the circuit."]}),"\n",(0,o.jsxs)(n.p,{children:["Traces can vary in width, depending on the current they are designed to carry. In many cases, the traces are covered by a ",(0,o.jsx)(n.strong,{children:"solder mask"}),", which protects them from oxidation and environmental damage."]}),"\n",(0,o.jsxs)(n.h3,{id:"4-solder-mask",children:["4. ",(0,o.jsx)(n.strong,{children:"Solder Mask"})]}),"\n",(0,o.jsxs)(n.p,{children:["The colored coating you see on most PCBs (green, purple, red, etc.) is called the ",(0,o.jsx)(n.strong,{children:"solder mask"}),". This layer not only gives the PCB its color but also serves an important protective function. The solder mask prevents copper traces from oxidizing, which can degrade the performance of the circuit over time. It also helps to prevent accidental solder bridges between adjacent pads during the soldering process."]}),"\n",(0,o.jsx)(n.p,{children:"The solder mask exposes only the areas where components are soldered, leaving the rest of the board covered for protection."}),"\n",(0,o.jsxs)(n.h3,{id:"5-silkscreen",children:["5. ",(0,o.jsx)(n.strong,{children:"Silkscreen"})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"silkscreen"})," is the white (or sometimes other colors) layer printed on top of the solder mask. It contains important information about the components and the board itself. The silkscreen may include component values, designators (e.g., R1 for resistors, C1 for capacitors), and helpful labels for the user."]}),"\n",(0,o.jsx)(n.p,{children:"For example, in some of the projects in this course, you'll see how the silkscreen provides details about the function of specific pins or headers on a board. This is especially useful during both assembly and usage of the PCB, helping users understand the roles of different components and connections."}),"\n",(0,o.jsxs)(n.h3,{id:"6-vias",children:["6. ",(0,o.jsx)(n.strong,{children:"Vias"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Vias"})," are small holes that allow traces to connect between different layers of a multi-layer PCB. Vias are essential for complex designs where electrical connections must be made across different layers. A via is typically filled with metal (usually copper) to maintain electrical conductivity."]}),"\n",(0,o.jsx)(n.p,{children:"Vias can be placed on two-layer boards to connect the front and back, or on multi-layer boards to link various internal layers."}),"\n",(0,o.jsxs)(n.h3,{id:"7-copper-layers",children:["7. ",(0,o.jsx)(n.strong,{children:"Copper Layers"})]}),"\n",(0,o.jsx)(n.p,{children:"Most PCBs consist of multiple layers of copper that are used for routing electrical signals. In a two-layer board, you have one copper layer on the top and one on the bottom. In multi-layer PCBs, you may have additional copper layers sandwiched between the top and bottom."}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.strong,{children:"copper fill"})," (or copper pour) refers to large areas of the PCB that are filled with copper instead of being routed with individual traces. Copper fills are typically used for power or ground planes to reduce resistance and improve electrical performance."]}),"\n",(0,o.jsxs)(n.h3,{id:"8-thermal-reliefs",children:["8. ",(0,o.jsx)(n.strong,{children:"Thermal Reliefs"})]}),"\n",(0,o.jsxs)(n.p,{children:["When connecting a pad to a large copper area (like a ground plane), it's common to use ",(0,o.jsx)(n.strong,{children:"thermal reliefs"}),". These are small connections that isolate the pad from the copper area to prevent heat dissipation issues during soldering. Without thermal reliefs, soldering the component could be more difficult, as the heat might be spread too quickly into the copper plane."]}),"\n",(0,o.jsx)(n.h2,{id:"example-pcb-breakdown",children:"Example PCB Breakdown"}),"\n",(0,o.jsx)(n.p,{children:"Now that we've covered the basic terminology, let's take a closer look at a few example PCBs and highlight the features we\u2019ve discussed."}),"\n",(0,o.jsx)(n.h3,{id:"example-1-breadboard-power-supply-pcb",children:"Example 1: Breadboard Power Supply PCB"}),"\n",(0,o.jsxs)(n.p,{children:["In this project, you\u2019ll create a ",(0,o.jsx)(n.strong,{children:"breadboard power supply"}),", which provides a regulated 5V output for Arduino or other electronic projects. The PCB is simple, but it contains the essential features of through-hole components, copper traces, and a silkscreen that labels the different pins and connections."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Through-Hole Components:"})," The larger holes are for components like capacitors and voltage regulators that will be inserted through the board."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Traces:"})," Copper traces route power and signals between components."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Silkscreen:"})," Labels on the board help identify the input and output pins, as well as the placement of various components."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-2-raspberry-pi-zero-pcb",children:"Example 2: Raspberry Pi Zero PCB"}),"\n",(0,o.jsxs)(n.p,{children:["The Raspberry Pi Zero is a modern example of a PCB that predominantly uses ",(0,o.jsx)(n.strong,{children:"SMD components"}),". SMD resistors and capacitors are much smaller than their through-hole counterparts, allowing for a compact design."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"SMD Components:"})," Tiny resistors and capacitors are placed on the surface of the board and soldered to the pads. In large-scale manufacturing, robots place these components precisely."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Traces and Vias:"})," The board uses multiple layers with vias to route signals between the top and bottom layers."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Solder Mask:"})," The purple solder mask protects the copper traces from environmental damage."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-3-multilayer-board-with-copper-fill",children:"Example 3: Multilayer Board with Copper Fill"}),"\n",(0,o.jsxs)(n.p,{children:["In more advanced designs, such as a 4-layer MCU data logger, you'll work with ",(0,o.jsx)(n.strong,{children:"multi-layer PCBs"})," that contain additional copper layers for power and ground planes. These copper fills provide several benefits:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"EMI Protection:"})," The copper layers help shield the circuit from electromagnetic interference."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Thermal Management:"})," Copper fills can help dissipate heat generated by high-power components."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Simplified Routing:"})," The internal copper layers allow for easier routing of signals without crowding the top and bottom layers."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(n.p,{children:["Understanding the various components and features of a PCB is fundamental to mastering the design process. We've covered key terminology, including through-hole and surface-mount components, traces, vias, solder masks, and silkscreening. In the next section, we'll explore the ",(0,o.jsx)(n.strong,{children:"PCB design process"})," in more detail, where you will apply this knowledge to create your own PCBs using KiCad."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var r=s(6540);const o={},t=r.createContext(o);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);