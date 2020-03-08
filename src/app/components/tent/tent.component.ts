import { Component, OnInit } from '@angular/core';
import { TentService } from 'src/app/services/tent.service';
import { Tent } from 'src/app/model/tent';

@Component({
    selector: 'app-tent',
    templateUrl: './tent.component.html',
    styleUrls: ['./tent.component.css']
})
export class TentComponent implements OnInit {
    data: Array<Tent>;
    selectedTent: Tent;

    constructor(tentService: TentService) {
        tentService.getData().subscribe(result => {
            console.log(result);
            this.data = result;
        });
        tentService.getAll();
     }

    ngOnInit(): void {
    }

    showSelectedTent(tent: Tent) {
        console.log('tent selected!', tent);
        this.selectedTent = tent;
    }

}
