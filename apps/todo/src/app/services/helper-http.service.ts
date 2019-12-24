
import { throwError as observableThrowError, Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable()
export class HelperHttpService {
    public token: any;
    constructor(private http: HttpClient) {

    }
    createAuthorizationHeader(header: HttpHeaders, jsonHeaders?: any[]) {
        header = new HttpHeaders();
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
            const err = JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return observableThrowError(errMsg);
    }


    getData(url: string, jsonHeaders?: any[], param?: JSON): Observable<any> {
        let header = new HttpHeaders();
        let parameters = param || {};

        if (jsonHeaders) {
            this.createAuthorizationHeader(header, jsonHeaders);
        } else {
            this.createAuthorizationHeader(header);
        }
        return this.http.get(url);


    }

    postData(url: string, body: any, jsonHeaders?: any[]) {
        let headers = new HttpHeaders();
        if (jsonHeaders) {
            this.createAuthorizationHeader(headers, jsonHeaders);
        } else {
            this.createAuthorizationHeader(headers);

        }
        return this.http.post(url, JSON.stringify(body), { headers });


    }
    updateService(url: string, param: any): Observable<any> {
        let body = JSON.stringify(param);
        return this.http
            .put(url, body);
    }
    deleteServiceWithId(url: string, key: string, val: string): Observable<any> {

        return this.http
            .delete(url + "/?" + key + "=" + val);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

}
