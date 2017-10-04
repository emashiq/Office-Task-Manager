import { Injectable }    from '@angular/core';
import { Headers, Http ,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import { Component, Inject } from '@angular/core';
import 'rxjs/add/operator/map'
@Injectable()
export class MasterService<TEntity> {
    private AppURL:string;
    public extra:string;
    private OtherHeader = new Headers({'Content-Type': 'application/json'});
    private baseUrl:string="http://localhost:5000/api/";
    private headers = new Headers({ 'Authorization': 'Bearer ' + ""});
    private options = new RequestOptions({ headers: this.headers });
    AppJSONheaders: { 'Accept': 'application/json' }
    constructor(private http: Http,) { 
        this.AppURL=this.baseUrl+this.extra;
    }
      Get(): Observable<TEntity[]> {
        return this.http.get(this.AppURL,{headers: this.headers})
                   .map(response => response.json() as TEntity[]);
      }
      updateEntity(updateObject:TEntity):Observable<TEntity>
      {
        return this.http
        .put(this.AppURL, JSON.stringify(updateObject), {headers: this.headers})
        .map(response => response.json() as TEntity);
      }
      GetById(id:any):Observable<TEntity>{
        return this.http.get(this.AppURL)
        .map(response => response.json() as TEntity)
        .catch(this.handleError);
      }
      DeleteById(id:any):Observable<TEntity>{
        return this.http.get(this.AppURL)
        .map(response => response.json() as TEntity)
        .catch(this.handleError);
      }
      create(createEntity:TEntity):Observable<TEntity>
      {
        return this.http
        .post(this.AppURL, JSON.stringify(createEntity), {headers: this.headers})
        .map(res => res.json() as TEntity);
      }
      Login(createEntity:TEntity):Observable<string>
      {
        return this.http
        .post('http://localhost:5000/api/login', JSON.stringify(createEntity),{headers: this.OtherHeader})
        .map(res => res.json().token as string);
      }
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}