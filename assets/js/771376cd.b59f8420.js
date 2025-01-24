"use strict";(self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[]).push([[7431],{2987:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"schematic-design/nets","title":"Net Labeling and Management","description":"Net Definition and Purpose","source":"@site/docs/03_schematic-design/09_nets.md","sourceDirName":"03_schematic-design","slug":"/schematic-design/nets","permalink":"/PCB-Design-with-KiCad/docs/schematic-design/nets","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/PCB-Design-with-KiCad/tree/edit/main/webpage/docs/03_schematic-design/09_nets.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{},"sidebar":"schematicSidebar","previous":{"title":"Schematic Wiring and Electrical Rule Validation","permalink":"/PCB-Design-with-KiCad/docs/schematic-design/wiring"},"next":{"title":"Electrical Rules Check","permalink":"/PCB-Design-with-KiCad/docs/schematic-design/erc"}}');var t=i(4848),a=i(8453);const r={},c="Net Labeling and Management",l={},o=[{value:"Net Definition and Purpose",id:"net-definition-and-purpose",level:2},{value:"Net Labeling Workflow",id:"net-labeling-workflow",level:2},{value:"1. Accessing the Net Label Tool",id:"1-accessing-the-net-label-tool",level:3},{value:"2. Assigning Custom Net Names",id:"2-assigning-custom-net-names",level:3},{value:"3. Example Implementation (LED Torch Project)",id:"3-example-implementation-led-torch-project",level:3},{value:"Advanced Net Management",id:"advanced-net-management",level:2},{value:"1. Hierarchical Nets",id:"1-hierarchical-nets",level:3},{value:"2. Net Classes",id:"2-net-classes",level:3},{value:"3. Net Ties",id:"3-net-ties",level:3},{value:"Best Practices for Net Labeling",id:"best-practices-for-net-labeling",level:2},{value:"Validation and Cross-Probing",id:"validation-and-cross-probing",level:2},{value:"Net-Driven Design Benefits",id:"net-driven-design-benefits",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"net-labeling-and-management",children:"Net Labeling and Management"})}),"\n",(0,t.jsx)(n.h2,{id:"net-definition-and-purpose",children:"Net Definition and Purpose"}),"\n",(0,t.jsxs)(n.p,{children:["In the realm of electronic schematic design, a ",(0,t.jsx)(n.strong,{children:"net"})," is a fundamental concept representing an electrical connection that exists between two or more component pins. Within KiCad, nets serve both as tangible wire segments and as abstract entities that facilitate the tracking and management of electrical connections throughout the design process."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Physical Manifestation"}),": In KiCad's Eeschema, nets are visually depicted as wire segments that interconnect various component pins on the schematic. These wires provide a clear and organized representation of the electrical pathways within the circuit."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Logical Abstraction"}),": Internally, KiCad assigns unique identifiers to each net, allowing for precise tracking of connectivity. This abstraction ensures that the software can manage complex interconnections efficiently, even in densely populated schematics."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Scope"}),": A single net may consist of multiple interconnected wire segments, including branching paths that connect different components. This comprehensive encapsulation ensures that all electrical connections are accurately represented and maintained throughout the design lifecycle."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"net-labeling-workflow",children:"Net Labeling Workflow"}),"\n",(0,t.jsx)(n.p,{children:"Effective net labeling is pivotal for maintaining clarity and manageability in complex schematics. KiCad offers a streamlined workflow to facilitate the assignment and management of custom net names, enhancing both the readability and functionality of the design."}),"\n",(0,t.jsx)(n.h3,{id:"1-accessing-the-net-label-tool",children:"1. Accessing the Net Label Tool"}),"\n",(0,t.jsxs)(n.p,{children:["To initiate the net labeling process, users must first access the ",(0,t.jsx)(n.strong,{children:"Net Label"})," tool within KiCad's Eeschema:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Location"}),": The ",(0,t.jsx)(n.strong,{children:"Net Label"})," tool is accessible via the vertical toolbar, identifiable by the icon depicting an ",(0,t.jsx)(n.code,{children:"A"})," with an overline. Alternatively, users can activate this tool by pressing the ",(0,t.jsx)(n.strong,{children:"L"})," key, providing a swift keyboard shortcut for enhanced efficiency."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cursor Representation"}),": Upon activation, the cursor transforms into a crosshair accompanied by a floating net name placeholder. This visual cue aids in the precise placement of net labels along the desired wire segments."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-assigning-custom-net-names",children:"2. Assigning Custom Net Names"}),"\n",(0,t.jsx)(n.p,{children:"Assigning descriptive and standardized net names is essential for the systematic organization of the schematic. The following steps outline the procedure for defining custom net names:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Select Net Label Tool"}),": Activate the ",(0,t.jsx)(n.strong,{children:"Net Label"})," tool either by clicking its icon in the toolbar or by pressing the ",(0,t.jsx)(n.strong,{children:"L"})," key. This action prepares the cursor for net label placement."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Click Target Wire"}),": Navigate the cursor to the desired wire segment where the net label is to be placed. Hovering over the wire segment will highlight the target, indicating a valid placement point. A single click will open the ",(0,t.jsx)(n.strong,{children:"Net Label Properties"})," dialog."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Define Net Name"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Syntax"}),": Utilize descriptive and concise names that accurately reflect the function or purpose of the net (e.g., ",(0,t.jsx)(n.code,{children:"LED_Cathode"}),", ",(0,t.jsx)(n.code,{children:"Battery_Positive"}),"). This practice enhances the schematic's clarity and facilitates easier troubleshooting and modifications."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Conventions"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Avoid Spaces"}),": Use underscores (",(0,t.jsx)(n.code,{children:"_"}),") or camelCase to separate words within the net name, ensuring compatibility with various design tools and scripts."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Prefix Critical Nets"}),": Implement standardized prefixes for essential nets, such as ",(0,t.jsx)(n.code,{children:"PWR_VCC"})," for power supply voltages or ",(0,t.jsx)(n.code,{children:"GND_ANALOG"})," for analog ground connections. This nomenclature aids in quickly identifying critical pathways within the schematic."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Place Label"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Rotation"}),": Adjust the orientation of the net label using the ",(0,t.jsx)(n.strong,{children:"R"})," key, which rotates the label in 90\xb0 increments. Proper alignment ensures that labels are readable and do not interfere with other schematic elements."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Positioning"}),": Strategically place the net label adjacent to the wire segment, ensuring it does not overlap with component symbols or other text. Proper positioning maintains the schematic's visual clarity and prevents confusion during review and analysis."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-example-implementation-led-torch-project",children:"3. Example Implementation (LED Torch Project)"}),"\n",(0,t.jsx)(n.p,{children:"To illustrate the practical application of net labeling within a specific project, consider the following examples derived from an LED Torch schematic:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LED_Cathode"}),": This net label is attached to the wire segment connecting the cathode pin of the LED to the subsequent resistor. It clearly denotes the electrical connection path for the LED's cathode, facilitating easy identification and modification."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LED_Anode"}),": Positioned on the wire segment between the LED's anode and the battery, this net label specifies the positive electrical connection, ensuring correct polarity and function."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Battery_Positive"}),": This label is affixed to the wire emanating from the battery\u2019s anode terminal, indicating the positive power supply line. Such labeling is crucial for maintaining consistent power distribution throughout the schematic."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"advanced-net-management",children:"Advanced Net Management"}),"\n",(0,t.jsx)(n.p,{children:"As schematics grow in complexity, advanced net management techniques become indispensable for maintaining design integrity and facilitating efficient PCB layout processes. KiCad provides several sophisticated tools and methodologies to support comprehensive net management."}),"\n",(0,t.jsx)(n.h3,{id:"1-hierarchical-nets",children:"1. Hierarchical Nets"}),"\n",(0,t.jsx)(n.p,{children:"Hierarchical nets enable the organization of nets across multiple schematic sheets, promoting modularity and scalability in large designs."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Global Nets"}),": Designated by simple names such as ",(0,t.jsx)(n.code,{children:"+5V"})," or ",(0,t.jsx)(n.code,{children:"GND"}),", global nets automatically propagate across all hierarchical sheets within the project. This feature simplifies the connection of common power and ground lines across different modules, ensuring consistency and reducing redundancy."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Local Nets"}),": Scoped to specific hierarchical sheets, local nets are named using the ",(0,t.jsx)(n.code,{children:"SheetName.NetName"})," syntax (e.g., ",(0,t.jsx)(n.code,{children:"Power.VCC"}),"). This naming convention restricts the net's influence to its designated sheet, preventing unintended cross-connections and enhancing design clarity within individual modules."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-net-classes",children:"2. Net Classes"}),"\n",(0,t.jsx)(n.p,{children:"Net classes group nets that share common design rules, such as trace width and clearance, facilitating uniformity and compliance with design standards."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Definition"}),": A net class is defined by a set of rules that apply to all nets within the class. For example, a net class for high-speed data lines might specify a narrower trace width and tighter clearance compared to general signal lines."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Assignment"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Schematic Assignment"}),": Right-click on a net label within the schematic, select ",(0,t.jsx)(n.strong,{children:"Properties"}),", and then assign the net to an existing or newly created net class. This action ensures that all associated design rules are uniformly applied."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PCB Editor Configuration"}),": Within the PCB Editor, navigate to ",(0,t.jsx)(n.strong,{children:"Design Rules > Net Classes"})," to define and modify the parameters of each net class. This interface allows for precise control over trace properties, ensuring that the physical layout adheres to the schematic's electrical requirements."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-net-ties",children:"3. Net Ties"}),"\n",(0,t.jsx)(n.p,{children:"Net ties serve as bridges between distinct nets, enabling electrical connections while maintaining separation in design rule checks (DRC). This functionality is particularly useful in scenarios where different sections of a circuit require isolated environments, such as analog and digital grounds."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),": Net ties allow for the electrical connection of nets that are treated as separate entities within the DRC framework. This capability is essential for designs that incorporate multiple ground planes or require distinct power domains."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Implementation"}),": Incorporate the ",(0,t.jsx)(n.code,{children:"netTie"})," component into the schematic to establish a controlled connection between the desired nets. This component ensures that the electrical connection is recognized by the ERC without violating DRC rules, maintaining design integrity."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"best-practices-for-net-labeling",children:"Best Practices for Net Labeling"}),"\n",(0,t.jsx)(n.p,{children:"Adhering to best practices in net labeling enhances the schematic's readability, facilitates error detection, and streamlines the transition to PCB layout. The following guidelines are recommended for advanced users to optimize net management within KiCad."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Strategic Naming"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Critical Nets"}),": Assign explicit labels to essential nets, such as power rails (",(0,t.jsx)(n.code,{children:"VCC"}),", ",(0,t.jsx)(n.code,{children:"GND"}),") and high-speed signals (",(0,t.jsx)(n.code,{children:"CLK"}),", ",(0,t.jsx)(n.code,{children:"DATA_BUS"}),"). These labels provide clear reference points for both schematic review and PCB layout."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Trivial Connections"}),": For simple, single-segment connections, such as a resistor connected directly to an LED, net labels may be omitted to reduce visual clutter. However, this practice should be balanced against the need for clarity in larger designs."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Avoid Redundancy"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Auto-Generated Names"}),": KiCad automatically generates net names (e.g., ",(0,t.jsx)(n.code,{children:"Net-(C1-Pad1)"}),") based on component connections. Override these names only when a more descriptive label enhances understanding or when standardization is required for complex projects."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Consistent Nomenclature"}),": Maintain a consistent naming convention throughout the schematic to prevent confusion and facilitate automated processes such as netlist generation and simulation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Visual Clarity"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Alignment"}),": Position net labels parallel to their corresponding wire segments to enhance readability and prevent overlapping with other schematic elements."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Font Consistency"}),": Utilize uniform font sizes and styles for all net labels. Adjust these settings via ",(0,t.jsx)(n.strong,{children:"Preferences > Schematic Editor > Text and Graphics"})," to maintain a professional and organized appearance."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"validation-and-cross-probing",children:"Validation and Cross-Probing"}),"\n",(0,t.jsx)(n.p,{children:"Post-labeling validation ensures that all net connections are accurately represented and that the schematic is free from connectivity errors. Cross-probing between the schematic and PCB layout further verifies the integrity of net associations."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Electrical Rules Check (ERC)"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Post-Labeling Verification"}),": After assigning net labels, execute an ERC to identify any residual issues, such as unconnected nets or conflicting driver types. This step ensures that all electrical connections are valid and that the design adheres to specified rules."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Suppressing Warnings"}),": For non-critical warnings, such as those arising from unplaced multi-unit components, right-click on the warning in the ERC output and select ",(0,t.jsx)(n.strong,{children:"Add Exclusion"}),". This action prevents the ERC from flagging these known issues, allowing designers to focus on more significant errors."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cross-Probe to PCB Editor"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Net Synchronization"}),": Utilize ",(0,t.jsx)(n.strong,{children:"Tools > Update PCB"})," within Eeschema to propagate net names and assignments to the PCB Editor. This synchronization ensures that the physical layout accurately reflects the schematic's electrical design."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Layout Validation"}),": Within the PCB Editor, access the ",(0,t.jsx)(n.strong,{children:"Netlist Viewer"})," panel to inspect and confirm that all nets are correctly associated with their corresponding physical traces. This verification step is crucial for identifying and rectifying any discrepancies between the schematic and PCB layout."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"net-driven-design-benefits",children:"Net-Driven Design Benefits"}),"\n",(0,t.jsx)(n.p,{children:"Implementing a net-driven design approach in KiCad offers numerous advantages that enhance the overall design process, simulation accuracy, and documentation quality."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Simulation"}),": Assigning SPICE models to named nets allows for detailed transient and DC analyses. This capability enables designers to simulate and evaluate the behavior of critical signal paths, such as LED current flows, under various operating conditions."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Documentation"}),": Generating net-specific reports via ",(0,t.jsx)(n.strong,{children:"Tools > Generate Netlist"})," facilitates comprehensive documentation of the electrical connections. These reports are invaluable for design reviews, audits, and future reference."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Reusability"}),": Exporting net classes and configurations to future projects through ",(0,t.jsx)(n.strong,{children:"File > Archive Project"})," promotes design reuse and consistency across multiple designs. This practice saves time and ensures adherence to established design standards."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This protocol delineates a systematic approach to net labeling and management within KiCad's schematic design environment. By emphasizing strategic naming, advanced management techniques, adherence to best practices, and thorough validation processes, designers can achieve enhanced clarity, simulation fidelity, and layout efficiency. The integration of custom net labels serves as a critical reference framework, bridging the schematic and PCB workflows to facilitate the development of robust and scalable electronic designs."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(6540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);