# 5. Oscillators

## 5.1 High-Speed External Oscillator (HSE)

The STM32 WB55CEU microcontroller utilizes a High-Speed External Oscillator (HSE) operating at 32 MHz as the primary clock source for both the Cortex-M4 core and the RF subsystem. The HSE ensures precise timing and synchronization necessary for reliable operation of digital and wireless functionalities.

- **Crystal Specifications:**

  - **Type:** Fundamental-mode quartz crystals, exemplified by models such as the NX3225GD-32M, are employed to provide the necessary stability and frequency accuracy. These crystals exhibit a stability of ±10 parts per million (ppm), ensuring minimal frequency drift over temperature and time variations.
  
  - **Load Capacitance ($C_L$):** The HSE crystals are designed with an internal programmable load capacitance of 8 pF, eliminating the need for external capacitive components. This simplifies the circuit design and reduces component count, enhancing reliability and manufacturability.
  
  - **Equivalent Series Resistance (ESR):** Crystals with an ESR of ≤ 80 Ω are selected to guarantee reliable startup conditions. Low ESR values facilitate the initiation of oscillations with minimal drive power, ensuring consistent performance across varying environmental conditions.
  
  - **Drive Level:** The oscillation drive level is configured via the RCC_CR register to 100 µW. This power level is optimized to sustain stable oscillations without inducing excessive thermal stress on the crystal, thereby prolonging its operational lifespan.

- **Internal Load Capacitance Configuration:**

  The internal load capacitance of the HSE is dynamically adjustable through the RCC_CR register to match the crystal's specified $C_L$. The effective load capacitance is determined by the equation:

  $$
  C_{\text{load}} = \frac{C_{L1} \cdot C_{L2}}{C_{L1} + C_{L2}} + C_{\text{stray}}
  $$

  where $C_{\text{stray}} \approx 2 \text{ pF}$ accounts for the parasitic capacitance inherent in PCB traces and pad geometries. This configurability allows for precise tuning of the oscillator's frequency response, ensuring optimal performance.

- **Layout Guidelines:**

  - **Trace Length:** The interconnecting traces between OSC_IN and OSC_OUT must be maintained at or below 15 mm to minimize signal degradation and maintain phase coherence.
  
  - **Guard Ring:** A ground pour surrounding the crystal with a clearance of 0.3 mm is implemented to shield the oscillator from external electromagnetic interference (EMI), thereby preserving signal integrity.
  
  - **Signal Routing:** It is imperative to avoid parallel routing of OSC_IN and OSC_OUT traces with high-speed digital or RF signals to prevent crosstalk and signal contamination.

## 5.2 Low-Speed External Oscillator (LSE)

The Low-Speed External Oscillator (LSE) operates at 32.768 kHz and serves as the clock source for the Real-Time Clock (RTC) and low-power sleep modes of the STM32 WB55CEU microcontroller. The LSE ensures accurate timekeeping and efficient power management in standby states.

- **Crystal Specifications:**

  - **Type:** Tuning-fork quartz crystals, such as the NX2012SA-32.768K, are selected for their precise frequency stability and minimal power consumption. These crystals operate in fundamental mode with a stability of ±20 ppm, suitable for RTC applications.
  
  - **Load Capacitance ($C_L$):** The LSE crystals require an external load capacitance ranging from 6 pF to 12 pF, typically set to 10 pF. This capacitance is critical for achieving the desired oscillation frequency and ensuring stable operation.
  
  - **Equivalent Series Resistance (ESR):** An ESR of ≤ 70 kΩ is specified to facilitate low-power operation. High ESR values are necessary to prevent excessive current draw during oscillation, thereby extending battery life in backup scenarios.

- **External Load Capacitor Design:**

  To compensate for the crystal's load capacitance and account for stray capacitances ($C_{\text{stray}} \approx 3 \text{ pF}$) from PCB traces and package parasitics, the external load capacitor ($C_{\text{ext}}$) is calculated using the formula:

  $$
  C_{\text{ext}} = 2 \cdot (C_L - C_{\text{stray}})
  $$

  For instance, with $C_L = 10 \text{ pF}$ and $C_{\text{stray}} = 3 \text{ pF}$, the external load capacitor required is:

  $$
  C_{\text{ext}} = 2 \times (10 - 3) = 14 \text{ pF}
  $$

  Given standard component values, a 12 pF capacitor is selected to approximate the calculated value, ensuring reliable oscillation without necessitating non-standard components.

