import { Component, OnInit, Input } from '@angular/core';
import { Tent } from 'src/app/model/tent';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-selected-tent',
    templateUrl: './selected-tent.component.html',
    styleUrls: ['./selected-tent.component.css']
})
export class SelectedTentComponent implements OnInit {
    @Input() selectedTent: Tent = new Tent();

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
    }

}
