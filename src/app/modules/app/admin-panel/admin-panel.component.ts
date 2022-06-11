import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';




export interface phone {
  img: Img
  _id: string
  userID: string
  name: string
  desc: string
  ip: string
  model: string
  color: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Img {
  data: string
  contentType: string
}



@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})


export class AdminPanelComponent implements OnInit {
data?: phone[]
skillsForm: FormGroup;

constructor(private app: AppService, private fb:FormBuilder) {
  this.skillsForm = this.fb.group({
    name: '',
    skills: this.fb.array([]) ,
  });

 }

  ngOnInit(): void {


    // this.update()
    this.app.Phones().subscribe(res=> {
      this.data= res
      console.log(this.data);
      
      for (let i = 0 ; i<= res.length; i++){
        this.addSkills(res[i])
        // this.newSkill(res[i])
        
      }
      
    })
  }


deletephone(id:any) {
  console.log(id);

  this.app.delete(id).subscribe(res => {
    console.log(res);
    
    alert(res)
  })
}



update(body?:any) {
  console.log(body);
  
  this.app.update(body).subscribe(res => {
    console.log(res);
  })

  // this.app.update("62a39c9185b500d8767126fa",{"status": 1}).subscribe(res => {
  //   console.log(res);
  // })
  
}






////////////////////

get skills() : FormArray {
  return this.skillsForm.get("skills") as FormArray
}

newSkill(body?:any): FormGroup {
  console.log(body)
  return this.fb.group({
    color: body.color,
    desc: body.desc,
    ip: body.ip,
    model: body.model,
    name:body.name,
    status: body.status,
    _id: body._id,
  })
}

addSkills(body:any) {
  this.skills.push(this.newSkill(body));
}

updatephone(i:number) {
  this.update(this.skills.controls[i].value)
  
}


removeSkill(i:number) {

  
  this.skills.removeAt(i);
}
// onSubmit() {
//   console.log(this.skillsForm.value);
// }
///////////////
}


export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}