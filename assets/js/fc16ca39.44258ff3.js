"use strict";(self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[]).push([[1491],{1098:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"projects/project-esp32/07_3d_visualization","title":"**7. 3D Visualization and Final Review**","description":"The final step before sending your PCB design for manufacturing is to perform a thorough review using 3D visualization and other tools. This chapter covers how to use KiCad\u2019s 3D viewer to inspect your design, identify potential issues, and ensure the board is ready for production. We\u2019ll also discuss final checks to verify the design\u2019s accuracy and manufacturability.","source":"@site/docs/09_projects/04_project-esp32/07_3d_visualization.md","sourceDirName":"09_projects/04_project-esp32","slug":"/projects/project-esp32/07_3d_visualization","permalink":"/PCB-Design-with-KiCad/docs/projects/project-esp32/07_3d_visualization","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/09_projects/04_project-esp32/07_3d_visualization.md","tags":[],"version":"current","frontMatter":{},"sidebar":"projectsSidebar","previous":{"title":"**6. Generating Manufacturing Files**","permalink":"/PCB-Design-with-KiCad/docs/projects/project-esp32/manufacturing"}}');var r=i(4848),l=i(8453);const t={},c="7. 3D Visualization and Final Review",o={},a=[{value:"<strong>7.1 Using the 3D Viewer in KiCad</strong>",id:"71-using-the-3d-viewer-in-kicad",level:2},{value:"<strong>7.2 Final Design Checks</strong>",id:"72-final-design-checks",level:2},{value:"<strong>7.3 Verifying Manufacturing Files</strong>",id:"73-verifying-manufacturing-files",level:2},{value:"<strong>7.4 Final Adjustments</strong>",id:"74-final-adjustments",level:2},{value:"<strong>7.5 Preparing for Manufacturing</strong>",id:"75-preparing-for-manufacturing",level:2},{value:"<strong>7.6 Summary</strong>",id:"76-summary",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"7-3d-visualization-and-final-review",children:(0,r.jsx)(n.strong,{children:"7. 3D Visualization and Final Review"})})}),"\n",(0,r.jsxs)(n.p,{children:["The final step before sending your PCB design for manufacturing is to perform a thorough review using ",(0,r.jsx)(n.strong,{children:"3D visualization"})," and other tools. This chapter covers how to use KiCad\u2019s 3D viewer to inspect your design, identify potential issues, and ensure the board is ready for production. We\u2019ll also discuss final checks to verify the design\u2019s accuracy and manufacturability."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"71-using-the-3d-viewer-in-kicad",children:(0,r.jsx)(n.strong,{children:"7.1 Using the 3D Viewer in KiCad"})}),"\n",(0,r.jsx)(n.p,{children:"KiCad\u2019s 3D viewer allows you to visualize your PCB in three dimensions, providing a realistic representation of the final product. This tool is invaluable for identifying mechanical conflicts, verifying component placement, and ensuring the board meets design requirements."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Access the 3D Viewer"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"PCB Editor"}),", click the ",(0,r.jsx)(n.strong,{children:"3D Viewer"})," icon (or go to ",(0,r.jsx)(n.strong,{children:"View > 3D Viewer"}),")."]}),"\n",(0,r.jsx)(n.li,{children:"The 3D viewer will open, displaying your PCB design in three dimensions."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Navigate the 3D View"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use the mouse to rotate, zoom, and pan the view:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Left-click and drag"}),": Rotate the board."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Right-click and drag"}),": Pan the view."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Scroll wheel"}),": Zoom in and out."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Inspect Component Placement"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Check that all components are placed correctly and aligned with their footprints."}),"\n",(0,r.jsx)(n.li,{children:"Verify that tall components (e.g., capacitors, connectors) do not interfere with each other or the enclosure (if applicable)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Check Mechanical Clearances"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure there is sufficient space between components and the board edge."}),"\n",(0,r.jsx)(n.li,{children:"Verify that mounting holes are correctly positioned and do not interfere with traces or components."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Review Layer Stackup"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use the 3D viewer to inspect the layer stackup and ensure all layers (e.g., top copper, ground plane, power plane) are correctly defined."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"72-final-design-checks",children:(0,r.jsx)(n.strong,{children:"7.2 Final Design Checks"})}),"\n",(0,r.jsx)(n.p,{children:"After reviewing the design in 3D, perform a series of final checks to ensure the board is ready for manufacturing."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Cross-Check with Schematic"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Verify that all connections in the PCB layout match the schematic."}),"\n",(0,r.jsx)(n.li,{children:"Ensure no nets are missing or incorrectly routed."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Verify Design Rules"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Re-run the ",(0,r.jsx)(n.strong,{children:"Design Rule Check (DRC)"})," to confirm there are no violations."]}),"\n",(0,r.jsx)(n.li,{children:"Check for issues such as insufficient clearance, unconnected nets, or incorrect trace widths."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Review Silkscreen and Labels"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure all silkscreen labels (e.g., component designators, test points) are clear and readable."}),"\n",(0,r.jsx)(n.li,{children:"Verify that labels do not overlap with pads, vias, or other critical areas."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Check Power and Ground Connections"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Verify that all power and ground connections are properly routed."}),"\n",(0,r.jsx)(n.li,{children:"Ensure the ground plane is continuous and free of unnecessary splits."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Thermal Management"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Check for components that generate heat (e.g., LDO, relay) and ensure adequate thermal relief."}),"\n",(0,r.jsx)(n.li,{children:"Add thermal vias under hot components to dissipate heat to the ground plane."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"73-verifying-manufacturing-files",children:(0,r.jsx)(n.strong,{children:"7.3 Verifying Manufacturing Files"})}),"\n",(0,r.jsx)(n.p,{children:"Before submitting the design for manufacturing, double-check the generated files to ensure they are accurate and complete."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Inspect Gerber Files"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use a Gerber viewer (e.g., KiCad\u2019s GerbView or online tools) to inspect the files."}),"\n",(0,r.jsx)(n.li,{children:"Check for missing layers, incorrect traces, or misaligned components."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Verify Drill Files"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure all holes are correctly defined and match the PCB layout."}),"\n",(0,r.jsx)(n.li,{children:"Confirm that plated and non-plated holes are correctly specified."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Check BOM and Assembly Drawings"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Verify that the ",(0,r.jsx)(n.strong,{children:"Bill of Materials (BOM)"})," includes all components and is accurate."]}),"\n",(0,r.jsx)(n.li,{children:"Ensure assembly drawings provide clear guidance for component placement."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"74-final-adjustments",children:(0,r.jsx)(n.strong,{children:"7.4 Final Adjustments"})}),"\n",(0,r.jsx)(n.p,{children:"If any issues are identified during the final review, make the necessary adjustments to the design."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Modify Component Placement"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Adjust the position of components to resolve mechanical conflicts or improve routing."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Optimize Routing"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Reroute traces to improve signal integrity or reduce EMI."}),"\n",(0,r.jsx)(n.li,{children:"Add vias or adjust trace widths as needed."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Update Silkscreen"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Reposition or resize silkscreen labels to improve readability."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Re-run DRC and 3D Visualization"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"After making adjustments, re-run the DRC and inspect the design in the 3D viewer to ensure all issues are resolved."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"75-preparing-for-manufacturing",children:(0,r.jsx)(n.strong,{children:"7.5 Preparing for Manufacturing"})}),"\n",(0,r.jsx)(n.p,{children:"Once the design is finalized, prepare the files for submission to the manufacturer."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compile Manufacturing Files"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure all Gerber files, drill files, BOM, and assembly drawings are included in the ZIP file."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Verify File Naming Conventions"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Confirm that the file names follow the manufacturer\u2019s guidelines."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Submit the Design"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Upload the ZIP file to the manufacturer\u2019s website or send it via email."}),"\n",(0,r.jsx)(n.li,{children:"Include any special instructions or notes (e.g., solder mask color, surface finish)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"76-summary",children:(0,r.jsx)(n.strong,{children:"7.6 Summary"})}),"\n",(0,r.jsx)(n.p,{children:"In this chapter, we used KiCad\u2019s 3D viewer to inspect the PCB design and performed a series of final checks to ensure the board is ready for manufacturing. We verified component placement, mechanical clearances, and manufacturing files, making adjustments as needed. With these steps completed, your design is fully prepared for production. In the next chapter, we will discuss the manufacturing process and how to assemble the board."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"This chapter provides a comprehensive guide to using 3D visualization and performing final checks in KiCad. By following these steps, you\u2019ll ensure that your PCB design is error-free, optimized for performance, and ready for manufacturing."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(6540);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);