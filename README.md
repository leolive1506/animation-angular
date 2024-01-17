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