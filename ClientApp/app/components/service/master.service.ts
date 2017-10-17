import { Injectable }    from '@angular/core';
import { Headers, Http ,RequestOptions,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs';
import { Component, Inject } from '@angular/core';
import 'rxjs/add/operator/map'
@Injectable()
export class MasterService<TEntity> {
    public AppURL:string;
    public extra:string;
    private OtherHeader = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions();

    
    AppJSONheaders: { 'Accept': 'application/json' }
    
    constructor(private http: Http) {
      if(typeof(window)!='undefined')
      {
          this.options.headers = new Headers();
          this.options.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token') );
          this.options.headers.append('Content-Type', 'application/json');
          //this.headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }).set('Accept': 'application/json');
      }
    }
    Get(): Observable<TEntity[]> {
        return this.http.get(this.AppURL, { headers: this.options.headers })
                   .map(response => response.json() as TEntity[]);
      }
      updateEntity(updateObject:TEntity):Observable<TEntity>
      {
          return this.http
              .put(this.AppURL, JSON.stringify(updateObject), { headers: this.options.headers })
        .map(response => response.json() as TEntity);
      }
      GetById(id: any): Observable<TEntity>{
          
          let options = new RequestOptions({ headers: this.options.headers});
          return this.http.get(this.AppURL+'/'+id, options)
        .map(response => response.json() as TEntity)
        .catch(this.handleError);
      }
      DeleteById(id:any):Observable<TEntity>{
        return this.http.get(this.AppURL)
        .map(response => response.json() as TEntity)
        .catch(this.handleError);
      }
      create(createEntity:TEntity):Observable<number>
      {
          return this.http
              .post(this.AppURL, JSON.stringify(createEntity), { headers: this.options.headers })
            .map(res => res.json() as number);
      }
      Login(createEntity:TEntity):Observable<string>
      {
        return this.http
        .post('/api/login', JSON.stringify(createEntity),{headers: this.OtherHeader})
        .map(res => res.json().token as string);
      }
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}