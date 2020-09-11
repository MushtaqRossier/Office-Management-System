import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/services/office.service';
import { StaffService } from 'src/app/services/staff.service';
import { Office } from 'src/app/models/office-model';
import { Staff } from 'src/app/models/staff-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {

  // Declaring variables
  term = "";
  officeId = "";
  staffId = "";
  officeView: Office;
  staffList: Staff;


  constructor(private activeRoute: ActivatedRoute ,private officeService: OfficeService, private staffService: StaffService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.officeId = data.id;
      this.staffId = data.id;
    });

    this.officeService.viewOffice(this.officeId).subscribe(data => {
      this.officeView = data; // Returns specific office data due to unique office id
    })

    this.staffService.getStaffData(this.staffId).subscribe(data => {
      this.staffList = data; // Returns staff data that has same unique office id as the company
    });

  }

}
