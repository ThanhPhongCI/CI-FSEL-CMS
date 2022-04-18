import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  update(data: any) {
    return this.http.put(`https://j9a5b48t6c.execute-api.ap-southeast-1.amazonaws.com/Dev/filejson-update`, data);
  }
  get(data: any){
    return this.http.get(`https://j9a5b48t6c.execute-api.ap-southeast-1.amazonaws.com/Dev/filejson-get/${data}`, )
  }

}
