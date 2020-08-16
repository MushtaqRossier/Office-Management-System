import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-delete-staff',
  templateUrl: './delete-staff.component.html',
  styleUrls: ['./delete-staff.component.css']
})
export class DeleteStaffComponent implements OnInit {

  // Declaring variables
  staffId = "";

  constructor(private activeRoute: ActivatedRoute ,private staffService: StaffService, private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.staffId = data.id;
      console.log(this.staffId)
    });

    this.staffService.deleteStaff(this.staffId).subscribe(data => {
      console.log('Staff Deleted!');  // Deletes staff with specific id
    });

    this.router.navigateByUrl('home');
  }

}
