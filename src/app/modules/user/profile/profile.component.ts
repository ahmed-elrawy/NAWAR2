import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form!:FormGroup
  user:any
  constructor(private auth: AuthService, private fb:FormBuilder) {

   }

  ngOnInit(): void {
      
      this.auth.user(JSON.parse(localStorage.getItem('state')+'')._id).subscribe(res => {
        this.user = res
        console.log(this.user);
        
        this.form = this.fb.group({
          email:res.email,
          phone: res.phone,
          username:res.username
        })
        
      })


  }


  submit() {
    console.log(this.user._id);
    this.auth.update(this.user._id,this.form.value).subscribe(res => {
      console.log(res);
      this
      this.user=JSON.parse(localStorage.getItem('state')+'')

      
    })
    
  }
}
