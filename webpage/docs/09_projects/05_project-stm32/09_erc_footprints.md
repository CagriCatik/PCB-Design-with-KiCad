# 9. ERC & Footprints

## 9.1 Electrical Rules Check (ERC)

The Electrical Rules Check (ERC) is an essential validation process in PCB design, ensuring the logical and electrical integrity of the schematic before proceeding to layout and manufacturing. ERC enforces consistency and detects potential errors that could compromise the functionality of the final PCB. The STM32 WB55CEU-based design employs ERC within KiCad to identify and rectify issues related to unconnected pins, power net assignments, and overall schematic coherence.

### 9.1.1 Unconnected Pin Resolution

Unconnected pins in a schematic can lead to unintended behaviors, such as floating inputs or outputs, which may cause erratic circuit operation. KiCad's ERC functionality flags any pins that are not connected to a net, including unused General-Purpose Input/Output (GPIO) pins or No Connect (NC) pins.

- **Detection:** During the ERC process, KiCad identifies all pins that lack net connections. These include GPIOs that are not utilized in the current design and designated NC pins that are intentionally left floating.
  
- **Mitigation:** To address unconnected pins, the following strategies are employed:
  
  - **No Connect Flags:** For pins that are intentionally left unconnected, the `No Connect` (NC) flag is applied by selecting the pin and pressing the `Q` key. This action informs the ERC tool that the floating pin is intentional, thereby preventing unnecessary warnings.
  
  - **Explicit Labeling:** Non-Bill of Materials (BOM) test points or debug headers are explicitly labeled to ensure clarity. This labeling assists in distinguishing between intentional and accidental unconnected pins, enhancing the schematic's readability and maintainability.

### 9.1.2 Power Flag Implementation

Properly assigning power flags is crucial for resolving ERC errors related to undriven power pins and ensuring that all power domains are correctly referenced within the schematic.

- **Global Power Nets:** Global power nets such as `+3V3`, `+5V`, and `GND` are assigned `PWR_FLAG` symbols. These flags inform the ERC tool that these nets are valid power sources, eliminating errors related to undriven power pins.

- **Domain-Specific Flags:** In mixed-signal designs, it is essential to isolate different power domains to prevent noise coupling between analog and digital circuits. Domain-specific power flags are assigned to nets such as `AVDD`, `AGND` for analog supplies, and `DVDD`, `DGND` for digital supplies. This isolation is critical for maintaining signal integrity and minimizing electromagnetic interference (EMI) within the PCB.

## 9.2 Footprint Assignment

Accurate footprint assignment ensures that each schematic symbol is correctly represented in the physical PCB layout, facilitating manufacturability and assembly accuracy. The STM32 WB55CEU design meticulously assigns footprints to all components, adhering to IPC-7351A standards for footprint reliability and compliance.

### 9.2.1 Passive Components

Passive components, including resistors and capacitors, are fundamental to the circuit's functionality. Their footprints are selected based on size, package type, and manufacturing tolerances.

- **0402 Resistors/Capacitors:**
  
  - **Footprint:** The footprint used is `Resistor_SMD:R_0402_1005Metric`, which features pad dimensions of 1.0 × 0.5 mm. This footprint accommodates the 0402-sized Surface-Mount Device (SMD) resistors and capacitors, ensuring precise placement and solder joint reliability.
  
  - **Design Rules:** Adherence to design rules is critical for preventing soldering defects and ensuring component alignment.
    
    - **Solder Mask Expansion:** A solder mask expansion of 0.05 mm is applied around the pads to ensure adequate solder coverage and joint formation.
    
    - **Pad Spacing:** The spacing between pads is maintained at 0.5 mm (edge-to-edge) to prevent shorts and facilitate proper soldering during assembly.
  
  - **Assembly:** Components are assembled using a laser-cut stencil with a thickness of 0.12 mm, compatible with Type 4 solder paste characterized by a particle size of 20–38 µm. This combination ensures precise solder paste deposition and reliable solder joint formation during the reflow process.

### 9.2.2 Crystals

Crystals are critical for oscillator circuits, providing the necessary frequency stability for microcontroller operations. Proper footprint selection and placement are essential for oscillator performance.

- **32 MHz (NX3225GD):**
  
  - **Footprint:** The footprint `Crystal_SMD_2016-4Pin_2.0x1.6mm` is utilized, featuring 0.3 × 0.9 mm rectangular pads with a 0.2 mm solder mask relief. This footprint accommodates the physical dimensions of the NX3225GD-32M crystal, ensuring precise alignment with the MCU's oscillator pins.
  
  - **Pad Geometry:** The rectangular pad design facilitates optimal solder joint formation, enhancing electrical connectivity and mechanical stability.
  
  - **Placement:** The crystal is placed within ≤15 mm of the MCU's OSC_IN and OSC_OUT pins to minimize trace inductance and maintain signal integrity. Proximity reduces the likelihood of signal degradation and ensures accurate frequency generation.

- **32.768 kHz (NX2012SA):**
  
  - **Footprint:** The `Crystal_SMD_2012-4Pin_2.0x1.2mm` footprint is assigned, tailored to the smaller tuning-fork NX2012SA-32.768K crystal. This footprint ensures proper alignment and connectivity with the RTC and low-power modes of the MCU.
  
  - **Load Capacitors:** A pair of 12 pF C0G (0402, ±0.25 pF tolerance) capacitors are integrated into the footprint design to match the crystal's load capacitance requirements. These capacitors stabilize the oscillator circuit, ensuring reliable and precise timekeeping.

### 9.2.3 Connectors

Connectors facilitate communication and power transfer between the PCB and external devices. Their footprints must accommodate mechanical and electrical specifications to ensure robust performance.

