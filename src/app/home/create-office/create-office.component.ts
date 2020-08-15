import { Component, OnInit } from '@angular/core';
import { OfficeService} from 'src/app/services/office.service';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
  styleUrls: ['./create-office.component.css']
})
export class CreateOfficeComponent implements OnInit {

  result: string;
  officeForm: FormGroup;
  form: NgForm;

  constructor(private officeService: OfficeService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.result = Math.random().toString(36).substr(2, 5);
    console.log(this.result);
  }

  addNewOffice(form) {

    let officeForm = {
      Id: this.result,
      Name: form.value.officeName,
      Location: form.value.officeLocation,
      Email: form.value.officeEmail,
      TellNumber: form.value.officeTellNumber,
      MaxOccupants: form.value.officeMaxOccupants,
      Color: form.value.officeColor
    }

    this.officeService.createOffice(officeForm).subscribe(data => {
      console.log(data);
    })
    console.log('Office created!');
    this.router.navigateByUrl('home');

  }

  


}

