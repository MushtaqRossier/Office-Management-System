import { Component, OnInit, Input } from '@angular/core';
import { StaffService } from 'src/app/services/staff.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Staff } from 'src/app/models/staff-model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {
  
  // Declaring variables
  result: string;
  officeId =""
  staffData: Staff;
  form: NgForm;

  constructor(private activeRoute: ActivatedRoute ,private staffService: StaffService, private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.result = Math.random().toString(36).substr(2, 5);  // Generates random unique string id

    this.activeRoute.params.subscribe(data => {
      this.officeId = data.id; 
    }); 

    this.staffService.getStaffData(this.officeId).subscribe(data => {
      this.staffData = data;  // Returns staff data with specific id
    });
}

  // Method that accepts form data and sends it to json-server
  addNewStaff(form) {

    let staffForm = {
      id: this.result,
      officeId : this.officeId,
      firstName: form.value.firstName,
      lastName: form.value.lastName
    }

    this.staffService.createStaff(staffForm).subscribe(data => {
      console.log(data);
    });

    console.log('Staff created!');
    this.location.back();
  }

  goBack() {
    this.location.back();
  }

}
