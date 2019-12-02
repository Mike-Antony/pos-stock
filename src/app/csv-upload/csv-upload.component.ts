import { Component, OnInit } from '@angular/core';
import { PapaParseModule} from 'ngx-papaparse';
// import { File } from '@ionic-native/file/ngx';
// import { HttpClient } from 'selenium-webdriver/http';
// import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CSVUploadComponent implements OnInit {

  
  
  

  constructor(private http:HttpClient) {
    this.loadCSV();
   }
   ngOnInit(){

  }

   private loadCSV(){
     this.http.get('/.src/assets/username.csv', {
       responseType: 'text'
     }).subscribe(
       data => this.extractData(data),
       err => console.log('error: ',err)
     )
   }

  extractData(res) {

  }

  

}
