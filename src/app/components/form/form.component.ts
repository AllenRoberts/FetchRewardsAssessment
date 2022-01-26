import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetFormInfoService } from 'src/app/services/get-form-info.service';
import { FormData } from 'src/app/FormData';
import { State } from '../../State';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormData[] = [];
  stateList: State[] = [];
  occupationList = [];
  name: string;
  email: string;
  password: string;
  rePassword: string;
  state: string;
  occupation: string;

  constructor(
    private getFormInfoService: GetFormInfoService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getFormInfoService.getInfo().subscribe((response) => {
      const { occupations, states } = response;
      this.occupationList = occupations;
      this.stateList = states;
    });
  }

  /**
   * Checks of email is of a valid format
   * @param email 
   * @returns Boolean
   */
  validateEmail(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  /**
   * When submit button is pressed validates form then 
   * sends the data to the server
   */
  onSubmit() {
    if (this.name == '') {
      alert('Please enter a name');
      return;
    }
    if (!this.validateEmail(this.email)) {
      alert('Please enter a valid email');
      return;
    }
    if (this.password == undefined || this.password.length < 8) {
      alert('Password must be 8 characters');
      return;
    }
    if (this.password != this.rePassword) {
      alert('Please enter the same password');
      return;
    }
    if (this.state == '') {
      alert('Please select a state');
      return;
    }
    if (this.occupation == undefined) {
      alert('Please select an occupation');
      return;
    }

    //Post Request here
    const formData: FormData = {
      name: this.name,
      email: this.email,
      password: this.password,
      occupation: this.occupation,
      state: this.state,
    };

    this.router.navigate(['/submission']);
    this.postForm(formData);
  }

  /**
   * Makes post request with new form data
   * @param newForm
   */
  postForm(newForm: FormData) {
    this.getFormInfoService
      .postForm(newForm)
      .subscribe((newForm) => this.form.push(newForm));
      
  }
}
