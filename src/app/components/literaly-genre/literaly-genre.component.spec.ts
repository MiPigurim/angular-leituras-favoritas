import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteralyGenreComponent } from './literaly-genre.component';

describe('LiteralyGenreComponent', () => {
  let component: LiteralyGenreComponent;
  let fixture: ComponentFixture<LiteralyGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiteralyGenreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteralyGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
