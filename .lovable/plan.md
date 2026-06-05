## Scan & Win Steps Reorder

### Change
Reorder the `STEPS` array in `src/pages/ScanAndWin.tsx` to match the user's requested participant flow:

1. Scan the Campaign QR Code
2. Complete the Campaign Action
3. Enter a Mobile Number
4. Receive a Verification Code by SMS
5. Verify the Mobile Number
6. Receive Entry or Reward Confirmation

### Technical Detail
Only the `STEPS` constant array order is changed. Icons and descriptions move with their respective steps. No other page content, routes, or infrastructure is touched.