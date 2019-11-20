import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCategoryDialogComponent } from './add-edit-category-dialog.component';

describe('AddEditCategoryDialogComponent', () => {
  let component: AddEditCategoryDialogComponent;
  let fixture: ComponentFixture<AddEditCategoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditCategoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
