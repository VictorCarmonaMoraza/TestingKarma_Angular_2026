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

  //EVALUAR CLASES Y ATRIBUTOS HTML
  it('should render router-outlet warpped with css classes', () => {
    const divElement = compiled.querySelector('div');
    const mustHaveClasses = 'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5'.split(' ');

    console.log(divElement?.classList.value)

    //Evaluamos que nuestro div no sea nulo
    expect(divElement).not.toBeNull();

    // divElement?.classList.forEach((className) => {
    //   expect(mustHaveClasses).toContain(className);
    // });

    const divClasses = divElement?.classList.value.split(' ');

    //Si añadimos clases nuevas o las cmabiamos de poscion esta prueba no falla
    mustHaveClasses.forEach(className => {
      expect(divClasses).toContain(className);
    })
  });

  //Comprueba que el <a> en sub atributo tiene title ='Buy me a beer'</a>
  it("should contain the 'buy me a beeer' link", () => {
    const aElement = compiled.querySelector('a');
    expect(aElement).not.toBeNull();
    //comprobamos que la etiqueta title existe dentro de a
    expect(aElement?.title).not.toBeNull()
    //Comporbar que el atributo title dentro de la etiqueta
    expect(aElement?.title).toBe('Buy me a beer');
    //Buscamos el atributo title dentro de la etiqueta
    expect(aElement?.getAttribute('title')).toBe('Buy me a beer');
  })

});
