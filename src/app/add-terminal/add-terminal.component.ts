import { Component, OnInit } from '@angular/core';
import { addTerminals} from '../models/add-terminal-model';
import  { TerminalService } from '../services/add-terminal.service';


@Component({
  selector: 'app-add-terminal',
  templateUrl: './add-terminal.component.html',
  styleUrls: ['./add-terminal.component.css']
})
export class AddTerminalComponent implements OnInit {

  addTerminals: addTerminals = new addTerminals();
  terminaltypeid:any;
  public errorMsg;
  
  

  constructor(private createTerminal: TerminalService) { }

  ngOnInit() {
    
  }

  addterminal(){
    // this.userProfile.password = 'Auto Generator';
    this.terminaltypeid= 1;//TODO add user id
    console.log(this.addTerminals.make + ' ' + this.addTerminals.model );
    this.createTerminal.createTerminal(this.terminaltypeid, this.addTerminals).subscribe(data => {
      console.log('###########done ' + data);
     
    }
    ,error => this.errorMsg = error
    );
  }

}
