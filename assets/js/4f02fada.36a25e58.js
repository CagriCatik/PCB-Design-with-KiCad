"use strict";(self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[]).push([[8869],{2264:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"schematic-design/workflows-intro","title":"Quick Introduction to the Design Workflows","description":"The design workflows in PCB design are integral to the successful development of a functional circuit board. This section provides a concise overview of the two principal workflows involved in the process: the Schematic Design Workflow and the PCB Layout Workflow. These workflows represent the logical progression from conceptual design to a manufacturable printed circuit board.","source":"@site/docs/03_schematic-design/2_workflows-intro.md","sourceDirName":"03_schematic-design","slug":"/schematic-design/workflows-intro","permalink":"/PCB-Design-with-KiCad/docs/schematic-design/workflows-intro","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/PCB-Design-with-KiCad/docs/03_schematic-design/2_workflows-intro.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"schematicSidebar","previous":{"title":"Introduction to Schematic Design and Objectives","permalink":"/PCB-Design-with-KiCad/docs/schematic-design/introduction"},"next":{"title":"The finished KiCad project and directory","permalink":"/PCB-Design-with-KiCad/docs/schematic-design/finished-project"}}');var t=n(4848),o=n(8453);const r={},a="Quick Introduction to the Design Workflows",c={},l=[{value:"<strong>Overview of the Workflows</strong>",id:"overview-of-the-workflows",level:2},{value:"<strong>Schematic Design Workflow</strong>",id:"schematic-design-workflow",level:3},{value:"<strong>PCB Layout Workflow</strong>",id:"pcb-layout-workflow",level:3},{value:"<strong>Iterative Nature of Workflows</strong>",id:"iterative-nature-of-workflows",level:3},{value:"<strong>Purpose of this Overview</strong>",id:"purpose-of-this-overview",level:3},{value:"<strong>Workflow Simplification for Learning</strong>",id:"workflow-simplification-for-learning",level:2}];function h(e){const i={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"quick-introduction-to-the-design-workflows",children:"Quick Introduction to the Design Workflows"})}),"\n",(0,t.jsxs)(i.p,{children:["The design workflows in PCB design are integral to the successful development of a functional circuit board. This section provides a concise overview of the two principal workflows involved in the process: the ",(0,t.jsx)(i.strong,{children:"Schematic Design Workflow"})," and the ",(0,t.jsx)(i.strong,{children:"PCB Layout Workflow"}),". These workflows represent the logical progression from conceptual design to a manufacturable printed circuit board."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"alt text",src:n(666).A+"",width:"1244",height:"461"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"overview-of-the-workflows",children:(0,t.jsx)(i.strong,{children:"Overview of the Workflows"})}),"\n",(0,t.jsx)(i.h3,{id:"schematic-design-workflow",children:(0,t.jsx)(i.strong,{children:"Schematic Design Workflow"})}),"\n",(0,t.jsx)(i.p,{children:"The schematic design workflow involves the logical construction of a circuit diagram using KiCad\u2019s Eeschema tool. This phase captures the functional intent of the design and prepares it for physical realization. The workflow encompasses the following seven steps:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Project Initialization"}),": Creation and configuration of a new KiCad project."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Component Selection"}),": Identifying and importing symbols from the built-in or custom libraries."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Component Placement"}),": Arranging symbols on the canvas for logical clarity and efficient connectivity."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Wiring and Connectivity"}),": Establishing signal and power connections using wires, power flags, and labels."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Net Naming"}),": Assigning meaningful names to nets for clarity and facilitating error-free layout design."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Design Validation"}),": Running Electrical Rule Check (ERC) to ensure the schematic is error-free and adheres to design rules."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Export and Preparation for Layout"}),": Generating the necessary files, such as the netlist, to transition to the layout phase."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"alt text",src:n(4386).A+"",width:"1719",height:"625"})}),"\n",(0,t.jsx)(i.h3,{id:"pcb-layout-workflow",children:(0,t.jsx)(i.strong,{children:"PCB Layout Workflow"})}),"\n",(0,t.jsx)(i.p,{children:"The PCB layout workflow follows the schematic design phase, transforming the logical representation into a physical arrangement of components and traces. This phase is conducted in KiCad\u2019s Pcbnew tool and also comprises seven steps:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Import Schematic Data"}),": Loading the netlist or directly synchronizing the schematic to the PCB layout."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Footprint Assignment"}),": Associating each schematic symbol with an appropriate physical footprint."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Component Placement"}),": Arranging footprints on the PCB canvas to optimize performance and manufacturability."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Routing"}),": Creating signal traces and power planes that connect components as defined in the schematic."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Design Rule Compliance"}),": Ensuring the layout adheres to predefined constraints, such as trace width and spacing."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Design Verification"}),": Performing Design Rule Check (DRC) and verifying connectivity."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Manufacturing Preparation"}),": Generating Gerber files and other outputs necessary for production."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"alt text",src:n(690).A+"",width:"1567",height:"644"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"iterative-nature-of-workflows",children:(0,t.jsx)(i.strong,{children:"Iterative Nature of Workflows"})}),"\n",(0,t.jsx)(i.p,{children:"While the workflows are presented as linear sequences, it is critical to recognize their iterative nature. For instance:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["During ",(0,t.jsx)(i.strong,{children:"step 6"})," of the schematic design workflow (ERC), errors such as incorrect or missing connections may necessitate revisiting earlier steps like wiring (step 4)."]}),"\n",(0,t.jsxs)(i.li,{children:["In the PCB layout workflow, a Design Rule Check (DRC) performed in ",(0,t.jsx)(i.strong,{children:"step 6"})," may reveal issues requiring modifications to the schematic, such as reassigning net names or reconfiguring the circuit logic."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This iterative process is a natural part of PCB design, ensuring robust and error-free outcomes."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"purpose-of-this-overview",children:(0,t.jsx)(i.strong,{children:"Purpose of this Overview"})}),"\n",(0,t.jsx)(i.p,{children:"The intent of this overview is to familiarize you with the two core workflows, enabling you to navigate through them effectively as you progress in this course. While detailed explanations of individual steps will follow in subsequent lectures, this summary serves to provide a structural framework, ensuring that key concepts and terminologies are not unfamiliar when encountered later."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"workflow-simplification-for-learning",children:(0,t.jsx)(i.strong,{children:"Workflow Simplification for Learning"})}),"\n",(0,t.jsx)(i.p,{children:"For beginners, it is beneficial to initially approach these workflows as linear processes. This simplification helps to streamline learning by reducing complexity and focusing on the completion of tasks in a structured manner. Advanced users can appreciate the interconnectedness and flexibility of these workflows, leveraging iterative refinement for more sophisticated designs."}),"\n",(0,t.jsx)(i.p,{children:"By understanding the fundamental structure and flow of these workflows, you are now prepared to delve into each step in greater depth as outlined in the upcoming sections of the course. The following lectures will provide detailed, step-by-step instructions to ensure a thorough grasp of the schematic design and PCB layout processes."})]})}function d(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},666:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/pcb_design_workflow-d873c0d2551ae9c10c4c26a1e5643409.png"},690:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/pcb_layout_workflow-a1559d6acabd62bd946de53b73d7b584.png"},4386:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/schematic_design_workflow-c71cab7a6daad759731b16aba8ad2231.png"},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var s=n(6540);const t={},o=s.createContext(t);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);