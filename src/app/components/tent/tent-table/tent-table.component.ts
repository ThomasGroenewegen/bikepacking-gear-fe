import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tent } from 'src/app/model/tent';

@Component({
    selector: 'app-tent-table',
    templateUrl: './tent-table.component.html',
    styleUrls: ['./tent-table.component.css']
})
export class TentTableComponent implements OnInit {
    @Input() data: Array<Tent>;
    @Output() selectedTent = new EventEmitter<Tent>();

    columnsToDisplay = [
        'name',
        'brand',
        'weight',
        'innerTentHeight',
        'innerTentLength',
        'price',
        'shop',
        'numberOfPersons',
        'packLength',
        'packDiameter',
        'waterColumnOuterTent',
        'waterColumnInnerTent',
        'notes'
    ];

    constructor() { }

    ngOnInit(): void {
    }

    clickRow(myRowData) {
        console.log('myRowData', myRowData);
        this.selectedTent.emit(myRowData);
    }

}
