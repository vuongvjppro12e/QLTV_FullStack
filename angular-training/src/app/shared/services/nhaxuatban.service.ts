import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NhaxuatbanService {

    readonly API_URL = 'http://localhost:8080/api/nhaxuatban';
    constructor(private http: HttpClient) {}
    getNhaXuatBan(): Observable<any> {
        return this.http.get(`${this.API_URL}/all`);
    }


    addNhaXuatBan(payload: any): Observable<any> {
        return this.http.post(`${this.API_URL}/create`, payload);
    }

    updateNhaXuatBan(payload: any): Observable<any> {
        return this.http.put(
           ` ${this.API_URL}/update`,
            payload
        );
    }

    deleteNhaXuatBan(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/delete/${id}`);
    }
}
