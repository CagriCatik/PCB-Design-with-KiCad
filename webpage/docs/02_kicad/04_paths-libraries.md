# Paths and Libraries

In this section, we'll focus on an essential aspect of KiCad’s configuration: **setting and managing paths**. The correct configuration of paths ensures that KiCad can locate important files like symbols, footprints, 3D models, and templates. Understanding how to manage these paths effectively will help you optimize your design workflow, especially if you are working with large projects or on systems with limited storage.

## Understanding KiCad Paths

The **Configure Paths** window in KiCad allows you to define where various resources—such as libraries and models—are stored. These paths are crucial because they determine where KiCad looks for specific files needed for schematic symbols, PCB footprints, 3D models, and templates.

### Types of Files Managed by KiCad Paths:
1. **Symbols**: Used in the schematic editor to represent electrical components.
2. **Footprints**: Define the physical layout of components on the PCB.
3. **3D Models**: Provide 3D representations of components, though optional, they are useful for visualization.
4. **Templates**: Predefined project setups that speed up the creation of new projects.

While the 3D models are not strictly necessary for PCB design, they enhance the visualization process, allowing you to inspect your board in 3D. However, symbols and footprints are critical and must be correctly configured.

## Managing KiCad Paths via Configure Paths

When you install KiCad, it automatically configures default paths for libraries and other files. These paths are stored as **environment variables** that KiCad references during operation. However, for various reasons—such as limited storage or organizing files on an external disk—you may want to alter these paths.

### Key Environment Variables in KiCad:
- **KiCad_SYMBOL_DIR**: Points to the directory containing symbol libraries.
- **KiCad_FOOTPRINT_DIR**: Points to the directory containing footprint libraries.
- **KiCad_3DMODEL_DIR**: Points to the directory for 3D models.

#### Example: Adjusting the Default Paths
You may find that the 3D models directory takes up a considerable amount of space—several gigabytes, in some cases. If you’re using a laptop or a computer with limited SSD storage, you can relocate these large files to an external hard drive.

Here’s how you can do it:
1. Open **KiCad Project Manager**.
2. Go to `Preferences` → `Configure Paths`.
3. Select the path you want to change (e.g., **KiCad_3DMODEL_DIR**).
4. Update the path to point to a new directory on an external disk or another location with more storage.

**Example Setup**:
- **KiCad_3DMODEL_DIR**: `/mnt/external_disk/KiCad_projects/libraries/3D_models/`
- **KiCad_SYMBOL_DIR**: `/mnt/external_disk/KiCad_projects/libraries/symbols/`
- **KiCad_FOOTPRINT_DIR**: `/mnt/external_disk/KiCad_projects/libraries/footprints/`

By moving these directories to an external disk, you can free up valuable internal storage space without affecting the functionality of KiCad.

#### Best Practice:
If you decide to store your libraries on an external drive, ensure that the drive is consistently connected while working with KiCad. Otherwise, you may encounter missing file errors when trying to access symbols or models.

## Paths for Project-Specific Libraries

In addition to global libraries, KiCad allows you to define **project-specific libraries**. These libraries are stored within the project folder and are only accessible when that project is open. This setup is ideal for custom components or symbols that are unique to a particular project.

### Example:
If you're working on a microcontroller unit (MCU) data logger project and need a custom footprint or symbol, you can create a **project-specific library** within the project directory:
- **Project Directory**: `/home/user/projects/mcu_data_logger/`
- **Project-Specific Library**: `/home/user/projects/mcu_data_logger/libraries/`

KiCad will automatically generate environment variables pointing to the project's directory when it is opened. This ensures that your custom libraries are available without affecting other projects.

#### Workflow:
1. When you open a project, KiCad creates a project-specific environment variable for that project’s libraries.
2. Symbols, footprints, or 3D models that are specific to the project can be stored in a **libraries** folder within the project directory.
3. These project-specific libraries take precedence over global libraries when designing the schematic or PCB.

## How KiCad Uses Environment Variables

KiCad relies on environment variables to manage paths to libraries and other resources. These environment variables are automatically generated and referenced in different parts of the software.

### Example: Symbol and Footprint Libraries
When you open the **Manage Symbol Libraries** window, you’ll notice that each library path includes an environment variable, such as **KiCad_SYMBOL_DIR**. This variable points to the directory where KiCad looks for symbol files (`.lib` or `.sym`).

Similarly, in the **Manage Footprint Libraries** window, you’ll find the **KiCad_FOOTPRINT_DIR** variable, which points to the directory containing footprint files (`.mod`).

#### Global vs. Project-Specific Libraries
- **Global Libraries**: Refer to symbols, footprints, and models available across all projects, typically defined by environment variables like **KiCad_SYMBOL_DIR**.
- **Project-Specific Libraries**: Refer to resources that are unique to a particular project, defined automatically based on the project directory.

## Best Practices for Path Management

### 1. **Optimize Storage Locations**
If you are working with large projects, or if your system has limited disk space, it’s beneficial to relocate certain libraries (especially 3D models) to an external storage device. Configure paths accordingly so KiCad can still locate these files.

### 2. **Keep Project-Specific Libraries Local**
For portability and ease of backup, keep project-specific libraries within the project folder. This way, everything related to the project is contained in one directory, making it easier to share or move between computers.

### 3. **Regular Backups**
Ensure that your external drives and custom paths are backed up regularly. If you’re storing large libraries externally, losing access to these resources could significantly hinder your progress on a project.

### 4. **Path Substitutions**
KiCad also supports **path substitutions**, which are useful when collaborating with others. For example, if team members store libraries in different locations, path substitutions can help ensure the project still works across all setups without manual path changes.

In the next section, we’ll explore how to **create new projects from scratch** and how to use **templates** to speed up the design process. This will ensure you can get started with your designs quickly, while maintaining a flexible and scalable project structure.
