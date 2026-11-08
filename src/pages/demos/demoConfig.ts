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
};
