import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryModule } from './modules/category/category.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/modules/routing/routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		CategoryModule,
		StoreModule.forRoot(reducers, {
			metaReducers,
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true
			},
		}),
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
