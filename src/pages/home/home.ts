import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare const mwbScanner:any;
declare const cordova:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    mwbScanner.setCallback(function(result){});
    mwbScanner.setKey('Your-Key').then(function(response){
      //response of the setKey action
      console.log(response);
    });

  }

  scan(){
    mwbScanner.startScanning().then(function(response){
      console.log('show the result here');
      console.log(response);
    });
  }

  zScan(){
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        console.log(result);
      },
      function (error) {
        alert("Scanning failed: " + error);
      },
      {
        preferFrontCamera : false, // iOS and Android
        showFlipCameraButton : true, // iOS and Android
        showTorchButton : true, // iOS and Android
        torchOn: false, // Android, launch with the torch switched on (if available)
        saveHistory: true, // Android, save scan history (default false)
        prompt : "Place a barcode inside the scan area", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        disableAnimations : true, // iOS
        disableSuccessBeep: false // iOS and Android
      }
    );
  }

}
