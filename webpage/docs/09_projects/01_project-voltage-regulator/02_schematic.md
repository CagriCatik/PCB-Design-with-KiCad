# Step 1: Designing the Schematic Diagram

The schematic diagram is the foundation of any PCB design. It is a visual representation of the electronic circuit, showing all the components, their electrical connections, and relationships. This step is critical, as errors here will propagate to the PCB layout. In this section, we will create a schematic for a simple voltage regulator circuit.

---

## 1.1 Start a New Project

To begin, create a new project in your PCB design software:
1. **Name the Project**: Choose a meaningful name, such as "Simple Regulator."
2. **Open the Schematic Editor**: Start with a blank schematic sheet where you will place and connect components.

---

## 1.2 Add Components

The first task is to place all the necessary components on the schematic. For this project, we will use:
- A **Texas Instruments TPS793 Linear Voltage Regulator**.
- Capacitors for input, output, and bypass functions.
- LEDs with current-limiting resistors.
- Connectors for input and output voltage.

### 1.2.1 Voltage Regulator
- **Component**: Add the TPS793 regulator to the schematic.
- **Pin Connections**:
  - Input pin: Connects to the input voltage source.
  - Output pin: Provides regulated 3.3V output.
  - Bypass pin: Reduces noise when connected to a capacitor.

### 1.2.2 Capacitors
- Add three capacitors:
  - **C1 (Input Capacitor)**: Connect to the input pin of the regulator.
  - **C2 (Output Capacitor)**: Connect to the output pin of the regulator.
  - **C3 (Bypass Capacitor)**: Connect to the bypass pin for noise reduction.
- **Footprint**: Use a standard 0805 surface-mount package for all capacitors.

### 1.2.3 Ground Connections
- Add ground symbols to the schematic.
- Connect the ground pin of each component to the ground symbol.

---

## 1.3 Add LEDs and Resistors

### 1.3.1 LEDs
- **Purpose**: Add two LEDs to indicate input and output voltage:
  - Green LED for the output voltage.
  - Red LED for the input voltage.

### 1.3.2 Resistors
- **Current-Limiting Resistors**: Place resistors in series with each LED to limit current and prevent burnout.
- **Footprint**: Use the same 0805 package for consistency.
- **Note**: Proper resistor values should be calculated based on the LED's specifications and operating voltage.

---

## 1.4 Add Connectors

Add connectors to interface with the power supply and external components:
1. **Input Connector (J1)**:
   - Two-pin header for input voltage and ground.
   - Footprint: 2.54 mm pitch.
2. **Output Connector (J2)**:
   - Two-pin header for output voltage and ground.
   - Use the same footprint as J1 for simplicity.

---

## 1.5 Reference the Datasheet

For precise component values, refer to the TPS793 regulator datasheet:
- **Typical Application Circuit**: Provides recommended capacitor values.
  - Input capacitor (C1): 0.1µF.
  - Output capacitor (C2): 2.2µF.
  - Bypass capacitor (C3): 0.01µF.
- **Resistor Values**: Use the datasheet or calculate based on the desired current for the LEDs.

---

## Finalizing the Schematic

1. **Connect Components**: Draw wires to connect the components as per the circuit design.
2. **Label Components**: Assign reference designators to each component (e.g., C1, R1, J1).
3. **Review the Circuit**:
   - Verify all connections match the intended design.
   - Ensure no open or shorted connections.

---

With the schematic complete, you now have a clear and detailed representation of your circuit. This schematic will serve as the blueprint for the PCB layout in the next step.