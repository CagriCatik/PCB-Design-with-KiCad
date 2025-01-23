# Generating Manufacturing Files

Once the PCB layout is complete and all design checks have been performed, the next step is to generate the files required for manufacturing. These files, often referred to as Gerber files and drill files, provide the manufacturer with all the necessary information to produce the PCB. This chapter walks you through the process of generating manufacturing files in KiCad 7, ensuring your design is ready for production.

---

## Understanding Manufacturing Files
Manufacturing files are standardized formats used by PCB manufacturers to fabricate and assemble your board. The key files include:

1. Gerber Files:
   - Top and Bottom Copper Layers: Define the copper traces on the top and bottom layers.
   - Top and Bottom Solder Mask Layers: Define where solder mask is applied to protect the board.
   - Top and Bottom Silkscreen Layers: Define the text and symbols printed on the board.
   - Board Outline (Edge Cuts): Defines the physical shape of the PCB.

2. Drill Files:
   - Plated Holes: For vias and through-hole components.
   - Non-Plated Holes: For mounting holes or other non-electrical holes.

3. Bill of Materials (BOM):
   - Lists all components required for assembly, including reference designators, values, and footprints.

4. Assembly Drawings:
   - Provide visual guidance for component placement during assembly.

---

## Generating Gerber Files
Gerber files are the most critical files for PCB fabrication. Here’s how to generate them in KiCad:

1. Open the Plot Dialog:
   - In the PCB Editor, go to File > Plot.
   - The Plot window will open, allowing you to configure the Gerber file generation.

2. Select Layers to Plot:
   - Choose the layers to include in the Gerber files. For a standard 4-layer board, the following layers are required:
     - Top Copper (F.Cu)
     - Bottom Copper (B.Cu)
     - Top Solder Mask (F.Mask)
     - Bottom Solder Mask (B.Mask)
     - Top Silkscreen (F.SilkS)
     - Bottom Silkscreen (B.SilkS)
     - Board Outline (Edge.Cuts)

3. Configure Gerber Options:
   - Set the Output Directory where the files will be saved.
   - Ensure the Gerber Format is set to RS-274X (the most widely used format).
   - Enable Exclude PCB Edge Layer from Other Layers to ensure the board outline is correctly defined.

4. Generate Gerber Files:
   - Click Plot to generate the Gerber files.
   - After plotting, click Generate Drill Files to create the drill files (explained in the next section).

---

## Generating Drill Files
Drill files specify the location and size of all holes on the PCB, including vias and mounting holes.

1. Open the Drill File Dialog:
   - After generating Gerber files, click Generate Drill Files in the Plot window.

2. Configure Drill File Options:
   - Set the Drill File Format to Excellon (the standard format for drill files).
   - Ensure Mirror Y Axis is disabled unless specified by your manufacturer.
   - Select Generate Separate Files for Plated and Non-Plated Holes.

3. Generate Drill Files:
   - Click Generate Drill Files to create the necessary files.
   - The files will be saved in the same directory as the Gerber files.

---

## Generating the Bill of Materials (BOM)
The BOM lists all components required for assembling the PCB. Here’s how to generate it in KiCad:

1. Open the BOM Generator:
   - In the Schematic Editor, go to Tools > Generate Bill of Materials.

2. Configure BOM Settings:
   - Choose a BOM template or use the default settings.
   - Include the following fields in the BOM:
     - Reference Designator (e.g., R1, C1, U1)
     - Value (e.g., 10kΩ, 100nF)
     - Footprint (e.g., 0805, QFN-24)
     - Quantity (number of each component)

3. Generate the BOM:
   - Click Generate to create the BOM file.
   - Save the file in a common format (e.g., CSV or Excel) for easy sharing with manufacturers.

---

## Generating Assembly Drawings
Assembly drawings provide visual guidance for placing components on the PCB during assembly.

1. Create Assembly Drawings:
   - In the PCB Editor, go to File > Plot.
   - Select the Top and Bottom Assembly Layers (e.g., F.Fab, B.Fab).
   - Generate Gerber files for these layers.

2. Add Reference Designators:
   - Ensure all component reference designators are visible on the assembly layers.
   - Use the Place Text tool to add labels if necessary.

3. Include Layer Views:
   - Provide layer views (e.g., top, bottom) to help the manufacturer identify component placement.

---

## Creating a ZIP File for Manufacturing
To simplify the submission process, compile all manufacturing files into a single ZIP file.

1. Organize Files:
   - Ensure all Gerber files, drill files, BOM, and assembly drawings are in the same directory.

2. Create a ZIP File:
   - Select all the files, right-click, and choose Compress or Add to Archive.
   - Name the ZIP file appropriately (e.g., `IoT_Thing_V1.0_Gerber.zip`).

3. Verify the ZIP File:
   - Open the ZIP file to ensure all necessary files are included.
   - Double-check that the files are correctly named and formatted.

---

## Final Checks Before Submission
Before sending the files to the manufacturer, perform a final review to ensure everything is correct.

1. Verify Gerber Files:
   - Use a Gerber viewer (e.g., KiCad’s GerbView or online tools) to inspect the files.
   - Check for missing layers, incorrect traces, or misaligned components.

2. Verify Drill Files:
   - Ensure all holes are correctly defined and match the PCB layout.

3. Verify BOM:
   - Cross-check the BOM with the schematic to ensure all components are listed.

4. Manufacturer’s Guidelines:
   - Confirm that the files comply with the manufacturer’s requirements (e.g., file formats, layer naming conventions).

---

## Summary
In this chapter, we generated the manufacturing files required to produce the ESP32-based IoT device PCB. We covered the creation of Gerber files, drill files, BOM, and assembly drawings, as well as compiling them into a ZIP file for submission. With these files ready, your design is prepared for fabrication and assembly. In the next chapter, we will discuss the manufacturing process and how to assemble the board.

---

This chapter provides a comprehensive guide to generating manufacturing files in KiCad. By following these steps, you’ll ensure that your PCB design is accurately translated into a physical board, ready for production.