import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/services/staff.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {
  
  result: string;
  
  form: NgForm;

  constructor(private staffService: StaffService, private router: Router) { }

  ngOnInit(): void {
    this.result = Math.random().toString(36).substr(2, 5);
  }

  addNewStaff(form) {

    let staffForm = {

    }
  }

}
