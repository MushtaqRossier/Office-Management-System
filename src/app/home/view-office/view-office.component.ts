import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/services/office.service';
import { Home } from 'src/app/models/home-model';

@Component({
  selector: 'app-view-office',
  templateUrl: './view-office.component.html',
  styleUrls: ['./view-office.component.css']
})
export class ViewOfficeComponent implements OnInit {

  homeDetails: Home;

  constructor(private officeService: OfficeService) { }

  ngOnInit(): void {
    this.officeService.getOfficeDataHome().subscribe(data => {
      this.homeDetails = data;
    })
  }

}
