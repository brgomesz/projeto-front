import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let componente: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(componente).toBeTruthy();
  });

  it('deve retornar os anos com múltiplos vencedores corretamente', () => {
    const anosHTML = componente.getYearsWithMultipleWinners();
    expect(anosHTML).toContain('<td>1986</td>');
    expect(anosHTML).toContain('<td>2</td>');
    expect(anosHTML).toContain('<td>1990</td>');
    expect(anosHTML).toContain('<td>2015</td>');
  });

  it('deve exibir os estúdios com mais vitórias corretamente', () => {
    const estúdios = componente.topStudios;
    expect(estúdios.length).toBe(3);
    expect(estúdios[0].studio).toBe('Columbia Pictures');
    expect(estúdios[0].wins).toBe(6);
    expect(estúdios[1].studio).toBe('Paramount Pictures');
    expect(estúdios[1].wins).toBe(6);
    expect(estúdios[2].studio).toBe('Warner Bros.');
    expect(estúdios[2].wins).toBe(5);
  });

  it('deve retornar o maior intervalo entre prêmios corretamente', () => {
    const maior = componente.producerIntervals.largest;
    expect(maior.producer).toBe('Matthew Vaughn');
    expect(maior.interval).toBe(123);
    expect(maior.previousYear).toBe(2002);
    expect(maior.nextYear).toBe(2015);
  });

  it('deve retornar o menor intervalo entre prêmios corretamente', () => {
    const menor = componente.producerIntervals.smallest;
    expect(menor.producer).toBe('Joel Silver');
    expect(menor.interval).toBe(1);
    expect(menor.previousYear).toBe(1990);
    expect(menor.nextYear).toBe(1991);
  });

  it('deve filtrar os vencedores pelo ano', () => {
    componente.searchYear = '1986';
    componente.searchWinners();
    expect(componente.winnersByYear.length).toBe(2);
    expect(componente.winnersByYear[0].movie).toBe('Example Movie 1');
    expect(componente.winnersByYear[1].movie).toBe('Example Movie 2');
  });

  it('deve limpar os vencedores quando o ano for nulo', () => {
    componente.searchYear = null;
    componente.searchWinners();
    expect(componente.winnersByYear.length).toBe(0);
  });
});