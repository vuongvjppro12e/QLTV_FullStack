import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacgiaService {

    readonly API_URL = 'http://localhost:8080/api/tacgia';
    constructor(private http: HttpClient) {}
    getTacGia(): Observable<any> {
        return this.http.get(`${this.API_URL}/all`);
    }
    addTacGia(payload: any): Observable<any> {
        return this.http.post(`${this.API_URL}/create`, payload);
    }

    updateTacGia(payload: any): Observable<any> {
        return this.http.put(
           ` ${this.API_URL}/update`,
            payload
        );
    }

    deleteTacGia(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/delete/${id}`);
    }
}
