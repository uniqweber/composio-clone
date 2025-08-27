// nav.animations.ts
import type {Variants, Transition} from "motion/react";

export const navVariants: Variants = {
    initial: {height: 0, opacity: 0},
    animate: {height: 250, opacity: 1},
    exit: {height: 0, opacity: 0},
};

export const navTransition: {height: Transition; opacity: Transition} = {
    height: {duration: 0.4, ease: [0.25, 1, 0.5, 1]},
    opacity: {duration: 0.3},
};

// mobileMenu.animations.js
export const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

export const itemVariants: Variants = {
    hidden: {opacity: 0, x: -20},
    visible: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -20},
};
