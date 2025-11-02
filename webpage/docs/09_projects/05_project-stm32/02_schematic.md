# 2. Schematic Design Basics

## 2.1 KiCad 7 Project Initialization

The initiation of the schematic design process in KiCad 7 involves establishing a structured project environment to facilitate efficient development and management of the PCB design. The process begins with the creation of a new KiCad 7 project, which automatically generates essential project files, including `.kicad_pro`, `.kicad_sch`, and `.kicad_pcb`. These files serve as the foundational elements for the schematic, layout, and overall project configuration.

Access to the Schematic Editor is streamlined through the schematic layout icon or the keyboard shortcut `Ctrl+E`, enabling immediate entry into the design workspace. Configuring the canvas appropriately is crucial for maintaining alignment and precision. The default grid setting is established at 50 mil, which provides an optimal balance between component placement accuracy and ease of alignment. Users have the flexibility to switch between imperial (mil) and metric (millimeter) units using the `Ctrl+U` shortcut, accommodating diverse design preferences and regional standards.

## 2.2 Schematic Component Placement

Component placement within the schematic editor is a critical step that demands meticulous attention to detail to ensure accurate representation and connectivity of the electronic circuit. KiCad 7 facilitates this through comprehensive symbol libraries, accessible via the `A` key or the *Add Symbol* tool. The core libraries encompass a wide range of components, including `Device`, `Power`, and STM32-specific symbols such as `STM32 WB55CEUx`. For specialized components like the TDK DLP11SN021SK2 filter, custom symbols must be manually imported using the *Symbol Editor*, ensuring that all unique attributes and pin configurations are accurately captured.

Manipulation of components is facilitated through intuitive keyboard shortcuts. Rotation of symbols is achieved using the `R` key, allowing for 90° increments, while mirroring can be performed horizontally or vertically with the `Y` and `X` keys, respectively. Editing component properties is straightforward; double-clicking a symbol opens the properties dialog, where users can modify the reference designator (e.g., `U1`), component value (e.g., `100 nF`), and link the symbol to its corresponding footprint. This ensures that each component is correctly identified and associated with its physical representation on the PCB.

## 2.3 Electrical Connectivity

Establishing reliable electrical connectivity is paramount in schematic design to ensure the functional integrity of the PCB. KiCad 7 provides robust tools for drawing connections and managing signal integrity.

The **Wire Tool (`W`)** is employed to create electrical connections between component pins. As wires intersect, KiCad automatically generates junctions, which visually indicate connected nets. Ambiguous connections, where junctions are unclear or incomplete, trigger Electrical Rules Check (ERC) warnings, prompting the designer to resolve potential connectivity issues.

**Net Labels (`L`)** serve as logical identifiers for electrical nets, replacing explicit wiring with meaningful names such as `USB_D+` or `RF_OUT`. This abstraction not only enhances readability but also simplifies the management of complex circuits by allowing hierarchical propagation of signals across multiple subsheets. **Hierarchical labels** facilitate the seamless transmission of signals between different functional blocks, maintaining consistency and continuity throughout the schematic.

**Power Symbols (`P`)** are designated for global power nets, including `+3V3`, `GND`, and `+5V`. For integrated circuits requiring specific supply domains, `VDD` and `VSS` symbols are used to denote distinct power rails (e.g., `VDD_RF`). This differentiation is critical for segregating digital and analog power domains, thereby minimizing noise coupling and enhancing overall power integrity.

## 2.4 Hierarchical Schematic Organization

Organizing the schematic into hierarchical structures enhances modularity, readability, and manageability, particularly in complex designs. **Subsheets** are utilized to divide the schematic into distinct functional blocks such as *Power*, *RF*, and *USB*. This division is achieved using the *Hierarchical Sheet* tool (`Ctrl+H`), allowing designers to encapsulate related components and connections within dedicated sections.

**Hierarchical Pins** are defined as input and output ports (e.g., `VBUS_IN`, `BLE_TX`) to facilitate cross-sheet connectivity. It is imperative that port names are precisely matched across interconnected subsheets to preserve net continuity and ensure accurate signal propagation. This structured approach not only simplifies the schematic but also enhances collaboration by delineating functional boundaries within the design.

## 2.5 Design Rule Checks (DRC) and ERC

Maintaining schematic integrity necessitates the implementation of rigorous validation processes. KiCad 7 incorporates **Electrical Rules Check (ERC)** to identify and rectify potential design flaws such as unconnected pins, conflicting outputs, or floating nets. The ERC parameters can be fine-tuned by configuring severity levels—*Error*, *Warning*, or *Ignore*—within the *ERC Settings*. This customization allows designers to prioritize critical issues and manage non-critical warnings effectively.

