import { Component, OnInit } from '@angular/core';
import { addDeployments } from '../models/deployments-model';
import  { DeploymentsService } from '../services/deployments.service';

@Component({
  selector: 'app-add-deployment',
  templateUrl: './add-deployment.component.html',
  styleUrls: ['./add-deployment.component.css']
})
export class AddDeploymentComponent implements OnInit {

  addDeployments: addDeployments = new addDeployments();
  userid:any;
  terminalid:any;


  constructor(private createDeployment: DeploymentsService) { }

  ngOnInit() {
  }
  addDeployment(){
    // this.userProfile.password = 'Auto Generator';
    this.userid = 1;//TODO add user id
    this.terminalid = 1; //TODO add terminal id 
    console.log(this.addDeployments.address + ' ' + this.addDeployments.city + ' ' + this.addDeployments.deploymentNoteNumber + ' ' + this.addDeployments.merchantCode + ' ' + this.addDeployments.merchantPhoneNumber + this.addDeployments.merchantName);
    this.createDeployment.createDeployment(this.userid,this.terminalid, this.addDeployments).subscribe(data => {
      console.log('###########done ' + data);
    })
  }
}
