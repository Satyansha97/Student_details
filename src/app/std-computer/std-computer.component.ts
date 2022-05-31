import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-std-computer',
  templateUrl: './std-computer.component.html',
  styleUrls: ['./std-computer.component.css'],
})
export class StdComputerComponent implements OnInit {
  name: any;
  termOneData: boolean = false;
  termTwoData: boolean = false;
  details: any;
  studentData = [
    {
      id: 1,
      name: 'James',
      term1: { unitTestOne: 45, unitTestTwo: 85, semOne: 66 },
      term2: { unitTestOne: 64, unitTestTwo: 33, semTwo: 76 },
    },
    {
      id: 2,
      name: 'Kary',
      term1: { unitTestOne: 45, unitTestTwo: 76, semOne: 87 },
      term2: { unitTestOne: 67, unitTestTwo: 56, semTwo: 78 },
    },
    {
      id: 3,
      name: 'Bob',
      term1: { unitTestOne: 67, unitTestTwo: 77, semOne: 66 },
      term2: { unitTestOne: 86, unitTestTwo: 66, semTwo: 55 },
    },
    {
      id: 4,
      name: 'Pam',
      term1: { unitTestOne: 55, unitTestTwo: 75, semOne: 75 },
      term2: { unitTestOne: 66, unitTestTwo: 74, semTwo: 85 },
    },
    {
      id: 5,
      name: 'Steve',
      term1: { unitTestOne: 54, unitTestTwo: 76, semOne: 85 },
      term2: { unitTestOne: 76, unitTestTwo: 85, semTwo: 90 },
    },
    {
      id: 6,
      name: 'Williams',
      term1: { unitTestOne: 97, unitTestTwo: 86, semOne: 76 },
      term2: { unitTestOne: 74, unitTestTwo: 59, semTwo: 70 },
    },
    {
      id: 7,
      name: 'Julis',
      term1: { unitTestOne: 91, unitTestTwo: 92, semOne: 72 },
      term2: { unitTestOne: 90, unitTestTwo: 80, semTwo: 96 },
    },
    {
      id: 8,
      name: 'Matt',
      term1: { unitTestOne: 12, unitTestTwo: 85, semOne: 92 },
      term2: { unitTestOne: 79, unitTestTwo: 81, semTwo: 93 },
    },
    {
      id: 9,
      name: 'Willy',
      term1: { unitTestOne: 76, unitTestTwo: 97, semOne: 69 },
      term2: { unitTestOne: 81, unitTestTwo: 69, semTwo: 85 },
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.name = params['selectedOption'];
    });
    console.log(this.name);
  }

  termOne() {
    this.termOneData = true;
    this.termTwoData = false;
    this.studentData.filter((res) => {
      if (this.name == res.name) {
        this.details = res.term1;
      }
    });
    console.log(this.details);
  }
  termTwo() {
    this.termTwoData = true;
    this.termOneData = false;
    this.studentData.filter((res) => {
      if (this.name == res.name) {
        this.details = res.term2;
      }
    });
    console.log(this.details);
  }
}
