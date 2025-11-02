# Schematic Design

The schematic design phase is the foundation of any PCB project. It involves creating a logical representation of the circuit, defining how components are connected, and ensuring that the design meets the project requirements. In this chapter, we will walk through the process of designing the schematic for the ESP32-based IoT device in KiCad 7.

---

## Placing Key Components
The first step in schematic design is to place the key components that form the core of the circuit. These components include the ESP32 module, sensors, power supply, and interfaces.

1. ESP32 WROOM Module:
   - Open the Schematic Editor and use the Place Symbol tool (shortcut: A).
   - Search for ESP32 and select the ESP32-WROOM-32D module.
   - Place the ESP32 symbol in the center of the schematic page.

2. USB-C Connector and ESD Protection:
   - Search for USB-C and place the connector near the ESP32.
   - Add an ESD protection component (e.g., USBLC6-2SC6) to protect the USB interface from electrostatic discharge.

3. CP2104 USB-to-Serial Converter:
   - Search for CP2104 and place it near the USB connector.
   - This component enables programming and debugging of the ESP32 via USB.

4. SI7021 Temperature and Humidity Sensor:
   - Search for SI7021 and place it on the schematic.
   - This sensor communicates with the ESP32 via the I²C bus.

5. Relay Circuit:
   - Search for RT314A05 (relay) and place it on the schematic.
   - Add a transistor (e.g., BC817) and a diode (e.g., 1N4148) to control and protect the relay.

6. RGB LED and Button Interface:
   - Place an RGB LED and a push-button switch on the schematic.
   - These components provide user interaction and visual feedback.

7. Level Converters (74HCT245):
   - Search for 74HCT245 and place it on the schematic.
   - This component converts 3.3V logic levels to 5V for controlling external LED strips.

8. Screw Terminals and Fused Power Supply:
   - Place screw terminals for power input and output.
   - Add a fuse (e.g., 1A polyfuse) for overcurrent protection.

9. Mounting Holes:
   - Add mounting holes to the schematic for mechanical stability.

---

## Wiring the Schematic
Once the components are placed, the next step is to connect them logically using wires and labels.

1. USB Interface and Programming Circuit:
   - Connect the USB-C connector to the CP2104 USB-to-serial converter.
   - Add 5.1kΩ pull-down resistors to the CC pins of the USB-C connector.
   - Connect the TX, RX, RTS, and DTR pins of the CP2104 to the ESP32 for programming.

2. I²C Interface for Sensors:
   - Connect the SI7021 sensor to the ESP32 via the SDA and SCL lines.
   - Add 4.7kΩ pull-up resistors to the SDA and SCL lines.

3. Relay Control Circuit:
   - Connect the relay to the ESP32 via a transistor.
   - Add a flyback diode across the relay coil to protect against voltage spikes.

4. Power Supply and LDO (TLV1117LV-3.3V):
   - Connect the 5V input from the USB connector to the input of the TLV1117LV-3.3V LDO.
   - Add decoupling capacitors (e.g., 22µF and 100nF) to the input and output of the LDO.
   - Connect the 3.3V output of the LDO to the ESP32 and other 3.3V components.

5. LED Strip Interface:
   - Connect the 74HCT245 level shifter to the ESP32 GPIO pins.
   - Add series resistors (e.g., 220Ω) to protect the LED strip outputs.

6. RGB LED and Button Interface:
   - Connect the RGB LED to the ESP32 GPIO pins via current-limiting resistors (e.g., 1kΩ).
   - Connect the push-button switch to the ESP32 GPIO pin with a pull-up resistor (e.g., 10kΩ).

---

## Adding Power and Ground Connections
Proper power and ground connections are critical for the functionality and reliability of the circuit.

1. Power Nets:
   - Label the 5V and 3.3V nets using the Place Label tool (shortcut: L).
   - Ensure all components requiring 5V or 3.3V are connected to the appropriate nets.

2. Ground Nets:
   - Place ground symbols (shortcut: G) throughout the schematic.
   - Ensure all components requiring a ground connection are properly grounded.

---

## Annotating and Assigning Footprints
Annotating components and assigning footprints ensures that the schematic is ready for PCB layout.

1. Annotate Components:
   - Go to Tools > Annotate Schematic.
   - Assign unique reference designators (e.g., R1, C1, U1) to all components.

2. Assign Footprints:
   - Go to Tools > Assign Footprints.
   - Assign appropriate footprints to each component. For example:
     - ESP32: Use a standard ESP32 footprint.
     - CP2104: Use a QFN-24 footprint.
     - SI7021: Use a DFN-6 footprint.
     - Resistors and Capacitors: Use 0402 or 0805 footprints for SMD components.

---

## Finalizing the Schematic
Before moving to the PCB layout, perform a final review of the schematic to ensure accuracy and completeness.

1. Check Connections:
   - Verify that all components are properly connected and labeled.
   - Use the Electrical Rules Check (ERC) tool to identify and fix any errors.

2. Add Documentation:
   - Add text boxes to label functional blocks (e.g., "Power Supply," "USB Interface," "I²C Sensors").
   - Include notes or comments to explain specific design choices.

3. Save and Export:
   - Save the schematic file.
   - Export a PDF version of the schematic for documentation and sharing.

---

## Summary
In this chapter, we designed the schematic for the ESP32-based IoT device. We placed key components, wired the circuit, added power and ground connections, and assigned footprints. The schematic serves as the blueprint for the PCB layout, ensuring that all connections and components are accurately represented. In the next chapter, we will transition to the PCB layout phase, where we will bring the schematic to life by designing the physical board.

---

This chapter provides a detailed guide to schematic design in KiCad, covering everything from component placement to finalizing the schematic. By following these steps, you’ll create a well-organized and error-free schematic that forms the foundation of your PCB design.