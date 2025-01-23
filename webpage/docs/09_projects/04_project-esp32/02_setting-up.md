# Setting Up the KiCad Project

## Creating a New Project
The first step in any PCB design is to set up the project in KiCad. This involves creating a new project, defining its structure, and organizing the files. Here’s how to get started:

1. Launch KiCad:
   - Open KiCad 7 on your computer. The main KiCad window, called the Project Manager, will appear.

2. Create a New Project:
   - Click on File > New Project.
   - Choose a location on your computer where you want to save the project.
   - Name the project IoT_Thing (or any name you prefer).
   - Click Save to create the project.

3. Project Files:
   - KiCad will automatically generate two essential files for your project:
     - IoT_Thing.kicad_sch: The schematic file where you will design the circuit.
     - IoT_Thing.kicad_pcb: The PCB layout file where you will design the physical board.

4. Project Folder:
   - KiCad will also create a folder with the same name as your project. This folder will store all related files, including libraries, footprints, and output files.

---

## Configuring Page Settings
Before diving into the schematic design, it’s important to configure the page settings. This step ensures that your schematic is well-documented and ready for professional use.

1. Open the Schematic Editor:
   - In the Project Manager, double-click on the IoT_Thing.kicad_sch file to open the Schematic Editor.

2. Access Page Settings:
   - Go to File > Page Settings in the Schematic Editor.

3. Set Page Size:
   - Choose A3 as the page size. This provides enough space for a detailed schematic with multiple components.

4. Add Project Information:
   - Fill in the following fields to document your project:
     - Title: Enter IoT Thing.
     - Revision: Set to 1.0 (this can be updated as the design evolves).
     - Date: Insert the current date (KiCad can automatically populate this).
     - Company: Enter Morten Laboratories (or your own organization’s name).

5. Save Page Settings:
   - Click OK to save the settings. The schematic page will now display the title block with the information you entered.

---

## Organizing the Schematic
With the project and page settings configured, you can now start organizing the schematic. This involves placing components, defining connections, and ensuring the design is easy to understand.

1. Add Components:
   - Use the Place Symbol tool (shortcut: A) to add components to the schematic.
   - Search for and place the following key components:
     - ESP32 WROOM Module
     - CP2104 USB-to-Serial Converter
     - SI7021 Temperature and Humidity Sensor
     - Relay (RT314A05)
     - RGB LED
     - Level Shifter (74HCT245)
     - Screw Terminals
     - Capacitors, Resistors, and Diodes

2. Arrange Components:
   - Organize the components logically on the schematic page. For example:
     - Place the ESP32 in the center.
     - Group related components (e.g., USB interface, power supply, sensors) together.
   - Use wires (shortcut: W) to connect components as needed.

3. Add Labels and Annotations:
   - Use the Place Label tool (shortcut: L) to label nets and connections. This makes the schematic easier to read and debug.
   - Annotate components (assign unique reference designators like R1, C1, U1) by going to Tools > Annotate Schematic.

---

## Assigning Footprints
Footprints define the physical layout of components on the PCB. Assigning footprints early in the design process ensures that your schematic and PCB layout are aligned.

1. Open the Footprint Assignment Tool:
   - In the Schematic Editor, go to Tools > Assign Footprints.

2. Assign Footprints to Components:
   - For each component in the schematic, select the appropriate footprint from KiCad’s library. For example:
     - ESP32 WROOM Module: Use a standard ESP32 footprint.
     - CP2104: Use a QFN-24 footprint.
     - SI7021: Use a DFN-6 footprint.
     - Resistors and Capacitors: Use 0402 or 0805 footprints for SMD components.
   - Ensure that the selected footprints match the physical components you plan to use.

3. Save and Update:
   - Save the footprint assignments and update the PCB layout by going to Tools > Update PCB from Schematic.

---

## Setting Up the PCB Layout
Once the schematic is complete and footprints are assigned, you can move on to the PCB layout.

1. Open the PCB Editor:
   - In the Project Manager, double-click on the IoT_Thing.kicad_pcb file to open the PCB Editor.

2. Define the Board Outline:
   - Switch to the Edge.Cuts layer.
   - Use the Draw Line tool to create a rectangle that defines the board outline (80mm x 80mm).
   - Add rounded corners using the Draw Arc tool for a professional look.

3. Set Up the Layer Stack:
   - Go to Board Setup > Physical Stackup.
   - Configure the board as a 4-layer PCB:
     - Top Layer: Signal routing and component placement.
     - Inner Layer 1: Ground plane.
     - Inner Layer 2: Power plane.
     - Bottom Layer: Signal routing and additional components.

4. Import Components:
   - Use the Update PCB from Schematic tool to import all components and their connections into the PCB layout.

---

## Preparing for Design
Before starting the PCB layout, ensure that the following steps are completed:
- Grid Settings: Set the grid to 1mm for initial placement and 0.1mm for fine-tuning.
- Design Rules: Configure design rules in Board Setup > Design Rules (e.g., track width, clearance, via size).
- 3D Models: Assign 3D models to components for accurate visualization.

---

## Summary
In this chapter, you set up the KiCad project, configured the schematic page, organized the components, and prepared the PCB layout. These steps lay the foundation for the detailed schematic design and PCB routing that will follow in the next chapters. With the project structure in place, you’re now ready to dive into the schematic design process.

--- 

This chapter provides a comprehensive guide to setting up a KiCad project, ensuring that you have a solid foundation for the rest of the design process. By following these steps, you’ll be well-prepared to create a professional and functional PCB design.