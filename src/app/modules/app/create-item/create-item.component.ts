import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  selectedFile?: ImageSnippet;

  createPostForm!:FormGroup
   file?: File
  constructor(private imageService: ImageService){}


  ngOnInit(): void {
    this.createPostForm= new FormGroup({
      userI: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      ip: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
    })
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    this.file=  imageInput.files[0];
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      console.log(event.target.result)
      console.log(file)
      console.log(this.selectedFile)


    });

    reader.readAsDataURL(file);
  }

  submit(form:FormGroup){
    let data={
      userID: JSON.parse(localStorage.getItem('state')||'')._id,
      name: form.value.name,
      desc:form.value.desc,
      ip: form.value.ip,
      model: form.value.model,
      color: form.value.color,

    }
    console.log(form.controls)
    this.imageService.uploadImage(this.file as File, data).subscribe(
      (res:any) => {
        alert("post is created")
      console.log(res)
      },
      (err:any) => {
        alert(err.statusText)
        console.log(err)

      })
  }
}
