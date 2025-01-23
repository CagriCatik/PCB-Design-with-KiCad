# PCB Layout

The PCB layout phase is where the schematic design is translated into a physical board. This involves placing components, routing traces, and ensuring that the design meets electrical and mechanical requirements. In this chapter, we will walk through the process of designing the PCB layout for the ESP32-based IoT device in KiCad 7.

---

## Setting Up the PCB Layout
Before placing components and routing traces, it’s important to configure the PCB layout environment.

1. Open the PCB Editor:
   - In the KiCad Project Manager, double-click on the IoT_Thing.kicad_pcb file to open the PCB Editor.

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

## Placing Components
Proper component placement is critical for signal integrity, thermal management, and manufacturability.

1. ESP32 WROOM Module:
   - Place the ESP32 module near the center of the board.
   - Ensure the antenna area is clear of other components and traces.

2. USB-C Connector and CP2104:
   - Place the USB-C connector near the edge of the board for easy access.
   - Position the CP2104 USB-to-Serial converter close to the USB connector.

3. SI7021 Sensor and Quick Connector:
   - Place the SI7021 sensor and quick connector in a location that minimizes trace lengths for the I²C bus.

4. Relay and Screw Terminals:
   - Place the relay and screw terminals near the edge of the board for easy access to external connections.

5. Level Converters and LED Strip Interface:
   - Place the 74HCT245 level shifter and LED strip interface near the ESP32 GPIO pins.

6. Power Supply Components:
   - Place the LDO (TLV1117LV-3.3V), decoupling capacitors, and fuse near the power input.

7. Mounting Holes:
   - Place mounting holes in each corner of the board, ensuring they are aligned with the board outline.

---

## Routing the PCB
Routing involves connecting the components with copper traces while adhering to design rules and best practices.

1. Critical Signal Routing:
   - Start with the most critical signals, such as the USB data lines and I²C bus.
   - Use differential pairs for USB signals to minimize noise and ensure signal integrity.
   - Keep I²C traces short and add pull-up resistors close to the ESP32.

2. Power and Ground Routing:
   - Use wide traces for power and ground connections to minimize resistance and voltage drop.
   - Connect the ground pins of all components to the ground plane using vias.
   - Route the 3.3V and 5V power nets using the power plane where possible.

3. Signal Routing:
   - Route the GPIO signals to the level shifter, RGB LED, and relay.
   - Use 45-degree angles for traces to reduce electromagnetic interference (EMI).
   - Avoid crossing traces on the same layer by using vias to switch layers.

4. Copper Pour and Ground Plane:
   - Add a copper pour on the top and bottom layers, connected to the ground net.
   - Ensure the ground plane is continuous and free of unnecessary splits.

---

## Design Rule Check (DRC)
The Design Rule Check ensures that the PCB layout adheres to the specified design rules.

1. Run the DRC:
   - Go to Inspect > Design Rule Checker.
   - Check for errors such as clearance violations, unconnected nets, and incorrect trace widths.

2. Fix Errors:
   - Address any errors or warnings identified by the DRC.
   - Re-run the DRC until no errors are found.

---

## Finalizing the PCB Layout
Before generating manufacturing files, perform a final review of the PCB layout.

1. Add Silkscreen Labels:
   - Use the Place Text tool to add labels for components, connectors, and test points.
   - Ensure the labels are clear and do not overlap with pads or vias.

2. 3D Visualization:
   - Use the 3D Viewer to inspect the PCB layout in 3D.
   - Check for component placement, mechanical clearances, and overall aesthetics.

3. Generate Manufacturing Files:
   - Go to File > Plot to generate Gerber files for all layers.
   - Generate drill files for plated and non-plated holes.
   - Create a ZIP file containing all manufacturing files.

---

## Summary
In this chapter, we designed the PCB layout for the ESP32-based IoT device. We placed components, routed traces, and performed a Design Rule Check to ensure the layout meets all requirements. The PCB layout is now ready for manufacturing, bringing the schematic design to life as a physical board. In the next chapter, we will cover the final steps of generating manufacturing files and preparing the design for production.

---

This chapter provides a comprehensive guide to PCB layout in KiCad, covering everything from component placement to finalizing the design. By following these steps, you’ll create a professional and functional PCB layout that is ready for manufacturing.