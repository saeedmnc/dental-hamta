import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Output } from "@angular/core";
import { Observable } from "rxjs";

@Injectable(
    {
        providedIn: "root",
    }
)
export class HamtaSettings {
    constructor(private http: HttpClient) {
    }
    public loadSettings() {
        this.getJSON().subscribe(r => {
            this.serverUrl = r.serviceAddress;
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/settings.json");
    }

    @Output() public get httpOptions() {
        return {
            headers: new HttpHeaders({
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + this.access_token
            })
        };
    }

    public serverUrl: string = '';
    public access_token!: string;
}
