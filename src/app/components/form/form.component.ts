import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetFormInfoService } from 'src/app/services/get-form-info.service';
import { State } from '../../State';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  stateList: State[] = [];
  occupationList = [];
  name: string;
  email: string;
  password: string;
  rePassword: string;
  state: string;
  occupation: string;

  constructor(private getFormInfoService: GetFormInfoService) { }
  
  

  ngOnInit(): void {
    this.getFormInfoService
    .getInfo()
    .subscribe(
      response=>
      {
        console.log(response)
        const {occupations, states} = response
        console.log(occupations)
        console.log(states)
        this.occupationList=occupations
        this.stateList = states
      }
    )
}

onSubmit() {
  if (this.password != this.rePassword) {
    alert('Please enter the same password');
    return;
  }
  

  this.name = '';
  this.email = '';
  this.password = '';
  this.rePassword = '';
  this.occupation = 'Select Occupation';
  this.state = 'Select State';
}
}
