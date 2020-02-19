import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalComandaPage } from './modal-comanda.page';

describe('ModalComandaPage', () => {
  let component: ModalComandaPage;
  let fixture: ComponentFixture<ModalComandaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComandaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
