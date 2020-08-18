import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-delete-office',
  templateUrl: './delete-office.component.html',
  styleUrls: ['./delete-office.component.css']
})
export class DeleteOfficeComponent implements OnInit {

  // Declaring variables
  officeId = "";

  constructor(private activeRoute: ActivatedRoute ,private officeService: OfficeService, private router: Router) { }

  // Once page loads, office Id is captured and office gets removed from json-server
  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.officeId = data.id;
      console.log(this.officeId)
    });

    let choice = confirm("Are you sure you want to remove?")

    if (choice === true) {
      this.officeService.deleteOffice(this.officeId).subscribe(data => {
        console.log('Office deleted!')
        this.router.navigateByUrl('home');
      });
    }else {
      this.router.navigateByUrl('home');
    }
  }

}
