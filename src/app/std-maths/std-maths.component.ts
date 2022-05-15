import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentNamesComponent } from '../student-names/student-names.component';

@Component({
  selector: 'app-std-maths',
  templateUrl: './std-maths.component.html',
  styleUrls: ['./std-maths.component.css']
})
export class StdMathsComponent implements OnInit {
  name: any;
  termOneData:boolean=false;
  termTwoData:boolean=false;
  details:any;
  studentData=[{id:1,name:'James',term1:{unitTestOne:79,unitTestTwo:85,semOne:82},term2:{unitTestOne:79,unitTestTwo:70,semTwo:76}},
  {id:2,name:'Kary',term1:{unitTestOne:79,unitTestTwo:85,semOne:82},term2:{unitTestOne:79,unitTestTwo:70,semTwo:76}},
  {id:3,name:'Bob',term1:{unitTestOne:79,unitTestTwo:85,semOne:82},term2:{unitTestOne:79,unitTestTwo:70,semTwo:76}},
  {id:4,name:'Pam',term1:{unitTestOne:79,unitTestTwo:85,semOne:82},term2:{unitTestOne:79,unitTestTwo:70,semTwo:76}},
  {id:5,name:'Steve',term1:{unitTestOne:79,unitTestTwo:85,semOne:82},term2:{unitTestOne:79,unitTestTwo:70,semTwo:76}},
  {id:6,name:'Williams',term1:{unitTestOne:79,unitTestTwo:85,semOne:82},term2:{unitTestOne:79,unitTestTwo:70,semTwo:76}},
  {id:7,name:'Julis',term1:{unitTestOne:79,unitTestTwo:85,semOne:82},term2:{unitTestOne:79,unitTestTwo:70,semTwo:76}},
  {id:8,name:'Matt',term1:{unitTestOne:79,unitTestTwo:85,semOne:82},term2:{unitTestOne:79,unitTestTwo:70,semTwo:76}},
  {id:9,name:'Willy',term1:{unitTestOne:79,unitTestTwo:85,semOne:82},term2:{unitTestOne:79,unitTestTwo:70,semTwo:76}},]
  constructor(
    private route:ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.name=params['selectedOption'];
    }) 
    console.log(this.name);
  }
  termOne(){
    this.termOneData=true;
    this.termTwoData=false;
    this.studentData.filter((res)=>{if(this.name==res.name){
      this.details= res.term1;
    }})
    console.log(this.details);

  }
  termTwo(){
    this.termTwoData=true;
    this.termOneData=false;
    this.studentData.filter((res)=>{if(this.name==res.name){
      this.details= res.term2;
    }})
    console.log(this.details);

  }

}
