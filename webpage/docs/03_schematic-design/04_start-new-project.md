# Initializing a New KiCad Project  

## Project Creation Workflow  

### **1. Launching KiCad**  
- **Platform-Specific Execution**:  
  - **Windows**: Execute `kicad.exe` from the installation directory or shortcut.  
  - **Linux**: Run `kicad` via terminal or application launcher.  
  - **macOS**: Launch `KiCad.app` from the Applications folder.  
- **Start Screen**: Upon launch, the KiCad Project Manager interface is displayed, providing access to recent projects, documentation, and configuration tools.  

---

### **2. Closing Existing Projects**  
- **Procedure**:  
  - Navigate to **File > Close Project** in the KiCad Project Manager.  
  - Ensure unsaved changes are committed to avoid data loss.  
- **Outcome**: The workspace resets to a neutral state, enabling initiation of a new project.  

---

### **3. Creating a New Project**  
- **Step-by-Step Process**:  
  1. **Menu Navigation**: Select **File > New Project…** from the KiCad Project Manager.  
  2. **Directory Selection**:  
     - **Location**: Specify a dedicated directory for the project (e.g., `~/Projects/LED_Torch`).  
     - **Folder Creation**: Enable **Create a new folder for the project** to enforce organizational hierarchy.  
  3. **Naming Convention**:  
     - Assign a descriptive project name (e.g., `LED_Torch`).  
     - Avoid spaces or special characters; use underscores for multiword names (e.g., `LED_Torch_v1`).  
  4. **File Saving**: Click **Save** to generate core project files.  

---

## Project Directory and File Structure  

### **Generated Files**  
1. **Project Configuration File (`*.kicad_pro`)**  
   - **Example**: `LED_Torch.kicad_pro`  
   - **Role**: Manages global project settings, including schematic-PCB associations, library paths, and user preferences.  
   - **Editable Format**: Plain-text JSON structure, modifiable via external editors (e.g., VSCode, Sublime Text).  

2. **Schematic File (`*.kicad_sch`)**  
   - **Example**: `LED_Torch.kicad_sch`  
   - **Initial State**: Blank schematic canvas with default grid (100 mil), awaiting component placement and wiring.  

3. **PCB Layout File (`*.kicad_pcb`)**  
   - **Example**: `LED_Torch.kicad_pcb`  
   - **Initial State**: Empty board workspace with default layers (e.g., `F.Cu`, `B.Cu`, `Edge.Cuts`) and grid (50 mil).  

---

### **Directory Hierarchy**  
```  
LED_Torch/  
├── LED_Torch.kicad_pro    # Project configuration  
├── LED_Torch.kicad_sch    # Schematic design  
├── LED_Torch.kicad_pcb    # PCB layout  
└── backups/               # Auto-saved revisions (if enabled)  
```  

---

## Configuration Best Practices  

### **Project Directory Management**  
- **Dedicated Folders**: Isolate each project to prevent file collisions and simplify version control.  
- **Naming Consistency**: Use a standardized naming scheme (e.g., `ProjectName_RevX`) for iterative revisions.  

### **Backup Configuration**  
- **Automatic Backups**: Enable via **Preferences > Common > Project Backup**:  
  - **Backup Interval**: 5–10 minutes (balances safety and performance).  
  - **Retention Policy**: Retain 5–10 backups per project to mitigate data corruption risks.  
- **Manual Backups**: Periodically archive the project directory to external storage or cloud platforms.  

---

## Post-Creation Validation  
1. **File Integrity Check**:  
   - Confirm the presence of `*.kicad_pro`, `*.kicad_sch`, and `*.kicad_pcb` in the project directory.  
   - Verify file permissions (read/write access).  
2. **Schematic-PCB Linkage**:  
   - Open the schematic (`*.kicad_sch`) and PCB (`*.kicad_pcb`) to ensure bidirectional synchronization.  
   - Use **Tools > Update PCB from Schematic** to validate connectivity.  

---

This protocol ensures a robust foundation for subsequent schematic capture, PCB layout, and manufacturing preparation within KiCad. Adherence to structured directory practices and backup configurations minimizes risks during iterative design phases.