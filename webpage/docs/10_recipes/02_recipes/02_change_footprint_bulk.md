# Changing Footprints in Bulk Using Pcbnew

Bulk editing of footprints is a highly efficient way to update multiple components in KiCad's PCB layout editor, Pcbnew. This method can save significant time compared to editing individual components. This guide explains how to change footprints in bulk and demonstrates how to update all instances of a given footprint with a new one.

---

## Step 1: Identifying the Target Footprint

1. **Understand the Existing Footprint**  
   - Open the Pcbnew layout editor and inspect the footprints you want to change.
   - Note the library identifier of the current footprint. You can find this in the footprint properties or by hovering over the component and using the `E` key to edit.

2. **Determine the New Footprint**  
   - Decide on the new footprint to apply. Ensure it matches the intended specifications, such as dimensions, pad layout, and type.

---

## Step 2: Changing a Single Footprint (Optional)

Before performing a bulk change, you may want to test the replacement on a single component to verify the appearance and compatibility of the new footprint.

1. **Edit Footprint Properties**  
   - Select a component and press `E` to open its properties.
   - In the "Footprint" field, click on `Change Footprint`.
   - Use the Footprint Library Browser to locate the desired replacement. Double-click to select it.

2. **Apply the Change**  
   - Confirm the new footprint and click `OK`.
   - Check the updated footprint in the layout to ensure it meets your requirements.

---

## Step 3: Bulk Changing Footprints

1. **Open the Bulk Change Dialog**  
   - In Pcbnew, go to the `Edit` menu and select `Change Footprints`.

2. **Configure the Bulk Change**  
   - In the "Change Footprint" dialog, set the following options:
     - **Filter Existing Footprint**: Use the library identifier of the current footprint. This ensures only the targeted components are affected.
     - **Select New Footprint**: Specify the new footprint using one of these methods:
       - Type the library identifier manually if known.
       - Use the Footprint Library Browser to navigate and select the replacement footprint.

3. **Verify and Adjust Options**  
   - Ensure that any additional settings, such as reference designators or values, are configured as needed.
   - Typically, you will only change the footprint, leaving other fields like the reference unchanged.

4. **Apply the Change**  
   - Click `Change` to update all matching footprints in the PCB layout.

---

## Step 4: Validation and Adjustment

1. **Inspect the Changes**  
   - Review the updated layout to ensure all footprints were changed correctly.
   - Use the 3D viewer to verify alignment and appearance if necessary.

2. **Correct Misplacements**  
   - If any footprints appear misaligned or incorrectly placed, adjust their positions manually.

---

## Example Use Case: Updating Resistors

1. **Scenario**  
   - You have resistors using a US-style symbol and want to replace them with the European-style symbol.

2. **Steps**  
   - Open the schematic and identify the library identifier for the US-style resistor.
   - Use the "Change Symbols" or "Change Footprints" dialog to replace all instances of the US-style resistor with the European-style resistor in bulk.

3. **Validation**  
   - After the change, verify that all resistors have been updated and that no other components were unintentionally modified.

---

## Additional Tips

- **Use Filters**: When applying bulk changes, always double-check the filter to avoid unintentionally modifying unrelated components.
- **Backup Your Work**: Create a backup of the project before making bulk changes to ensure you can revert if needed.
- **Footprint Library Organization**: Keep your custom footprints organized in dedicated libraries for easy access and management.

By following this procedure, you can efficiently update footprints in your PCB layout, ensuring consistency and reducing manual effort. This method is particularly useful when transitioning to new libraries or standardizing designs across multiple components.