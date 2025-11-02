# 10. Net Classes & BOM

## 10.1 Net Class Definition and Routing Rules

Net classes are integral to enforcing specific electrical and physical constraints within PCB designs, ensuring signal integrity, manufacturability, and adherence to performance specifications. By categorizing critical signal groups into distinct net classes, designers can apply tailored routing rules that address the unique requirements of each signal type. This section delineates the definition and routing rules for various net classes utilized in the STM32 WB55CEU-based Bluetooth PCB design.

### 10.1.1 RF Net Class

The RF net class is designated for high-frequency signal paths, such as RF_OUT and antenna matching networks, which are pivotal for maintaining signal integrity in wireless communication applications.

- **Scope:**  
  - RF traces including RF_OUT and components forming the antenna matching networks.

- **Rules:**  
  - **Impedance:**  
    - Maintained at 50 Ω ±10%, achieved through the use of coplanar waveguide (CPW) configurations.  
    - Trace specifications include a width of 0.3 mm and a gap of 0.15 mm to the ground plane, ensuring controlled impedance essential for high-frequency signal transmission.
  
  - **Isolation:**  
    - A clearance of at least three times the trace width (0.9 mm) is enforced from adjacent digital signals.  
    - This isolation mitigates electromagnetic interference (EMI) and prevents cross-talk, which could degrade RF performance.

  - **Via Usage:**  
    - Prohibited between components of the π-network and the antenna to prevent inductive discontinuities and maintain a continuous signal path.

- **Validation:**  
  - **Time-Domain Reflectometry (TDR):**  
    - Employed to verify the impedance continuity along RF traces, ensuring deviations do not exceed 5%.  
    - This validation technique identifies and quantifies impedance mismatches that could lead to signal reflections and loss of integrity.

### 10.1.2 USB Net Class

The USB net class manages the differential signaling required for USB data transmission, ensuring robust and high-fidelity communication between the microcontroller and connected host devices.

- **Scope:**  
  - Differential pairs comprising D+ and D– lines.

- **Rules:**  
  - **Impedance:**  
    - Maintained at 90 Ω differential ±10%, facilitated by traces with a width of 0.2 mm and spacing of 0.1 mm.  
    - Controlled impedance is critical for minimizing signal reflections and maintaining data integrity at USB 2.0 speeds.
  
  - **Length Matching:**  
    - Intra-pair skew must not exceed 5 mils, ensuring that the D+ and D– signals arrive simultaneously at the receiver, which is essential for accurate differential signal interpretation.

  - **Routing:**  
    - Bends in USB traces should avoid 90° angles; instead, 45° miters or arcs are employed to reduce impedance discontinuities and signal reflections.  
    - This approach preserves the integrity of high-speed differential signals, ensuring reliable data transmission.

- **Validation:**  
  - **Eye Diagram Analysis:**  
    - Conducted to assess the quality of the differential signals, with a requirement of ≥70% eye opening at 12 Mbps.  
    - A clear eye opening indicates minimal jitter and noise, signifying robust signal integrity conducive to high-speed data communication.

### 10.1.3 Power Net Class

The power net class encompasses all voltage rails supplying power to various components, ensuring stable and efficient power distribution across the PCB.

- **Scope:**  
  - Voltage rails including 3V3, 5V, and VBAT.

- **Rules:**  
  - **Trace Width:**  
    - Power traces are dimensioned based on current capacity requirements:  
      - 3V3 rails utilize traces with a width of 0.5 mm, supporting currents up to 1A.  
      - 5V rails employ wider traces of 0.8 mm to accommodate higher currents up to 2A.
  
  - **Via Current:**  
    - Each via is limited to a maximum current of 1A.  
    - For high-current paths, multiple vias are employed in parallel to distribute the load and prevent overheating or excessive voltage drops.

- **Validation:**  
  - **IR Drop Analysis:**  
    - Ensures that voltage drops across power traces do not exceed 3% of the nominal voltage at maximum load conditions.  
    - This analysis guarantees that all components receive adequate voltage, maintaining operational stability and performance.

### 10.1.4 SWD Net Class

The SWD (Serial Wire Debug) net class facilitates debugging and programming functionalities, providing a dedicated pathway for SWDIO, SWCLK, SWO, and NRST signals.

- **Scope:**  
  - Debug signals including SWDIO, SWCLK, SWO, and NRST.

- **Rules:**  
  - **Trace Width:**  
    - Maintained at 0.25 mm (10 mil), ensuring sufficient bandwidth for debugging operations without excessive resistance or inductance.
  
  - **Guard Traces:**  
    - A ground trace with a spacing of 0.3 mm is routed on both sides of the SWD traces.  
    - This shielding minimizes electromagnetic interference (EMI) from adjacent signals, preserving the integrity of debug communications.

  - **Length:**  
    - SWD traces must not exceed 30 mm from the microcontroller to the Tag Connect header.  
    - Short trace lengths reduce signal degradation and latency, ensuring timely and accurate debugging operations.

- **Validation:**  
  - **Signal Integrity Simulation:**  
    - Performed to verify that the rise time of SWD signals does not exceed 5 ns at a clock frequency of 10 MHz.  
    - This simulation ensures that the debug signals maintain their intended waveform characteristics, preventing data corruption during high-speed communication.

## 10.2 Bill of Materials (BOM) Preparation

The Bill of Materials (BOM) is a comprehensive inventory that enumerates all components required for PCB assembly, detailing part numbers, manufacturers, quantities, and footprint specifications. A meticulously prepared BOM is essential for design reproducibility, procurement efficiency, and compliance with manufacturing standards.

