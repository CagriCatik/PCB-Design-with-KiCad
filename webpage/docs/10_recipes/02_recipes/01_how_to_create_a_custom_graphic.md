# Creating Custom Graphics

Custom graphics can be an excellent way to personalize your PCB design by adding logos, symbols, or decorative elements to the silk screen or copper layers. This documentation outlines the process of creating a custom graphic in KiCad using the integrated bitmap-to-component converter. The steps include preparing the image, converting it to the required format, and incorporating it into the PCB design.

---

## Step 1: Image Preparation

1. **Select an Image**  
   - Start with the image you want to use as a graphic (e.g., a logo). Ensure it is in a common format such as PNG or JPEG.  
   - The image should ideally have clear boundaries and minimal colors for easier conversion.

2. **Convert the Image to Monochrome**  
   - KiCad’s bitmap-to-component converter supports only monochrome images. Use an online or local image converter to transform your image into a monochrome bitmap.  
   - Adjust the black-and-white threshold during conversion to achieve the desired balance of details in the output. Trial and error may be needed to find the optimal threshold.

---

## Step 2: Converting the Image in KiCad

1. **Open the Bitmap-to-Component Converter**  
   - Launch KiCad and open the image converter tool from the main KiCad window (found under the "Tools" menu as `Image Converter`).

2. **Load the Monochrome Bitmap**  
   - Click on `Load Bitmap` and select the prepared monochrome image.  
   - Preview the image under the "Original Picture" tab. Ensure the image appears correctly under the "Black and White Picture" tab by selecting this mode.

3. **Set the Dimensions**  
   - Use measurement tools in the PCB layout editor to determine the desired size of the graphic on the PCB.  
   - Input the width or height in the converter, ensuring the aspect ratio remains locked. The bitmap preview will adjust automatically.

4. **Output Format and Layer Selection**  
   - Choose `KiCad .mod` as the output format, which converts the bitmap into a footprint file.  
   - Select the target layer:
     - **Front/Back Silkscreen**: For visible graphics on the board.  
     - **Front/Back Copper**: For conductive graphics.
     - **Solder Mask**: For customized solder mask openings.

5. **Apply Additional Settings**  
   - Adjust the black-and-white threshold to fine-tune the converted image.  
   - Enable or disable the "Negative" option depending on whether you want the image’s colors inverted (white background with black details or vice versa).

6. **Export the File**  
   - Save the graphic footprint with a descriptive name (e.g., `Logo_10mm_Positive.mod`).

---

## Step 3: Adding the Graphic to the PCB Layout

1. **Load the Footprint in PCB Editor**  
   - Open the PCB layout editor (`Pcbnew`).  
   - Use the footprint chooser to locate and load the custom graphic footprint.

2. **Place the Graphic on the PCB**  
   - Position the graphic on the desired layer (e.g., front silkscreen).  
   - Optionally, place the same graphic on the back by flipping it.

3. **Adjustments and Verification**  
   - Remove unnecessary reference designators and values associated with the footprint if they are not needed.  
   - Verify the placement and appearance in the 3D viewer to ensure the graphic aligns with your design intentions.

---

## Step 4: Testing Variations and Refinement

1. **Test Different Layers**  
   - Repeat the export process for placing the graphic on other layers (e.g., copper or solder mask).  
   - Ensure that you rename the files appropriately to distinguish between layer types (e.g., `Logo_10mm_Copper.mod` or `Logo_10mm_Silkscreen_Negative.mod`).

2. **Preview in the 3D Viewer**  
   - Use the 3D viewer to visualize the final result. Confirm that the graphic appears as intended with proper visibility, alignment, and size.

3. **Addressing Issues**  
   - If the graphic does not appear correctly (e.g., due to incorrect layer selection), revisit the settings in the converter and re-export.  
   - Check for accidental placement on unintended layers and correct as needed.

---

## Key Considerations

- **Monochrome Image Requirement**: Always use black-and-white images, as KiCad does not support grayscale or colored bitmaps.
- **Sizing**: Use precise measurements for consistent integration with the PCB design.
- **Layer Compatibility**: Choose the appropriate layer (silkscreen, copper, or solder mask) based on the intended function and visibility of the graphic.
- **File Management**: Maintain clear and consistent naming conventions for exported footprint files to avoid confusion during the design process.

By following these steps, you can effectively create and integrate custom graphics into your KiCad PCB projects, enhancing the visual appeal and branding of your designs.