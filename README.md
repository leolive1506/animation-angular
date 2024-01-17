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
    }))
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

# Aprendizados
- Utilizar o método Trigger para engatilhar as animações;
- Configurar o Trigger com os States;
- Definir o Style para cada State de animação;
- Integrar o Trigger ao Template com o auxílio do property binding