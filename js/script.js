// gsap.fromTo(
//     '.square',
//     { x: 0, backgroundColor: 'blue', scale: 0 },
//     {
//         // x: 100,
//         backgroundColor: 'blue',
//         duration: 2,
//         repeat: -1,
//         yoyo: true,
//         // opacity: 1,
//         scale: 1,
//         ease: 'power1.inOut',
//         stagger: {
//             each: 0.1,
//             // number, center, end, edges
//             from: 'center',
//             // auto
//             grid: 'auto',
//             // x, y
//             axis: 'x',
//         },
//     }
// );
// gsap.fromTo(
//     '.square',
//     { y: 0, backgroundColor: 'blue', rotate: 90 },
//     {
//         // x: 100,
//         y: 200,
//         backgroundColor: 'blue',
//         duration: 1,

//         // opacity: 1,
//         ease: 'power1.inOut',
//         stagger: {
//             each: 0.1,
//             // number, center, end, edges
//             from: 'start',
//             repeat: -1,
//             yoyo: true,
//         },
//     }
// );
// let tl = gsap.timeline();

// tl.to('.green', { x: 400, duration: 2 }, 1);
// tl.to('.red', { x: 400, duration: 1 }, '<');
// tl.to('.orange', { x: 400, duration: 1 }, '+=1');

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    '.adv-item',
    { x: -100, opacity: 0 },
    {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1.5,

        yoyo: true,
        scrollTrigger: {
            trigger: '.adv-item',
            markers: true,
            start: '-80% 80%',
            end: 'bottom 50%',
            toggleActions: 'play none none reset',
        },
    }
);
gsap.fromTo(
    '.num-item',
    { y: 100, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1.5,

        yoyo: true,
        scrollTrigger: {
            trigger: '.num-item',
            markers: true,
            start: '-200% 80%',
            end: 'bottom 50%',
            toggleActions: 'play none none reset',
        },
    }
);
gsap.fromTo(
    '.offer-item',
    { x: -100, opacity: 0 },
    {
        x: 0,
        opacity: 2,
        stagger: 0.1,
        duration: 1.5,

        yoyo: true,
        scrollTrigger: {
            trigger: '.offer-item',
            markers: true,
            start: '-30% 80%',
            end: 'bottom 50%',
            toggleActions: 'play none none reset',
        },
    }
);
gsap.fromTo(
    '.serv-item',
    { y: 100, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1.5,

        yoyo: true,
        scrollTrigger: {
            trigger: '.serv-item',
            markers: true,
            start: '-200% 80%',
            end: 'bottom 50%',
            toggleActions: 'play none none reset',
        },
    }
);
