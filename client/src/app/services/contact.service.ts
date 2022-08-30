import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ContactDto } from '../model/contactDto';
import { ContactDataDto } from '../model/contactDataDto';
import { ProfilePictureDto } from '../model/profilePictureDto';
import { ResourceDto } from '../model/resourceDto';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  private url: string = 'http://localhost:8080';

  public sendContact(contact: ContactDto): Observable<any> {
    return this.httpClient.post(this.url + '/contact', contact);
  }
  public deleteContact(id: number) {
    return this.httpClient.delete<ContactDataDto[]>(
      this.url + '/contact/' + id
    );
  }
  public editContact(id: number, contact: ContactDto): Observable<ResourceDto> {
    return this.httpClient.put<ResourceDto>(
      this.url + '/contact/' + id,
      contact
    );
  }

  public sendImage(image: Blob, id: string, type: string): Observable<Object> {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('image', image);
    formData.append('type', type);
    return this.httpClient.post(this.url + '/profilePicture', formData);
  }

  public getContacts(): Observable<ContactDataDto[]> {
    return this.httpClient.get<ContactDataDto[]>(this.url + '/contacts');
  }

  public getImage(id: number): Observable<ProfilePictureDto> {
    return this.httpClient.get<ProfilePictureDto>(
      this.url + '/profilePicture/' + id
    );
  }
}
