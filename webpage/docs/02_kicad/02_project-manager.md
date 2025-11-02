# Project Manager

In this section, we delve into the **KiCad Project Manager**, the central hub for managing your PCB design projects. This guide will explain how the Project Manager operates, its interface, and how to utilize its tools effectively for intermediate and advanced PCB designers.

## Overview of the KiCad Project Manager

When you first open KiCad, the **Project Manager** is the main window you’ll see. It serves as the gateway to all of KiCad's individual applications, such as the **Schematic Editor**, **PCB Editor**, and **Footprint Editor**, and gives you access to your project files.

### Key Features of the KiCad Project Manager:
1. **Access to Applications**: Quick links to open KiCad’s applications like Eeschema (Schematic Editor), Pcbnew (PCB Editor), Footprint Editor, Gerber Viewer, and more.
2. **File Management**: Displays project directories and allows easy access to manage your files directly.
3. **Toolbar Functions**: Provides convenient actions like creating new projects, opening existing ones, refreshing the file view, and accessing project folders.

## Opening a KiCad Project

Once KiCad is installed and running, loading a project is straightforward:

1. **File Menu**: 
   - Navigate to `File` → `Open Project`.
   - Locate the project directory, select the file with the `.pro` extension, and double-click it to open.

2. **Drag-and-Drop**: 
   - Alternatively, you can drag and drop the `.pro` file directly into the KiCad window to load it.

### Demonstration Example:
If you close a project, simply drag the project file back into the main window, or open it via the file menu to reload it.

## The KiCad Project Manager Interface

Let’s break down the user interface of the **Project Manager**.

### 1. **Left Toolbar**
The left-hand toolbar provides access to common operations:
- **New Project**: Create a new KiCad project (also available from the `File` menu).
- **Open Project**: Open an existing project.
- **Archive/Unarchive Projects**: Bundle your project into a ZIP file for sharing or backup.
- **Refresh**: If you add new files or directories externally, use this button to refresh the project view in KiCad.
- **Open Project Folder**: This opens the project’s directory in your file browser, giving you direct access to all project files.

### 2. **Project Files Pane**
The right pane shows all the files and folders in your project directory. This includes:
- **Custom Libraries**: You can create folders for symbols, footprints, and models specific to your project. Custom libraries can be stored here and will appear in this window.
- **Project-Specific Files**: All project-related files are displayed, including schematics (`.sch`), PCB files (`.KiCad_pcb`), and configuration files.

#### Best Practice:
Organize your project files by creating subdirectories for custom libraries (symbols, footprints) and documentation. This helps maintain a clear structure, especially in larger projects.

### 3. **Application Launch Buttons**
In the main window, there are buttons that launch KiCad’s core applications:
- **Schematic Editor**: For creating and editing schematics.
- **PCB Editor**: For laying out the physical PCB.
- **Footprint Editor**: Customize and manage component footprints.
- **Gerber Viewer**: View and inspect manufacturing files.
- **Other Tools**: Additional utilities such as the Image Converter, Drawing Sheet Editor, and Calculator Tools.

You can also access these applications through the **Tools** menu at the top.

## Menu Breakdown

### 1. **KiCad Menu**
The `KiCad` dropdown at the top left gives you access to:
- **Version Information**: Displays comprehensive details about your KiCad version, which is useful when reporting bugs or seeking help.
- **Bug Reporting**: Links to the KiCad GitLab repository where you can submit bug reports. Always ensure you read the bug reporting instructions to provide the correct information.
  
#### Best Practice:  
If you encounter a bug, it’s essential to report it. Even small issues help improve the software, especially in cases of rare bugs or environment-specific behavior.

### 2. **Preferences**
The **Preferences** window allows you to configure settings for each application in the KiCad suite, making the design process more streamlined:
- **Common Settings**: Applies to all applications.
- **Individual Settings**: Customize settings for each application, such as the **Symbol Editor**, **Schematic Editor**, **PCB Editor**, and **3D Viewer**.
  
#### Best Practice:
Before KiCad version 7.0, these settings were scattered across individual applications. Now, they are centralized for better usability, making it easier to set up global preferences.

### 3. **File Menu**
In addition to opening and closing projects, the **File** menu allows you to:
- **Archive Projects**: Bundle your entire project into a ZIP file for easy sharing. This includes all relevant libraries, making it easy for others to open your project.
- **Import Projects**: Import projects from other CAD software such as **Cadstar**, **Eagle**, and **EasyEDA**. This feature is useful for migrating projects from other platforms to KiCad.

### 4. **Edit Menu**
The **Edit** menu provides standard cut, copy, paste, and undo functions. These operations are available across KiCad’s applications.

### 5. **View Menu**
The **View** menu gives access to:
- **Refresh**: Refresh the project files.
- **Browse Project Files**: Open the project directory in your file manager.
- **Text Editor**: KiCad stores project data in text files, which can be manually edited. For example, you can edit schematic files directly to adjust specific properties or configurations.
  
#### Example:  
You can manually edit a schematic’s text file to adjust component sizes or settings without opening the Schematic Editor. Any saved changes will reflect in the project.

## Tools Menu and Gerber Viewer

From the **Tools** menu, you can launch all of KiCad’s applications, such as the **Gerber Viewer**:
- **Gerber Viewer**: A critical tool for verifying your Gerber files before sending them to a manufacturer.
  
### Quality Assurance:
Before finalizing your design, load your Gerber files into the viewer to inspect each layer (e.g., front and back copper). Multiple layers can be displayed simultaneously for comprehensive checks.

## Managing KiCad Paths and Libraries

In the **Preferences** window, under the `Paths` tab, you can configure where KiCad stores essential resources like:
- **3D Models**
- **Footprints**
- **Symbols**

### External Storage:
If you are low on internal disk space, you can move large directories (e.g., 3D models) to an external drive. This may slightly slow down startup times but saves disk space.

#### Best Practice:
Keep commonly used libraries on local storage for faster access and place only large, less-frequently used libraries on external drives.

### Symbol and Footprint Libraries
The **Symbol Library Manager** and **Footprint Library Manager** let you manage the libraries KiCad has access to. You can import third-party libraries or create your own custom libraries.

- **Global Libraries**: Available across all projects.
- **Project-Specific Libraries**: Only available within the current project.

## Help and Documentation

KiCad’s **Help** menu provides access to local and online documentation:
- **User Manual**: A comprehensive guide on using KiCad’s features.
- **Getting Started Guide**: An introductory document to help you navigate through your first KiCad project.
- **Hotkeys List**: A list of shortcuts for speeding up your workflow.
