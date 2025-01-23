"use strict";(self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[]).push([[1696],{7141:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"recipes/recipes/change_footprint_bulk","title":"Changing Footprints in Bulk Using Pcbnew","description":"Bulk editing of footprints is a highly efficient way to update multiple components in KiCad\'s PCB layout editor, Pcbnew. This method can save significant time compared to editing individual components. This guide explains how to change footprints in bulk and demonstrates how to update all instances of a given footprint with a new one.","source":"@site/docs/10_recipes/02_recipes/02_change_footprint_bulk.md","sourceDirName":"10_recipes/02_recipes","slug":"/recipes/recipes/change_footprint_bulk","permalink":"/PCB-Design-with-KiCad/docs/recipes/recipes/change_footprint_bulk","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/PCB-Design-with-KiCad/docs/10_recipes/02_recipes/02_change_footprint_bulk.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"recipesSidebar","previous":{"title":"Creating Custom Graphics","permalink":"/PCB-Design-with-KiCad/docs/recipes/recipes/how_to_create_a_custom_graphic"},"next":{"title":"Text variables","permalink":"/PCB-Design-with-KiCad/docs/recipes/recipes/text_variables"}}');var s=i(4848),r=i(8453);const o={},l="Changing Footprints in Bulk Using Pcbnew",a={},c=[{value:"Step 1: Identifying the Target Footprint",id:"step-1-identifying-the-target-footprint",level:2},{value:"Step 2: Changing a Single Footprint (Optional)",id:"step-2-changing-a-single-footprint-optional",level:2},{value:"Step 3: Bulk Changing Footprints",id:"step-3-bulk-changing-footprints",level:2},{value:"Step 4: Validation and Adjustment",id:"step-4-validation-and-adjustment",level:2},{value:"Example Use Case: Updating Resistors",id:"example-use-case-updating-resistors",level:2},{value:"Additional Tips",id:"additional-tips",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"changing-footprints-in-bulk-using-pcbnew",children:"Changing Footprints in Bulk Using Pcbnew"})}),"\n",(0,s.jsx)(e.p,{children:"Bulk editing of footprints is a highly efficient way to update multiple components in KiCad's PCB layout editor, Pcbnew. This method can save significant time compared to editing individual components. This guide explains how to change footprints in bulk and demonstrates how to update all instances of a given footprint with a new one."}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"step-1-identifying-the-target-footprint",children:"Step 1: Identifying the Target Footprint"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Understand the Existing Footprint"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Open the Pcbnew layout editor and inspect the footprints you want to change."}),"\n",(0,s.jsxs)(e.li,{children:["Note the library identifier of the current footprint. You can find this in the footprint properties or by hovering over the component and using the ",(0,s.jsx)(e.code,{children:"E"})," key to edit."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Determine the New Footprint"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Decide on the new footprint to apply. Ensure it matches the intended specifications, such as dimensions, pad layout, and type."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"step-2-changing-a-single-footprint-optional",children:"Step 2: Changing a Single Footprint (Optional)"}),"\n",(0,s.jsx)(e.p,{children:"Before performing a bulk change, you may want to test the replacement on a single component to verify the appearance and compatibility of the new footprint."}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Edit Footprint Properties"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Select a component and press ",(0,s.jsx)(e.code,{children:"E"})," to open its properties."]}),"\n",(0,s.jsxs)(e.li,{children:['In the "Footprint" field, click on ',(0,s.jsx)(e.code,{children:"Change Footprint"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"Use the Footprint Library Browser to locate the desired replacement. Double-click to select it."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Apply the Change"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Confirm the new footprint and click ",(0,s.jsx)(e.code,{children:"OK"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"Check the updated footprint in the layout to ensure it meets your requirements."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"step-3-bulk-changing-footprints",children:"Step 3: Bulk Changing Footprints"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Open the Bulk Change Dialog"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["In Pcbnew, go to the ",(0,s.jsx)(e.code,{children:"Edit"})," menu and select ",(0,s.jsx)(e.code,{children:"Change Footprints"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Configure the Bulk Change"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:['In the "Change Footprint" dialog, set the following options:',"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Filter Existing Footprint"}),": Use the library identifier of the current footprint. This ensures only the targeted components are affected."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Select New Footprint"}),": Specify the new footprint using one of these methods:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Type the library identifier manually if known."}),"\n",(0,s.jsx)(e.li,{children:"Use the Footprint Library Browser to navigate and select the replacement footprint."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Verify and Adjust Options"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Ensure that any additional settings, such as reference designators or values, are configured as needed."}),"\n",(0,s.jsx)(e.li,{children:"Typically, you will only change the footprint, leaving other fields like the reference unchanged."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Apply the Change"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Click ",(0,s.jsx)(e.code,{children:"Change"})," to update all matching footprints in the PCB layout."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"step-4-validation-and-adjustment",children:"Step 4: Validation and Adjustment"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Inspect the Changes"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Review the updated layout to ensure all footprints were changed correctly."}),"\n",(0,s.jsx)(e.li,{children:"Use the 3D viewer to verify alignment and appearance if necessary."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Correct Misplacements"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"If any footprints appear misaligned or incorrectly placed, adjust their positions manually."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"example-use-case-updating-resistors",children:"Example Use Case: Updating Resistors"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Scenario"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"You have resistors using a US-style symbol and want to replace them with the European-style symbol."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Steps"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Open the schematic and identify the library identifier for the US-style resistor."}),"\n",(0,s.jsx)(e.li,{children:'Use the "Change Symbols" or "Change Footprints" dialog to replace all instances of the US-style resistor with the European-style resistor in bulk.'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Validation"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"After the change, verify that all resistors have been updated and that no other components were unintentionally modified."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"additional-tips",children:"Additional Tips"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Use Filters"}),": When applying bulk changes, always double-check the filter to avoid unintentionally modifying unrelated components."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Backup Your Work"}),": Create a backup of the project before making bulk changes to ensure you can revert if needed."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Footprint Library Organization"}),": Keep your custom footprints organized in dedicated libraries for easy access and management."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"By following this procedure, you can efficiently update footprints in your PCB layout, ensuring consistency and reducing manual effort. This method is particularly useful when transitioning to new libraries or standardizing designs across multiple components."})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>l});var t=i(6540);const s={},r=t.createContext(s);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);