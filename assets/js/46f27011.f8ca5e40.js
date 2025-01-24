"use strict";(self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[]).push([[358],{4512:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"schematic-design/workflows-intro","title":"Introduction to Design Workflows","description":"PCB design workflows systematize the transition from conceptual circuit diagrams to manufacturable boards, ensuring logical integrity, electrical compliance, and physical feasibility. Two interdependent workflows govern this process: Schematic Design (logical representation) and PCB Layout (physical realization). KiCad\u2019s Eeschema and Pcbnew tools formalize these stages, enabling designers to iteratively refine designs while adhering to industry standards.","source":"@site/docs/03_schematic-design/02_workflows-intro.md","sourceDirName":"03_schematic-design","slug":"/schematic-design/workflows-intro","permalink":"/PCB-Design-with-KiCad/docs/schematic-design/workflows-intro","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/PCB-Design-with-KiCad/tree/edit/main/webpage/docs/03_schematic-design/02_workflows-intro.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"schematicSidebar","previous":{"title":"Introduction to Schematic Design","permalink":"/PCB-Design-with-KiCad/docs/schematic-design/introduction"},"next":{"title":"The finished KiCad project and directory","permalink":"/PCB-Design-with-KiCad/docs/schematic-design/finished-project"}}');var r=i(4848),t=i(8453);const l={},o="Introduction to Design Workflows",c={},a=[{value:"Schematic Design Workflow",id:"schematic-design-workflow",level:2},{value:"Purpose and Scope",id:"purpose-and-scope",level:3},{value:"Key Steps",id:"key-steps",level:3},{value:"PCB Layout Workflow",id:"pcb-layout-workflow",level:2},{value:"Purpose and Scope",id:"purpose-and-scope-1",level:3},{value:"Key Steps",id:"key-steps-1",level:3},{value:"Iterative Workflow Dynamics",id:"iterative-workflow-dynamics",level:2},{value:"Workflow Simplification Strategy",id:"workflow-simplification-strategy",level:2},{value:"For Beginners",id:"for-beginners",level:3},{value:"For Advanced Users",id:"for-advanced-users",level:3},{value:"Expected Competencies",id:"expected-competencies",level:2},{value:"Transition to Advanced Design",id:"transition-to-advanced-design",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"introduction-to-design-workflows",children:"Introduction to Design Workflows"})}),"\n",(0,r.jsxs)(n.p,{children:["PCB design workflows systematize the transition from conceptual circuit diagrams to manufacturable boards, ensuring logical integrity, electrical compliance, and physical feasibility. Two interdependent workflows govern this process: ",(0,r.jsx)(n.strong,{children:"Schematic Design"})," (logical representation) and ",(0,r.jsx)(n.strong,{children:"PCB Layout"})," (physical realization). KiCad\u2019s Eeschema and Pcbnew tools formalize these stages, enabling designers to iteratively refine designs while adhering to industry standards."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"alt text",src:i(666).A+"",width:"1244",height:"461"}),"\n",(0,r.jsx)(n.img,{alt:"alt text",src:i(4386).A+"",width:"1719",height:"625"}),"\n",(0,r.jsx)(n.img,{alt:"alt text",src:i(690).A+"",width:"1567",height:"644"})]}),"\n",(0,r.jsx)(n.h2,{id:"schematic-design-workflow",children:"Schematic Design Workflow"}),"\n",(0,r.jsx)(n.h3,{id:"purpose-and-scope",children:"Purpose and Scope"}),"\n",(0,r.jsx)(n.p,{children:"The schematic workflow defines circuit functionality through standardized symbols and interconnections, serving as the authoritative reference for layout and verification."}),"\n",(0,r.jsx)(n.h3,{id:"key-steps",children:"Key Steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Project Initialization"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a KiCad project (",(0,r.jsx)(n.em,{children:".kicad_pro"}),") with dedicated directories for schematics, libraries, and outputs."]}),"\n",(0,r.jsxs)(n.li,{children:["Configure global settings (",(0,r.jsx)(n.em,{children:"Preferences > Symbol Libraries"}),") to ensure access to required component repositories."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Component Selection"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Source symbols from KiCad\u2019s built-in libraries (e.g., ",(0,r.jsx)(n.code,{children:"Device"}),", ",(0,r.jsx)(n.code,{children:"Power"}),") or custom libraries."]}),"\n",(0,r.jsxs)(n.li,{children:["Critical components:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Passive/Active Devices:"})," Resistors, capacitors, ICs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Power Sources:"})," Batteries, voltage regulators."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Connectors/Interfaces:"})," Headers, switches."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Component Placement"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Arrange symbols to reflect signal flow (e.g., power input \u2192 conditioning \u2192 load \u2192 ground)."}),"\n",(0,r.jsxs)(n.li,{children:["Align components on a 50 mil grid (",(0,r.jsx)(n.em,{children:"View > Grid Settings"}),") for consistency."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Wiring and Connectivity"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Establish electrical connections using wires (",(0,r.jsx)(n.em,{children:"Place Wire"}),", ",(0,r.jsx)(n.code,{children:"W"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Define power nets (e.g., ",(0,r.jsx)(n.code,{children:"+3V3"}),", ",(0,r.jsx)(n.code,{children:"GND"}),") with global labels (",(0,r.jsx)(n.em,{children:"Place Global Label"}),", ",(0,r.jsx)(n.code,{children:"L"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Use power flags (",(0,r.jsx)(n.em,{children:"Place Power Flag"}),") to suppress ERC warnings for unconnected supplies."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Net Naming"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Assign descriptive net names (e.g., ",(0,r.jsx)(n.code,{children:"LED_ANODE"}),", ",(0,r.jsx)(n.code,{children:"SW_SIGNAL"}),") to simplify layout routing and debugging."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Design Validation (ERC)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Execute Electrical Rule Check (",(0,r.jsx)(n.em,{children:"Inspect > ERC"}),") to detect:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Unconnected pins or conflicting outputs."}),"\n",(0,r.jsx)(n.li,{children:"Missing power sources or incorrect net assignments."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Resolve errors by revising connectivity or adding suppression directives."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Export and Preparation for Layout"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Generate netlist (",(0,r.jsx)(n.em,{children:"Tools > Generate Netlist"}),") to map logical connections to physical footprints."]}),"\n",(0,r.jsxs)(n.li,{children:["Annotate components (",(0,r.jsx)(n.em,{children:"Tools > Annotate"}),") with unique reference designators (R1, C2)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"pcb-layout-workflow",children:"PCB Layout Workflow"}),"\n",(0,r.jsx)(n.h3,{id:"purpose-and-scope-1",children:"Purpose and Scope"}),"\n",(0,r.jsx)(n.p,{children:"The layout workflow translates schematic logic into a physical board, balancing electrical performance, thermal management, and manufacturability."}),"\n",(0,r.jsx)(n.h3,{id:"key-steps-1",children:"Key Steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Import Schematic Data"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Load netlist (",(0,r.jsx)(n.em,{children:"File > Import Netlist"}),") or synchronize via KiCad\u2019s Schematic \u2194 Layout synchronization."]}),"\n",(0,r.jsxs)(n.li,{children:["Validate footprint associations (",(0,r.jsx)(n.em,{children:"Tools > Update PCB from Schematic"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Footprint Assignment"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Link schematic symbols to physical footprints (e.g., ",(0,r.jsx)(n.code,{children:"Resistor_SMD:R_0805"}),", ",(0,r.jsx)(n.code,{children:"LED:LED_THT"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Verify footprint dimensions, pad sizes, and 3D models (",(0,r.jsx)(n.em,{children:"View > 3D Viewer"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Component Placement"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prioritize critical components (e.g., connectors, ICs) based on signal integrity or mechanical constraints."}),"\n",(0,r.jsx)(n.li,{children:"Group related components (e.g., power supply section, analog inputs) to minimize trace lengths."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Routing"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Route high-priority signals (e.g., high-speed traces, power paths) first using manual or autorouter tools."}),"\n",(0,r.jsxs)(n.li,{children:["Define copper pours (",(0,r.jsx)(n.em,{children:"Add Filled Zone"}),") for power/ground planes to reduce noise and impedance."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Design Rule Compliance"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Configure design rules (",(0,r.jsx)(n.em,{children:"File > Board Setup > Design Rules"}),") for:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Trace width (e.g., 0.3 mm for signals, 1.0 mm for power)."}),"\n",(0,r.jsx)(n.li,{children:"Clearance (e.g., 0.2 mm between traces, 0.5 mm from board edge)."}),"\n",(0,r.jsx)(n.li,{children:"Via styles (through-hole vs. microvia)."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Design Verification (DRC)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Run Design Rule Check (",(0,r.jsx)(n.em,{children:"Inspect > DRC"}),") to identify:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Short circuits, insufficient clearances, or unconnected nets."}),"\n",(0,r.jsx)(n.li,{children:"Footprint overlaps or misplaced vias."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Iterate placement/routing until all violations are resolved."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Manufacturing Preparation"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Generate Gerber files (",(0,r.jsx)(n.em,{children:"File > Fabrication Outputs > Gerber"}),") for each layer (copper, solder mask, silkscreen)."]}),"\n",(0,r.jsxs)(n.li,{children:["Export drill files (",(0,r.jsx)(n.em,{children:"File > Fabrication Outputs > Drill Files"}),") in Excellon format."]}),"\n",(0,r.jsx)(n.li,{children:"Validate outputs using Gerber viewers (e.g., KiCad\u2019s GerbView) or manufacturer design rule checks."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"iterative-workflow-dynamics",children:"Iterative Workflow Dynamics"}),"\n",(0,r.jsx)(n.p,{children:"Design workflows are inherently cyclical, requiring revisions to earlier stages based on validation outcomes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Schematic Revisions:"})," ERC errors (e.g., unpowered nets) may necessitate revisiting component placement or wiring."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Layout Revisions:"})," DRC failures (e.g., trace spacing violations) may require footprint rearrangement or schematic net adjustments."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cross-Workflow Synchronization:"})," Changes in schematic symbols (e.g., pin swaps) propagate to layout via netlist re-import."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"workflow-simplification-strategy",children:"Workflow Simplification Strategy"}),"\n",(0,r.jsx)(n.h3,{id:"for-beginners",children:"For Beginners"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Linear Progression:"})," Execute workflows sequentially (schematic \u2192 layout) to build foundational skills."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Guided Validation:"})," Rely on ERC/DRC tools to flag errors without premature optimization."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"for-advanced-users",children:"For Advanced Users"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Concurrent Refinement:"})," Modify schematics and layouts in tandem to address signal integrity or EMI constraints."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Design Reuse:"})," Leverage hierarchical sheets and custom design rules for multi-board or high-density projects."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"expected-competencies",children:"Expected Competencies"}),"\n",(0,r.jsx)(n.p,{children:"By mastering these workflows, designers will:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Navigate KiCad Tools Efficiently:"})," Proficiently utilize Eeschema and Pcbnew for end-to-end PCB development."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Implement Robust Validation:"})," Resolve ERC/DRC issues through systematic debugging."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Optimize for Manufacturability:"})," Generate industry-standard outputs (Gerber, drill files) compatible with PCB fabrication."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"transition-to-advanced-design",children:"Transition to Advanced Design"}),"\n",(0,r.jsx)(n.p,{children:"The structured workflows provide a foundation for tackling complex projects, such as:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"High-Speed Digital Design:"})," Impedance-controlled routing, length matching."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Mixed-Signal Layout:"})," Ground partitioning, noise isolation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Thermal Management:"})," Heat sink integration, thermal relief patterns."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This methodological rigor ensures designs meet functional, reliability, and production requirements at scale."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},666:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/pcb_design_workflow-d873c0d2551ae9c10c4c26a1e5643409.png"},690:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/pcb_layout_workflow-a1559d6acabd62bd946de53b73d7b584.png"},4386:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/schematic_design_workflow-c71cab7a6daad759731b16aba8ad2231.png"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);