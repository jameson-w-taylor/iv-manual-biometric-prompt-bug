# Identity Vault Sample
This application was created to demonstrate a bug in IV when manually prompting for Biometrics. Following the snippet in the docs for [Device.showBiometricPrompt()](https://ionic.io/docs/identity-vault/classes/device#showbiometricprompt), any code after invoking this function is not executed. This was observed on iOS 15.3.1 using a 2020 iPhone SE.

## Developer Setup
1. Copy a `.npmrc` file with the required product key to use `@ionic-enterprise/identity-vault` or sign in to npm if you're on the Ionic team.
2. Run `npm install`
3. Add the iOS platform (`ionic cap add ios`)
5. Add the required [NSFaceIDUsageDescription](https://ionic.io/docs/identity-vault/install#capacitor-requirements) to `info.plist`
5. Open in Xcode (`ionic cap open ios`) and run on a device with biometrics enrolled
6. Open safari and use the developer tools to view the console output while running the app

## Bug Reproduction
After following the setup steps above, notice the following behavior when clicking the button to trigger the biometric prompt:
  - The prompt is shown as expected
  - The prompt is dismissed after you successfully authenticate
  - **The Bug** - Only 2 of the 5 `console.log` are output
      1. "showBiometricPrompt invoked"
      2. "showing prompt"
      3. ~~"prompt authenticated successfully"~~ (_never reached_)
      4. ~~"prompt error"~~ (_no error caught_)
      5. ~~"showBiometricPrompt complete"~~ (_never reached_)