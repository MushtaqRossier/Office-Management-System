import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/staff-model';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {

  // Declaring variables
  staffId = "";
  staffDetails: Staff;
  form: NgForm;

  // FormBuilder template
  newStaffForm = this.fb.group({
    officeId: [''],
    firstName: [''],
    lastName: ['']
  });


  constructor(private activeRoute: ActivatedRoute, private route: Router, private staffService: StaffService,
    private fb: FormBuilder, private location:Location) { }

  // Once page loads, it dispalys staff data on form template to update 
  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.staffId = data.id;
      console.log(this.staffId)
    });

    this.staffService.viewStaffData(this.staffId).subscribe(data => {
      this.staffDetails = data;
      console.log(this.staffDetails)

      this.newStaffForm.patchValue({
        officeId: data[0].officeId,
        firstName: data[0].firstName,
        lastName: data[0].lastName
      });  
    });
  }

  // Method that accepts form data and sends to json-server
  updateStaff() {
    console.log(this.newStaffForm.value);

    this.staffService.updateStaff(this.staffId, this.newStaffForm.value).subscribe(data => {
      console.log(data);
    });

    this.location.back();
  }

  goBack() {
    this.location.back();
  }

}
