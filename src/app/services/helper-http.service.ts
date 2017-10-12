
import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class HelperHttpService {
  public token: any;
  constructor(private http: Http) {

  }
  createAuthorizationHeader(header: Headers, jsonHeaders?: any[]) {
    header = new Headers();
    if (jsonHeaders) {
      // tslint:disable-next-line:forin
      for (let key in Object.keys(jsonHeaders)) {
        header.append(key, jsonHeaders[key]);
      }
    }

    header.append('Content-Type', 'application/json charset=utf-8');
    header.append('Access-Control-Allow-Origin', '*');
    header.append('dataType', 'json')
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


  getData(url: string, jsonHeaders?: any[], param?: JSON) {
    let header = new Headers();
    let parameters = param || {};

    if (jsonHeaders) {
      this.createAuthorizationHeader(header, jsonHeaders);
    } else {
      this.createAuthorizationHeader(header);
    }
    return this.http.get(url, {
      headers: header,
      params: parameters
    }).map((res: Response) => res.json())
      .catch(this.handleError)


  }

  postData(url: string, body: any, jsonHeaders?: any[]) {
    let headers = new Headers();
    if (jsonHeaders) {
      this.createAuthorizationHeader(headers, jsonHeaders);
    } else {
      this.createAuthorizationHeader(headers);

    }
    return this.http.post(url, JSON.stringify(body), headers)
      .map((res: Response) => res.json())
      .catch(this.handleError)


  }
  updateService(url: string, param: any): Observable<any> {
    const options = new RequestOptions();
    let body = JSON.stringify(param);
    return this.http
      .put(url, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  deleteServiceWithId(url: string, key: string, val: string): Observable<any> {
    const options = new RequestOptions();
    return this.http
      .delete(url + "/?" + key + "=" + val, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}
