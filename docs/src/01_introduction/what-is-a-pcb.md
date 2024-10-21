# PCB Components and Terminology

In this part of the course, I want to share how my curiosity for electronics led to a deep fascination with the components and technology behind printed circuit boards (PCBs). In this lecture, we'll take a closer look at a few examples of PCBs to understand their features and the terminology used to describe them. This foundational understanding is crucial as we move forward in the course to explore the more technical aspects of PCB design and manufacturing.

## PCB Features and Key Terminology

### 1. **Through-Hole Components**
When you look at a PCB, one of the first things you'll notice is the presence of **holes**. These holes are designed for **through-hole components**, which are components with long leads or pins that pass through the board. These components are inserted into the holes and then soldered to pads on the opposite side of the board, securing them in place and ensuring an electrical connection.

Examples of through-hole components include resistors, capacitors, and connectors. These components are larger than surface-mount components and are often used in projects that require durability or easy replacement of parts.

### 2. **Surface-Mount Devices (SMDs)**
In contrast to through-hole components, **Surface-Mount Devices (SMDs)** are placed directly onto the surface of the PCB and do not require holes. They are mounted onto **pads**, which are flat areas of copper where the SMDs are soldered in place. Because SMDs are typically much smaller than through-hole components, they are commonly used in modern electronics, where space is at a premium.

Some SMDs are so tiny that placing them manually can be very challenging. Automated machines (robots) are usually employed to handle the precision placement and soldering of these components. However, there are larger SMD components that can be manipulated manually using tweezers, which is something you'll learn to do in the later projects of this course.

### 3. **Traces and Tracks**
The thin **lines** you see running across the PCB are called **traces** or **tracks**. These lines are made of copper and serve as the electrical pathways that connect various components. They play a critical role in enabling communication and power distribution between different parts of the circuit.

Traces can vary in width, depending on the current they are designed to carry. In many cases, the traces are covered by a **solder mask**, which protects them from oxidation and environmental damage.

### 4. **Solder Mask**
The colored coating you see on most PCBs (green, purple, red, etc.) is called the **solder mask**. This layer not only gives the PCB its color but also serves an important protective function. The solder mask prevents copper traces from oxidizing, which can degrade the performance of the circuit over time. It also helps to prevent accidental solder bridges between adjacent pads during the soldering process.

The solder mask exposes only the areas where components are soldered, leaving the rest of the board covered for protection.

### 5. **Silkscreen**
The **silkscreen** is the white (or sometimes other colors) layer printed on top of the solder mask. It contains important information about the components and the board itself. The silkscreen may include component values, designators (e.g., R1 for resistors, C1 for capacitors), and helpful labels for the user.

For example, in some of the projects in this course, you'll see how the silkscreen provides details about the function of specific pins or headers on a board. This is especially useful during both assembly and usage of the PCB, helping users understand the roles of different components and connections.

### 6. **Vias**
**Vias** are small holes that allow traces to connect between different layers of a multi-layer PCB. Vias are essential for complex designs where electrical connections must be made across different layers. A via is typically filled with metal (usually copper) to maintain electrical conductivity.

Vias can be placed on two-layer boards to connect the front and back, or on multi-layer boards to link various internal layers.

### 7. **Copper Layers**
Most PCBs consist of multiple layers of copper that are used for routing electrical signals. In a two-layer board, you have one copper layer on the top and one on the bottom. In multi-layer PCBs, you may have additional copper layers sandwiched between the top and bottom.

A **copper fill** (or copper pour) refers to large areas of the PCB that are filled with copper instead of being routed with individual traces. Copper fills are typically used for power or ground planes to reduce resistance and improve electrical performance.

### 8. **Thermal Reliefs**
When connecting a pad to a large copper area (like a ground plane), it's common to use **thermal reliefs**. These are small connections that isolate the pad from the copper area to prevent heat dissipation issues during soldering. Without thermal reliefs, soldering the component could be more difficult, as the heat might be spread too quickly into the copper plane.

## Example PCB Breakdown

Now that we've covered the basic terminology, let's take a closer look at a few example PCBs and highlight the features we’ve discussed.

### Example 1: Breadboard Power Supply PCB
In this project, you’ll create a **breadboard power supply**, which provides a regulated 5V output for Arduino or other electronic projects. The PCB is simple, but it contains the essential features of through-hole components, copper traces, and a silkscreen that labels the different pins and connections.

- **Through-Hole Components:** The larger holes are for components like capacitors and voltage regulators that will be inserted through the board.
- **Traces:** Copper traces route power and signals between components.
- **Silkscreen:** Labels on the board help identify the input and output pins, as well as the placement of various components.

### Example 2: Raspberry Pi Zero PCB
The Raspberry Pi Zero is a modern example of a PCB that predominantly uses **SMD components**. SMD resistors and capacitors are much smaller than their through-hole counterparts, allowing for a compact design.

- **SMD Components:** Tiny resistors and capacitors are placed on the surface of the board and soldered to the pads. In large-scale manufacturing, robots place these components precisely.
- **Traces and Vias:** The board uses multiple layers with vias to route signals between the top and bottom layers.
- **Solder Mask:** The purple solder mask protects the copper traces from environmental damage.

### Example 3: Multilayer Board with Copper Fill
In more advanced designs, such as a 4-layer MCU data logger, you'll work with **multi-layer PCBs** that contain additional copper layers for power and ground planes. These copper fills provide several benefits:
- **EMI Protection:** The copper layers help shield the circuit from electromagnetic interference.
- **Thermal Management:** Copper fills can help dissipate heat generated by high-power components.
- **Simplified Routing:** The internal copper layers allow for easier routing of signals without crowding the top and bottom layers.

## Conclusion

Understanding the various components and features of a PCB is fundamental to mastering the design process. We've covered key terminology, including through-hole and surface-mount components, traces, vias, solder masks, and silkscreening. In the next section, we'll explore the **PCB design process** in more detail, where you will apply this knowledge to create your own PCBs using KiCad.