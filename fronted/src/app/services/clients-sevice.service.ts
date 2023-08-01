import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getRequest(route: string, queries?: any, headers?: HttpHeaders) {
    let reqHeaders = headers || new HttpHeaders();
    let reqParams = new HttpParams();

    if (queries) {
      Object.keys(queries).forEach((key) => {
        reqParams = reqParams.set(key, queries[key]);
      });
    }

    return this.http.get(route, {
      headers: reqHeaders,
      params: reqParams,
      responseType: "json",
      withCredentials: true,
    });
  }

  postRequest(route: string, data?: any, queries?: any, headers?: HttpHeaders) {
    let reqHeaders = headers || new HttpHeaders();
    let reqParams = new HttpParams();

    if (queries) {
      Object.keys(queries).forEach((key) => {
        reqParams = reqParams.set(key, queries[key]);
      });
    }

    return this.http.post(route, data, {
      headers: reqHeaders,
      params: reqParams,
      responseType: "json",
      withCredentials: true,
    });
  }
}



