import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-delete-office',
  templateUrl: './delete-office.component.html',
  styleUrls: ['./delete-office.component.css']
})
export class DeleteOfficeComponent implements OnInit {

  officeId = "";

  constructor(private activeRoute: ActivatedRoute ,private officeService: OfficeService, private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.officeId = data.id;
      console.log(this.officeId)
    });

    this.officeService.deleteOffice(this.officeId).subscribe(data => {
      console.log('Office deleted!')
      this.router.navigateByUrl('home');
    })
  }

}
