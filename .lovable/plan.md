## Make the Enugu State Airboard page phone-aware

Update only `/demo/enugu-state-airboard`. Phones go on to the Airboard experience. Desktops, laptops and anything uncertain stay on a SmartSense page that shows a QR code.

### Behaviour
- **Phone:** shows "Opening your interactive experience…" with a spinner, then opens the Airboard experience after 1.2 seconds. A **Launch Experience** button is there as a backup.
- **Desktop / laptop / tablet / unsure:** never opens the Airboard page by itself. Shows:
  - EXPERIENCE PREVIEW
  - Enugu State Government / Airboard Experience
  - "This interactive experience has been prepared specifically for the Enugu State Government."
  - **Scan with your mobile phone to launch the experience**
  - A large QR code: dark on a white card with a clear border, about 240–280px, drawn sharp on Retina screens
  - "Open your phone camera and scan the QR code to continue."
  - "Prepared for demonstration purposes by SmartSense Technologies in collaboration with MSR."
- The QR code always points to `https://smartsense.africa/demo/enugu-state-airboard`, never to the Airboard address. This avoids loops because only phones get sent on.
- The page shows no Flam name, external address or "powered by" text. `noindex, nofollow` stays, and the page stays unlinked.

### How a phone is detected
A visitor counts as a phone only if **all** of these are true:
1. The browser says it is a phone. It uses `navigator.userAgentData.mobile` when available. Otherwise the browser name must contain a phone keyword (iPhone, iPod, Android + "Mobile", Windows Phone, etc.). iPads and Android tablets don't count.
2. The main input is touch (`pointer: coarse`).
3. The shorter side of the screen is under 600px.

If any check fails or can't be read, the visitor gets the QR page. The check happens before any redirect.

### Technical details
- `src/pages/demos/demoConfig.ts`: add `publicUrl` (the smartsense.africa address used for the QR code). `destinationUrl` stays the one place to change where the experience goes.
- `src/pages/demos/isPhone.ts` (new): a small detection function.
- `src/pages/demos/DemoRedirect.tsx`: choose phone or QR view on first load, and only set the redirect timer for phones.
- QR code: add the small `qrcode.react` package, which draws the code inside the app with SVG and uses no outside service. Error correction "M", with a quiet margin.
- No other files change: no header, footer, forms, Turnstile, Worker, Brevo, deployment, DNS or settings.

### Checks
- Using Playwright with desktop Chrome, desktop Safari (WebKit), iPad, iPhone and Android Pixel profiles: the desktop and tablet profiles stay on the page, show the QR code and never request the Airboard address. The phone profiles redirect.
- Decode the QR image and confirm it contains the smartsense.africa address.
- Confirm there is no Flam or external address in the page text, and `noindex, nofollow` is still there.
- I can't scan with a real iPhone or Android phone from here, so the phone checks will use emulated devices.
