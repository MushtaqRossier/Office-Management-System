import { Component, OnInit } from '@angular/core';
import { Office } from 'src/app/models/office-model';
import { ActivatedRoute, Router } from '@angular/router';
import { OfficeService } from 'src/app/services/office.service';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-office',
  templateUrl: './update-office.component.html',
  styleUrls: ['./update-office.component.css']
})
export class UpdateOfficeComponent implements OnInit {

  // Declaring variables
  officeId = "";
  office: Office;
  form: NgForm;

  // FormBuilder template
  newOfficeForm = this.fb.group({
    name: [''],
    location: [''],
    email: [''],
    tellNumber: [''],
    maxOccupants: [''],
    color: ['']
  });

  constructor(private activeRoute: ActivatedRoute ,private officeService: OfficeService, private fb: FormBuilder,
    private router: Router)
   { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.officeId = data.id;
      console.log(this.officeId)
    });

    // Fetching office data as observable
    this.officeService.viewOffice(this.officeId).subscribe(data => {
      this.office = data;
      console.log(this.office);

    // Displaying office data on form
    this.newOfficeForm.patchValue({
      name: data[0].name,
      location: data[0].location,
      email: data[0].email,
      tellNumber: data[0].tellNumber,
      maxOccupants: data[0].maxOccupants,
      color: data[0].color
    })
  })
  };

  // Method that updates office details
  updateOffice() {

    console.log(this.newOfficeForm.value);


    this.officeService.updateOffice(this.officeId, this.newOfficeForm.value).subscribe(data => {
      console.log(data);
    });

    this.router.navigateByUrl('home');
  }

}
