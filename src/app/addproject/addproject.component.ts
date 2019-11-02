import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  modalHeading : string = '';
  modalBody : string = '';
  task : any = {};
  users: any = [];

  constructor() {
    //this.modalHeading = "Users/managers";
    //this.modalBody = "list will be update soon";  
   }

  ngOnInit() {
  }

  openmodal(){
    this.modalHeading = "Users/managers";
    this.modalBody = "Users/managers list";

    this.users = [{
      id: 1,
      name: "john"
    },
    {
      id: 2,
      name: "matt"
    },
    {
      id: 3,
      name: "jessy"
    }]
  };

  // jquery("#searchmodal").on("hidden.bs.modal", function(e){
  //   var value = this.jquery("#myPopupInput").val();
  //   this.jquery("#myMainPageInput").val(value);
  // });

  onDateSelectPicker(date: NgbDate, field: string){
    if(field === 'start'){
      //this.task.startDate = this.convertDateJsonToString(this.task.startDate);
      setTimeout(()=>{
        //jQuery("#startDate").val(this.task.startDate);
      },50);
    }else if(field === 'end'){
      //this.task.endDate = this.convertDateJsonToString(this.task.endDate);
      setTimeout(()=>{
        //jQuery("#endDate").val(this.task.endDate);
      },50);
    }
  }

  convertDateJsonToString(json: any){
    if(json !== undefined && json !== null){
      return json.day + '/' + json.month + '/' + json.year;
    }
  }

}