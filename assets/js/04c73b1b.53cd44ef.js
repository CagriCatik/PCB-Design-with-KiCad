"use strict";(self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[]).push([[1327],{9200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"kicad/new-project-scratch","title":"Creating a New KiCad Project","description":"In this section, we will cover how to create a new project from scratch in KiCad. Understanding how to start a project correctly is essential for a smooth workflow and project organization. We will also explore how KiCad automatically sets up project files and folders, giving you a clean environment to begin your PCB design.","source":"@site/docs/02_kicad/5_new-project-scratch.md","sourceDirName":"02_kicad","slug":"/kicad/new-project-scratch","permalink":"/PCB-Design-with-KiCad/docs/kicad/new-project-scratch","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/PCB-Design-with-KiCad/tree/edit/main/webpage/docs/02_kicad/5_new-project-scratch.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"kicadSidebar","previous":{"title":"KiCad Applications","permalink":"/PCB-Design-with-KiCad/docs/kicad/apps-overview"},"next":{"title":"Creating a New KiCad Project from a Template","permalink":"/PCB-Design-with-KiCad/docs/kicad/new-project-template"}}');var r=t(4848),s=t(8453);const o={sidebar_position:4},c="Creating a New KiCad Project",a={},l=[{value:"Creating a New Project from Scratch",id:"creating-a-new-project-from-scratch",level:2},{value:"Steps to Create a New Project:",id:"steps-to-create-a-new-project",level:3},{value:"What Happens After Project Creation?",id:"what-happens-after-project-creation",level:2},{value:"Inspecting the Project Files",id:"inspecting-the-project-files",level:3},{value:"Next Steps: Working in the Schematic Editor",id:"next-steps-working-in-the-schematic-editor",level:2},{value:"Preview: Creating a New Project from a Template",id:"preview-creating-a-new-project-from-a-template",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"creating-a-new-kicad-project",children:"Creating a New KiCad Project"})}),"\n",(0,r.jsx)(n.p,{children:"In this section, we will cover how to create a new project from scratch in KiCad. Understanding how to start a project correctly is essential for a smooth workflow and project organization. We will also explore how KiCad automatically sets up project files and folders, giving you a clean environment to begin your PCB design."}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-new-project-from-scratch",children:"Creating a New Project from Scratch"}),"\n",(0,r.jsx)(n.p,{children:"KiCad offers two primary methods to start a new project: from scratch or from a template. In this lecture, we will focus on creating a new project from scratch. This is useful when you need full control over the project setup or when no suitable template is available for your specific design requirements."}),"\n",(0,r.jsx)(n.h3,{id:"steps-to-create-a-new-project",children:"Steps to Create a New Project:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Navigate to the File Menu"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Open the KiCad ",(0,r.jsx)(n.strong,{children:"Project Manager"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Click on ",(0,r.jsx)(n.code,{children:"File"})," \u2192 ",(0,r.jsx)(n.code,{children:"New Project"})," \u2192 ",(0,r.jsx)(n.code,{children:"New Project"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Choose a Location for the Project"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In the file explorer that pops up, select the directory where you want to save your project. It\u2019s a good idea to create a dedicated directory for all your KiCad projects."}),"\n",(0,r.jsxs)(n.li,{children:["For this example, we will save the project in a folder named ",(0,r.jsx)(n.code,{children:"KiCad Projects/Pro Third Edition"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Name Your Project"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Enter a meaningful name for your project, such as ",(0,r.jsx)(n.code,{children:"example_new_project"}),". This will help you easily identify the project later on."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Create a New Folder for the Project"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure that the option ",(0,r.jsx)(n.strong,{children:'"Create a new folder for the project"'})," is selected. KiCad will automatically create a folder with the project name and save all associated files within that folder. This keeps your project organized and makes it easier to manage multiple projects."]}),"\n",(0,r.jsx)(n.li,{children:"If this option is not selected, you\u2019ll need to create a folder manually before saving the project."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Save the Project"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Once you\u2019ve chosen the location and name, click the ",(0,r.jsx)(n.strong,{children:"Save"})," button. KiCad will now create the project folder with the necessary files for you to begin."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"what-happens-after-project-creation",children:"What Happens After Project Creation?"}),"\n",(0,r.jsx)(n.p,{children:"After saving, KiCad automatically generates several key files within your newly created project folder:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["Project File (",(0,r.jsx)(n.code,{children:".KiCad_pro"}),")"]}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This file contains important project information, such as design settings, paths, and project configurations. It is used to open and manage the project from the KiCad Project Manager."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["Schematic File (",(0,r.jsx)(n.code,{children:".KiCad_sch"}),")"]}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The schematic file is where you\u2019ll create and manage the electrical schematic of your design. It is initially empty, waiting for you to begin placing components and creating connections."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["PCB Layout File (",(0,r.jsx)(n.code,{children:".KiCad_pcb"}),")"]}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This file will contain your PCB layout once you\u2019ve designed it. Like the schematic file, it starts empty and will be populated as you place components and route traces."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"inspecting-the-project-files",children:"Inspecting the Project Files"}),"\n",(0,r.jsx)(n.p,{children:"KiCad stores its project files in human-readable text format. You can open these files in any text editor (e.g., Atom, Notepad++) to inspect their contents."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["Project File (",(0,r.jsx)(n.code,{children:".KiCad_pro"}),")"]}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["This file includes the basic project metadata, design settings, and configurations. For example:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'(project\n  (name "example_new_project")\n  (version "2024-10-19")\n  (settings ...)\n)\n'})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"It contains high-level information like the design rules, board settings, and tool configurations."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["Schematic File (",(0,r.jsx)(n.code,{children:".KiCad_sch"}),")"]}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The schematic file is initially a blank file that contains headers and basic formatting information, ready to be populated with components and connections. Example content:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"(KiCad_sch\n  (version 20211014)\n  (generator eeschema)\n  ...\n)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["PCB File (",(0,r.jsx)(n.code,{children:".KiCad_pcb"}),")"]}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The PCB layout file is similar in structure to the schematic file and contains all the board-specific information once you start designing your PCB. Initially, it\u2019s a blank canvas ready for component placement and routing. Example content:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"(KiCad_pcb\n  (version 20211014)\n  (host pcbnew)\n  ...\n)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps-working-in-the-schematic-editor",children:"Next Steps: Working in the Schematic Editor"}),"\n",(0,r.jsx)(n.p,{children:"With your project structure in place, you are now ready to begin designing your schematic. Here\u2019s how to proceed:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Open the Schematic Editor"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the KiCad ",(0,r.jsx)(n.strong,{children:"Project Manager"}),", click the ",(0,r.jsx)(n.strong,{children:"Schematic Editor"})," button or go to ",(0,r.jsx)(n.code,{children:"Tools"})," \u2192 ",(0,r.jsx)(n.code,{children:"Schematic Editor"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"The Schematic Editor is where you\u2019ll add components, draw wires, and create the electrical connections necessary for your design."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Start Designing the Schematic"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Begin by placing components like resistors, capacitors, and integrated circuits from the symbol library."}),"\n",(0,r.jsx)(n.li,{children:"Connect the components using wires and labels to define the electrical connections in your design."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"preview-creating-a-new-project-from-a-template",children:"Preview: Creating a New Project from a Template"}),"\n",(0,r.jsx)(n.p,{children:"In the next section, we will explore how to create a new project using a template. Using templates can significantly speed up the project setup process, especially for designs that require specific configurations or layouts. Templates come pre-configured with standard components, layout preferences, and design rules, providing a solid starting point for your project."}),"\n",(0,r.jsx)(n.p,{children:"Stay tuned for the next lecture, where we will go through the process of creating a project from a template and discuss how to customize and manage templates in KiCad."}),"\n",(0,r.jsx)(n.p,{children:"This completes the step-by-step guide to creating a new project from scratch in KiCad. Following this process ensures that your project is organized and ready for schematic capture and PCB layout."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);