# PCB Design Process

In this lecture, we will walk through the PCB design process from a high-level perspective, focusing on the major steps involved in turning an electronic concept into a functional printed circuit board (PCB). This process involves both technical and aesthetic considerations. While designing a PCB is fundamentally an engineering discipline, it also incorporates aspects of artistry, as each design reflects the personal style and preferences of the designer. Over time, your PCB designs will start to look uniquely yours.

Designing a PCB is quite different from PCB manufacturing. As a PCB designer, your task is to create detailed plans and specifications that a manufacturer will use to physically produce the PCB. Thus, it’s important to design a board that not only meets the functional requirements of your project but also adheres to the manufacturing capabilities and limitations of your chosen fabrication partner.

### Key Points to Remember:
- **Quality and Manufacturability:** Your design should be optimized for functionality, safety, and manufacturability. It's essential to understand the limitations of your manufacturer’s processes to ensure your PCB is buildable.
- **Personal Choice and Iteration:** Designing a PCB involves iteration, decision-making, and creativity. You’ll refine your design as you move through the process, building both your skills and your unique style.

This course will guide you through the **KiCad PCB design workflow**, a model I've developed from experience and best practices in the field. You can follow this workflow or adapt it to suit your own preferences. The workflow is split into two primary steps: **schematic design** and **layout design**.

## High-Level PCB Design Workflow

### Step 1: Schematic Design

The schematic design phase is where you capture the functional representation of your circuit. This step involves creating an electronic schematic diagram that represents the connections and components of your circuit.

**Goal of Schematic Design:**  
To capture the detailed information about the circuit you’re designing, which will later be used to create the physical PCB layout.

**Tools Used:**
- **Eeschema (KiCad's Schematic Editor):** The schematic editor in KiCad where you’ll build your circuit diagram using symbols that represent various components.

### Step 2: PCB Layout Design

Once you’ve completed the schematic, the next step is to transfer that information into the **PCB layout editor**, where you will create the physical design of the board.

**Goal of PCB Layout Design:**  
To create a physical layout of the PCB, including the placement of components, routing of traces, and defining the board's dimensions.

**Tools Used:**
- **PCBnew (KiCad's Layout Editor):** This is where you define the physical layout, place the components, and draw the traces that connect them.

## Detailed PCB Design Workflow

Let’s break down the key steps in the PCB design process:

### 1. **Schematic Capture in Eeschema**
This is the first and most critical step in the design process. In **Eeschema**, you create the schematic by selecting symbols from KiCad’s extensive component library. Each symbol represents an electronic component, such as resistors, capacitors, ICs, etc.

- **Add Components:** Place symbols for the components of your circuit onto the schematic sheet.
- **Connect Components:** Draw electrical connections (wires) between components to represent the circuit design.
- **Add Custom Symbols:** If the required component symbol isn’t in the library, you can create it manually using the **Symbol Editor**.

### 2. **Running Electrical Rules Check (ERC)**
Before moving to layout design, run the **Electrical Rules Check (ERC)** in Eeschema. This tool detects any design errors, such as unconnected pins or inconsistent signals, that could cause problems later.

### 3. **Footprint Assignment**
Once your schematic is complete and has passed the ERC, you need to associate each schematic symbol with a **footprint**. A footprint is the physical representation of a component on the PCB, containing information about pad locations and dimensions.

- **Footprint Selection:** Many components already have footprints associated with them in KiCad. However, some components may require you to manually assign or create a footprint, especially if they are custom or non-standard parts.
- **Custom Footprints:** If a footprint does not exist in the library, you can create one using the **Footprint Editor**.

### 4. **PCB Layout in PCBnew**
After assigning footprints, you transfer the schematic to the **PCB layout editor (PCBnew)** to begin the layout design.

- **Component Placement:** Position the footprints on the board. Consider factors like signal integrity, manufacturability, and ease of assembly when placing components.
- **Outline and Mechanical Elements:** Define the board’s outline, including its shape, size, and any mounting holes.
- **Trace Routing:** Connect the pins of your components using copper traces. You’ll use **interactive routing tools** to place traces while adhering to design rules.
- **Copper Zones:** Add copper fills for power planes, such as ground or power layers, which help reduce resistance and provide shielding.

### 5. **Design Rule Check (DRC)**
Once you’ve completed the layout, it’s important to run the **Design Rule Check (DRC)** in PCBnew. This tool checks for violations, such as traces being too close to each other, overlapping components, or unconnected nets.

### 6. **Exporting Gerber Files**
After your PCB passes the DRC, the final step is to export the design for manufacturing. The **Gerber files** generated by KiCad contain the information needed to manufacture the PCB, including the layout for each layer, drilling information, and solder mask definitions.

- **Gerber Files:** Each layer of your PCB (e.g., top copper, bottom copper, silkscreen, solder mask) is exported as a separate Gerber file.
- **Drill Files:** A file that defines the locations and sizes of holes (vias, component holes) that need to be drilled.
- **Bill of Materials (BOM):** A BOM file lists all components used in the design, including their part numbers, values, and footprints. This file is essential for ordering components from suppliers.

## PCB Design and Aesthetic Considerations

Designing a PCB isn’t just about making the board functional; there is an artistic element to it as well. Over time, as you develop your skills, you’ll likely notice your boards taking on a personal aesthetic. Some designers focus on neat, symmetrical layouts, while others might prioritize compactness and minimalism. Here are some considerations that will help improve both the functionality and the visual appeal of your boards:

### 1. **Component Placement**
Strategic component placement is crucial for both functionality and aesthetics. Group related components together to create clean, intuitive layouts. This also improves manufacturability and makes troubleshooting easier.

### 2. **Routing Cleanliness**
Aim for neat, orderly trace routing. Avoid sharp angles or long, looping traces. When possible, route traces orthogonally (90-degree angles) or use smooth curves for high-speed signals. This not only improves signal integrity but also makes the board look professional.

### 3. **Silkscreen Clarity**
Use silkscreen to clearly label components, pins, and any critical information that the end user might need. However, avoid over-cluttering the board. Use concise labels and make sure they are placed where they will be visible once the components are soldered.

## Key Terminology Recap

Before moving on to the next lecture, here’s a recap of some important terms:

- **Symbol:** A symbolic representation of an electronic component in the schematic. It shows the component’s function but not its physical layout.
- **Footprint:** The physical representation of a component on the PCB layout. It defines where the pads, holes, and pins are located on the board.
- **Trace:** The copper line on a PCB that carries electrical signals between components.
- **Via:** A small hole that connects different layers of a multi-layer PCB.
- **Silkscreen:** A printed layer on the PCB that provides information, such as component labels and logos, for assembly and usage.
- **Gerber File:** The industry-standard file format used to send PCB designs to manufacturers for fabrication.

## Conclusion

The PCB design process is both a technical and creative journey. You’ll follow a procedural workflow, but as you gain experience, you’ll develop your unique style. The two main stages—schematic design and PCB layout—are supported by powerful tools in KiCad, and this course will guide you through using these tools to create your own boards. Once your layout is complete and verified, you’ll be ready to send your design to a manufacturer for fabrication.