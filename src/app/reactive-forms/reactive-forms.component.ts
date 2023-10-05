import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  userForm : FormGroup ;
 constructor(
  private formBuilder: FormBuilder
 ){
 this.userForm = this.formBuilder.group({
  email : this.formBuilder.control('example@hotmail.com',[Validators.required,Validators.email]),
  // Se puede hacer también utilizando email: [],
  password: ['',Validators.required]
 });
 console.log(this.userForm.value);
 }

// Muestra en consola lo ingresado en email y password
 onSubmit(): void{

  if(this.userForm.invalid){
    alert('Formulario invalido')
  }else{
    console.log(this.userForm.valid);
    console.log(this.userForm.value);
  }

 }
}
