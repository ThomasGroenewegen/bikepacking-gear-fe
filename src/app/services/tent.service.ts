import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Tent } from '../model/tent';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TentService {
    tentSubject: Subject<Array<Tent>> = new Subject();

    constructor(private httpClient: HttpClient) { }

    getData(): Subject<Array<Tent>> {
        console.log('getAll()');


        return this.tentSubject;
    }

    getAll(): void {
        this.httpClient.get<Array<Tent>>('/api/tents').subscribe(result => {
            this.tentSubject.next(result);
        });
        // const result = [];
        // result.push( {
        //     id: 1,
        //     name: 'testName1'
        // });

        // result.push( {
        //     id: 2,
        //     name: 'testName2'
        // });

        // this.tentSubject.next(result);
    }

}
