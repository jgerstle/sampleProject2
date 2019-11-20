import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'ml-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
	@Input() title: string;
	@Input() hasItemSelected: string;
	@Output() add = new EventEmitter<undefined>();
	@Output() edit = new EventEmitter<undefined>();
	@Output() delete = new EventEmitter<undefined>();
	@Output() view = new EventEmitter<undefined>();

	constructor() { }

}
