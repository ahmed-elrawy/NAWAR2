import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  data:any
  user: any
  constructor(private route: ActivatedRoute,
              private appservice: AppService,
              private auth:AuthService) { }

  ngOnInit(): void {

    
    this.route.params.subscribe(prm => {
        console.log(prm)
      this.appservice.Phone(prm['id']).subscribe(res => {
        this.data =res
        this.auth.user(res.userID).subscribe(res => {
          this.user = res
          console.log(res)
        })
        console.log(res)
      })
    })
  }

}
