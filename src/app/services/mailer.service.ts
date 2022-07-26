import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MailStructure, ResponseMailer } from '../interfaces/mailer.interface';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  private baseUrl: string = "https://sendmailerclikctime.herokuapp.com";

  constructor(
    private http: HttpClient
  ) { }

  public sendEmail(mail: MailStructure): Observable<ResponseMailer> {
    const url = `${this.baseUrl}/api/sendEmail`;
    return this.http.post<ResponseMailer>(url, mail);
  }

}
