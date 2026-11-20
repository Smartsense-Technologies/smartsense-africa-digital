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
  // Optional eyebrow label; defaults to "Experience Preview".
  eyebrow?: string;
  // Optional attribution block shown above an optional portrait.
  attribution?: { primary: string; secondary: string };
  portrait?: { src: string; alt: string };
  // Optional phone redirect delay; defaults to the shared value.
  redirectDelayMs?: number;
  // Optional overrides for generic (non-client) demos.
  heading?: string;
  pageTitle?: string;
  launchingText?: string;
  launchLabel?: string;
  scanPrompt?: string;
  tagline?: string;
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
  "pcc-airboard": {
    eyebrow: "Interactive Experience",
    recipient: "PCC",
    experience: "Airboard Experience",
    supporting: "Presented by SmartSense Technologies.",
    explanation: "An interactive Airboard experience presented by SmartSense Technologies.",
    // Destination for /demo/pcc-airboard
    destinationUrl: "https://c.flamapp.com/e?o=m8o3zj",
    publicUrl: "https://smartsense.africa/demo/pcc-airboard",
    desktopIntro: "An interactive Airboard experience presented by SmartSense Technologies.",
    metaDescription: "PCC Airboard interactive experience presented by SmartSense Technologies.",
    attribution: { primary: "PCC New Media Directorate", secondary: "Powered by Prince Shehu Ali" },
    portrait: { src: "/assets/images/prince-shehu-ali.jpeg", alt: "Prince Shehu Ali, PCC New Media Directorate" },
    redirectDelayMs: 3500,
  },
  "business-scan-and-win": {
    eyebrow: "Interactive Business Demo",
    heading: "Experience Business Scan & Win",
    pageTitle: "Business Scan & Win Demo | SmartSense Technologies",
    recipient: "Business Scan & Win",
    experience: "",
    supporting: "See how businesses can turn a simple scan into an interactive customer experience.",
    explanation: "",
    // Destination for /demo/business-scan-and-win
    destinationUrl: "https://c.flamapp.com/e?o=z50kwo",
    publicUrl: "https://smartsense.africa/demo/business-scan-and-win",
    desktopIntro:
      "See how businesses can turn a simple scan into customer engagement, participation and measurable results.",
    metaDescription: "An interactive Business Scan & Win demonstration from SmartSense Technologies.",
    launchingText: "Opening your Business Scan & Win experience…",
    launchLabel: "Launch Business Scan & Win",
    scanPrompt: "Scan with your mobile phone to try the experience",
    tagline: "Scan. Engage. Participate. Reward. Measure.",
    redirectDelayMs: 1800,
  },
};
