# Finished KiCad Project and Directory Structure

The LED Torch Project functions as a foundational exercise within the KiCad environment, prioritizing the development of tool proficiency over the complexity of electronic circuitry. The circuit architecture is deliberately minimalistic, incorporating essential components such as an LED, a current-limiting resistor, a single-pole single-throw (SPST) switch, and a CR2032 coin cell battery. The schematic and printed circuit board (PCB) layout are designed with simplicity to facilitate the learning process for users new to KiCad. The finalized PCB design is characterized by its compact form factor and strategic component placement: the LED is situated at the front to optimize light emission, the switch is positioned for ergonomic thumb access, and the coin cell battery holder is centrally located to ensure mechanical stability. A three-dimensional rendering of the PCB (refer to Figure 1) provides a comprehensive visualization of the spatial arrangement and mechanical design, highlighting the integration of components within the board's architecture.

---

## Project Directory Structure

A KiCad project directory is systematically organized to encompass all necessary files and subdirectories essential for the development, management, and fabrication of the PCB. The core components of the directory structure are detailed below:

### 1. **Project Configuration File (*.kicad_pro)**

- **Location**: Root directory.
- **Purpose**: This file encapsulates the project's metadata, including global settings, associations between schematic and PCB files, and user-specific preferences. It serves as the central configuration point for the project, ensuring consistency and coherence across various design stages.
- **Format**: The configuration file is a plain-text document, allowing for manual editing using standard text editors such as Atom or Notepad++.
- **Example**: `LED_Torch.kicad_pro`.

### 2. **Schematic File (*.kicad_sch)**

- **Location**: Root directory.
- **Purpose**: This file delineates the electrical schematic of the project, detailing component symbols, net connections, and annotations. It serves as the blueprint for the electronic design, facilitating the translation of circuit concepts into a tangible PCB layout.
- **Example**: `LED_Torch.kicad_sch`.

### 3. **PCB Layout File (*.kicad_pcb)**

- **Location**: Root directory.
- **Purpose**: The PCB layout file contains comprehensive data regarding the physical design of the board, including component footprints, copper trace routing, board edges, and the layer stackup. This file is critical for the accurate fabrication of the PCB.
- **Example**: `LED_Torch.kicad_pcb`.

### 4. **Gerber Files (gerbers.zip)**

- **Location**: Generated within the root directory following the export of the PCB layout.
- **Purpose**: Gerber files adhere to industry standards for PCB fabrication, encompassing various layers such as copper (e.g., `F.Cu.gbr`, `B.Cu.gbr`), silkscreen (`F.SilkS.gbr`), drill files (`drill.xln`, `drill.drl`), and the board outline (`Edge.Cuts.gbr`). These files are consolidated into a ZIP archive for submission to PCB manufacturers, ensuring precise replication of the design specifications.
  
### 5. **Backup Directory (backups/)**

- **Location**: Subdirectory within the project folder.
- **Purpose**: The backups directory is designated for the storage of incremental backups of both schematic and PCB files, thereby safeguarding against potential data loss. This redundancy is crucial for maintaining project integrity over time.
- **Configuration**: Backup management is facilitated through KiCad’s **Preferences > Common > Project Backup** settings, which allow for the specification of backup intervals, the maximum number of daily backups, and the total number of backups retained.
  - **Backup Interval**: 5 minutes (default).
  - **Maximum Backups Per Day**: 5.
  - **Total Backups Retained**: 25.
- **Naming Convention**: Backup files are timestamped to reflect their creation time, following a format such as `LED_Torch_2024-03-15_12-30-00.kicad_sch`.

---

## Schematic and PCB Design Details

### Schematic Design

The schematic design for the LED Torch Project is characterized by its simplicity, employing a single-loop topology that comprises a 3V coin cell battery, a current-limiting resistor, an LED, and an SPST switch. The design utilizes standard components from KiCad’s library, including:
- **Device:LED**: Represents the light-emitting diode.
- **Device:R**: Denotes the resistor.
- **Device:SW_SPST**: Indicates the single-pole single-throw switch.

Annotations within the schematic are managed through reference designators (e.g., D1 for the LED, R1 for the resistor), which can be assigned either automatically by the software or manually by the user to maintain clarity and organization within the circuit diagram.

### PCB Layout

The PCB layout translates the schematic into a physical board design, encompassing several critical aspects:

- **Board Outline**: The custom shape of the PCB is defined within the `Edge.Cuts` layer, allowing for non-standard board dimensions tailored to specific application requirements.
  
- **Component Placement**:
  - **CR2032 Battery Holder**: Positioned centrally on the board to enhance mechanical stability and facilitate uniform distribution of stress during handling and operation.
  - **LED**: Strategically located at the board’s edge to ensure optimal light emission and accessibility for user interaction.
  - **Tactile Switch**: Situated near the board’s edge to provide ergonomic access, enabling seamless user operation.

- **Routing**: The PCB employs single-sided trace routing, with trace widths maintained at a minimal 0.25 mm to accommodate low-current paths efficiently. This approach minimizes potential interference and conserves board real estate.

### 3D Visualization

A three-dimensional visualization of the PCB is accessible via **View > 3D Viewer** within KiCad’s PCB Editor. This rendered model offers a detailed representation of component heights, board geometry, and assembly orientation, facilitating a comprehensive understanding of the final product’s physical characteristics and aiding in the verification of mechanical fit and component alignment.

---

## Manufacturing Preparation

### Gerber File Generation

The generation of Gerber files is a critical step in preparing the PCB design for manufacturing. The process involves the following steps:

1. **Procedure**:
   - Navigate to **PCB Editor > File > Fabrication Outputs > Gerbers** within KiCad.
   - Select the appropriate layers as specified by the PCB manufacturer’s requirements, typically including front and back copper layers (`F.Cu`, `B.Cu`), silkscreen layers (`F.SilkS`), and the board outline (`Edge.Cuts`).

2. **Drill Files**:
   - Accessed via **PCB Editor > File > Fabrication Outputs > Drill Files**.
   - Export drill files in **Excellon** format, ensuring that plated through-holes (PTH) and non-plated through-holes (NPTH) are merged as required by manufacturing specifications.

3. **Validation**:
   - Utilize Gerber viewers, such as KiCad’s integrated GerbView or online Gerber validation tools, to verify the alignment and accuracy of the exported layers. This step is essential to ensure that the design adheres to manufacturing tolerances and to identify any potential issues prior to production.

---

## Backup Management Best Practices

Effective backup management is paramount to maintaining the integrity and continuity of the PCB design project. The following best practices are recommended:

- **Automatic Backups**: Enable the automatic backup feature within KiCad via **Preferences > Common > Project Backup**. This ensures that periodic snapshots of the project files are created without manual intervention, providing a safeguard against unexpected data loss.

- **Manual Backups**: In addition to automatic backups, it is prudent to periodically duplicate the entire project directory to external storage solutions, such as external hard drives or cloud-based services. This redundancy offers an additional layer of protection against data corruption or hardware failures.

- **Restoration Procedures**: In the event of file corruption or accidental deletion, restoration can be achieved by replacing the affected `.kicad_sch` or `.kicad_pcb` files with the most recent backup versions from the `backups/` directory. This process ensures that the project can be promptly recovered to its last stable state, minimizing downtime and preserving design continuity.

