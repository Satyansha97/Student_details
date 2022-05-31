import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-student-names',
  templateUrl: './student-names.component.html',
  styleUrls: ['./student-names.component.css']
})
export class StudentNamesComponent implements OnInit {

newStudent:any;
  allStudents : any = [
    {id:1,name:'James',term1:'Angular'},
    {id:2,name:'Kary',course:'Android'},
    {id:3,name:'Bob',course:'Java'},
    {id:4,name:'Pam',course:'Java'},
    {id:5,name:'Steve',course:'Angular'},
    {id:6,name:'Williams',course:'Android'},
    {id:7,name:'Julis',course:'Angular'},
    {id:8,name:'Matt',course:'Java'},
    {id:9,name:'Willy',course:'Android'},
    ];
    
  constructor(private route:Router){}
  ngOnInit(): void {
    this.newStudent=this.allStudents.sort(function(a:any, b:any) {
      return compareStrings(a.name, b.name);
    })

    function compareStrings(a:any, b:any) {
      
    
      return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
  console.log(this.newStudent);
  }
  name = 'Angular';
  crse:any;
  showStudents: any = [];
  selectedOption:any;

changeStudent(){
  
  // this.route.navigate(['/std-maths/:id'], {queryParams:{data:this.selectedOption}});
}
mathData(selectedOption:any){
  console.log(selectedOption);
  this.route.navigate(['/std-maths']);
  
  }

 

}

