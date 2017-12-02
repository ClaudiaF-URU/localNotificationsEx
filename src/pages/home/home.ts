import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  time:string
  // sound:any;
  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications) {

  }

  setAlarm(){
    console.log(moment().utc().format(this.time));
    let date = new Date(moment().utc().format(this.time))
    // var userTimezoneOffset = date.getTimezoneOffset() * 60000;
    let alarmTime = new Date(date.getTime() + (date.getTimezoneOffset() * 60000))

    this.localNotifications.schedule({
      id:1,
      text: 'Notificacion',
      at:  alarmTime,
      led: 'FF0000',
   });
  }



}
