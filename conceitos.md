# [Animações](https://angular.io/guide/animations)
- fornecer feedback
- concentrar atenção do usuário
- mostrar que app está lidando ativamente com a suas solicitações
- promovem uma novegação fluida e intuitiva
- Improtar depencia BrowserAnimationsModule
- Necessário passar um gatilho -> alto que desencadeia a animação
```ts
// componente
@Component({
  animations: [trigger('highlightedState', [
    state('default', style({
      // valor deve ser sempre entre aspas simples
      border: '2px solid #B2B6FF',
    })),
    state('highlighted', style({
      border: '4px solid #B2B6FF',
      filter: 'brightness(92%)'
    })),
    transition('default => highlighted', [
      // animate('duracao delay ease-function'),
      animate('200ms ease-out', style({
        transform: 'scale(1.02)'
      })),
      animate(200)
    ])
  ])]
})
```
```html
<!-- template -->
<div
  *ngFor="let tarefa of listaTarefas; let i = index"
  (mouseover)="indexTarefa = i"
  [@highlightedState]="indexTarefa === i ? 'highlighted' : 'default'"
></div>
```
- quando elemento não existe necessário usar void => state para animação funcionar
  - comum em ngIf, ngFor
  - pode usar * quando não haver mudança no estilo final
```ts
// <form [@showState]="formAberto ? 'show' : 'notShow'"
export const showStateTrigger = trigger('showState', [
  // state('notShown', style({ })),
  state('shown', style({  })),
  transition('void => show', [
    style({ opacity: 0 }),
    animate(300, style({ opacity: 1 }))
  ]),
  transition('show => void', [
    animate(300, style({ opacity: 0 }))
  ])
])

// segunda forma de fazer
// <form @showState
export const showStateTrigger = trigger('showState', [
  // void pq o formulário ainda não existe na DOM
  transition('void => *', [
    style({ opacity: 0 }),
    animate(300, style({ opacity: 1 }))
  ]),
  transition('* => void', [
    animate(300, style({ opacity: 0 }))
  ])
])

// terceira forma de fazer
// <form @showState
export const showStateTrigger = trigger('showState', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(300, style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate(300, style({ opacity: 0 }))
  ])
])
```

## trigger()
Inicia a animação e serve como um contâiner para todas as outras chamadas de função de animação. O template é vinculado ao nome do trigger, que é declarado como primeiro argumento da função

## style()
Define um ou mais estilos CSS para usar em animações. Controla a aparência visual dos elementos HTML durante as animações

## state()
Cria um conjunto nomeado de estilos CSS que devem ser aplicados na transição bem-sucedida para um determinado estado. O estado pode então ser referenciado pelo nome dentro de outras funções de animação.

## animate()
Especifica as informações de tempo para uma transição. Valores opcionais para delay e easing function.
- Pode conter métodos style().

## transition()
Define a sequência de animação entre dois estados nomeados

## keyframes()
Permite adicionar estilos intermediarios (durante um animate)

## offset()
Controlar o tempo em que determinada etapa keyframes vai acontecer
```ts
// sem keyframes
animate('400ms ease-out', style({
  opacity: 1,
  width: '*' // width de forma automatica e dinamica
}))
animate('400ms ease-out', keyframes([
  style({ offset: 0, opacity: 0, width: '0' }),
  style({ offset: 0.8, opacity: 0.5, width : '*' }),
  style({ offset: 1, opacity: 1, width: '*' }),
]))
```

## [cubic-bezier](https://cubic-bezier.com/#.17,.67,.83,.67)

## group()
```ts
transition('invalid => valid', [
  group([
    animate(200, style({ backgroundColor: '#63B77C' })),
    animate(100, style({ transform: 'scale(1.1)' })),
    animate(200, style({ transform: 'scale(1)' }))
  ]),
]),
```

## query()
- recebe elemento ou outros seletores, anima elementos especificos pelo nome elemento, id, class
- ao usar, precisar animar o elemento pai e faz a consulta em elementos filhos
- **OBS:** caso não exista o elemento, lançara uma exception, para não estourar esse erro, basta após o array passa { optional: true }
```ts
transition('invalid => valid', [
  query('button', [
    group([
      animate(200, style({ backgroundColor: '#63B77C' })),
      animate(100, style({ transform: 'scale(1.1)' })),
      animate(200, style({ transform: 'scale(1)' }))
    ]),
  ])
]),
```
## stagger()
- adionar um delay entre as animações de diversos elementos
```ts
transition('* => *', [
  query(':enter', [
    style({ opacity: 0, transform: 'translateX(-100%)' }),
    stagger(200, [
      animate('500ms ease-out', keyframes([
        style({ offset: 0.4, opacity: 1, transform: 'translateX(15%)' }),
        style({ offset: 1, opacity: 1, transform: 'translateX(0%)' }),
      ]))
    ])
  ], { optional: true }),
])
```

## Boas praticas
Separa arquivo de animações e o do componente

# BehaviorSubject
- capaz de criar serviços reativos e atualizar os dados automáticamente sempre que acontece alguma mudança
- variante do subject
  - tipo especial que pode ser comportante tanto com
    - observable (emitindo eventos)
    - como um obserser (captando eventos)

# Desabilitar animações
Util para quando for desenvolver testes
- animações podem tornas teste mais lentos, dificeis de escrever e alguns erros
- Basta importar NoopAnimationsModule


# Dicas gerais
- [Visualizar qual ease function escolher](https://easings.net/#)

# Aprendizados

