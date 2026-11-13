// Client-specific, unlisted demo pages served at /demo/[client]-[experience].
// To change where a demo opens, edit its destinationUrl only — the public URL stays the same.
export type DemoConfig = {
  recipient: string;
  experience: string;
  supporting: string;
  explanation: string;
  destinationUrl: string;
  // SmartSense address encoded in the desktop QR code (never the destination).
  publicUrl: string;
  desktopIntro: string;
  // Optional search/preview description; Enugu keeps its original wording.
  metaDescription?: string;
};

export const DEMOS: Record<string, DemoConfig> = {
  "enugu-state-airboard": {
    recipient: "Enugu State Government",
    experience: "Airboard Experience",
    supporting:
      "Prepared for demonstration purposes by SmartSense Technologies in collaboration with MSR.",
    explanation:
      "This interactive preview has been prepared specifically for the Enugu State Government to demonstrate how Airboard technology can transform physical and digital communication into an interactive experience.",
    // Destination for /demo/enugu-state-airboard
    destinationUrl: "https://c.flamapp.com/e?o=b5e5y6",
    publicUrl: "https://smartsense.africa/demo/enugu-state-airboard",
    desktopIntro:
      "This interactive experience has been prepared specifically for the Enugu State Government.",
  },
  "nigcomsat-airboard": {
    recipient: "NIGCOMSAT",
    experience: "Airboard Experience",
    supporting: "Prepared for demonstration purposes by SmartSense Technologies.",
    explanation:
      "This interactive experience has been prepared specifically for NIGCOMSAT by SmartSense Technologies.",
    // Destination for /demo/nigcomsat-airboard
    destinationUrl: "https://c.flamapp.com/e?o=p4geuc",
    publicUrl: "https://smartsense.africa/demo/nigcomsat-airboard",
    desktopIntro:
      "This interactive experience has been prepared specifically for NIGCOMSAT by SmartSense Technologies.",
    metaDescription: "An experience preview prepared specifically for NIGCOMSAT by SmartSense Technologies.",
  },
};
