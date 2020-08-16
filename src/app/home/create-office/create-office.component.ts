import { Component, OnInit } from '@angular/core';
import { OfficeService} from 'src/app/services/office.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
  styleUrls: ['./create-office.component.css']
})
export class CreateOfficeComponent implements OnInit {

  // Declaring variables
  result: string;
  form: NgForm;
  staffOfficeId: string;

  constructor(private officeService: OfficeService, private router: Router) { }

  ngOnInit(): void {
    this.result = Math.random().toString(36).substr(2, 5);  // Generates random unique string
  }

  // Method that accepts form data and sends it to json-server
  addNewOffice(form) {

    let officeForm = {
      id: this.result,
      name: form.value.officeName,
      location: form.value.officeLocation,
      email: form.value.officeEmail,
      tellNumber: form.value.officeTellNumber,
      maxOccupants: form.value.officeMaxOccupants,
      color: form.value.officeColor
    }

    this.staffOfficeId = this.result;

    this.officeService.createOffice(officeForm).subscribe(data => {
      console.log(data);
    })
    console.log('Office created!');
    this.router.navigateByUrl('home');

  }

  


}

