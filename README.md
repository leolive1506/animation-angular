# Animações
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

## Boas praticas
Separa arquivo de animações e o do componente

## Animation
- quando elemento não existe necessário usar void => state para animação funcionar
  - comum em ngIf, ngFor
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
# Dicas gerais
- [Visualizar qual ease function escolher](https://easings.net/#)

# Aprendizados
- Utilizar o método Trigger para engatilhar as animações;
- Configurar o Trigger com os States;
- Definir o Style para cada State de animação;
- Integrar o Trigger ao Template com o auxílio do property binding
- Utilizar o método transition para animar uma transição entre estados;
- Aplicar estilos temporários durante a transição;
- Controlar a duração da animação através do método animate;
- Exportar animações e importá-las nos metadados do componente.