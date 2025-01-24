# Electrical Rules Check

## Purpose of ERC

The **Electrical Rules Check (ERC)** is a critical validation tool within KiCad's schematic design environment, designed to ensure the logical and electrical integrity of a schematic before progressing to the PCB layout phase. ERC systematically analyzes the schematic to identify and flag potential issues that could compromise the functionality, manufacturability, or reliability of the final electronic design. The primary objectives of ERC encompass the detection and resolution of various schematic anomalies, including but not limited to:

- **Unconnected Pins**: Identifying component pins that lack necessary electrical connections, which could lead to undefined behaviors or circuit malfunctions.
  
- **Conflicting Drivers**: Detecting instances where multiple output sources drive a single net, potentially resulting in conflicting logic states or electrical contention.
  
- **Multi-Unit Component Integrity**: Ensuring that all units of multi-part symbols are appropriately placed or intentionally excluded, maintaining the consistency and completeness of component representations.
  
- **Power Connectivity**: Verifying that power-related pins (e.g., `VCC`, `GND`) are correctly interconnected, ensuring stable and reliable power distribution throughout the circuit.

By addressing these objectives, ERC serves as a preventive measure against design flaws, facilitating the creation of robust and error-free electronic schematics.

## ERC Execution Workflow

The execution of the Electrical Rules Check in KiCad involves a structured workflow that guides the designer through initiating the check, analyzing the results, and undertaking corrective actions to resolve identified issues. This workflow ensures a thorough validation process, enhancing the schematic's reliability and readiness for subsequent design stages.

### 1. Initiating ERC

To commence the Electrical Rules Check, users can employ either graphical interface elements or keyboard shortcuts, providing flexibility and efficiency in the validation process.

- **Access Methods**:
  
  - **Toolbar**: Click the **ERC** icon, typically represented by an exclamation mark within a triangle, located on the schematic editor's toolbar. This icon provides a direct and intuitive means to initiate the check.
    
  - **Menu Navigation**: Alternatively, navigate through the menu by selecting **Tools > Electrical Rules Checker (ERC)**. This pathway offers access to ERC settings and configurations prior to execution.
  
- **Configuration**:
  
  Before executing the ERC, users can tailor the check to suit specific design requirements through the following configurations:
  
  - **Test Settings**: Enable or disable specific checks based on the design's complexity and requirements. For instance, users may choose to activate checks for unconnected pins while disabling library conflict checks if deemed unnecessary for the current project phase.
    
  - **Severity Levels**: Define the thresholds for categorizing issues as errors, warnings, or exclusions. This customization allows designers to prioritize critical violations while managing less severe concerns appropriately.

### 2. Analyzing Results

Upon execution, ERC generates a comprehensive report categorizing identified issues into distinct classifications, facilitating targeted remediation efforts.

- **ERC Report Structure**:
  
  The ERC output is organized into three primary tabs, each delineating the severity and nature of the issues detected:
  
  1. **Errors**: Represent critical violations that necessitate immediate resolution. Examples include shorted power rails, unconnected essential pins, or conflicting driver sources that could lead to circuit instability or failure.
     
  2. **Warnings**: Indicate non-critical issues that, while not immediately detrimental, warrant attention to enhance schematic quality and prevent potential future complications. Examples include grid misalignments or the presence of unplaced multi-unit components.
     
  3. **Exclusions**: Contain user-ignored violations, typically those deemed non-impactful or intentionally omitted from the current design phase. Managing exclusions allows designers to focus on pertinent issues without being distracted by irrelevant warnings.

#### Example: Unplaced Multi-Unit Component

Consider a scenario within the ERC where a multi-unit component, such as a single-pole single-throw (SPST) switch symbol (`SW_SPST`), has multiple units (e.g., Unit A and Unit B). If only Unit A is utilized in the schematic, ERC will flag Unit B as unplaced, generating the following warning:

```
Warning: Unplaced symbol unit 'SW1B' (SW1: Unit B)
```

**Resolution Steps**:

1. **Delete Unused Unit**: Navigate to **Edit > Delete** to remove Unit B from the schematic, thereby eliminating the warning and maintaining schematic clarity.
   
2. **Suppress Warning**: Alternatively, right-click the warning in the ERC report and select **Add Exclusion** to permanently ignore this non-critical issue, especially if the exclusion is justified by design requirements.

### 3. Post-ERC Actions

After addressing the identified ERC issues, designers should undertake the following actions to finalize the validation process:

- **Clear Markers**: Select **Delete All Markers** to remove any schematic annotations or highlights that were introduced during the ERC process. This step ensures a clean schematic view, free from residual markers that may impede further design activities.
  
- **Export Report**: Utilize the **Save Report...** feature to generate and store a log of the ERC results. Maintaining an audit trail of ERC reports is essential for documentation purposes, facilitating future reviews, audits, or compliance checks.

## Advanced ERC Configuration

KiCad's ERC offers advanced configuration options that empower designers to customize the validation process according to specific project needs and design standards. These configurations enhance the flexibility and precision of the ERC, accommodating diverse design complexities and requirements.

