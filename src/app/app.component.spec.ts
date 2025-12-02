import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

//Describe es un simple agrupador de pruebas
describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    //Hacemos la asignacion
    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
  });

  //Esta prueba nos dice si nuestro componente se lleva a montar
  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should be 3", () => {
    //A =Arrange
    const num1 = 1;
    const num2 = 2;

    //A=Act
    const result = num1 + num2;

    //A=Asserts
    // if (result !== 3) {
    //   throw new Error('No es 3')
    // }

    //Nueva forma Asserts
    expect(result).toBe(3);

  })

  it(`should have the 'zoneless-calculator' title`, () => {
    const app = fixture.componentInstance;
    //Esperamos que el titulo que tenemos en el componente sea igual a "zoneless-calculator"
    expect(app.title).toEqual('zoneless-calculator');
  });

  it('should render title', () => {
    //fixture.detectChanges();
    //Nos permite obtener el html
    console.log(compiled)
    //Solo evalua la primera
    // expect(compiled.querySelector('h1')?.textContent).toContain('Hello, zoneless-calculator');
    //Mira si estan las etiquetas entre ellas
    expect(
      Array.from(compiled.querySelectorAll('h1'))
        .some(h1 => h1.textContent?.includes('Hello, zoneless-calculator'))
    ).toBe(true);

  });

  it('should render router-outlet', () => {
    //Queremos saber que el router-outlet existe y no es null
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });
});
