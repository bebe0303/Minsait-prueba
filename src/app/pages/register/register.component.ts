import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [DbService]
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private dbService: DbService, private router: Router) {
    this.buildForm()
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {
  }

  sendForm(): void {
    if (this.dbService.registerUser(this.form.value)) this.router.navigate(['login'])
    else alert('El usuario ya existe')
  }

}