### 1. Custom Severity Levels

Customizing the severity levels of ERC checks allows designers to prioritize issues based on their criticality and relevance to the project.

- **Modification Process**:
  
  - Access **ERC Settings** within the ERC interface to adjust the sensitivity and classification of various checks.
    
  - **Examples**:
    
    - **Power Input Pins**: In passive circuits where unconnected power pins do not impact functionality, downgrade the severity of unconnected power pin warnings from errors to warnings. This adjustment prevents unnecessary error flags that could distract from genuine issues.
      
    - **Spice Simulations**: For design elements specific to simulations, such as simulation input nets (`VINPUT`), disable certain ERC checks to avoid irrelevant warnings that do not pertain to the physical PCB layout.

### 2. ERC Exclusions

ERC exclusions enable designers to selectively ignore specific warnings or errors that are either non-critical or intentionally present due to design considerations.

- **Temporary Suppression**:
  
  - Right-click on a specific warning within the ERC report and select **Add Exclusion**. This action temporarily suppresses the warning, allowing designers to proceed without addressing the non-critical issue immediately.
    
- **Permanent Exclusions**:
  
  - To maintain exclusions across multiple design sessions, edit the `erc_exclusions` section within the schematic file. This modification ensures that excluded warnings persist, streamlining the ERC process for recurring non-critical issues.

### 3. ERC Rule Customization

For projects with unique design requirements, ERC rules can be customized to align with specific electrical and mechanical standards.

- **Schema Files**:
  
  - Define custom ERC rules by editing `.kicad_erc` files associated with the project. These files allow for the specification of bespoke rules tailored to the project's particular needs, such as specialized pin type compatibility or unique connectivity requirements.
    
- **Pin Type Conflicts**:
  
  - Adjust the compatibility settings for different pin types within the ERC rules. For example, configure the ERC to recognize and permit connections between open-collector and push-pull drivers where appropriate, ensuring that design-specific electrical configurations are accurately validated.

## Best Practices for ERC

Adhering to best practices in conducting Electrical Rules Checks enhances the efficiency and effectiveness of the validation process, ensuring that schematics are robust and free from critical errors.

1. **Iterative Checks**:
   
   - **Regular Execution**: Perform ERC after significant design changes or during major wiring phases to promptly identify and isolate new issues. This iterative approach prevents the accumulation of unresolved errors, facilitating easier troubleshooting and maintenance.
     
   - **Isolation of Issues**: By conducting ERC in stages, designers can focus on resolving issues pertinent to specific design phases, enhancing overall schematic integrity.

2. **Document Exclusions**:
   
   - **Annotation Practices**: For any warnings or exclusions added during the ERC process, annotate the schematic with comments explaining the rationale (e.g., `// ERC Exclusion: SW1B unused`). This documentation provides clarity for future reviews and assists in maintaining design intent, especially in collaborative environments.
     
   - **Consistency**: Ensure that all exclusions are consistently documented across the schematic to prevent confusion and maintain a clear understanding of intentional design decisions.

3. **Cross-Probe Validation**:
   
   - **Net Highlighting**: Utilize the **Highlight Net** feature within the PCB Editor to confirm that critical nets (e.g., `GND`, `VCC`) are correctly associated and match the schematic's intent. This cross-probing ensures that net associations are accurately reflected in the PCB layout, preventing connectivity issues during manufacturing.
     
   - **Layout Confirmation**: Regularly verify that the PCB layout accurately mirrors the schematic's netlist, maintaining consistency and reducing the risk of design discrepancies.

## ERC in Design Workflow

Integrating ERC into the design workflow serves as a final verification step, ensuring that the schematic is free from electrical conflicts and ready for PCB layout export. The following example illustrates the application of ERC within a project workflow, specifically the LED Torch project:

1. **Post-Wiring ERC**:
   
   - After completing the schematic wiring phase, execute ERC to confirm that all component pins are correctly connected. This initial check identifies and resolves any inadvertent disconnections or wiring errors introduced during the wiring process.

2. **Final ERC**:
   
   - Conduct a comprehensive ERC after all schematic elements have been placed and connected. In the LED Torch project, this final check identifies the `SW1B` warning, which arises from the intentional omission of Unit B in a multi-unit switch symbol. Recognizing that Unit B is not required for the design, the warning is appropriately ignored, ensuring that no critical issues are overlooked.

3. **Export Readiness**:
   
   - Upon successful resolution of ERC findings, clear all markers and annotations to finalize the schematic's validation. Proceed to export the schematic for PCB layout, confident in the design's electrical integrity and readiness for the subsequent fabrication phase.

## Conclusion

The Electrical Rules Check (ERC) in KiCad serves as an indispensable tool for validating the electrical integrity of schematics. By systematically identifying and addressing logical and connectivity issues, ERC ensures that electronic designs are robust, reliable, and manufacturable. Advanced configuration options, coupled with best practices, empower designers to tailor the ERC process to their specific project needs, enhancing both efficiency and accuracy. Integrating ERC into the design workflow fosters a disciplined approach to schematic validation, paving the way for successful PCB layout and fabrication.