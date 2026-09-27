export type ProjectEvidence = { metrics: {value:string;label:string}[]; figures: {file:string;title:string;description:string;kind:string}[] };
export const projectEvidence: Record<string, ProjectEvidence> = {
  "jonah": {
    "metrics": [
      {
        "value": "48 → 12 V",
        "label": "Buck converter · 4 A output design"
      },
      {
        "value": "35 mV p-p",
        "label": "Controller output ripple"
      },
      {
        "value": "92%",
        "label": "Controller conversion efficiency"
      },
      {
        "value": "<1 s",
        "label": "Sensor response · τ63"
      }
    ],
    "figures": [
      {
        "file": "controller-front-cutout.webp",
        "title": "Controller PCB · component side",
        "description": "Component placement for power conversion, acquisition, and fan control.",
        "kind": "PCB"
      },
      {
        "file": "controller-back-cutout.webp",
        "title": "Controller PCB · reverse side",
        "description": "Reverse-side view of the controller assembly.",
        "kind": "PCB"
      },
      {
        "file": "validation.webp",
        "title": "Sensor response comparison",
        "description": "Temperature and humidity readings from Jonah, the previous logger, and an iMet reference during the same test. Five boards were calibrated in an environmental chamber.",
        "kind": "Test results"
      }
    ]
  },
  "motor-bench": {
    "metrics": [
      {
        "value": "4-wire",
        "label": "Kelvin winding-resistance measurement"
      },
      {
        "value": "3 pairs",
        "label": "Automatic A–B / B–C / A–C sequence"
      },
      {
        "value": "48 V",
        "label": "ESC power path"
      },
      {
        "value": "CSV",
        "label": "Per-motor measurement logs"
      }
    ],
    "figures": []
  },
  "foldeasy": {
    "metrics": [
      {
        "value": "4 layers",
        "label": "Custom SAMW25 PCB"
      },
      {
        "value": "≈200 ms",
        "label": "Detection-to-start · team-reported"
      },
      {
        "value": "30 s",
        "label": "Remote status-update interval"
      },
      {
        "value": "1.5 A",
        "label": "Prototype output · 2.2 A intended"
      }
    ],
    "figures": [
      {
        "file": "foldeasy-architecture.webp",
        "title": "System architecture",
        "description": "The controller coordinates sensors, folding servos, atomization, and wireless commands.",
        "kind": "Design"
      },
      {
        "file": "foldeasy-control-flow.webp",
        "title": "Node-RED control flow",
        "description": "Message routing behind the remote interface for control and status reporting.",
        "kind": "Software"
      },
      {
        "file": "dashboard.webp",
        "title": "Remote operation",
        "description": "The Node-RED dashboard exposes controls and device status over the Wi-Fi/MQTT connection.",
        "kind": "Software"
      },
      {
        "file": "foldeasy-thermal.webp",
        "title": "PCB under load",
        "description": "Thermal-camera image of the assembled board during load testing. The prototype supplied 1.5 A rather than the intended 2.2 A, limiting available servo power.",
        "kind": "Test results"
      }
    ]
  },
  "filterfox": {
    "metrics": [
      {
        "value": "915 MHz",
        "label": "LoRa radio"
      },
      {
        "value": "2.4 GHz",
        "label": "Wi-Fi connectivity"
      },
      {
        "value": "ESP32",
        "label": "Controller platform"
      },
      {
        "value": "Tx / Rx",
        "label": "Transmitter and receiver PCB work"
      }
    ],
    "figures": [
      {
        "file": "filterfox-static.webp",
        "title": "Archived assembly render",
        "description": "Rendered from the supplied STEP export. This archived assembly illustrates component placement; it is not presented as a verified final-revision board.",
        "kind": "CAD"
      }
    ]
  },
  "refresh": {
    "metrics": [
      {
        "value": "ADC + I²C",
        "label": "Skin-conductance and pulse inputs"
      },
      {
        "value": "10 samples",
        "label": "GSR averaging in firmware"
      },
      {
        "value": "Timer1",
        "label": "Hardware PWM fan control"
      },
      {
        "value": "9600 baud",
        "label": "ATmega serial telemetry"
      }
    ],
    "figures": [
      {
        "file": "refresh-proposal-flow.webp",
        "title": "Early control-flow design",
        "description": "Planning diagram for sensor acquisition, processing, and cooling. It includes proposed LoRa and optional Peltier branches; the supplied implementation uses ESP32/Blynk telemetry and a fan.",
        "kind": "Proposal"
      },
      {
        "file": "refresh-demo-session.webp",
        "title": "Demonstrating the cooling glove",
        "description": "Trying the wearable prototype during the project demonstration.",
        "kind": "Demo day"
      },
      {
        "file": "refresh-demo-day.webp",
        "title": "Demo day at UPenn",
        "description": "The class with their embedded-system prototypes at demo day.",
        "kind": "Demo day"
      }
    ]
  },
  "8-bit-adder": {
    "metrics": [
      {
        "value": "45 nm",
        "label": "CMOS design process"
      },
      {
        "value": "0.423 ns",
        "label": "Baseline simulated propagation delay"
      },
      {
        "value": "0.296 ns",
        "label": "Optimized simulated propagation delay"
      },
      {
        "value": "30%",
        "label": "Delay reduction in the reported test"
      }
    ],
    "figures": [
      {
        "file": "adder-baseline-delay.webp",
        "title": "Baseline ripple-carry delay",
        "description": "Rising and falling delays of 0.412 ns and 0.434 ns give an average propagation delay of 0.423 ns in the carry-propagation test.",
        "kind": "Simulation"
      },
      {
        "file": "adder-optimized-delay.webp",
        "title": "Optimized carry-chain delay",
        "description": "The marked input/output crossings give 0.3371 ns rising and 0.2545 ns falling delay, averaging 0.29575 ns. The speed improvement comes with higher switching energy.",
        "kind": "Simulation"
      }
    ]
  },
  "configurable-logic-block": {
    "metrics": [
      {
        "value": "16 bits",
        "label": "SRAM configuration storage"
      },
      {
        "value": "4 inputs",
        "label": "16-to-1 lookup table"
      },
      {
        "value": "1.66 ns",
        "label": "Passing simulated clock period"
      },
      {
        "value": "≈0.6 GHz",
        "label": "Frequency for the documented test"
      }
    ],
    "figures": [
      {
        "file": "clb-sram.webp",
        "title": "6T SRAM with access circuitry",
        "description": "The cell schematic includes precharge and write-access circuitry. Transistor sizing balances read stability and the ability to overwrite stored data.",
        "kind": "Design"
      },
      {
        "file": "clb-lut.webp",
        "title": "Multiplexer-based lookup table",
        "description": "A 16-to-1 selection network implements a configurable four-input logic function. Shared select-line inverters reduce duplicated circuitry.",
        "kind": "Design"
      },
      {
        "file": "clb-timing-pass.webp",
        "title": "Passing test · 1.66 ns",
        "description": "Alternating configuration bits and address transitions exercise the complete data path. The report records correct output at a 1.66 ns clock period.",
        "kind": "Simulation"
      },
      {
        "file": "clb-timing-fail.webp",
        "title": "Timing limit · 1.65 ns",
        "description": "The next faster test produces incorrect output. Showing the failing case alongside the passing case identifies the observed simulation limit.",
        "kind": "Simulation"
      }
    ]
  }
};
