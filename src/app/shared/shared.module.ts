import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatButtonModule, MatMenuModule, MatToolbarModule } from '@angular/material';

@NgModule({
	declarations: [ToolbarComponent],
	exports: [
		ToolbarComponent
	],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatMenuModule,
		MatButtonModule
	]
})
export class SharedModule {}
