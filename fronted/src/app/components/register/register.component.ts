import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from '../../services/clients-sevice.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  constructor(private formB: FormBuilder, private clients:ClientsService , form:FormGroup){}
  form: FormGroup = new FormGroup({}); //
   message : string = "";
  

  

  ngOnInit(): void {
    this.form = this.formB.group({
      name : ['', Validators.required],
      email : ['', Validators.required, Validators.email],
      password : ['', Validators.required]
    });
  }

  onSubmit (){
     if (!this.form.valid){
      this.message = "Warning"
     }
     else{

      this.clients.postRequest("http://localhost:10101/register"),{
        name: this.form.value.email,
        email: this.form.value.name,
        password: this.form.value.password
      }, undefined
     }
  }
}
