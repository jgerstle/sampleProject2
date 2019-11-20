import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCategory from '@app/store/category/category.reducer';
import { storageMetaReducer } from '@app/store/root/storage-meta.reducer';

export interface MlState {
	category: fromCategory.CategoryState;
}

export const reducers: ActionReducerMap<MlState> = {
	category: fromCategory.reducer
};


export const metaReducers: MetaReducer<MlState>[] = !environment.production ? [storageMetaReducer] : [storageMetaReducer];
