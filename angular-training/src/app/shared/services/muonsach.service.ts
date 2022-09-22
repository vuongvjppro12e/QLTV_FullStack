import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuonsachService {

    readonly API_URL = 'http://localhost:8080/api/muonsach';
    constructor(private http: HttpClient) {}
    getMuonSach(): Observable<any> {
        return this.http.get(`${this.API_URL}/all`);
    }

    getDetailBandoc(id: number): Observable<any> {
        return this.http.get(`${this.API_URL}/find/{id}`);
    }

    addMuonSach(payload: any): Observable<any> {
        return this.http.post(`${this.API_URL}/create`, payload);
    }

    updateMuonSach(payload: any): Observable<any> {
        return this.http.put(
           ` ${this.API_URL}/update`,
            payload
        );
    }

    deleteMuonSach(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/delete/${id}`);
    }
}
