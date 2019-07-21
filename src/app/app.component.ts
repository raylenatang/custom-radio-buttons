import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  testForm: FormGroup;
  numbers: number[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.createForm();
  }

  createForm() {
    this.testForm = this.formBuilder.group({
      degree: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('click submit button');
    console.log(this.testForm.value);
  }
}
