import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import countries from './countries.json';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  @Output() shouldClose= new EventEmitter<boolean>();
  details = {
    fname: "",
    lname: "",
    address: "",
    country: "",
    email: "",
    phoneNo: ""
  };
  feedbackForm: FormGroup;
  countryList = countries;
  autoCompleteSub: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'address': new FormControl(null, [Validators.required]),
      'country': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phoneHeader': new FormControl(null, [Validators.required]),
      'phoneNo': new FormControl(null, [Validators.required]),
    });

    this.feedbackForm.get('country')?.valueChanges.subscribe();
  }

  onSubmit() {
    console.log(this.feedbackForm.value);
    this.feedbackForm.reset();
  }

}
