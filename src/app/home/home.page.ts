import { Component } from '@angular/core';
import { Device } from '@ionic-enterprise/identity-vault';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async showBiometricPrompt() {
    // NOTE: This will show the biometric prompt, and upon successful authentication the promise does not appear to resolve
    //       The log after `showBiometricPrompt` is never reached and no error is logged either
    console.log('showBiometricPrompt invoked');
    try {
      console.log('showing prompt');
      await Device.showBiometricPrompt({
        iosBiometricsLocalizedReason: 'Gimme the biometrics!',
        iosBiometricsLocalizedCancelTitle: null
      });
      console.log('prompt authenticated successfully');
    } catch (e) {
      console.error('prompt error', e);
    }
    console.log('showBiometricPrompt complete');
  }
}