import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  genders =['male', 'female'];

// alternatively you can also use view child to access form
@ViewChild('f') signupForm: NgForm;

  defaultSelecion: string = "pet";
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({username:suggestedName });
  }

  onSubmit(form: NgForm){
  console.log(form);
}
}