**Annotations** play a crucial role in organizing and referencing components systematically. The *Annotate Schematic* tool facilitates the global reassignment of reference designators, ensuring that components are labeled consistently and logically. Sorting components by positional hierarchy (e.g., `R1` near `U1`, `C10` near `U3`) enhances the schematic's clarity and navigability, making it easier to trace connections and identify components during the design review and debugging phases.

## 2.6 Net Class Assignment

Assigning **Net Classes** is essential for defining PCB-specific routing constraints, particularly for critical signal paths that demand controlled impedance and specific clearance requirements. KiCad 7 allows designers to define classes such as `RF`, `USB`, and `PWR`, each with tailored parameters to meet the design specifications.

For example:
- **RF Class**: Configured with an impedance of 50Ω and a clearance of 0.2mm, ensuring optimal signal integrity for high-frequency RF signals.
- **USB Class**: Defined with differential pairs operating at 90Ω impedance and a length tolerance of 5 mils, maintaining differential signaling integrity and minimizing signal skew.

These assignments are executed via the *Edit > Net Classes* menu, where designers can specify and manage the properties of each net class. This systematic categorization ensures that routing adheres to the necessary electrical standards, thereby enhancing the overall performance and reliability of the PCB.

## 2.7 Symbol-Footprint Association

Accurate association between schematic symbols and physical footprints is critical for ensuring that the designed PCB accurately reflects the intended hardware configuration. **Footprint Assignment** involves linking each schematic symbol to its corresponding physical footprint, such as associating the `STM32 WB55CEU` symbol with the `QFN-48_7x7mm_P0.5mm` footprint. This linkage is efficiently managed using the *Assign Footprints* tool (`Ctrl+Shift+F`), which supports bulk assignments to streamline the process.

**3D Model Integration** enhances the verification and visualization of component placement and clearances. By attaching STEP files through the *Footprint Properties > 3D Models* interface, designers can leverage the KiCad 3D Viewer to inspect component arrangements and identify potential mechanical conflicts. This step is pivotal for ensuring that all components fit within the designated PCB area and that there is sufficient clearance between adjacent parts, thereby preventing assembly issues and facilitating accurate fabrication.

## 2.8 Version Control Integration

Integrating **Version Control Systems** such as Git is indispensable for managing schematic revisions and collaborative design efforts. Tracking changes in schematic files (`.kicad_sch` and `.kicad_pro`) enables designers to maintain a history of modifications, facilitating rollback to previous states if necessary. To ensure a clean and efficient repository, it is recommended to exclude transient files such as autosaves (`.000`, `.bak`) and cache files (`.kicad_wks`) from commits. This exclusion prevents unnecessary clutter and reduces repository size, maintaining focus on the critical design files.

## 2.9 Advanced Shortcuts

Proficiency in using **Advanced Shortcuts** within KiCad 7 significantly enhances design efficiency and workflow. Key navigation shortcuts include:
- **Pan**: Executed via middle mouse drag or `Ctrl+Arrow`, allowing seamless movement across the schematic canvas.
- **Zoom**: Controlled using `Ctrl+Mouse Wheel` or the `+`/`-` keys, enabling precise adjustments to view detailed sections or the overall schematic.

For editing tasks, shortcuts such as **Duplicate** (`Ctrl+D` + drag) facilitate rapid replication of components, while **Align** (`Ctrl+Shift+A`) ensures uniform horizontal or vertical distribution of selected elements. Mastery of these shortcuts contributes to a more streamlined and productive design process, reducing the time spent on repetitive tasks and allowing designers to focus on critical aspects of the schematic.

## 2.10 Best Practices

Adhering to **Best Practices** in schematic design is fundamental to achieving a high-quality and maintainable PCB layout. Key best practices include:

- **Naming Conventions**: Utilizing descriptive prefixes for nets (e.g., `RF_`, `USB_`, `SWD_`) enhances readability and facilitates easier identification of signal groups. Differentiating power domains with specific identifiers (e.g., `+3V3_DIG`, `+3V3_ANA`) ensures clear segregation of digital and analog power supplies, minimizing interference and enhancing power integrity.

- **Decoupling Strategy**: Implementing an effective decoupling strategy is essential for minimizing noise and ensuring stable power delivery to integrated circuits. Placement of 100 nF Multilayer Ceramic Capacitors (MLCCs) within 2mm of IC power pins reduces high-frequency noise and transient voltage spikes. Additionally, positioning bulk capacitors (e.g., 4.7 µF) near voltage regulators stabilizes the power supply, mitigating voltage fluctuations and enhancing overall circuit reliability.

This methodology not only ensures schematic integrity but also aligns with KiCad 7’s capabilities, providing a robust foundation for the subsequent PCB layout stages. By following these best practices, designers can achieve optimized performance, enhanced signal integrity, and streamlined manufacturability in their PCB designs.