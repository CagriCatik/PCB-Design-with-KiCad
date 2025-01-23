# Schematic and PCB Editors

In this lecture, we’ll dive into the practical use of KiCad by exploring its core applications—the **Schematic Editor (Eeschema)** and the **PCB Editor (PCBnew)**. These tools are the heart of KiCad’s design workflow, where you’ll build your circuit and lay out your printed circuit board (PCB).

To illustrate this process, we’ll use an example project from the **KiCad demo repository**, which is available on GitLab. The example project we’ll be working with is the **PIC Programmer**, a moderately complex project that demonstrates many of KiCad’s key features.

## Setting Up an Example Project in KiCad

### Step 1: Accessing the Demo Repository

KiCad provides a set of demo projects to help users learn by example. These demos are often included in the installation package, but if you don’t have them, you can download them from the **KiCad GitLab repository**. Here's how to do it:
1. Go to the KiCad demo repository on GitLab.
2. Download the demo files by clicking the **blue download button** and selecting either **ZIP** or **tar.gz**.
3. Once downloaded, extract the files and place them in your projects directory for easy access.

### Step 2: Opening the Project

For this example, I’ve chosen the **PIC Programmer** project. The folder contains several KiCad project files:
- `KiCad_pro`: The main project file, which holds information about the overall project.
- `KiCad_pcb`: This file contains the layout information for the PCB.
- `KiCad_sch`: The schematic file that contains the circuit design.

To open the project in KiCad:
- You can **double-click the `.pro` file** or drag and drop it into the KiCad main window. This will open the project as a whole, allowing you to access both the schematic and PCB layout from within the same interface.



## Exploring the Schematic Editor (Eeschema)

Once the project is open, you can start by exploring the **Schematic Editor**. In KiCad, this is known as **Eeschema**, and it’s where you’ll design the circuit itself.

### Step 1: Navigating the Interface

- **Toolbars and Status Bar:** The Schematic Editor’s interface consists of a top toolbar, side toolbars, and a status bar at the bottom. The status bar provides real-time information about the schematic and design state.
- **Mouse Navigation:** Use your mouse’s scroll wheel to zoom in and out of the schematic. Pressing the scroll wheel also allows you to **pan** around the sheet. For example, I use a **Logitech MX Master 3**, which has a scroll wheel that makes it easy to navigate.

### Step 2: Exploring Components and Connections

As you navigate the schematic, you’ll see common components such as resistors, capacitors, transistors, and amplifiers. Green lines represent the electrical connections (wires) between the components, and junctions indicate where connections meet.

- **Selecting Components:** Click on any component to highlight it. For example, clicking on a transistor will select the entire symbol along with its text attributes.
- **Component Properties:** Double-click a component to view its properties. This brings up a dialog where you can see attributes like its **footprint association**, reference designator, and value. You can also control which attributes (such as footprint) are visible on the schematic, which helps to declutter busy designs.

### Step 3: Navigating Hierarchical Schematics

Many projects, especially complex ones, break the schematic into multiple sheets. The PIC Programmer uses a **hierarchical schematic**, which splits the design into different sections for easier management.

- **Navigating Between Sheets:** Double-click a hierarchical box to open another schematic sheet within the same project. You can also use the **Schematic Hierarchy** pane (left toolbar) to switch between different sheets.
- **Viewing Symbol Properties Quickly:** New in KiCad 8, you can enable the **Properties Manager** pane. This allows you to see properties for any component without opening a separate dialog box. Simply click on a symbol, and its properties will be displayed in the pane on the left.

## Exploring the PCB Layout Editor (PCBnew)

After completing the schematic, the next step is to transfer the design to the **PCB Layout Editor** (PCBnew). This is where you’ll physically arrange the components and draw the copper traces that connect them.

### Step 1: Navigating the Interface

- **Toolbars and Appearance Pane:** The PCB Editor interface is similar to the Schematic Editor, with toolbars at the top and sides, and a status bar at the bottom. The **Appearance Pane** on the right allows you to control the visibility of different PCB layers, making it easier to manage complex designs.
- **Mouse Navigation:** As with the Schematic Editor, you can zoom and pan using your mouse scroll wheel. The right-click menu provides access to additional context-specific tools.

### Step 2: Managing Layers and Components

The PCB Layout Editor allows you to toggle layers, manage component footprints, and route traces:
- **Layer Management:** You can control the visibility of individual layers using the **Appearance Pane**. For example, you can hide the **copper layer** to reduce visual clutter or isolate specific layers for focused work.
- **Component Placement:** Use the mouse to move, rotate, and place components on the board. You can manually drag components or use automatic alignment tools.
- **Routing Traces:** Click on traces to select them. You can use the **Selection Filter** to work more precisely by enabling only the types of objects you want to interact with, such as footprints or traces.

### Step 3: Working with Configurable Options

Every aspect of the PCB design is configurable. For example:
- **Trace Width:** You can adjust the trace width based on the current-carrying capacity of the circuit. Simply click on a trace and change its width via the properties menu.
- **Pad and Hole Sizes:** You can modify the size and position of pads, holes, and vias to suit your design requirements. For example, you might adjust the diameter of a mounting hole to fit a specific screw.

### Step 4: Viewing the 3D Model

One of the standout features of KiCad is the **3D Viewer**, which allows you to visualize your PCB in three dimensions. This is particularly useful for checking the physical arrangement of components and ensuring that the design looks and functions as intended.

- **Opening the 3D Viewer:** Click the **3D Viewer** button on the top toolbar. The viewer provides a realistic view of your PCB, showing the components, silkscreen, and board outline.



## Integration Between Schematic and PCB Editors

KiCad tightly integrates its **Schematic Editor** and **PCB Editor**, allowing you to easily navigate between the two environments:
- **Cross-Referencing:** Clicking on a component in the schematic will automatically highlight the corresponding component in the PCB layout, and vice versa. For example, selecting a capacitor in the Schematic Editor will focus on that component in the PCB Editor.
- **Real-Time Updates:** Any changes you make to the schematic, such as adding or removing components, will reflect in the PCB layout once the design is updated.



## Exploring More KiCad Projects

While this course focuses on beginner-to-intermediate-level projects, KiCad is capable of handling much more complex designs. I encourage you to explore additional projects in the KiCad demo repository to see what’s possible. You can also visit KiCad’s **Made with KiCad** page to see real-world projects developed by engineers and hobbyists using the tool.

Some projects demonstrate KiCad’s capabilities for high-density and high-complexity designs, far beyond the scope of this course. By reviewing these projects, you’ll gain a better understanding of how advanced users apply KiCad’s features in professional applications.



## Conclusion

In this lecture, we explored two of KiCad’s most important applications: **Eeschema** (the Schematic Editor) and **PCBnew** (the PCB Layout Editor). We walked through the basics of opening and navigating a project, placing components, routing traces, and viewing the board in 3D. As you continue through this course, you’ll use these tools extensively to design your own projects, starting with simple circuits and gradually building up to more advanced layouts.