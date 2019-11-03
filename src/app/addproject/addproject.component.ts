import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { appService } from '../service/index';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
declare var jQuery: any;

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit, OnDestroy {

  addModalHeading : string = '';
  addModalBody : string = '';

  modalHeading : string = '';
  project : any = {};
  users: any = [];
  allprojects: any = [];
  flow = 'addproject';
  selectedProjectObj: any = {};

  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  calendarToday: NgbCalendar;  

  constructor(calendar: NgbCalendar, config: NgbDatepickerConfig, public appService : appService) {    
    this.calendarToday = calendar;

   if (this.flow === 'addproject') {
      this.project = {
        ProjectName:'',
        IsSetdate:'',
        StartDate: new Date(),
        EndDate: new Date(),
        ProjectPriority: '10',
        //ID: ''
      };
      this.fromDate = calendar.getToday();
      this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }

  }

  addproject(project: any){
    if(this.flow === 'addproject'){
        var saveAddProject = {};
        //if(this.project.parentTaskId === '' || this.project.parentTaskId === null || this.project.parentTaskId === undefined){
          saveAddProject = {
            "ProjectName": this.project.ProjectName,
            "IsSetdate": true,
            "StartDate": this.convertDateJsonToString(this.fromDate),
            "EndDate": this.convertDateJsonToString(this.toDate),
            "ProjectPriority": this.project.ProjectPriority,
            "ID": this.project.ID
          };

          this.appService.addProject(saveAddProject).subscribe(
          (data: any) => {
             this.addModalHeading = 'Yeah :-)';
             this.addModalBody = 'Project Added Successfully';
             //document.getElementById("submitModalOpener").click();
          },
          (err: any) => {
              this.addModalHeading = 'Oh No !!!';
              this.addModalBody = 'Unexpected error occured during Add Project. Please try after some time.';
              //document.getElementById("submitModalOpener").click();        
            }
          );
    }
  }

  ngOnInit() {    
  }

  ngOnDestroy() {
    this.project = {};
  }

  getselectedvalue(event, user: any){
      var value = event.target.textContent;
      jQuery("#projectmanager").val(value);
      this.project.ID = user.ID;
  }

  openmodal(){
    this.modalHeading = "Users list";
    this.appService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      });    
  };

  onDateSelectPicker(date: NgbDate, field: string){
    if(field === 'start'){
      this.project.StartDate = this.convertDateJsonToString(this.project.StartDate);
      setTimeout(()=>{
      jQuery("#startDate").val(this.project.StartDate);
      },50);
    }else if(field === 'end'){
      this.project.EndDate = this.convertDateJsonToString(this.project.EndDate);
      setTimeout(()=>{
      jQuery("#endDate").val(this.project.EndDate);
      },50);
    }
  }

  convertDateJsonToString(json: any){
    if(json !== undefined && json !== null){
      return json.day + '/' + json.month + '/' + json.year;
    }
  }

  reset(){
    this.project = {
      "ProjectName":"",
      "IsSetdate":"",
      "StartDate": new Date(),
      "EndDate": new Date(),
      "ProjectPriority": '10',
      "ID": ""
    };
    jQuery("#startDate").val("");
    jQuery("#endDate").val("");
    jQuery("#projectmanager").val("");
}
}
