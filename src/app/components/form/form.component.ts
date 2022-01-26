import { Component, OnInit } from '@angular/core';
import { GetFormInfoService } from 'src/app/services/get-form-info.service';
import { State } from '../../State';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
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

  constructor(private getFormInfoService: GetFormInfoService) {}

  ngOnInit(): void {
    this.getFormInfoService.getInfo().subscribe((response) => {
      console.log(response);
      const { occupations, states } = response;
      console.log(occupations);
      console.log(states);
      this.occupationList = occupations;
      this.stateList = states;
    });
  }

  validateEmail(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  onSubmit() {
    if (this.name != '') {
      alert('Please enter a name');
    }
    if (this.name != '') {
      alert('Please enter a name');
      return;
    }
    if (this.validateEmail(this.email)) {
      alert('Please enter a valid email');
      return;
    }
    if (this.password.length < 8) {
      alert('Password must be 8 characters');
      return;
    }
    if (this.password != this.rePassword) {
      alert('Please enter the same password');
      return;
    }
    if ((this.state = 'Select State')) {
      alert('Please select a state');
      return;
    }
    if ((this.occupation = 'Select Occupation')) {
      alert('Please select an occupation');
      return;
    }
    console.log('Point taken');

    //Post Request here and move to submission page

    this.name = '';
    this.email = '';
    this.password = '';
    this.rePassword = '';
    this.occupation = 'Select Occupation';
    this.state = 'Select State';
  }
}
