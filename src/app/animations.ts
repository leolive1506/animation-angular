import { animate, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
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
])

export const showStateTrigger = trigger('showState', [
  
  // state('notShown', style({
    
  // })),
  state('shown', style({

  })),
  // void pq o formulário ainda não existe na DOM
  transition('void => show', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition('show => void', [
    animate(300, style({
      opacity: 0
    }))
  ])
])