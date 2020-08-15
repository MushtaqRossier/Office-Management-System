import { Component, OnInit } from '@angular/core';
import { Office } from 'src/app/models/office-model';
import { ActivatedRoute } from '@angular/router';
import { OfficeService } from 'src/app/services/office.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-office',
  templateUrl: './update-office.component.html',
  styleUrls: ['./update-office.component.css']
})
export class UpdateOfficeComponent implements OnInit {

  officeId = "";
  officeView: Office;
  form: NgForm;

  constructor(private activeRoute: ActivatedRoute ,private officeService: OfficeService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.officeId = data.id;
    });

    this.officeService.viewOffice(this.officeId).subscribe(data => {
      this.officeView = data;  // Get the exisiting data of the office
      console.log(this.officeView)
    });
  };

  updateOffice(form) {

    console.log(form);

    const officeForm = {
      Id: this.officeId,
      Name: form.value.Name,
      Location: form.value.Location,
      Email: form.value.Email,
      TellNumber: form.value.TellNumber,
      MaxOccupants: form.value.MaxOccupants,
      Color: form.value.Color
    }

    this.officeService.updateOffice(this.officeId, officeForm).subscribe(data => {
      console.log(data);
    });
  }

}
