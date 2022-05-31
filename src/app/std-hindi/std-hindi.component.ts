import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-std-hindi',
  templateUrl: './std-hindi.component.html',
  styleUrls: ['./std-hindi.component.css'],
})
export class StdHindiComponent implements OnInit {
  name: any;
  termOneData: boolean = false;
  termTwoData: boolean = false;
  details: any;
  studentData = [
    {
      id: 1,
      name: 'James',
      term1: { unitTestOne: 65, unitTestTwo: 65, semOne: 75 },
      term2: { unitTestOne: 45, unitTestTwo: 76, semTwo: 56 },
    },
    {
      id: 2,
      name: 'Kary',
      term1: { unitTestOne: 99, unitTestTwo: 74, semOne: 94 },
      term2: { unitTestOne: 67, unitTestTwo: 64, semTwo: 34 },
    },
    {
      id: 3,
      name: 'Bob',
      term1: { unitTestOne: 33, unitTestTwo: 34, semOne: 55 },
      term2: { unitTestOne: 53, unitTestTwo: 54, semTwo: 61 },
    },
    {
      id: 4,
      name: 'Pam',
      term1: { unitTestOne: 56, unitTestTwo: 68, semOne: 54 },
      term2: { unitTestOne: 68, unitTestTwo: 67, semTwo: 86 },
    },
    {
      id: 5,
      name: 'Steve',
      term1: { unitTestOne: 45, unitTestTwo: 76, semOne: 82 },
      term2: { unitTestOne: 66, unitTestTwo: 56, semTwo: 43 },
    },
    {
      id: 6,
      name: 'Williams',
      term1: { unitTestOne: 45, unitTestTwo: 76, semOne: 43 },
      term2: { unitTestOne: 54, unitTestTwo: 75, semTwo: 56 },
    },
    {
      id: 7,
      name: 'Julis',
      term1: { unitTestOne: 54, unitTestTwo: 45, semOne: 75 },
      term2: { unitTestOne: 66, unitTestTwo: 66, semTwo: 71 },
    },
    {
      id: 8,
      name: 'Matt',
      term1: { unitTestOne: 46, unitTestTwo: 45, semOne: 77 },
      term2: { unitTestOne: 77, unitTestTwo: 65, semTwo: 54 },
    },
    {
      id: 9,
      name: 'Willy',
      term1: { unitTestOne: 64, unitTestTwo: 45, semOne: 45 },
      term2: { unitTestOne: 75, unitTestTwo: 74, semTwo: 73 },
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
