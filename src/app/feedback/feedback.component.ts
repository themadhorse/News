import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { phone } from 'phone';
import { DataService } from '../data.service';
import countries from './countries.json';

export interface Country {
  name: string;
  code: string;
}

export interface Details {
  fname: string;
  lname: string;
  address: string;
  country: string;
  email: string;
  phoneNo: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  @Output() shouldClose = new EventEmitter<boolean>();
  feedbackForm: FormGroup;
  countryList: Country[] = countries;
  showDropdown = false;
  phoneNumberIsInvalid = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [Validators.required, this.validPhoneNumber]),

    });
    // this.feedbackForm.get('phoneNo')?.valueChanges.subscribe(
    //   (value: string) => { this.checkNumber(value); }
    // )
    console.log(phone(`+918390634918`));
  }

  onSubmit() {
    const details: Details = {
      fname: this.feedbackForm.value.firstName,
      lname: this.feedbackForm.value.lastName,
      address: this.feedbackForm.value.address,
      country: this.feedbackForm.value.country,
      email: this.feedbackForm.value.email,
      phoneNo: `${this.feedbackForm.value.phoneNo}`,
    };
    this.dataService.storeFormData(details);
    this.feedbackForm.reset();
  }

  get countryValue() {
    return this.feedbackForm.value.country;
  }

  onCountrySelect(name: string) {
    this.feedbackForm.patchValue({ country: name });
  }


  validPhoneNumber = (control: FormControl) => {

      if(!phone(control.value).isValid)
        return {'invalidPhoneNumber': true};
      return null;
    }
  // validPhoneNumber(): ValidatorFn {
  //   return (group: FormGroup): ValidationErrors => {
  //     let countryCode = group.controls['phoneHeader'];
  //     let phoneNo = group.controls['phoneNo'];

  //     if (!phone(`${countryCode}${phoneNo}`).isValid)
  //       phoneNo.setErrors({'invalidPhoneNumber': true});
  //     else
  //       phoneNo.setErrors(null);
  //   };
  //}
  //}


}
