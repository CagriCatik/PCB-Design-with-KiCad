"use strict";(self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[]).push([[8492],{7414:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"projects/project-esp32/drc","title":"Design Rule Check (DRC) and Final Checks","description":"The Design Rule Check (DRC) is a critical step in the PCB design process. It ensures that your layout adheres to the specified design rules, such as trace width, clearance, and via size. After completing the PCB layout, performing a thorough DRC and final checks will help identify and resolve any issues before sending the design for manufacturing. This chapter covers the DRC process, final design optimizations, and preparing the board for production.","source":"@site/docs/09_projects/04_project-esp32/05_drc.md","sourceDirName":"09_projects/04_project-esp32","slug":"/projects/project-esp32/drc","permalink":"/PCB-Design-with-KiCad/docs/projects/project-esp32/drc","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/09_projects/04_project-esp32/05_drc.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"projectsSidebar","previous":{"title":"PCB Layout","permalink":"/PCB-Design-with-KiCad/docs/projects/project-esp32/layout"},"next":{"title":"Generating Manufacturing Files","permalink":"/PCB-Design-with-KiCad/docs/projects/project-esp32/manufacturing"}}');var r=i(4848),l=i(8453);const t={},c="Design Rule Check (DRC) and Final Checks",a={},d=[{value:"Running the Design Rule Check (DRC)",id:"running-the-design-rule-check-drc",level:2},{value:"Final Design Optimizations",id:"final-design-optimizations",level:2},{value:"Generating Manufacturing Files",id:"generating-manufacturing-files",level:2},{value:"Final Review",id:"final-review",level:2},{value:"Summary",id:"summary",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"design-rule-check-drc-and-final-checks",children:"Design Rule Check (DRC) and Final Checks"})}),"\n",(0,r.jsx)(n.p,{children:"The Design Rule Check (DRC) is a critical step in the PCB design process. It ensures that your layout adheres to the specified design rules, such as trace width, clearance, and via size. After completing the PCB layout, performing a thorough DRC and final checks will help identify and resolve any issues before sending the design for manufacturing. This chapter covers the DRC process, final design optimizations, and preparing the board for production."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"running-the-design-rule-check-drc",children:"Running the Design Rule Check (DRC)"}),"\n",(0,r.jsx)(n.p,{children:"The DRC verifies that your PCB layout meets the design rules defined in the project. These rules ensure manufacturability, signal integrity, and reliability."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Access the DRC Tool:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In the PCB Editor, go to Inspect > Design Rule Checker."}),"\n",(0,r.jsx)(n.li,{children:"The DRC window will open, displaying a list of rules and options."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Configure Design Rules:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure the design rules are set correctly. For this project, the default rules include:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Clearance: 0.2mm (minimum distance between traces, pads, and vias)."}),"\n",(0,r.jsx)(n.li,{children:"Track Width: 0.25mm (default trace width)."}),"\n",(0,r.jsx)(n.li,{children:"Via Size: 0.8mm (outer diameter) with a 0.3mm hole size."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Adjust these rules if necessary based on your manufacturer\u2019s capabilities."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the DRC:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Click Run DRC to start the check."}),"\n",(0,r.jsx)(n.li,{children:"The tool will scan the entire PCB layout and generate a report of any violations."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Review DRC Errors:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The DRC report will list errors such as:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Clearance Violations: Traces or pads that are too close to each other."}),"\n",(0,r.jsx)(n.li,{children:"Unconnected Nets: Signals that are not fully routed."}),"\n",(0,r.jsx)(n.li,{children:"Missing Copper Pours: Areas where the copper pour is incomplete."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Address each error by modifying the layout (e.g., moving traces, adding vias, or adjusting clearances)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Re-run the DRC:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"After fixing the errors, re-run the DRC to ensure all issues are resolved."}),"\n",(0,r.jsx)(n.li,{children:"Repeat this process until no errors or warnings remain."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"final-design-optimizations",children:"Final Design Optimizations"}),"\n",(0,r.jsx)(n.p,{children:"Once the DRC is clean, perform final optimizations to improve the design\u2019s performance and manufacturability."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Signal Integrity Checks:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure critical signals (e.g., USB, I\xb2C) have short and direct paths."}),"\n",(0,r.jsx)(n.li,{children:"Avoid sharp angles in traces; use 45-degree angles or curves instead."}),"\n",(0,r.jsx)(n.li,{children:"Add ground vias near high-speed signals to reduce noise."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Power and Ground Planes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Verify that the ground plane is continuous and free of splits."}),"\n",(0,r.jsx)(n.li,{children:"Ensure power traces are wide enough to handle the required current."}),"\n",(0,r.jsx)(n.li,{children:"Add decoupling capacitors near power pins of ICs."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Thermal Management:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Check for components that generate heat (e.g., LDO, relay) and ensure adequate thermal relief."}),"\n",(0,r.jsx)(n.li,{children:"Add thermal vias under hot components to dissipate heat to the ground plane."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Silkscreen and Labels:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Review the silkscreen layer for readability and accuracy."}),"\n",(0,r.jsx)(n.li,{children:"Ensure component designators (e.g., R1, C1) are visible and not overlapping with pads or vias."}),"\n",(0,r.jsx)(n.li,{children:"Add labels for connectors, test points, and other important features."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"3D Visualization:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use the 3D Viewer to inspect the PCB layout in three dimensions."}),"\n",(0,r.jsx)(n.li,{children:"Check for mechanical clearances, component placement, and overall aesthetics."}),"\n",(0,r.jsx)(n.li,{children:"Verify that the board fits within the intended enclosure (if applicable)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"generating-manufacturing-files",children:"Generating Manufacturing Files"}),"\n",(0,r.jsx)(n.p,{children:"After completing the DRC and final checks, generate the files required for PCB manufacturing."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Gerber Files:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Go to File > Plot."}),"\n",(0,r.jsx)(n.li,{children:"Select the layers to include in the Gerber files (e.g., top copper, bottom copper, silkscreen, solder mask)."}),"\n",(0,r.jsx)(n.li,{children:"Set the output directory and click Plot to generate the files."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Drill Files:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Go to File > Generate Drill Files."}),"\n",(0,r.jsx)(n.li,{children:"Select the drill file format (e.g., Excellon) and generate files for plated and non-plated holes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Bill of Materials (BOM):"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Generate a BOM by going to Tools > Generate Bill of Materials."}),"\n",(0,r.jsx)(n.li,{children:"Include component details such as reference designators, values, and footprints."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Assembly Drawings:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Create assembly drawings to guide the manufacturer during component placement."}),"\n",(0,r.jsx)(n.li,{children:"Include layer views, component outlines, and reference designators."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a ZIP File:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Compile all manufacturing files (Gerber, drill, BOM, assembly drawings) into a single ZIP file."}),"\n",(0,r.jsxs)(n.li,{children:["Name the file appropriately (e.g., ",(0,r.jsx)(n.code,{children:"IoT_Thing_V1.0_Gerber.zip"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"final-review",children:"Final Review"}),"\n",(0,r.jsx)(n.p,{children:"Before sending the design for manufacturing, perform a final review to ensure everything is correct."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Cross-Check with Schematic:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Verify that all connections in the PCB layout match the schematic."}),"\n",(0,r.jsx)(n.li,{children:"Ensure no nets are missing or incorrectly routed."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Manufacturer\u2019s Guidelines:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Check the manufacturer\u2019s design guidelines (e.g., minimum trace width, hole size, clearance)."}),"\n",(0,r.jsx)(n.li,{children:"Ensure your design complies with their requirements."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Test Points:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Add test points for critical signals (e.g., power, ground, GPIOs) to facilitate debugging and testing."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Documentation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Save a copy of the schematic, PCB layout, and manufacturing files for future reference."}),"\n",(0,r.jsx)(n.li,{children:"Include notes on any design decisions or special considerations."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"In this chapter, we performed the Design Rule Check (DRC) to ensure the PCB layout adheres to the specified design rules. We also conducted final optimizations, generated manufacturing files, and performed a thorough review of the design. With these steps completed, the PCB is ready for production. In the next chapter, we will discuss the manufacturing process and how to assemble the board."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"This chapter provides a comprehensive guide to performing a DRC and final checks in KiCad. By following these steps, you\u2019ll ensure that your PCB design is error-free, optimized for performance, and ready for manufacturing."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(6540);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);