- **USB-C (GCT_USB4105):**
  
  - **Footprint:** The `USB_C_Receptacle_GCT_USB4105` footprint measures 8.6 × 3.0 mm, aligning with the physical dimensions of the GCT_USB4105 USB-C receptacle. This footprint ensures secure mechanical mounting and reliable electrical connections.
  
  - **Critical Features:**
    
    - **VBUS PTH Pads:** These pads are sized at 1.2 × 0.6 mm and feature plated through-holes (PTH) with a 0.1 mm annular ring. This design facilitates robust electrical connections and mechanical stability, accommodating the high current demands of USB power delivery.
    
    - **D+/D– SMD Pads:** The differential data lines D+ and D– are routed to 0.8 × 0.3 mm SMD pads that are non-soldermask-defined. This configuration ensures precise impedance control and minimizes signal reflections, essential for high-speed data transmission.
  
  - **Compliance:** The footprint design adheres to USB-IF TID 6200 standards, ensuring a retention force of ≥5 N. This compliance guarantees that the USB-C connector maintains secure mechanical connections under repeated insertion and removal cycles, enhancing the durability of the PCB.

- **UFL (Hirose U.FL-LP-066):**
  
  - **Footprint:** The `U.FL_Hirose_U.FL-LP-066` footprint measures 1.6 × 1.2 mm, designed to accommodate the Hirose U.FL-LP-066 connector. This compact footprint ensures efficient use of PCB space while maintaining reliable high-frequency signal transmission.
  
  - **Grounding:** An array of four 0.3 mm vias arranged at a 0.5 mm pitch surrounds the signal pad. This via array provides a low-impedance RF return path, enhancing signal integrity and reducing electromagnetic interference (EMI).

- **Tag Connect (TC2050-IDC-NL):**
  
  - **Footprint:** The Tag Connect interface utilizes non-Bill of Materials (non-BOM) alignment posts with 1.0 mm PTH, ensuring precise mechanical alignment and reliable electrical connections during programming and debugging.
  
  - **SWD Pads:** The SWDIO and SWCLK lines are connected to 0.6 × 0.6 mm SMD pads, which are edge-coupled to the MCU's SWDIO and SWCLK pins. This configuration ensures minimal inductance and capacitance, preserving signal integrity for high-speed debugging operations.

## 9.3 Validation & Compliance

Ensuring that the PCB design meets all electrical and mechanical specifications is critical for achieving reliable and manufacturable PCBs. The STM32 WB55CEU-based design undergoes rigorous validation and compliance checks to adhere to industry standards and design guidelines.

- **ERC Report:**
  
  - **Unconnected Pins:** The ERC report must indicate zero unconnected pins, excluding those intentionally flagged with `No Connect`. This ensures that all functional pins are properly connected and that there are no unintended floating nodes that could lead to erratic behavior.
  
  - **Power Net Integrity:** All power nets must be driven by valid power sources, such as Low Dropout Regulators (LDOs) and power supply units. This verification ensures that no power pins are left floating, maintaining stable voltage levels across the PCB.

- **Footprint Audit:**
  
  - **IPC-7351 Compliance:** Footprints are audited for compliance with IPC-7351A standards, which dictate precise component toe and fillet dimensions. Specifically:
    
    - **Component Toe/Fillet:** A solder joint extension of 0.05 mm is maintained to ensure robust mechanical and electrical connections.
    
    - **Courtyard Clearance:** A minimum clearance of 0.25 mm beyond the component body is enforced to prevent solder bridging and ensure sufficient spacing between components.
  
  - **3D Model Clearance:** In the 3D model verification process, a clearance of ≥0.2 mm is maintained between the tallest components, such as USB-C and UFL connectors. This clearance prevents mechanical interference during assembly and ensures that components fit within the designated PCB area without obstruction.

## 9.4 Critical Design Metrics

Adhering to critical design metrics is essential for ensuring the manufacturability and operational reliability of the PCB. The STM32 WB55CEU-based design incorporates stringent adherence to placement accuracy, reflow profiles, and component tolerance specifications.

- **0402 Passives:**
  
  - **Placement Accuracy:** Passive components in the 0402 package must be placed with an accuracy of ±0.1 mm using pick-and-place machines. Precise placement ensures alignment with PCB traces and prevents solder bridging.
  
  - **Reflow Profile:** The soldering process follows a reflow profile with a peak temperature of 245°C and maintains 60 seconds above 217°C. This profile is optimized for SAC305 solder paste, ensuring reliable solder joint formation without thermal stress that could damage components.

- **Crystals:**
  
  - **Frequency Tolerance:** The 32 MHz crystal must exhibit a frequency tolerance of ±10 ppm, while the 32.768 kHz crystal must maintain a tolerance of ±20 ppm. These tolerances ensure accurate oscillator performance, critical for the microcontroller's timing and real-time operations.
  
- **Connectors:**
  
  - **USB-C Insertion Cycles:** The USB-C connectors must withstand ≥10,000 insertion cycles as per IEC 60512-99-001 standards. This durability ensures long-term reliability in environments with frequent connector usage.

## 9.5 Conclusion

The ERC and footprint assignment processes are integral to the STM32 WB55CEU-based PCB design, ensuring both electrical integrity and manufacturability. By rigorously enforcing schematic consistency through ERC, accurately assigning component footprints in compliance with IPC-7351A standards, and adhering to critical design metrics, the design achieves a high level of reliability and performance. Comprehensive validation and adherence to industry standards ensure that the PCB is not only functionally robust but also manufacturable at scale, meeting the stringent requirements of commercial PCB assembly as outlined in IPC Class 2/A standards.