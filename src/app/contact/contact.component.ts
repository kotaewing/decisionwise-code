import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactList = [] as any;
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    message: new FormControl(''),
  })

  constructor() { }
  
  onSubmit() {
    alert(this.contactForm.value)
  }

  ngOnInit(): void {
  }

}
