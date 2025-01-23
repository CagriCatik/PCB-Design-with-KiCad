"use strict";(self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[]).push([[1984],{9565:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"projects/project-esp32/setting-up","title":"2. Setting Up the KiCad Project","description":"2.1 Creating a New Project","source":"@site/docs/09_projects/04_project-esp32/02_setting-up.md","sourceDirName":"09_projects/04_project-esp32","slug":"/projects/project-esp32/setting-up","permalink":"/PCB-Design-with-KiCad/docs/projects/project-esp32/setting-up","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/09_projects/04_project-esp32/02_setting-up.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"projectsSidebar","previous":{"title":"1. Introduction","permalink":"/PCB-Design-with-KiCad/docs/projects/project-esp32/introduction"},"next":{"title":"3. Schematic Design","permalink":"/PCB-Design-with-KiCad/docs/projects/project-esp32/schematic"}}');var s=i(4848),r=i(8453);const o={},l="2. Setting Up the KiCad Project",c={},a=[{value:"2.1 Creating a New Project",id:"21-creating-a-new-project",level:2},{value:"2.2 Configuring Page Settings",id:"22-configuring-page-settings",level:2},{value:"2.3 Organizing the Schematic",id:"23-organizing-the-schematic",level:2},{value:"2.4 Assigning Footprints",id:"24-assigning-footprints",level:2},{value:"2.5 Setting Up the PCB Layout",id:"25-setting-up-the-pcb-layout",level:2},{value:"2.6 Preparing for Design",id:"26-preparing-for-design",level:2},{value:"2.7 Summary",id:"27-summary",level:2}];function h(e){const n={h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2-setting-up-the-kicad-project",children:"2. Setting Up the KiCad Project"})}),"\n",(0,s.jsx)(n.h2,{id:"21-creating-a-new-project",children:"2.1 Creating a New Project"}),"\n",(0,s.jsx)(n.p,{children:"The first step in any PCB design is to set up the project in KiCad. This involves creating a new project, defining its structure, and organizing the files. Here\u2019s how to get started:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Launch KiCad:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open KiCad 7 on your computer. The main KiCad window, called the Project Manager, will appear."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a New Project:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Click on File > New Project."}),"\n",(0,s.jsx)(n.li,{children:"Choose a location on your computer where you want to save the project."}),"\n",(0,s.jsx)(n.li,{children:"Name the project IoT_Thing (or any name you prefer)."}),"\n",(0,s.jsx)(n.li,{children:"Click Save to create the project."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Project Files:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["KiCad will automatically generate two essential files for your project:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"IoT_Thing.kicad_sch: The schematic file where you will design the circuit."}),"\n",(0,s.jsx)(n.li,{children:"IoT_Thing.kicad_pcb: The PCB layout file where you will design the physical board."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Project Folder:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"KiCad will also create a folder with the same name as your project. This folder will store all related files, including libraries, footprints, and output files."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"22-configuring-page-settings",children:"2.2 Configuring Page Settings"}),"\n",(0,s.jsx)(n.p,{children:"Before diving into the schematic design, it\u2019s important to configure the page settings. This step ensures that your schematic is well-documented and ready for professional use."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open the Schematic Editor:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In the Project Manager, double-click on the IoT_Thing.kicad_sch file to open the Schematic Editor."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Access Page Settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Go to File > Page Settings in the Schematic Editor."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set Page Size:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Choose A3 as the page size. This provides enough space for a detailed schematic with multiple components."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add Project Information:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Fill in the following fields to document your project:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Title: Enter IoT Thing."}),"\n",(0,s.jsx)(n.li,{children:"Revision: Set to 1.0 (this can be updated as the design evolves)."}),"\n",(0,s.jsx)(n.li,{children:"Date: Insert the current date (KiCad can automatically populate this)."}),"\n",(0,s.jsx)(n.li,{children:"Company: Enter Morten Laboratories (or your own organization\u2019s name)."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save Page Settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Click OK to save the settings. The schematic page will now display the title block with the information you entered."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"23-organizing-the-schematic",children:"2.3 Organizing the Schematic"}),"\n",(0,s.jsx)(n.p,{children:"With the project and page settings configured, you can now start organizing the schematic. This involves placing components, defining connections, and ensuring the design is easy to understand."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add Components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use the Place Symbol tool (shortcut: A) to add components to the schematic."}),"\n",(0,s.jsxs)(n.li,{children:["Search for and place the following key components:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ESP32 WROOM Module"}),"\n",(0,s.jsx)(n.li,{children:"CP2104 USB-to-Serial Converter"}),"\n",(0,s.jsx)(n.li,{children:"SI7021 Temperature and Humidity Sensor"}),"\n",(0,s.jsx)(n.li,{children:"Relay (RT314A05)"}),"\n",(0,s.jsx)(n.li,{children:"RGB LED"}),"\n",(0,s.jsx)(n.li,{children:"Level Shifter (74HCT245)"}),"\n",(0,s.jsx)(n.li,{children:"Screw Terminals"}),"\n",(0,s.jsx)(n.li,{children:"Capacitors, Resistors, and Diodes"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Arrange Components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Organize the components logically on the schematic page. For example:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Place the ESP32 in the center."}),"\n",(0,s.jsx)(n.li,{children:"Group related components (e.g., USB interface, power supply, sensors) together."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Use wires (shortcut: W) to connect components as needed."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add Labels and Annotations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use the Place Label tool (shortcut: L) to label nets and connections. This makes the schematic easier to read and debug."}),"\n",(0,s.jsx)(n.li,{children:"Annotate components (assign unique reference designators like R1, C1, U1) by going to Tools > Annotate Schematic."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"24-assigning-footprints",children:"2.4 Assigning Footprints"}),"\n",(0,s.jsx)(n.p,{children:"Footprints define the physical layout of components on the PCB. Assigning footprints early in the design process ensures that your schematic and PCB layout are aligned."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open the Footprint Assignment Tool:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In the Schematic Editor, go to Tools > Assign Footprints."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Assign Footprints to Components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For each component in the schematic, select the appropriate footprint from KiCad\u2019s library. For example:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ESP32 WROOM Module: Use a standard ESP32 footprint."}),"\n",(0,s.jsx)(n.li,{children:"CP2104: Use a QFN-24 footprint."}),"\n",(0,s.jsx)(n.li,{children:"SI7021: Use a DFN-6 footprint."}),"\n",(0,s.jsx)(n.li,{children:"Resistors and Capacitors: Use 0402 or 0805 footprints for SMD components."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Ensure that the selected footprints match the physical components you plan to use."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save and Update:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Save the footprint assignments and update the PCB layout by going to Tools > Update PCB from Schematic."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"25-setting-up-the-pcb-layout",children:"2.5 Setting Up the PCB Layout"}),"\n",(0,s.jsx)(n.p,{children:"Once the schematic is complete and footprints are assigned, you can move on to the PCB layout."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open the PCB Editor:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In the Project Manager, double-click on the IoT_Thing.kicad_pcb file to open the PCB Editor."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Define the Board Outline:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Switch to the Edge.Cuts layer."}),"\n",(0,s.jsx)(n.li,{children:"Use the Draw Line tool to create a rectangle that defines the board outline (80mm x 80mm)."}),"\n",(0,s.jsx)(n.li,{children:"Add rounded corners using the Draw Arc tool for a professional look."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set Up the Layer Stack:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Go to Board Setup > Physical Stackup."}),"\n",(0,s.jsxs)(n.li,{children:["Configure the board as a 4-layer PCB:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Top Layer: Signal routing and component placement."}),"\n",(0,s.jsx)(n.li,{children:"Inner Layer 1: Ground plane."}),"\n",(0,s.jsx)(n.li,{children:"Inner Layer 2: Power plane."}),"\n",(0,s.jsx)(n.li,{children:"Bottom Layer: Signal routing and additional components."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Import Components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use the Update PCB from Schematic tool to import all components and their connections into the PCB layout."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"26-preparing-for-design",children:"2.6 Preparing for Design"}),"\n",(0,s.jsx)(n.p,{children:"Before starting the PCB layout, ensure that the following steps are completed:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Grid Settings: Set the grid to 1mm for initial placement and 0.1mm for fine-tuning."}),"\n",(0,s.jsx)(n.li,{children:"Design Rules: Configure design rules in Board Setup > Design Rules (e.g., track width, clearance, via size)."}),"\n",(0,s.jsx)(n.li,{children:"3D Models: Assign 3D models to components for accurate visualization."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"27-summary",children:"2.7 Summary"}),"\n",(0,s.jsx)(n.p,{children:"In this chapter, you set up the KiCad project, configured the schematic page, organized the components, and prepared the PCB layout. These steps lay the foundation for the detailed schematic design and PCB routing that will follow in the next chapters. With the project structure in place, you\u2019re now ready to dive into the schematic design process."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"This chapter provides a comprehensive guide to setting up a KiCad project, ensuring that you have a solid foundation for the rest of the design process. By following these steps, you\u2019ll be well-prepared to create a professional and functional PCB design."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);