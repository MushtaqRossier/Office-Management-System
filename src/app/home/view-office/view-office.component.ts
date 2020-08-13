import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/services/office.service';
import { Office } from 'src/app/models/office-model';

@Component({
  selector: 'app-view-office',
  templateUrl: './view-office.component.html',
  styleUrls: ['./view-office.component.css']
})
export class ViewOfficeComponent implements OnInit {

  homeDetails: Office;

  constructor(private officeService: OfficeService) { }

  ngOnInit(): void {
    this.officeService.getOfficeDataHome().subscribe(data => {
      this.homeDetails = data;
    })
  }

}
