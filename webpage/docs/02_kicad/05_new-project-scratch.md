# Creating a New Project

In this section, we will cover how to create a new project from scratch in KiCad. Understanding how to start a project correctly is essential for a smooth workflow and project organization. We will also explore how KiCad automatically sets up project files and folders, giving you a clean environment to begin your PCB design.

## Creating a New Project from Scratch

KiCad offers two primary methods to start a new project: from scratch or from a template. In this lecture, we will focus on creating a new project from scratch. This is useful when you need full control over the project setup or when no suitable template is available for your specific design requirements.

### Steps to Create a New Project:

1. **Navigate to the File Menu**:
   - Open the KiCad **Project Manager**.
   - Click on `File` → `New Project` → `New Project`.

2. **Choose a Location for the Project**:
   - In the file explorer that pops up, select the directory where you want to save your project. It’s a good idea to create a dedicated directory for all your KiCad projects.
   - For this example, we will save the project in a folder named `KiCad Projects/Pro Third Edition`.

3. **Name Your Project**:
   - Enter a meaningful name for your project, such as `example_new_project`. This will help you easily identify the project later on.

4. **Create a New Folder for the Project**:
   - Ensure that the option **"Create a new folder for the project"** is selected. KiCad will automatically create a folder with the project name and save all associated files within that folder. This keeps your project organized and makes it easier to manage multiple projects.
   - If this option is not selected, you’ll need to create a folder manually before saving the project.

5. **Save the Project**:
   - Once you’ve chosen the location and name, click the **Save** button. KiCad will now create the project folder with the necessary files for you to begin.

## What Happens After Project Creation?

After saving, KiCad automatically generates several key files within your newly created project folder:

1. **Project File (`.KiCad_pro`)**:
   - This file contains important project information, such as design settings, paths, and project configurations. It is used to open and manage the project from the KiCad Project Manager.

2. **Schematic File (`.KiCad_sch`)**:
   - The schematic file is where you’ll create and manage the electrical schematic of your design. It is initially empty, waiting for you to begin placing components and creating connections.

3. **PCB Layout File (`.KiCad_pcb`)**:
   - This file will contain your PCB layout once you’ve designed it. Like the schematic file, it starts empty and will be populated as you place components and route traces.

### Inspecting the Project Files

KiCad stores its project files in human-readable text format. You can open these files in any text editor (e.g., Atom, Notepad++) to inspect their contents.

1. **Project File (`.KiCad_pro`)**:
   - This file includes the basic project metadata, design settings, and configurations. For example:
     ```text
     (project
       (name "example_new_project")
       (version "2024-10-19")
       (settings ...)
     )
     ```
   - It contains high-level information like the design rules, board settings, and tool configurations.

2. **Schematic File (`.KiCad_sch`)**:
   - The schematic file is initially a blank file that contains headers and basic formatting information, ready to be populated with components and connections. Example content:
     ```text
     (KiCad_sch
       (version 20211014)
       (generator eeschema)
       ...
     )
     ```

3. **PCB File (`.KiCad_pcb`)**:
   - The PCB layout file is similar in structure to the schematic file and contains all the board-specific information once you start designing your PCB. Initially, it’s a blank canvas ready for component placement and routing. Example content:
     ```text
     (KiCad_pcb
       (version 20211014)
       (host pcbnew)
       ...
     )
     ```

## Next Steps: Working in the Schematic Editor

With your project structure in place, you are now ready to begin designing your schematic. Here’s how to proceed:

1. **Open the Schematic Editor**:
   - In the KiCad **Project Manager**, click the **Schematic Editor** button or go to `Tools` → `Schematic Editor`.
   - The Schematic Editor is where you’ll add components, draw wires, and create the electrical connections necessary for your design.

2. **Start Designing the Schematic**:
   - Begin by placing components like resistors, capacitors, and integrated circuits from the symbol library.
   - Connect the components using wires and labels to define the electrical connections in your design.

## Preview: Creating a New Project from a Template

In the next section, we will explore how to create a new project using a template. Using templates can significantly speed up the project setup process, especially for designs that require specific configurations or layouts. Templates come pre-configured with standard components, layout preferences, and design rules, providing a solid starting point for your project. Stay tuned for the next lecture, where we will go through the process of creating a project from a template and discuss how to customize and manage templates in KiCad. This completes the step-by-step guide to creating a new project from scratch in KiCad. Following this process ensures that your project is organized and ready for schematic capture and PCB layout.