- **Series Resistance ($R_{\text{ext}}$):**

  A resistor ranging from 1 MΩ to 5 MΩ is integrated in series with the LSE to enhance oscillation margins. This resistor, exemplified by Panasonic ERJ-1TN models, serves to stabilize the oscillator by dampening potential oscillation overshoot and ensuring consistent startup behavior.

## 5.3 Oscillator Circuit Validation

Validation of the oscillator circuits is essential to confirm adherence to design specifications and ensure reliable operation under various conditions.

- **HSE Startup Verification:**

  - **Startup Time:** The HSE oscillator's startup time is measured using an oscilloscope with a 10× probe and 1 MΩ input impedance. The measured startup time must be ≤ 5 ms to ensure rapid system initialization.
  
  - **OSC_OUT Amplitude:** The output amplitude of the HSE is verified to lie within the range of 0.8 Vpp to 1.2 Vpp at 32 MHz. This amplitude range ensures that the oscillator signal is robust enough to drive the microcontroller's clock inputs without distortion.

- **LSE Power Consumption:**

  The power consumption of the LSE is assessed in Stop mode using the STM32CubeMonitor-Power tool. The leakage current must be validated to be ≤ 500 nA, ensuring minimal battery drain during low-power operations and preserving the longevity of backup power sources.

- **Frequency Accuracy:**

  Frequency accuracy is calibrated using the TIM2 input capture functionality driven by the HSE or the LSE RTC output via the LSCO pin. This calibration ensures that the oscillators maintain their specified frequencies within the required tolerance, providing precise timing for RTC functionalities and synchronized BLE operations.

## 5.4 Critical Design Rules

Adhering to critical design rules is paramount to ensuring the oscillator circuits function reliably and maintain signal integrity.

- **Parasitic Capacitance Mitigation:**

  - **Differential Routing:** The OSC_IN and OSC_OUT traces are routed as differential pairs with a spacing of 5 mils over a dedicated ground plane. This approach minimizes parasitic capacitance and inductance, reducing the likelihood of signal distortion.
  
  - **Via Minimization:** Vias between the crystal and the microcontroller are strictly avoided to prevent inductive and capacitive coupling that can degrade oscillator performance. Direct, uninterrupted trace routing is employed to maintain signal fidelity.

- **Crystal Grounding:**

  - **Dedicated Ground Island for LSE:** The LSE oscillator is housed within a dedicated ground island, isolated from other ground domains to prevent interference. This island is connected to the main ground plane via a single via, ensuring a clean and stable reference for the oscillator.
  
  - **HSE Ground Connection:** The HSE ground is directly tied to the MCU’s VSSA pin, providing a low-impedance path for return currents and minimizing ground noise that could affect oscillator stability.

## 5.5 Performance Metrics

Establishing and adhering to stringent performance metrics is essential for validating the oscillator circuits' efficacy and reliability.

- **Phase Noise:**

  - **HSE:** The High-Speed External Oscillator must exhibit a phase noise of ≤ –130 dBc/Hz at a 10 kHz offset from the carrier frequency (32 MHz). Low phase noise is critical for minimizing signal jitter and ensuring high-quality clock signals for the microcontroller and RF subsystem.
  
  - **LSE:** The Low-Speed External Oscillator must maintain a phase noise of ≤ –145 dBc/Hz at a 1 kHz offset from the carrier frequency (32.768 kHz). Enhanced phase noise performance in the LSE ensures accurate timekeeping and reliable RTC functionality.

- **Temperature Drift:**

  - **HSE:** The oscillator's frequency stability must remain within ±2 ppm across a temperature range of –40°C to +85°C. Minimal temperature-induced frequency drift is essential for maintaining consistent system performance in varying environmental conditions.
  
  - **LSE:** The LSE oscillator must exhibit a frequency drift of ±5 ppm within the same temperature range. This level of stability is sufficient for precise RTC operations and low-power mode functionalities.

## Conclusion

The oscillator design for the STM32 WB55CEU microcontroller is meticulously engineered to meet stringent performance and reliability standards essential for advanced embedded applications. By employing high-quality fundamental-mode and tuning-fork quartz crystals, integrating precise load capacitance configurations, and adhering to critical layout and grounding guidelines, the oscillators ensure stable and accurate clock generation. Comprehensive validation through oscilloscope measurements, power consumption assessments, and phase noise analysis further guarantees that the oscillators perform reliably under diverse operational conditions. This rigorous approach aligns with STM32 hardware design guidelines (AN2867), ensuring robust clock stability for BLE synchronization and RTC timestamp accuracy, thereby underpinning the overall performance and reliability of the Bluetooth-enabled PCB design.