import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment";

export const URLS = {
  MEETUP: '/meetup',
  USER: '/user',
  ROLE: '/role'
}

const BASE_URL = environment.backendOrigin;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(destination: string): any {
    return this.http.get(`${BASE_URL}${destination}`)
  }

  postData(destination: string, body: object) {
    this.http.post(`${BASE_URL}${destination}`, body)
  }

  putData(destination: string, body: object) {
    this.http.put(`${BASE_URL}${destination}`, body)
  }

  putDataWithId(destination: string, body: object, id: number) {
    this.http.put(`${BASE_URL}${destination}/${id}`, body)
  }

  deleteData(destination: string){
    this.http.delete(`${BASE_URL}${destination}`)
  }

  deleteDataWithBody(destination: string, body: object){
    this.http.delete(`${BASE_URL}${destination}`, body)
  }

  deleteDataWithPath(destination: string, path: string){
    this.http.delete(`${BASE_URL}${destination}/${path}`)
  }
}
