# Manufacturing Options and Gerber Files

Now that you've completed laying out your board in KiCad and are ready to bring your design to life, the next step is to manufacture the physical PCB. This lecture covers the most common options available for PCB manufacturing, as well as the process of preparing your design for production by exporting the necessary files. You'll learn about chemical etching (for DIY boards) and using professional PCB manufacturers, which is the recommended approach for most projects.

## Manufacturing Options for PCBs

### 1. **Chemical Etching (DIY)**
Chemical etching is a traditional method that allows you to manufacture your own PCB at home. However, this process involves handling hazardous chemicals and requires a controlled environment with good ventilation and protective equipment. Here's a quick overview of the steps involved:
- **Materials Required:** Muriatic acid, hydrogen peroxide, and other toxic chemicals.
- **Process:** You transfer the PCB layout to a copper-clad board, immerse the board in a chemical solution to etch away unwanted copper, and finally, clean and drill the board.
- **Safety Concerns:** This method can produce dangerous fumes and waste, so it's not recommended unless you have the proper setup and equipment. It’s also labor-intensive and error-prone.

While this method can be an interesting learning experience, I don’t recommend it due to the risks involved and the availability of much better alternatives—professional PCB manufacturing services.

### 2. **Professional PCB Manufacturing (Recommended)**
Using professional PCB manufacturers is the standard approach for most designers, whether you're creating boards for personal projects or commercial use. With the proliferation of low-cost PCB manufacturers and fast shipping options, it’s easier and more affordable than ever to get high-quality PCBs made to your exact specifications.

There are many PCB manufacturers around the world. China is home to some of the most popular low-cost options, but there are manufacturers in many countries offering similar services. Here are some notable manufacturers:

- **Oshpark:** Known for its simplicity, Oshpark is ideal for beginners. The ordering process is straightforward: you upload Gerber files (or sometimes KiCad PCB files directly), review the design in a user-friendly interface, and proceed with your order.
- **PCBWay:** This manufacturer offers more customization options, making it suitable for more advanced users. You can adjust everything from the board material and thickness to hole sizes, solder mask colors, and more.



## How to Order a PCB from a Manufacturer

### Example 1: Ordering from Oshpark
Oshpark simplifies the ordering process, making it a great choice for beginners. Here’s a step-by-step overview:
1. **Export Gerber Files from KiCad:** First, you’ll need to generate the Gerber files from KiCad, which contain all the information needed to manufacture your PCB.
2. **Upload the Gerber Files:** Upload the files to the manufacturer’s website. Oshpark allows you to simply drag and drop a .zip file containing your Gerber files.
3. **Review the Design:** Oshpark provides a visual preview of your PCB, allowing you to verify the layout before submitting it for manufacturing. This is your opportunity to catch any design defects.
4. **Place Your Order:** Once you’re satisfied with the design, proceed to place the order. For example, Oshpark offers three copies of a small PCB for around $13, making it an affordable option for small projects.

### Example 2: Ordering from PCBWay
PCBWay offers more extensive customization options, which are suitable for advanced users who need to tailor their board specifications:
1. **Set PCB Dimensions:** Measure your PCB’s dimensions in KiCad (e.g., 66.04mm x 25.95mm) and input them on PCBWay’s order page.
2. **Select Layer and Material Options:** Choose the number of layers (e.g., two-layer boards) and the material (e.g., standard FR4). PCBWay also allows you to select from advanced materials like aluminum or high-TG FR4 for specialized applications.
3. **Customize Further:** PCBWay lets you specify solder mask color, board thickness, minimum hole size, and more. You can adjust these settings to match your project’s requirements.
4. **Get a Quote and Order:** PCBWay provides real-time pricing based on your customizations, starting from $5 for a basic two-layer PCB. You can then proceed to place your order.



## Understanding Gerber Files

Gerber files are the industry standard for PCB manufacturing. These files contain all the data needed to fabricate your PCB, including the copper layers, solder mask, silkscreen, and drill information. When you finish your PCB layout in KiCad, you’ll export these Gerber files and send them to the manufacturer.

### What Do Gerber Files Include?
Each Gerber file corresponds to a different layer of the PCB:
- **Top Copper Layer (Front Copper):** Defines the copper traces on the top of the board.
- **Bottom Copper Layer (Back Copper):** Defines the copper traces on the bottom of the board.
- **Solder Mask (Top/Bottom):** Defines the areas where solder will be applied, protecting the rest of the board.
- **Silkscreen (Top/Bottom):** Contains labels, text, and graphics printed on the board.
- **Drill File:** Specifies the locations and sizes of holes for through-hole components and vias.

### How to Generate Gerber Files in KiCad
1. **Open PCBnew (KiCad’s Layout Editor):** Once your layout is complete, navigate to the Gerber file export tool.
2. **Select Layers:** Choose the layers you want to include in the export (e.g., front copper, back copper, silkscreen, etc.).
3. **Export the Files:** Generate the Gerber files and save them as a .zip file. This .zip file contains all the necessary files for the manufacturer.

### Gerber File Format
Gerber files are defined by a company called Ucamco, and they have evolved over the years. KiCad currently supports the **Gerber X2 format**, which offers improvements over earlier versions. While the technical details of the Gerber format are not crucial for this course, it’s good to know that Gerber files are human-readable and can be opened with any text editor or specialized viewer.



## Verifying Gerber Files

Before sending your Gerber files to a manufacturer, it’s a good idea to double-check them using a **Gerber viewer**. KiCad comes with a built-in Gerber viewer, which allows you to visually inspect the files and ensure that all layers are correctly aligned and free of errors.

- **Load the Gerber Files:** Open your Gerber files in KiCad’s Gerber viewer or another external viewer.
- **Inspect the Layers:** Review each layer (e.g., front copper, back copper) to ensure that everything looks correct. This step helps catch issues like missing traces, overlapping components, or incorrect drill locations.



## Conclusion

When you’ve finished laying out your PCB, you have two main options for manufacturing: **DIY chemical etching** or **professional PCB manufacturing**. The DIY approach, while educational, is not recommended due to the risks and complexity involved. Instead, using a professional manufacturer is faster, safer, and often cheaper for small to medium-sized projects.

You’ll typically use **Gerber files** to send your design to a manufacturer, but some manufacturers (like Oshpark) may also accept KiCad project files directly. By using manufacturers like Oshpark or PCBWay, you can create high-quality PCBs with minimal hassle, and as you gain experience, you’ll have access to more advanced customization options.
