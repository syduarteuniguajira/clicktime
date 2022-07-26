import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailerService } from 'src/app/services/mailer.service';
import { MailStructure } from '../../interfaces/mailer.interface';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  public formContact: FormGroup = this.formBuilder.group({
    name: [
      "",
      [
        Validators.required
      ]
    ],
    email: [
      "",
      [
        Validators.required
      ]
    ],
    subject: [
      "",
      [
        Validators.required
      ]
    ],
    message: [
      "",
      [
        Validators.required
      ]
    ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private mailerService: MailerService
  ) { }

  ngOnInit(): void {

  }

  public fieldNotValid(field: string) {
    return this.formContact.get(field)?.invalid
      && this.formContact.get(field)?.touched;
  }

  public send() {
    if(this.formContact.invalid) {
      this.formContact.markAllAsTouched();
      return;
    }
    const mail: MailStructure = {
      name: this.formContact.get("name")?.value,
      transmitter: this.formContact.get("email")?.value,
      subject: this.formContact.get("subject")?.value,
      message: this.formContact.get("message")?.value
    }
    this.mailerService.sendEmail(mail)
      .subscribe(response => {
        console.log(response)
        this.formContact.reset();
      });
  }


}
