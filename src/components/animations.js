import {TweenMax, Elastic, Power1} from 'gsap';

export default {
    show(target,duration) {
        return TweenMax
            .to(target, duration, {
                opacity: 1,
                ease: Elastic.easeIn.config(0.25,1),
            });
    },

    hide(target,duration) {
        return TweenMax
            .to(target, duration, {
                opacity: 0,
                ease: Elastic.easeIn.config(0.25,1),
            });
    },

    slideUp(target,duration,delay) {
        return TweenMax
            .from(target, duration, {
                y: window.innerHeight,
                opacity: 0,
                delay: delay,
                ease: Elastic.easeInOut,
            });
    },

    scaleUp(target,duration) {
        return TweenMax
            .to(target, duration, {
                scale: 1.05,
                ease: Power1.easeInOut,
            });
    },

    scaleDown(target,duration) {
        return TweenMax
            .to(target, duration, {
                scale: 1,
                ease: Power1.easeInOut,
            });
    },
    
    scale(target,duration,delay) {
        return TweenMax
            .from(target, duration, {
                scale: 0,
                ease: Power1.easeInOut,
                delay:delay
            });
    },


}