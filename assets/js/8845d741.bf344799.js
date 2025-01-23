"use strict";(self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[]).push([[5304],{1412:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"kicad/paths-libraries","title":"Configuring Paths","description":"In this section, we\'ll focus on an essential aspect of KiCad\u2019s configuration: setting and managing paths. The correct configuration of paths ensures that KiCad can locate important files like symbols, footprints, 3D models, and templates. Understanding how to manage these paths effectively will help you optimize your design workflow, especially if you are working with large projects or on systems with limited storage.","source":"@site/docs/02_kicad/4_paths-libraries.md","sourceDirName":"02_kicad","slug":"/kicad/paths-libraries","permalink":"/PCB-Design-with-KiCad/docs/kicad/paths-libraries","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/PCB-Design-with-KiCad/tree/main/webpage/docs/02_kicad/4_paths-libraries.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"kicadSidebar","previous":{"title":"Creating a New KiCad Project from a Template","permalink":"/PCB-Design-with-KiCad/docs/kicad/new-project-template"},"next":{"title":"Lessons Learned","permalink":"/PCB-Design-with-KiCad/docs/kicad/lessons-learned"}}');var n=s(4848),t=s(8453);const a={sidebar_position:6},o="Configuring Paths",l={},c=[{value:"Understanding KiCad Paths",id:"understanding-kicad-paths",level:2},{value:"Types of Files Managed by KiCad Paths:",id:"types-of-files-managed-by-kicad-paths",level:3},{value:"Managing KiCad Paths via Configure Paths",id:"managing-kicad-paths-via-configure-paths",level:2},{value:"Key Environment Variables in KiCad:",id:"key-environment-variables-in-kicad",level:3},{value:"Example: Adjusting the Default Paths",id:"example-adjusting-the-default-paths",level:4},{value:"Best Practice:",id:"best-practice",level:4},{value:"Paths for Project-Specific Libraries",id:"paths-for-project-specific-libraries",level:2},{value:"Example:",id:"example",level:3},{value:"Workflow:",id:"workflow",level:4},{value:"How KiCad Uses Environment Variables",id:"how-kicad-uses-environment-variables",level:2},{value:"Example: Symbol and Footprint Libraries",id:"example-symbol-and-footprint-libraries",level:3},{value:"Global vs. Project-Specific Libraries",id:"global-vs-project-specific-libraries",level:4},{value:"Best Practices for Path Management",id:"best-practices-for-path-management",level:2},{value:"1. <strong>Optimize Storage Locations</strong>",id:"1-optimize-storage-locations",level:3},{value:"2. <strong>Keep Project-Specific Libraries Local</strong>",id:"2-keep-project-specific-libraries-local",level:3},{value:"3. <strong>Regular Backups</strong>",id:"3-regular-backups",level:3},{value:"4. <strong>Path Substitutions</strong>",id:"4-path-substitutions",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"configuring-paths",children:"Configuring Paths"})}),"\n",(0,n.jsxs)(i.p,{children:["In this section, we'll focus on an essential aspect of KiCad\u2019s configuration: ",(0,n.jsx)(i.strong,{children:"setting and managing paths"}),". The correct configuration of paths ensures that KiCad can locate important files like symbols, footprints, 3D models, and templates. Understanding how to manage these paths effectively will help you optimize your design workflow, especially if you are working with large projects or on systems with limited storage."]}),"\n",(0,n.jsx)(i.h2,{id:"understanding-kicad-paths",children:"Understanding KiCad Paths"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"Configure Paths"})," window in KiCad allows you to define where various resources\u2014such as libraries and models\u2014are stored. These paths are crucial because they determine where KiCad looks for specific files needed for schematic symbols, PCB footprints, 3D models, and templates."]}),"\n",(0,n.jsx)(i.h3,{id:"types-of-files-managed-by-kicad-paths",children:"Types of Files Managed by KiCad Paths:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Symbols"}),": Used in the schematic editor to represent electrical components."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Footprints"}),": Define the physical layout of components on the PCB."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"3D Models"}),": Provide 3D representations of components, though optional, they are useful for visualization."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Templates"}),": Predefined project setups that speed up the creation of new projects."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"While the 3D models are not strictly necessary for PCB design, they enhance the visualization process, allowing you to inspect your board in 3D. However, symbols and footprints are critical and must be correctly configured."}),"\n",(0,n.jsx)(i.h2,{id:"managing-kicad-paths-via-configure-paths",children:"Managing KiCad Paths via Configure Paths"}),"\n",(0,n.jsxs)(i.p,{children:["When you install KiCad, it automatically configures default paths for libraries and other files. These paths are stored as ",(0,n.jsx)(i.strong,{children:"environment variables"})," that KiCad references during operation. However, for various reasons\u2014such as limited storage or organizing files on an external disk\u2014you may want to alter these paths."]}),"\n",(0,n.jsx)(i.h3,{id:"key-environment-variables-in-kicad",children:"Key Environment Variables in KiCad:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"KiCad_SYMBOL_DIR"}),": Points to the directory containing symbol libraries."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"KiCad_FOOTPRINT_DIR"}),": Points to the directory containing footprint libraries."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"KiCad_3DMODEL_DIR"}),": Points to the directory for 3D models."]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"example-adjusting-the-default-paths",children:"Example: Adjusting the Default Paths"}),"\n",(0,n.jsx)(i.p,{children:"You may find that the 3D models directory takes up a considerable amount of space\u2014several gigabytes, in some cases. If you\u2019re using a laptop or a computer with limited SSD storage, you can relocate these large files to an external hard drive."}),"\n",(0,n.jsx)(i.p,{children:"Here\u2019s how you can do it:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Open ",(0,n.jsx)(i.strong,{children:"KiCad Project Manager"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Go to ",(0,n.jsx)(i.code,{children:"Preferences"})," \u2192 ",(0,n.jsx)(i.code,{children:"Configure Paths"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Select the path you want to change (e.g., ",(0,n.jsx)(i.strong,{children:"KiCad_3DMODEL_DIR"}),")."]}),"\n",(0,n.jsx)(i.li,{children:"Update the path to point to a new directory on an external disk or another location with more storage."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Example Setup"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"KiCad_3DMODEL_DIR"}),": ",(0,n.jsx)(i.code,{children:"/mnt/external_disk/KiCad_projects/libraries/3D_models/"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"KiCad_SYMBOL_DIR"}),": ",(0,n.jsx)(i.code,{children:"/mnt/external_disk/KiCad_projects/libraries/symbols/"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"KiCad_FOOTPRINT_DIR"}),": ",(0,n.jsx)(i.code,{children:"/mnt/external_disk/KiCad_projects/libraries/footprints/"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"By moving these directories to an external disk, you can free up valuable internal storage space without affecting the functionality of KiCad."}),"\n",(0,n.jsx)(i.h4,{id:"best-practice",children:"Best Practice:"}),"\n",(0,n.jsx)(i.p,{children:"If you decide to store your libraries on an external drive, ensure that the drive is consistently connected while working with KiCad. Otherwise, you may encounter missing file errors when trying to access symbols or models."}),"\n",(0,n.jsx)(i.h2,{id:"paths-for-project-specific-libraries",children:"Paths for Project-Specific Libraries"}),"\n",(0,n.jsxs)(i.p,{children:["In addition to global libraries, KiCad allows you to define ",(0,n.jsx)(i.strong,{children:"project-specific libraries"}),". These libraries are stored within the project folder and are only accessible when that project is open. This setup is ideal for custom components or symbols that are unique to a particular project."]}),"\n",(0,n.jsx)(i.h3,{id:"example",children:"Example:"}),"\n",(0,n.jsxs)(i.p,{children:["If you're working on a microcontroller unit (MCU) data logger project and need a custom footprint or symbol, you can create a ",(0,n.jsx)(i.strong,{children:"project-specific library"})," within the project directory:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Project Directory"}),": ",(0,n.jsx)(i.code,{children:"/home/user/projects/mcu_data_logger/"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Project-Specific Library"}),": ",(0,n.jsx)(i.code,{children:"/home/user/projects/mcu_data_logger/libraries/"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"KiCad will automatically generate environment variables pointing to the project's directory when it is opened. This ensures that your custom libraries are available without affecting other projects."}),"\n",(0,n.jsx)(i.h4,{id:"workflow",children:"Workflow:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"When you open a project, KiCad creates a project-specific environment variable for that project\u2019s libraries."}),"\n",(0,n.jsxs)(i.li,{children:["Symbols, footprints, or 3D models that are specific to the project can be stored in a ",(0,n.jsx)(i.strong,{children:"libraries"})," folder within the project directory."]}),"\n",(0,n.jsx)(i.li,{children:"These project-specific libraries take precedence over global libraries when designing the schematic or PCB."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"how-kicad-uses-environment-variables",children:"How KiCad Uses Environment Variables"}),"\n",(0,n.jsx)(i.p,{children:"KiCad relies on environment variables to manage paths to libraries and other resources. These environment variables are automatically generated and referenced in different parts of the software."}),"\n",(0,n.jsx)(i.h3,{id:"example-symbol-and-footprint-libraries",children:"Example: Symbol and Footprint Libraries"}),"\n",(0,n.jsxs)(i.p,{children:["When you open the ",(0,n.jsx)(i.strong,{children:"Manage Symbol Libraries"})," window, you\u2019ll notice that each library path includes an environment variable, such as ",(0,n.jsx)(i.strong,{children:"KiCad_SYMBOL_DIR"}),". This variable points to the directory where KiCad looks for symbol files (",(0,n.jsx)(i.code,{children:".lib"})," or ",(0,n.jsx)(i.code,{children:".sym"}),")."]}),"\n",(0,n.jsxs)(i.p,{children:["Similarly, in the ",(0,n.jsx)(i.strong,{children:"Manage Footprint Libraries"})," window, you\u2019ll find the ",(0,n.jsx)(i.strong,{children:"KiCad_FOOTPRINT_DIR"})," variable, which points to the directory containing footprint files (",(0,n.jsx)(i.code,{children:".mod"}),")."]}),"\n",(0,n.jsx)(i.h4,{id:"global-vs-project-specific-libraries",children:"Global vs. Project-Specific Libraries"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Global Libraries"}),": Refer to symbols, footprints, and models available across all projects, typically defined by environment variables like ",(0,n.jsx)(i.strong,{children:"KiCad_SYMBOL_DIR"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Project-Specific Libraries"}),": Refer to resources that are unique to a particular project, defined automatically based on the project directory."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"best-practices-for-path-management",children:"Best Practices for Path Management"}),"\n",(0,n.jsxs)(i.h3,{id:"1-optimize-storage-locations",children:["1. ",(0,n.jsx)(i.strong,{children:"Optimize Storage Locations"})]}),"\n",(0,n.jsx)(i.p,{children:"If you are working with large projects, or if your system has limited disk space, it\u2019s beneficial to relocate certain libraries (especially 3D models) to an external storage device. Configure paths accordingly so KiCad can still locate these files."}),"\n",(0,n.jsxs)(i.h3,{id:"2-keep-project-specific-libraries-local",children:["2. ",(0,n.jsx)(i.strong,{children:"Keep Project-Specific Libraries Local"})]}),"\n",(0,n.jsx)(i.p,{children:"For portability and ease of backup, keep project-specific libraries within the project folder. This way, everything related to the project is contained in one directory, making it easier to share or move between computers."}),"\n",(0,n.jsxs)(i.h3,{id:"3-regular-backups",children:["3. ",(0,n.jsx)(i.strong,{children:"Regular Backups"})]}),"\n",(0,n.jsx)(i.p,{children:"Ensure that your external drives and custom paths are backed up regularly. If you\u2019re storing large libraries externally, losing access to these resources could significantly hinder your progress on a project."}),"\n",(0,n.jsxs)(i.h3,{id:"4-path-substitutions",children:["4. ",(0,n.jsx)(i.strong,{children:"Path Substitutions"})]}),"\n",(0,n.jsxs)(i.p,{children:["KiCad also supports ",(0,n.jsx)(i.strong,{children:"path substitutions"}),", which are useful when collaborating with others. For example, if team members store libraries in different locations, path substitutions can help ensure the project still works across all setups without manual path changes."]}),"\n",(0,n.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(i.p,{children:"Configuring paths in KiCad is an essential step in optimizing your PCB design workflow. Whether you are managing large libraries, working on multiple projects, or using external storage devices, understanding how KiCad uses environment variables will help you maintain an efficient design process."}),"\n",(0,n.jsxs)(i.p,{children:["In the next section, we\u2019ll explore how to ",(0,n.jsx)(i.strong,{children:"create new projects from scratch"})," and how to use ",(0,n.jsx)(i.strong,{children:"templates"})," to speed up the design process. This will ensure you can get started with your designs quickly, while maintaining a flexible and scalable project structure."]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>a,x:()=>o});var r=s(6540);const n={},t=r.createContext(n);function a(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);