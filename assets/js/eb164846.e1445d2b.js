"use strict";(self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[]).push([[693],{4997:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"pcb_design/pcb-design-process","title":"PCB Design Process","description":"In this lecture, we will walk through the PCB design process from a high-level perspective, focusing on the major steps involved in turning an electronic concept into a functional printed circuit board (PCB). This process involves both technical and aesthetic considerations. While designing a PCB is fundamentally an engineering discipline, it also incorporates aspects of artistry, as each design reflects the personal style and preferences of the designer. Over time, your PCB designs will start to look uniquely yours.","source":"@site/docs/01_pcb_design/5_pcb-design-process.md","sourceDirName":"01_pcb_design","slug":"/pcb_design/pcb-design-process","permalink":"/PCB-Design-with-KiCad/docs/pcb_design/pcb-design-process","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01_pcb_design/5_pcb-design-process.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"pcbDesignSidebar","previous":{"title":"Components and Terminology","permalink":"/PCB-Design-with-KiCad/docs/pcb_design/what-is-a-pcb"},"next":{"title":"Manufacturing Options and Gerber Files","permalink":"/PCB-Design-with-KiCad/docs/pcb_design/manufacturing"}}');var t=s(4848),o=s(8453);const r={sidebar_position:5},l="PCB Design Process",a={},c=[{value:"Key Points to Remember:",id:"key-points-to-remember",level:3},{value:"High-Level PCB Design Workflow",id:"high-level-pcb-design-workflow",level:2},{value:"Step 1: Schematic Design",id:"step-1-schematic-design",level:3},{value:"Step 2: PCB Layout Design",id:"step-2-pcb-layout-design",level:3},{value:"Detailed PCB Design Workflow",id:"detailed-pcb-design-workflow",level:2},{value:"1. <strong>Schematic Capture in Eeschema</strong>",id:"1-schematic-capture-in-eeschema",level:3},{value:"2. <strong>Running Electrical Rules Check (ERC)</strong>",id:"2-running-electrical-rules-check-erc",level:3},{value:"3. <strong>Footprint Assignment</strong>",id:"3-footprint-assignment",level:3},{value:"4. <strong>PCB Layout in PCBnew</strong>",id:"4-pcb-layout-in-pcbnew",level:3},{value:"5. <strong>Design Rule Check (DRC)</strong>",id:"5-design-rule-check-drc",level:3},{value:"6. <strong>Exporting Gerber Files</strong>",id:"6-exporting-gerber-files",level:3},{value:"PCB Design and Aesthetic Considerations",id:"pcb-design-and-aesthetic-considerations",level:2},{value:"1. <strong>Component Placement</strong>",id:"1-component-placement",level:3},{value:"2. <strong>Routing Cleanliness</strong>",id:"2-routing-cleanliness",level:3},{value:"3. <strong>Silkscreen Clarity</strong>",id:"3-silkscreen-clarity",level:3},{value:"Key Terminology Recap",id:"key-terminology-recap",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={br:"br",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"pcb-design-process",children:"PCB Design Process"})}),"\n",(0,t.jsx)(n.p,{children:"In this lecture, we will walk through the PCB design process from a high-level perspective, focusing on the major steps involved in turning an electronic concept into a functional printed circuit board (PCB). This process involves both technical and aesthetic considerations. While designing a PCB is fundamentally an engineering discipline, it also incorporates aspects of artistry, as each design reflects the personal style and preferences of the designer. Over time, your PCB designs will start to look uniquely yours."}),"\n",(0,t.jsx)(n.p,{children:"Designing a PCB is quite different from PCB manufacturing. As a PCB designer, your task is to create detailed plans and specifications that a manufacturer will use to physically produce the PCB. Thus, it\u2019s important to design a board that not only meets the functional requirements of your project but also adheres to the manufacturing capabilities and limitations of your chosen fabrication partner."}),"\n",(0,t.jsx)(n.h3,{id:"key-points-to-remember",children:"Key Points to Remember:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Quality and Manufacturability:"})," Your design should be optimized for functionality, safety, and manufacturability. It's essential to understand the limitations of your manufacturer\u2019s processes to ensure your PCB is buildable."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Personal Choice and Iteration:"})," Designing a PCB involves iteration, decision-making, and creativity. You\u2019ll refine your design as you move through the process, building both your skills and your unique style."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This course will guide you through the ",(0,t.jsx)(n.strong,{children:"KiCad PCB design workflow"}),", a model I've developed from experience and best practices in the field. You can follow this workflow or adapt it to suit your own preferences. The workflow is split into two primary steps: ",(0,t.jsx)(n.strong,{children:"schematic design"})," and ",(0,t.jsx)(n.strong,{children:"layout design"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"high-level-pcb-design-workflow",children:"High-Level PCB Design Workflow"}),"\n",(0,t.jsx)(n.h3,{id:"step-1-schematic-design",children:"Step 1: Schematic Design"}),"\n",(0,t.jsx)(n.p,{children:"The schematic design phase is where you capture the functional representation of your circuit. This step involves creating an electronic schematic diagram that represents the connections and components of your circuit."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Goal of Schematic Design:"}),(0,t.jsx)(n.br,{}),"\n","To capture the detailed information about the circuit you\u2019re designing, which will later be used to create the physical PCB layout."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Tools Used:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Eeschema (KiCad's Schematic Editor):"})," The schematic editor in KiCad where you\u2019ll build your circuit diagram using symbols that represent various components."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-2-pcb-layout-design",children:"Step 2: PCB Layout Design"}),"\n",(0,t.jsxs)(n.p,{children:["Once you\u2019ve completed the schematic, the next step is to transfer that information into the ",(0,t.jsx)(n.strong,{children:"PCB layout editor"}),", where you will create the physical design of the board."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Goal of PCB Layout Design:"}),(0,t.jsx)(n.br,{}),"\n","To create a physical layout of the PCB, including the placement of components, routing of traces, and defining the board's dimensions."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Tools Used:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"PCBnew (KiCad's Layout Editor):"})," This is where you define the physical layout, place the components, and draw the traces that connect them."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"detailed-pcb-design-workflow",children:"Detailed PCB Design Workflow"}),"\n",(0,t.jsx)(n.p,{children:"Let\u2019s break down the key steps in the PCB design process:"}),"\n",(0,t.jsxs)(n.h3,{id:"1-schematic-capture-in-eeschema",children:["1. ",(0,t.jsx)(n.strong,{children:"Schematic Capture in Eeschema"})]}),"\n",(0,t.jsxs)(n.p,{children:["This is the first and most critical step in the design process. In ",(0,t.jsx)(n.strong,{children:"Eeschema"}),", you create the schematic by selecting symbols from KiCad\u2019s extensive component library. Each symbol represents an electronic component, such as resistors, capacitors, ICs, etc."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Add Components:"})," Place symbols for the components of your circuit onto the schematic sheet."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Connect Components:"})," Draw electrical connections (wires) between components to represent the circuit design."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Add Custom Symbols:"})," If the required component symbol isn\u2019t in the library, you can create it manually using the ",(0,t.jsx)(n.strong,{children:"Symbol Editor"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"2-running-electrical-rules-check-erc",children:["2. ",(0,t.jsx)(n.strong,{children:"Running Electrical Rules Check (ERC)"})]}),"\n",(0,t.jsxs)(n.p,{children:["Before moving to layout design, run the ",(0,t.jsx)(n.strong,{children:"Electrical Rules Check (ERC)"})," in Eeschema. This tool detects any design errors, such as unconnected pins or inconsistent signals, that could cause problems later."]}),"\n",(0,t.jsxs)(n.h3,{id:"3-footprint-assignment",children:["3. ",(0,t.jsx)(n.strong,{children:"Footprint Assignment"})]}),"\n",(0,t.jsxs)(n.p,{children:["Once your schematic is complete and has passed the ERC, you need to associate each schematic symbol with a ",(0,t.jsx)(n.strong,{children:"footprint"}),". A footprint is the physical representation of a component on the PCB, containing information about pad locations and dimensions."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Footprint Selection:"})," Many components already have footprints associated with them in KiCad. However, some components may require you to manually assign or create a footprint, especially if they are custom or non-standard parts."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Custom Footprints:"})," If a footprint does not exist in the library, you can create one using the ",(0,t.jsx)(n.strong,{children:"Footprint Editor"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"4-pcb-layout-in-pcbnew",children:["4. ",(0,t.jsx)(n.strong,{children:"PCB Layout in PCBnew"})]}),"\n",(0,t.jsxs)(n.p,{children:["After assigning footprints, you transfer the schematic to the ",(0,t.jsx)(n.strong,{children:"PCB layout editor (PCBnew)"})," to begin the layout design."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Component Placement:"})," Position the footprints on the board. Consider factors like signal integrity, manufacturability, and ease of assembly when placing components."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Outline and Mechanical Elements:"})," Define the board\u2019s outline, including its shape, size, and any mounting holes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Trace Routing:"})," Connect the pins of your components using copper traces. You\u2019ll use ",(0,t.jsx)(n.strong,{children:"interactive routing tools"})," to place traces while adhering to design rules."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Copper Zones:"})," Add copper fills for power planes, such as ground or power layers, which help reduce resistance and provide shielding."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"5-design-rule-check-drc",children:["5. ",(0,t.jsx)(n.strong,{children:"Design Rule Check (DRC)"})]}),"\n",(0,t.jsxs)(n.p,{children:["Once you\u2019ve completed the layout, it\u2019s important to run the ",(0,t.jsx)(n.strong,{children:"Design Rule Check (DRC)"})," in PCBnew. This tool checks for violations, such as traces being too close to each other, overlapping components, or unconnected nets."]}),"\n",(0,t.jsxs)(n.h3,{id:"6-exporting-gerber-files",children:["6. ",(0,t.jsx)(n.strong,{children:"Exporting Gerber Files"})]}),"\n",(0,t.jsxs)(n.p,{children:["After your PCB passes the DRC, the final step is to export the design for manufacturing. The ",(0,t.jsx)(n.strong,{children:"Gerber files"})," generated by KiCad contain the information needed to manufacture the PCB, including the layout for each layer, drilling information, and solder mask definitions."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gerber Files:"})," Each layer of your PCB (e.g., top copper, bottom copper, silkscreen, solder mask) is exported as a separate Gerber file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Drill Files:"})," A file that defines the locations and sizes of holes (vias, component holes) that need to be drilled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bill of Materials (BOM):"})," A BOM file lists all components used in the design, including their part numbers, values, and footprints. This file is essential for ordering components from suppliers."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pcb-design-and-aesthetic-considerations",children:"PCB Design and Aesthetic Considerations"}),"\n",(0,t.jsx)(n.p,{children:"Designing a PCB isn\u2019t just about making the board functional; there is an artistic element to it as well. Over time, as you develop your skills, you\u2019ll likely notice your boards taking on a personal aesthetic. Some designers focus on neat, symmetrical layouts, while others might prioritize compactness and minimalism. Here are some considerations that will help improve both the functionality and the visual appeal of your boards:"}),"\n",(0,t.jsxs)(n.h3,{id:"1-component-placement",children:["1. ",(0,t.jsx)(n.strong,{children:"Component Placement"})]}),"\n",(0,t.jsx)(n.p,{children:"Strategic component placement is crucial for both functionality and aesthetics. Group related components together to create clean, intuitive layouts. This also improves manufacturability and makes troubleshooting easier."}),"\n",(0,t.jsxs)(n.h3,{id:"2-routing-cleanliness",children:["2. ",(0,t.jsx)(n.strong,{children:"Routing Cleanliness"})]}),"\n",(0,t.jsx)(n.p,{children:"Aim for neat, orderly trace routing. Avoid sharp angles or long, looping traces. When possible, route traces orthogonally (90-degree angles) or use smooth curves for high-speed signals. This not only improves signal integrity but also makes the board look professional."}),"\n",(0,t.jsxs)(n.h3,{id:"3-silkscreen-clarity",children:["3. ",(0,t.jsx)(n.strong,{children:"Silkscreen Clarity"})]}),"\n",(0,t.jsx)(n.p,{children:"Use silkscreen to clearly label components, pins, and any critical information that the end user might need. However, avoid over-cluttering the board. Use concise labels and make sure they are placed where they will be visible once the components are soldered."}),"\n",(0,t.jsx)(n.h2,{id:"key-terminology-recap",children:"Key Terminology Recap"}),"\n",(0,t.jsx)(n.p,{children:"Before moving on to the next lecture, here\u2019s a recap of some important terms:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Symbol:"})," A symbolic representation of an electronic component in the schematic. It shows the component\u2019s function but not its physical layout."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Footprint:"})," The physical representation of a component on the PCB layout. It defines where the pads, holes, and pins are located on the board."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Trace:"})," The copper line on a PCB that carries electrical signals between components."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Via:"})," A small hole that connects different layers of a multi-layer PCB."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Silkscreen:"})," A printed layer on the PCB that provides information, such as component labels and logos, for assembly and usage."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gerber File:"})," The industry-standard file format used to send PCB designs to manufacturers for fabrication."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"The PCB design process is both a technical and creative journey. You\u2019ll follow a procedural workflow, but as you gain experience, you\u2019ll develop your unique style. The two main stages\u2014schematic design and PCB layout\u2014are supported by powerful tools in KiCad, and this course will guide you through using these tools to create your own boards. Once your layout is complete and verified, you\u2019ll be ready to send your design to a manufacturer for fabrication."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);