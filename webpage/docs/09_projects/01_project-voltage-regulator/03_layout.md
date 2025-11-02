# Step 2: Creating the PCB Layout

The PCB layout is the physical implementation of the schematic, where components are placed on a board, and electrical connections are routed. This step transforms the circuit diagram into a manufacturable design.

---

## 2.1 Import Components

Once the schematic is complete:
1. **Update PCB from Schematic**: Use your PCB design software’s feature to import all the components from the schematic into the PCB editor.
2. **Initial Placement**: Components will appear randomly arranged in the PCB editor.

---

## 2.2 Arrange Components

The arrangement of components on the PCB is critical for functionality, manufacturability, and ease of assembly. Follow these guidelines for placement:

### 2.2.1 Logical Placement
- Place components in a logical order:
  - **Regulator (U1)**: Place the voltage regulator centrally, as it is the core component.
  - **Input Connector (J1)**: Place on one side of the board.
  - **Output Connector (J2)**: Place on the opposite side of the board.
  - **Capacitors (C1, C2, C3)**: Position close to their respective pins on the regulator for optimal performance and minimal noise.

### 2.2.2 LEDs and Resistors
- Group each LED with its corresponding current-limiting resistor:
  - Green LED and resistor for the output voltage.
  - Red LED and resistor for the input voltage.
- Align them vertically for a clean layout.

---

## 2.3 Optimize Placement

### 2.3.1 Minimize Trace Lengths
- Place components as close as possible to reduce trace lengths, especially for high-current or critical signal paths.
- Keep capacitors close to the regulator’s pins to ensure proper decoupling and noise reduction.

### 2.3.2 Orientation
- Align components to simplify routing:
  - Rotate and mirror components where necessary to align connections.
  - Ensure input and output connectors are properly oriented for easy access.

---

## 2.4 Route Traces

Routing traces establishes the electrical connections between components. Follow these steps for efficient routing:

### 2.4.1 Connect Components
- Start with high-priority connections, such as:
  - **Input Capacitor (C1)**: Connect to the regulator’s input pin.
  - **Output Capacitor (C2)**: Connect to the regulator’s output pin.
  - **Bypass Capacitor (C3)**: Connect to the bypass pin.
  - LEDs and resistors: Route as per the schematic.
- Use the schematic as a reference to ensure all connections are accurate.

### 2.4.2 Adjust Trace Widths
- **Power Traces**: Use wider traces for high-current paths to handle the current without overheating or voltage drops.
  - Example: Set power traces to 0.5 mm width for better current handling.
- **Signal Traces**: Use narrower traces (default width) for low-current or signal paths.

---

## 2.5 Add a Copper Pour

Adding a copper pour connects all ground pins and minimizes noise:
1. **Draw the Copper Pour**:
   - Create a filled zone that covers the entire PCB.
   - Assign it to the ground net.
2. **Fill the Copper Pour**:
   - The filled zone will automatically connect all ground pins.
3. **Set Clearance and Width**:
   - Ensure the copper pour maintains proper clearance from traces and components.
   - Use software defaults for standard designs.

---

## Finalizing the Layout

### 2.5.1 Clean Up
- Remove unnecessary labels or text, such as capacitor values, for a cleaner layout.
- Ensure all components are properly aligned and spaced.

### 2.5.2 Design Rule Check (DRC)
- Run the DRC tool to verify:
  - No components are too close together.
  - Trace widths and clearances meet the specified design rules.
  - All connections in the schematic are properly routed on the PCB.

---

With the PCB layout complete, you now have a physical representation of your circuit, ready for visualization and verification in the next steps. This layout forms the basis for manufacturing your first PCB.