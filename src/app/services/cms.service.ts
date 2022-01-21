import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Main } from '../interfaces/main.interface';

@Injectable({
  providedIn: 'root'
})
export class CMSService {

  constructor(private http: HttpClient) { }

  getMain(){
    return this.http.get<Main>(`${environment.BACKEND_URL}/main`);
  }
}
