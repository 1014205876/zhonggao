import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const enterRouteAnimate = trigger('enterRouteAnimate', [
    // 定义void表示空状态下
    state('void', style({ position: 'absolute', 'width': 'calc(100% - 45px)' })),
    // * 表示任何状态
    state('*', style({ position: 'absolute', 'width': 'calc(100% - 45px)' })),
    state('enter', style({ position: 'absolute', 'width': 'calc(100% - 45px)' })),
    // 进场动画
    transition('void=>enter', [
        style({ transform: 'translate3d(100%,0,0)' }),
        animate('.3s ease-in-out', style({ transform: 'translate3d(0,0,0)' }))
    ]),
    // 出场动画
    transition('enter=>void', [
        style({ transform: 'translate3d(0,0,0)' }),
        animate('.3s ease-in-out', style({ transform: 'translate3d(100%,0,0)' }))
    ])
]);
