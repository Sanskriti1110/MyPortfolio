export const profile = {
 name: 'Sanskriti Binani', email: 'sanskriti.binani11@gmail.com',
 github: 'https://github.com/Sanskriti1110', linkedin: 'https://www.linkedin.com/in/sanskriti-binani/',
};
export const projects = [
  {
    "id": "jonah",
    "number": "01",
    "name": "Jonah V4",
    "category": "SENSOR HARDWARE / RAINMAKER TECHNOLOGIES",
    "headline": "PCB redesign for an airborne weather sensor.",
    "summary": "I redesigned a board that measures air pressure, temperature, and humidity. My work included the sensor circuit, PCB layout, calibration, and testing.",
    "tags": [
      "Altium Designer",
      "Rigid-flex PCB",
      "Sensor front end",
      "Environmental testing"
    ],
    "image": "jonah-cutout.webp",
    "alt": "Altium render of the Jonah V4 sensor board",
    "caption": "JONAH V4 / PCB RENDER",
    "role": "Sensor-board redesign, calibration & validation",
    "sections": [
      {
        "title": "Goal",
        "text": "Reduce the response time of an airborne humidity sensor. The previous sensor took 2–4 seconds to respond to changes."
      },
      {
        "title": "My work",
        "text": "I moved the temperature sensor onto a low-mass flexible PCB section and used an HMC07M bare capacitive humidity sensor with a PCAP04 CDC (capacitance-to-digital converter) circuit."
      },
      {
        "title": "Hardware",
        "text": "The four-layer rigid-flex board combines temperature, pressure, and humidity sensing. I also designed the controller’s 48 V-to-12 V buck converter for a 4 A output. The controller achieves 35 mV peak-to-peak output ripple and 92% efficiency, and handles acquisition, the acoustic wind sensor, and fan controls."
      },
      {
        "title": "Testing",
        "text": "I calibrated multiple boards in an environmental chamber and compared readings with the previous Jonah and an iMet reference. The new Jonah achieved a response time below one second to reach 63% of a change (τ63)."
      }
    ],
    "result": "<1 s",
    "resultLabel": "Reported sensor response time (τ63)",
    "lesson": "The sensor layout and the amount of material around it affect how quickly it responds.",
    "evidence": "validation-labeled.svg",
    "evidenceAlt": "Temperature and humidity readings from Jonah, the previous Jonah, and an iMet reference",
    "evidenceCaption": "Temperature and humidity comparison",
    "note": ""
  },
  {
    "id": "motor-bench",
    "name": "Brushless Motor Test Bench",
    "category": "MOTOR TESTING / RAINMAKER TECHNOLOGIES",
    "headline": "Winding-resistance and spin testing on one rig.",
    "summary": "I designed and built a Raspberry Pi test bench that measures motor winding resistance and runs brushless drone motors through an ESC.",
    "tags": [
      "Raspberry Pi",
      "Python",
      "DroneCAN",
      "4-wire Kelvin measurement",
      "KiCad"
    ],
    "image": "motor-test-bench-cutout.webp",
    "thumbnail": "motor-test-bench-cutout.webp",
    "alt": "Motor test bench relay PCB with four Kelvin measurement terminals and three motor phase connections",
    "caption": "MOTOR TEST BENCH / RELAY PCB",
    "role": "Test-bench hardware, Python control software & setup documentation",
    "sections": [
      {
        "title": "Resistance measurement",
        "text": "A TE Axicom gold-contact relay matrix, driven by a ULN2803, connects a B&K Precision milliohm meter to each motor phase using a 4-wire Kelvin measurement path. The software sequences A–B, B–C, and A–C measurements and saves per-motor results to CSV."
      },
      {
        "title": "Spin testing",
        "text": "A logic-level MOSFET controls an ABB contactor that connects the motor to a 48 V ESC. DroneCAN commands travel through a USB-to-CAN FD adapter, with staged throttle control and live current, RPM, and temperature readings."
      },
      {
        "title": "Mode control",
        "text": "The controller permits only one test mode at a time. A drain-and-verify sequence between modes and cold switching of the contactor are designed to keep stored ESC energy away from the resistance meter."
      },
      {
        "title": "Software and setup",
        "text": "I developed the Python control suite and documented the software environment and setup steps in a reproducible runbook."
      }
    ],
    "result": "2 modes",
    "resultLabel": "Resistance measurement and powered spin testing",
    "lesson": "Combining measurement and powered testing requires careful control of both the signal paths and the energy left in the system.",
    "number": "02"
  },
  {
    "id": "foldeasy",
    "number": "03",
    "name": "FoldEasy",
    "category": "CONNECTED HARDWARE / UPENN TEAM PROJECT",
    "headline": "An automated clothes-folding machine.",
    "summary": "For this team project, I worked on the PCB, embedded firmware, and wireless connectivity for a machine that folds clothes, adds a fragrance mist, and supports remote control.",
    "tags": [
      "SAMW25",
      "4-layer PCB",
      "FreeRTOS",
      "MQTT / Node-RED"
    ],
    "image": "foldeasy-system.webp",
    "thumbnail": "foldeasy-system-cutout.webp",
    "alt": "FoldEasy assembled folding platform and electronics",
    "caption": "FOLDEASY / PHYSICAL PROTOTYPE",
    "role": "PCB architecture, embedded firmware & IoT integration",
    "sections": [
      {
        "title": "Goal",
        "text": "Build a clothes-folding prototype that can start from sensor input or a remote command."
      },
      {
        "title": "Hardware",
        "text": "I worked on a custom four-layer board using a SAMW25 microcontroller. It connects servo motors, light and infrared sensors, and an atomizer, with USB-C input and a lithium-ion power system. A power multiplexer switches between the USB and battery supplies."
      },
      {
        "title": "Firmware",
        "text": "My work included FreeRTOS firmware and IoT integration. The firmware coordinates sensors, motors, and Wi-Fi, supports remote firmware updates, and sends status updates to a Node-RED dashboard through MQTT."
      },
      {
        "title": "Prototype testing",
        "text": "The prototype supplied 1.5 A rather than the planned 2.2 A, and one of the three manufactured boards worked correctly. We adjusted the folding sequence to stay within the available current."
      }
    ],
    "result": "30 s",
    "resultLabel": "Interval between dashboard status updates",
    "lesson": "Testing the motors under load helped us identify the power limit and adjust the folding sequence.",
    "evidence": "foldeasy-thermal.webp",
    "evidenceAlt": "Thermal-camera image of FoldEasy PCB under load",
    "evidenceCaption": "Thermal image of the PCB under load",
    "link": "https://github.com/ese5160/a14g-final-submission-s25-t25-foldeasy",
    "credit": "Team: Sanskriti Binani and Chirag Satapathy."
  },
  {
    "id": "filterfox",
    "number": "04",
    "name": "FilterFox",
    "category": "WIRELESS HARDWARE / FILTERFOX INC.",
    "headline": "PCB design for an ESP32 wireless device.",
    "summary": "I worked on ESP32-based hardware at FilterFox, including schematics, PCB layout, wireless circuits, power management, and initial board testing.",
    "tags": [
      "ESP32",
      "LoRa · 915 MHz",
      "Wi-Fi · 2.4 GHz",
      "Altium Designer"
    ],
    "image": "filterfox-cutout.webp",
    "alt": "FilterFox PCB components and routing",
    "caption": "FILTERFOX / PCB LAYOUT",
    "role": "Electrical integration, PCB design & system bring-up",
    "sections": [
      {
        "title": "Goal",
        "text": "Develop ESP32-based hardware for an IoT HVAC filter-monitoring device that communicates over LoRa and Wi-Fi."
      },
      {
        "title": "My work",
        "text": "I worked on Altium schematics and layouts for transmitter and receiver boards, including LoRa and Wi-Fi routing and antenna matching. I also worked on an event-driven wake-up approach so the device could spend less time active."
      },
      {
        "title": "Manufacturing",
        "text": "I reviewed designs with PCB vendors, coordinated components, and supported prototype assembly and initial testing."
      }
    ],
    "result": "915 MHz",
    "resultLabel": "LoRa alongside 2.4 GHz Wi-Fi",
    "lesson": "I gained experience taking wireless hardware from schematics and layout through manufacturing and testing."
  },
  {
    "id": "refresh",
    "number": "05",
    "name": "R.E.F.R.E.S.H.",
    "category": "WEARABLE SYSTEMS / UPENN TEAM PROJECT",
    "headline": "A sensor-controlled cooling glove.",
    "summary": "For this team project, I worked on sensor integration, fan control, and wireless data reporting for a wearable cooling-glove prototype.",
    "tags": [
      "ATmega328PB",
      "ADC / I²C",
      "ESP32 / Blynk",
      "C / Python"
    ],
    "image": "refresh-cutout.webp",
    "alt": "Physical R.E.F.R.E.S.H. glove prototype with fan, wiring and sensors",
    "caption": "R.E.F.R.E.S.H. / BUILT GLOVE PROTOTYPE",
    "role": "Sensor integration, cooling control & telemetry",
    "sections": [
      {
        "title": "Goal",
        "text": "Build a glove that measures skin conductance and pulse signals and uses sensor input to control cooling."
      },
      {
        "title": "Sensors and control",
        "text": "The prototype uses an ATmega328PB to read skin-conductance and optical pulse sensors through ADC and I²C interfaces. PWM controls the cooling fan."
      },
      {
        "title": "Wireless connection",
        "text": "The implementation includes ATmega firmware, an ESP32 connection to Blynk, and Python processing."
      }
    ],
    "result": "ADC → PWM",
    "resultLabel": "Sensor input to cooling control",
    "lesson": "This project gave me experience combining sensors, fan control, and wireless reporting in a wearable prototype.",
    "link": "https://sanskriti1110.github.io/Team20_REFRESH/",
    "credit": "Team: Sanskriti Binani, Chirag Satapathy, and Megha Mistry."
  },
  {
    "id": "8-bit-adder",
    "name": "8-bit Adder",
    "category": "DIGITAL IC DESIGN / UPENN TEAM PROJECT",
    "headline": "Comparing two CMOS adder designs.",
    "summary": "For this team project, we designed and simulated an 8-bit ripple-carry adder and an optimized carry-chain design. We compared propagation delay, switching energy, and leakage.",
    "tags": [
      "CMOS",
      "45 nm",
      "Circuit simulation",
      "Digital logic"
    ],
    "image": "adder-schematic.png",
    "alt": "Eight-bit optimized adder circuit schematic from the project report",
    "caption": "8-BIT ADDER / OPTIMIZED SCHEMATIC",
    "role": "Team project: transistor-level circuit design, simulation & comparison",
    "sections": [
      {
        "title": "Baseline",
        "text": "We built an 8-bit ripple-carry adder from full-adder cells and checked the one-bit cell across all eight input combinations."
      },
      {
        "title": "Optimization",
        "text": "We developed a Manchester carry-chain design with carry bypass and adjusted transistor sizes to reduce carry-propagation delay."
      },
      {
        "title": "Simulation results",
        "text": "For the carry-propagation test in our report, average rising/falling propagation delay decreased from 0.423 ns to 0.29575 ns—about 30%."
      },
      {
        "title": "Trade-off",
        "text": "The faster design used more switching energy: 132.4 fJ versus 23.04 fJ in the reported maximum-switching test. These are circuit simulation results, not measurements from a fabricated chip."
      }
    ],
    "result": "30%",
    "resultLabel": "Lower simulated propagation delay in the reported test",
    "lesson": "Reducing delay can increase energy use. Comparing both made the cost of the faster design clear.",
    "credit": "Team: Sanskriti Binani and Chirag Satapathy · ESE 5700, Fall 2024.",
    "link": "/assets/8-bit-adder-report.pdf",
    "number": "06"
  },
  {
    "id": "configurable-logic-block",
    "name": "Configurable Logic Block",
    "category": "DIGITAL IC DESIGN / UPENN COURSE PROJECT",
    "headline": "A programmable logic circuit built in Cadence.",
    "summary": "This course project combines a shift register, SRAM, a lookup table, and an output flip-flop into a configurable logic block. The work covers circuit design, component testing, and full-system simulation.",
    "tags": [
      "Cadence",
      "6T SRAM",
      "Lookup table",
      "CMOS"
    ],
    "image": "clb-complete-schematic.png",
    "alt": "Complete configurable logic block circuit schematic showing the integrated register, memory, lookup table and output stages",
    "caption": "CONFIGURABLE LOGIC BLOCK / COMPLETE SCHEMATIC",
    "role": "Course project: circuit design, integration & simulation",
    "sections": [
      {
        "title": "Configuration",
        "text": "A 16-bit serial-in, parallel-out register loads a truth table into sixteen 6T SRAM cells. A multiplexer-based 16-to-1 lookup table selects the output for a four-bit input."
      },
      {
        "title": "Timing and output",
        "text": "A non-overlapping clock coordinates the stages. An output D flip-flop holds the selected logic value between cycles, avoiding the precharge transients visible at the lookup-table output."
      },
      {
        "title": "Design changes",
        "text": "The design adjusts SRAM transistor sizes, shares control circuitry across the memory array, and shares select-line inverters across the lookup table to reduce duplicated circuitry."
      },
      {
        "title": "Verification",
        "text": "The report checks each component and then the complete data path. The alternating-bit test passed at a 1.66 ns clock period and failed at 1.65 ns, corresponding to roughly 0.6 GHz for that simulated test."
      }
    ],
    "result": "16 bits",
    "resultLabel": "Programmable truth-table storage",
    "lesson": "Testing each stage separately made it easier to find timing and data-transfer problems during integration.",
    "evidence": "clb-verification.png",
    "evidenceAlt": "Cadence transient waveforms from the configurable logic block verification",
    "evidenceCaption": "Complete CLB simulation",
    "evidenceTitle": "Logic verification",
    "evidenceDescription": "Transient simulation checks the configured lookup-table output as the input address changes.",
    "link": "/assets/configurable-logic-block-report.pdf",
    "number": "07"
  }
];
export const experience = [
  {
    "date": "JUN 2026 — PRESENT",
    "company": "Rainmaker Technologies",
    "title": "Electrical Engineer Intern",
    "text": "I design and test electronics for airborne sensing, including the Jonah V4 sensor board and its power controller. My work includes environmental-chamber calibration, achieving a sensor response below one second, and building a test bench for brushless-motor resistance measurements and spin testing."
  },
  {
    "date": "JAN — MAY 2026",
    "company": "University of Pennsylvania",
    "title": "Teaching Assistant · IoT Edge Computing",
    "text": "I supported student teams developing embedded IoT systems, helping them test new boards, troubleshoot firmware, and debug wireless communication. I guided them through hardware and software integration and testing their complete systems."
  },
  {
    "date": "MAY — DEC 2025",
    "company": "FilterFox Inc.",
    "title": "Hardware Engineering Intern",
    "text": "I worked on ESP32-based hardware for an HVAC filter-monitoring device using LoRa and Wi-Fi. My responsibilities included transmitter and receiver PCB design, antenna matching, power management, and coordinating prototype manufacturing and testing."
  },
  {
    "date": "JAN — AUG 2025",
    "company": "GRASP Robotics Lab · UPenn",
    "title": "Researcher",
    "text": "I worked on a four-layer breakout board for an EPC901 image sensor and developed firmware for the nRF54L15 microcontroller. The firmware coordinated timed analog sampling and data buffering for sensor readout."
  }
];

// Bibliographic details verified against the supplied Google Scholar profile.
export const scholarProfile='https://scholar.google.com/citations?user=8NkIH0QAAAAJ&hl=en';
export const publications=[
 {year:'2024',title:'Recontextualizing the apartment complexes with a unified smart RFID card',authors:['Chirag Satapathy','Sanskriti Binani','R. Raja Singh'],venue:'AIP Conference Proceedings',reference:'Volume 2966 · Issue 1 · Article 020014',url:'https://pubs.aip.org/aip/acp/article-abstract/2966/1/020014/3279446'},
 {year:'2023',title:'Automated classification of pathological types of lung cancer-a machine learning approach',authors:['Sanskriti Binani','Chirag Satapathy'],venue:'IEEE · CIISCA 2023',reference:'International Conference on Computational Intelligence for Information, Security and Communication Applications · pp. 178–183',url:'https://ieeexplore.ieee.org/abstract/document/10403581/'}
];

