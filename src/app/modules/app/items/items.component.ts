import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  filterForm!: FormGroup
  data: any
  constructor(private appServices: AppService, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      name: ['']
    })
  }

  ngOnInit(): void {
    this.appServices.Phones().subscribe(res =>{ console.log(res); this.data=res} )
  }

  submit() {
    console.log(
      this.filterForm.controls['name'].value
    );

    this.appServices.filter( this.filterForm.controls['name'].value).subscribe( res => {
      this.data=res      
    })
    
  }
}
