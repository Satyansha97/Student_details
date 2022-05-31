import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-std-english',
  templateUrl: './std-english.component.html',
  styleUrls: ['./std-english.component.css'],
})
export class StdEnglishComponent implements OnInit {
  name: any;
  termOneData: boolean = false;
  termTwoData: boolean = false;
  details: any;
  studentData = [
    {
      id: 1,
      name: 'James',
      term1: { unitTestOne: 62, unitTestTwo: 91, semOne: 82 },
      term2: { unitTestOne: 72, unitTestTwo: 74, semTwo: 69 },
    },
    {
      id: 2,
      name: 'Kary',
      term1: { unitTestOne: 81, unitTestTwo: 87, semOne: 88 },
      term2: { unitTestOne: 99, unitTestTwo: 91, semTwo: 86 },
    },
    {
      id: 3,
      name: 'Bob',
      term1: { unitTestOne: 54, unitTestTwo: 89, semOne: 65 },
      term2: { unitTestOne: 67, unitTestTwo: 77, semTwo: 66 },
    },
    {
      id: 4,
      name: 'Pam',
      term1: { unitTestOne: 70, unitTestTwo: 50, semOne: 80 },
      term2: { unitTestOne: 60, unitTestTwo: 80, semTwo: 90 },
    },
    {
      id: 5,
      name: 'Steve',
      term1: { unitTestOne: 100, unitTestTwo: 89, semOne: 93 },
      term2: { unitTestOne: 92, unitTestTwo: 98, semTwo: 99 },
    },
    {
      id: 6,
      name: 'Williams',
      term1: { unitTestOne: 88, unitTestTwo: 66, semOne: 91 },
      term2: { unitTestOne: 77, unitTestTwo: 55, semTwo: 90 },
    },
    {
      id: 7,
      name: 'Julis',
      term1: { unitTestOne: 89, unitTestTwo: 55, semOne: 82 },
      term2: { unitTestOne: 32, unitTestTwo: 44, semTwo: 88 },
    },
    {
      id: 8,
      name: 'Matt',
      term1: { unitTestOne: 69, unitTestTwo: 81, semOne: 85 },
      term2: { unitTestOne: 72, unitTestTwo: 77, semTwo: 94 },
    },
    {
      id: 9,
      name: 'Willy',
      term1: { unitTestOne: 45, unitTestTwo: 98, semOne: 64 },
      term2: { unitTestOne: 53, unitTestTwo: 98, semTwo: 95 },
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
