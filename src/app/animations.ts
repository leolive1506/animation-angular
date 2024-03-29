import { animate, group, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';

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
  // void pq o formulário ainda não existe na DOM
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(300, style({
      opacity: 0
    }))
  ])
])

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4)',
    }))
  ])
])

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({ opacity: 0, width: 0 }),
    animate('400ms ease-out', keyframes([
      style({ offset: 0, opacity: 0, width: '0' }),
      style({ offset: 0.8, opacity: 0.5, width : '*' }),
      style({ offset: 1, opacity: 1, width: '*' }),
    ]))
  ]),
  transition(':leave', [
    animate('400ms cubic-bezier(.13,.9,.8,.1)', style({ opacity: 0, width: 0 }))
  ])
])

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    query('#botao-salvar', [
      group([
        animate(200, style({ backgroundColor: '#63B77C' })),
        animate(100, style({ transform: 'scale(1.1)' })),
        animate(200, style({ transform: 'scale(1)' }))
      ]),
    ])
  ]),
  transition('valid => invalid', [
    query('#botao-salvar', [
      group([
        animate(200, style({ backgroundColor: '#6C757D' })),
        animate(100, style({ transform: 'scale(0.8)' }))
      ]),
      animate(200, style({ transform: 'scale(1)' }))
    ])
  ])
])

export const emptyListTrigger = trigger('emptyList', [
  transition(':enter', [
    style({ opacity: 0, width: 0 }),
    animate('400ms ease-out', keyframes([
      style({ offset: 0, opacity: 0, width: '0' }),
      style({ offset: 0.8, opacity: 0.5, width : '*' }),
      style({ offset: 1, opacity: 1, width: '*' }),
    ]))
  ]),
  transition(':leave', [
    group([
      animate('0.4s ease', style({ transform: 'translateX(100%)', width: '*' })),
      animate('0.4s 0.2s ease', style({ opacity: 0 }))
    ])
  ])
])

export const shakeTrigger = trigger('shakeAnimation', [
  transition('* => *', [
    query('input.ng-invalid:focus, select.ng-invalid:focus', [
      animate('0.5s', keyframes([
        style({ border: '2px solid red' }),
        style({ transform: 'translateX(-2%)' }),
        style({ transform: 'translateX(2%)' }),
        style({ transform: 'translateX(-2%)' }),
        style({ transform: 'translateX(2%)' }),
        style({ transform: 'translateX(-2%)' }),
        style({ transform: 'translateX(2%)' }),
        style({ transform: 'translateX(0%)' }),
      ]))
    ], { optional: true })
  ])
])

export const listStateTrigger = trigger('listState', [
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
])
