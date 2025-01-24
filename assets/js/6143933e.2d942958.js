"use strict";(self.webpackChunkPCB_Design=self.webpackChunkPCB_Design||[]).push([[2863],{161:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"projects/project-stm32/erc_footprints","title":"9. ERC & Footprints","description":"9.1 Electrical Rules Check (ERC)","source":"@site/docs/09_projects/05_project-stm32/09_erc_footprints.md","sourceDirName":"09_projects/05_project-stm32","slug":"/projects/project-stm32/erc_footprints","permalink":"/PCB-Design-with-KiCad/docs/projects/project-stm32/erc_footprints","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/PCB-Design-with-KiCad/tree/edit/main/webpage/docs/09_projects/05_project-stm32/09_erc_footprints.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{},"sidebar":"projectsSidebar","previous":{"title":"8. Peripherals","permalink":"/PCB-Design-with-KiCad/docs/projects/project-stm32/peripherials"},"next":{"title":"10. Net Classes & BOM","permalink":"/PCB-Design-with-KiCad/docs/projects/project-stm32/net_classes"}}');var t=i(4848),r=i(8453);const c={},a="9. ERC & Footprints",o={},l=[{value:"9.1 Electrical Rules Check (ERC)",id:"91-electrical-rules-check-erc",level:2},{value:"9.1.1 Unconnected Pin Resolution",id:"911-unconnected-pin-resolution",level:3},{value:"9.1.2 Power Flag Implementation",id:"912-power-flag-implementation",level:3},{value:"9.2 Footprint Assignment",id:"92-footprint-assignment",level:2},{value:"9.2.1 Passive Components",id:"921-passive-components",level:3},{value:"9.2.2 Crystals",id:"922-crystals",level:3},{value:"9.2.3 Connectors",id:"923-connectors",level:3},{value:"9.3 Validation &amp; Compliance",id:"93-validation--compliance",level:2},{value:"9.4 Critical Design Metrics",id:"94-critical-design-metrics",level:2},{value:"9.5 Conclusion",id:"95-conclusion",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"9-erc--footprints",children:"9. ERC & Footprints"})}),"\n",(0,t.jsx)(n.h2,{id:"91-electrical-rules-check-erc",children:"9.1 Electrical Rules Check (ERC)"}),"\n",(0,t.jsx)(n.p,{children:"The Electrical Rules Check (ERC) is an essential validation process in PCB design, ensuring the logical and electrical integrity of the schematic before proceeding to layout and manufacturing. ERC enforces consistency and detects potential errors that could compromise the functionality of the final PCB. The STM32 WB55CEU-based design employs ERC within KiCad to identify and rectify issues related to unconnected pins, power net assignments, and overall schematic coherence."}),"\n",(0,t.jsx)(n.h3,{id:"911-unconnected-pin-resolution",children:"9.1.1 Unconnected Pin Resolution"}),"\n",(0,t.jsx)(n.p,{children:"Unconnected pins in a schematic can lead to unintended behaviors, such as floating inputs or outputs, which may cause erratic circuit operation. KiCad's ERC functionality flags any pins that are not connected to a net, including unused General-Purpose Input/Output (GPIO) pins or No Connect (NC) pins."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Detection:"})," During the ERC process, KiCad identifies all pins that lack net connections. These include GPIOs that are not utilized in the current design and designated NC pins that are intentionally left floating."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Mitigation:"})," To address unconnected pins, the following strategies are employed:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"No Connect Flags:"})," For pins that are intentionally left unconnected, the ",(0,t.jsx)(n.code,{children:"No Connect"})," (NC) flag is applied by selecting the pin and pressing the ",(0,t.jsx)(n.code,{children:"Q"})," key. This action informs the ERC tool that the floating pin is intentional, thereby preventing unnecessary warnings."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Explicit Labeling:"})," Non-Bill of Materials (BOM) test points or debug headers are explicitly labeled to ensure clarity. This labeling assists in distinguishing between intentional and accidental unconnected pins, enhancing the schematic's readability and maintainability."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"912-power-flag-implementation",children:"9.1.2 Power Flag Implementation"}),"\n",(0,t.jsx)(n.p,{children:"Properly assigning power flags is crucial for resolving ERC errors related to undriven power pins and ensuring that all power domains are correctly referenced within the schematic."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Global Power Nets:"})," Global power nets such as ",(0,t.jsx)(n.code,{children:"+3V3"}),", ",(0,t.jsx)(n.code,{children:"+5V"}),", and ",(0,t.jsx)(n.code,{children:"GND"})," are assigned ",(0,t.jsx)(n.code,{children:"PWR_FLAG"})," symbols. These flags inform the ERC tool that these nets are valid power sources, eliminating errors related to undriven power pins."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Domain-Specific Flags:"})," In mixed-signal designs, it is essential to isolate different power domains to prevent noise coupling between analog and digital circuits. Domain-specific power flags are assigned to nets such as ",(0,t.jsx)(n.code,{children:"AVDD"}),", ",(0,t.jsx)(n.code,{children:"AGND"})," for analog supplies, and ",(0,t.jsx)(n.code,{children:"DVDD"}),", ",(0,t.jsx)(n.code,{children:"DGND"})," for digital supplies. This isolation is critical for maintaining signal integrity and minimizing electromagnetic interference (EMI) within the PCB."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"92-footprint-assignment",children:"9.2 Footprint Assignment"}),"\n",(0,t.jsx)(n.p,{children:"Accurate footprint assignment ensures that each schematic symbol is correctly represented in the physical PCB layout, facilitating manufacturability and assembly accuracy. The STM32 WB55CEU design meticulously assigns footprints to all components, adhering to IPC-7351A standards for footprint reliability and compliance."}),"\n",(0,t.jsx)(n.h3,{id:"921-passive-components",children:"9.2.1 Passive Components"}),"\n",(0,t.jsx)(n.p,{children:"Passive components, including resistors and capacitors, are fundamental to the circuit's functionality. Their footprints are selected based on size, package type, and manufacturing tolerances."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"0402 Resistors/Capacitors:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Footprint:"})," The footprint used is ",(0,t.jsx)(n.code,{children:"Resistor_SMD:R_0402_1005Metric"}),", which features pad dimensions of 1.0 \xd7 0.5 mm. This footprint accommodates the 0402-sized Surface-Mount Device (SMD) resistors and capacitors, ensuring precise placement and solder joint reliability."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Design Rules:"})," Adherence to design rules is critical for preventing soldering defects and ensuring component alignment."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solder Mask Expansion:"})," A solder mask expansion of 0.05 mm is applied around the pads to ensure adequate solder coverage and joint formation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pad Spacing:"})," The spacing between pads is maintained at 0.5 mm (edge-to-edge) to prevent shorts and facilitate proper soldering during assembly."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Assembly:"})," Components are assembled using a laser-cut stencil with a thickness of 0.12 mm, compatible with Type 4 solder paste characterized by a particle size of 20\u201338 \xb5m. This combination ensures precise solder paste deposition and reliable solder joint formation during the reflow process."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"922-crystals",children:"9.2.2 Crystals"}),"\n",(0,t.jsx)(n.p,{children:"Crystals are critical for oscillator circuits, providing the necessary frequency stability for microcontroller operations. Proper footprint selection and placement are essential for oscillator performance."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"32 MHz (NX3225GD):"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Footprint:"})," The footprint ",(0,t.jsx)(n.code,{children:"Crystal_SMD_2016-4Pin_2.0x1.6mm"})," is utilized, featuring 0.3 \xd7 0.9 mm rectangular pads with a 0.2 mm solder mask relief. This footprint accommodates the physical dimensions of the NX3225GD-32M crystal, ensuring precise alignment with the MCU's oscillator pins."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pad Geometry:"})," The rectangular pad design facilitates optimal solder joint formation, enhancing electrical connectivity and mechanical stability."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Placement:"})," The crystal is placed within \u226415 mm of the MCU's OSC_IN and OSC_OUT pins to minimize trace inductance and maintain signal integrity. Proximity reduces the likelihood of signal degradation and ensures accurate frequency generation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"32.768 kHz (NX2012SA):"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Footprint:"})," The ",(0,t.jsx)(n.code,{children:"Crystal_SMD_2012-4Pin_2.0x1.2mm"})," footprint is assigned, tailored to the smaller tuning-fork NX2012SA-32.768K crystal. This footprint ensures proper alignment and connectivity with the RTC and low-power modes of the MCU."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Load Capacitors:"})," A pair of 12 pF C0G (0402, \xb10.25 pF tolerance) capacitors are integrated into the footprint design to match the crystal's load capacitance requirements. These capacitors stabilize the oscillator circuit, ensuring reliable and precise timekeeping."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"923-connectors",children:"9.2.3 Connectors"}),"\n",(0,t.jsx)(n.p,{children:"Connectors facilitate communication and power transfer between the PCB and external devices. Their footprints must accommodate mechanical and electrical specifications to ensure robust performance."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"USB-C (GCT_USB4105):"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Footprint:"})," The ",(0,t.jsx)(n.code,{children:"USB_C_Receptacle_GCT_USB4105"})," footprint measures 8.6 \xd7 3.0 mm, aligning with the physical dimensions of the GCT_USB4105 USB-C receptacle. This footprint ensures secure mechanical mounting and reliable electrical connections."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Critical Features:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VBUS PTH Pads:"})," These pads are sized at 1.2 \xd7 0.6 mm and feature plated through-holes (PTH) with a 0.1 mm annular ring. This design facilitates robust electrical connections and mechanical stability, accommodating the high current demands of USB power delivery."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"D+/D\u2013 SMD Pads:"})," The differential data lines D+ and D\u2013 are routed to 0.8 \xd7 0.3 mm SMD pads that are non-soldermask-defined. This configuration ensures precise impedance control and minimizes signal reflections, essential for high-speed data transmission."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compliance:"})," The footprint design adheres to USB-IF TID 6200 standards, ensuring a retention force of \u22655 N. This compliance guarantees that the USB-C connector maintains secure mechanical connections under repeated insertion and removal cycles, enhancing the durability of the PCB."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"UFL (Hirose U.FL-LP-066):"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Footprint:"})," The ",(0,t.jsx)(n.code,{children:"U.FL_Hirose_U.FL-LP-066"})," footprint measures 1.6 \xd7 1.2 mm, designed to accommodate the Hirose U.FL-LP-066 connector. This compact footprint ensures efficient use of PCB space while maintaining reliable high-frequency signal transmission."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Grounding:"})," An array of four 0.3 mm vias arranged at a 0.5 mm pitch surrounds the signal pad. This via array provides a low-impedance RF return path, enhancing signal integrity and reducing electromagnetic interference (EMI)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Tag Connect (TC2050-IDC-NL):"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Footprint:"})," The Tag Connect interface utilizes non-Bill of Materials (non-BOM) alignment posts with 1.0 mm PTH, ensuring precise mechanical alignment and reliable electrical connections during programming and debugging."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SWD Pads:"})," The SWDIO and SWCLK lines are connected to 0.6 \xd7 0.6 mm SMD pads, which are edge-coupled to the MCU's SWDIO and SWCLK pins. This configuration ensures minimal inductance and capacitance, preserving signal integrity for high-speed debugging operations."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"93-validation--compliance",children:"9.3 Validation & Compliance"}),"\n",(0,t.jsx)(n.p,{children:"Ensuring that the PCB design meets all electrical and mechanical specifications is critical for achieving reliable and manufacturable PCBs. The STM32 WB55CEU-based design undergoes rigorous validation and compliance checks to adhere to industry standards and design guidelines."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"ERC Report:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Unconnected Pins:"})," The ERC report must indicate zero unconnected pins, excluding those intentionally flagged with ",(0,t.jsx)(n.code,{children:"No Connect"}),". This ensures that all functional pins are properly connected and that there are no unintended floating nodes that could lead to erratic behavior."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Power Net Integrity:"})," All power nets must be driven by valid power sources, such as Low Dropout Regulators (LDOs) and power supply units. This verification ensures that no power pins are left floating, maintaining stable voltage levels across the PCB."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Footprint Audit:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IPC-7351 Compliance:"})," Footprints are audited for compliance with IPC-7351A standards, which dictate precise component toe and fillet dimensions. Specifically:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Component Toe/Fillet:"})," A solder joint extension of 0.05 mm is maintained to ensure robust mechanical and electrical connections."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Courtyard Clearance:"})," A minimum clearance of 0.25 mm beyond the component body is enforced to prevent solder bridging and ensure sufficient spacing between components."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"3D Model Clearance:"})," In the 3D model verification process, a clearance of \u22650.2 mm is maintained between the tallest components, such as USB-C and UFL connectors. This clearance prevents mechanical interference during assembly and ensures that components fit within the designated PCB area without obstruction."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"94-critical-design-metrics",children:"9.4 Critical Design Metrics"}),"\n",(0,t.jsx)(n.p,{children:"Adhering to critical design metrics is essential for ensuring the manufacturability and operational reliability of the PCB. The STM32 WB55CEU-based design incorporates stringent adherence to placement accuracy, reflow profiles, and component tolerance specifications."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"0402 Passives:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Placement Accuracy:"})," Passive components in the 0402 package must be placed with an accuracy of \xb10.1 mm using pick-and-place machines. Precise placement ensures alignment with PCB traces and prevents solder bridging."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Reflow Profile:"})," The soldering process follows a reflow profile with a peak temperature of 245\xb0C and maintains 60 seconds above 217\xb0C. This profile is optimized for SAC305 solder paste, ensuring reliable solder joint formation without thermal stress that could damage components."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Crystals:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Frequency Tolerance:"})," The 32 MHz crystal must exhibit a frequency tolerance of \xb110 ppm, while the 32.768 kHz crystal must maintain a tolerance of \xb120 ppm. These tolerances ensure accurate oscillator performance, critical for the microcontroller's timing and real-time operations."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Connectors:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"USB-C Insertion Cycles:"})," The USB-C connectors must withstand \u226510,000 insertion cycles as per IEC 60512-99-001 standards. This durability ensures long-term reliability in environments with frequent connector usage."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"95-conclusion",children:"9.5 Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"The ERC and footprint assignment processes are integral to the STM32 WB55CEU-based PCB design, ensuring both electrical integrity and manufacturability. By rigorously enforcing schematic consistency through ERC, accurately assigning component footprints in compliance with IPC-7351A standards, and adhering to critical design metrics, the design achieves a high level of reliability and performance. Comprehensive validation and adherence to industry standards ensure that the PCB is not only functionally robust but also manufacturable at scale, meeting the stringent requirements of commercial PCB assembly as outlined in IPC Class 2/A standards."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);