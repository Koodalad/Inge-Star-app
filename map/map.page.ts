import { Component, OnInit } from '@angular/core';

import { ActionSheetController, Platform, AlertController } from '@ionic/angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {
  map: GoogleMap;
  constructor(
    public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private platform: Platform
  ) {
    if (this.platform.is('cordova')) {
      this.loadMap();
    }
  }
  loadMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyC6oqd05JuXeQ3WLk59IjAVVYmEwN3hV5M',
		  API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyC6oqd05JuXeQ3WLk59IjAVVYmEwN3hV5M'
    });
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 50.8333,
          lng: 4.35
        },
        zoom: 12,
        tilt: 30
      }
    });
  }

}