### 10.2.1 Critical Component Selection

Selecting appropriate components is pivotal for ensuring the performance, reliability, and manufacturability of the PCB. Critical components, particularly those with stringent electrical specifications or unique footprint requirements, are carefully chosen to align with design objectives.

- **TDK DLP11SN021SK2 Filter:**  
  - **MPN:** DLP11SN021SK2  
  - **Description:** 2.4 GHz low-pass filter with 50 Ω impedance, essential for suppressing unwanted harmonics and maintaining signal purity in the RF section.  
  - **Footprint:** Custom 4-pad configuration with pad dimensions of 0.3 × 0.25 mm, tailored to match the filter’s physical and electrical characteristics.

- **Murata Inductors:**  
  - **L1 (10 nH):**  
    - **MPN:** LQP15MN10N02D  
    - **Package:** 0402  
    - **Tolerance:** ±0.3 nH  
    - **Function:** High-frequency filtering within the SMPS circuit, critical for minimizing switching noise.
  
  - **L2 (10 µH):**  
    - **MPN:** LQM18FN100M00D  
    - **Package:** 0805  
    - **Tolerance:** ±20%  
    - **Function:** Energy storage within the SMPS, ensuring continuous current flow during switching cycles.

- **Passives:**  
  - **0402 Resistors:**  
    - **MPN:** RNMF14FTC5K11  
    - **Description:** 5.1 kΩ, ±1% tolerance resistors used for various signal conditioning and biasing applications within the PCB.
  
  - **0402 Capacitors:**  
    - **MPN:** GRM155R71H104KE14D  
    - **Description:** 100 nF X7R capacitors rated at 10V, employed for decoupling and filtering in high-frequency sections.

### 10.2.2 BOM Structure

A well-organized BOM facilitates efficient component sourcing, inventory management, and assembly processes. The BOM structure includes item numbers, quantities, manufacturer part numbers (MPN), component descriptions, manufacturers, and assigned footprints.

| **Item** | **Qty** | **MPN**               | **Description**          | **Manufacturer** | **Footprint**          |
|----------|---------|-----------------------|--------------------------|------------------|------------------------|
| 1        | 1       | STM32WB55CEU6         | MCU, QFN-48              | STMicro          | QFN-48_7x7mm_P0.5mm    |
| 2        | 1       | DLP11SN021SK2         | 2.4 GHz LPF              | TDK              | Custom_4pad_2.4x1.6mm  |
| 3        | 2       | LQP15MN10N02D         | 10 nH inductor           | Murata           | Inductor_SMD_0402      |
| 4        | 4       | GRM155R71H104KE14D    | 100 nF decoupling cap    | Murata           | Capacitor_SMD_0402     |

### 10.2.3 Validation and Compliance

Ensuring that the BOM is accurate and compliant with design specifications is critical for successful PCB fabrication and assembly. The following measures are implemented to validate the BOM:

- **Cross-Referencing:**  
  - Each component in the BOM is cross-referenced with its schematic symbol in KiCad to verify correct footprint assignments. For instance, the MIC5365-3.3YD LDO is linked to the SOT-23-5 footprint, ensuring accurate component placement and connectivity.

- **Sourcing:**  
  - Components are vetted for lifecycle status, distinguishing between Not Recommended for New Designs (NRND) and active components.  
  - Lead times are verified to be within acceptable ranges (e.g., < 12 weeks) to prevent procurement delays.

- **Standards Compliance:**  
  - **IPC-7351 Land Pattern Compliance:**  
    - All footprints are designed in accordance with IPC-7351A standards, ensuring that land patterns are manufacturable and compatible with assembly processes.
  
  - **Environmental Regulations:**  
    - Components are selected to comply with RoHS (Restriction of Hazardous Substances) and REACH (Registration, Evaluation, Authorisation, and Restriction of Chemicals) regulations, ensuring environmental sustainability and safety.

## 10.3 Critical Design Metrics

Adherence to critical design metrics is essential for ensuring that the PCB meets performance, reliability, and manufacturability standards. The following metrics are rigorously enforced within the STM32 WB55CEU-based design:

- **RF Class:**  
  - **Return Loss (S11):** Must be ≤ –10 dB within the 2.4–2.5 GHz band.  
    - Ensures effective impedance matching and minimal signal reflection, crucial for maintaining RF signal integrity.
  
- **USB Class:**  
  - **Differential Skew:** Must be ≤5 ps as measured by Time-Domain Reflectometry (TDR).  
    - Ensures that D+ and D– signals are synchronized, preventing data corruption and maintaining high-speed USB communication reliability.
  
- **Power Class:**  
  - **Voltage Ripple:** Must not exceed 50 mV peak-to-peak (mVpp) within a 20 MHz bandwidth.  
    - Maintains stable power delivery to sensitive components, preventing operational instability due to voltage fluctuations.
  
- **BOM Accuracy:**  
  - **Component-to-Footprint Match:** Achieve 100% alignment between components listed in the BOM and their assigned footprints in KiCad.  
    - Verified through ERC reports and footprint audits, ensuring that all components are correctly placed and soldered during assembly.

This structured approach to net class definition, BOM preparation, and adherence to critical design metrics ensures that the PCB design not only meets the desired electrical and mechanical specifications but also facilitates efficient manufacturing and assembly processes. Compliance with IPC standards and rigorous validation procedures underpin the reliability and performance of the final product, aligning with industry best practices for high-reliability PCB designs.