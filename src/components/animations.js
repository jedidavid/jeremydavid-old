import { keyframes } from "styled-components"

const rotate = keyframes`
  0% {
  transform: rotate(0deg) scale(1);
  }
  50% {
  transform: rotate(-180deg) scale(1.2);
  }
  100% {
  transform: rotate(-360deg) scale(1);
  }
`

const zoom = keyframes`
  0% {
    transform: scale(0.6);
  }
  50% {
    transform: scale(0.8);
  } 
  100% {
    transform: scale(0.6);
  }
`

const jumping = keyframes`
  0% {
    transform: translateY(0px) translateX(0) rotate(0) scale(1);
    opacity: .8;
  }
  25% {
    transform: translateY(-10px) translateX(-10px) rotate(20deg) scale(0.8);
    opacity: .9;
  }
  50% {
    transform: translateY(-15px) translateX(-15px) rotate(10deg) scale(0.9);
    opacity: .8;
  }
  75% {
    transform: translateY(-20px) translateX(-20px) rotate(20deg) scale(0.75);
    opacity: .6;
  }
  85% {
    transform: translateY(-25px) translateX(-25px) rotate(20deg) scale(0.9);
    opacity: .7;
  }
  100% {
    transform: translateY(-15px) translateX(-15px) rotate(0) scale(0.95);
    opacity: .85;
  }
`
const jumping2 = keyframes`
  0% {
    transform: translateY(0px) translateX(0) rotate(0) scale(1);
    opacity: .5;
  }
  25% {
    transform: translateY(-30px) translateX(10px) rotate(20deg) scale(0.8);
    opacity: .8;
  }
  50% {
    transform: translateY(15px) translateX(-15px) rotate(10deg) scale(0.7);
    opacity: .8;
  }
  75% {
    transform: translateY(30px) translateX(20px) rotate(20deg) scale(0.75);
    opacity: .7;
  }
  100% {
    transform: translateY(-15px) translateX(15px) rotate(0) scale(0.75);
    opacity: .9;
  }
`
const jumping3 = keyframes`
  0% {
    transform: translateY(10px) translateX(0) rotate(0) scale(1);
    opacity: .9;
  }
  20% {
    transform: translateY(20px) translateX(10px) rotate(-20deg) scale(0.8);
    opacity: .8;
  }
  40% {
    transform: translateY(15px) translateX(-15px) rotate(10deg) scale(0.75);
    opacity: .8;
  }
  40% {
    transform: translateY(-15px) translateX(-25px) rotate(10deg) scale(0.5);
    opacity: 1;
  }
  80% {
    transform: translateY(-30px) translateX(20px) rotate(-20deg) scale(0.75);
    opacity: .6;
  }
  100% {
    transform: translateY(15px) translateX(15px) rotate(0) scale(0.95);
    opacity: .7;
  }
`
const jumping4 = keyframes`
  0% {
    transform: translateY(-30px) translateX(20px) rotate(0) scale(1.2);
    opacity: .7;
  }
  25% {
    transform: translateY(-20px) translateX(10px) rotate(50deg) scale(0.6);
    opacity: .8;
  }
  50% {
    transform: translateY(15px) translateX(-15px) rotate(20deg) scale(0.5);
    opacity: .9;
  }
  75% {
    transform: translateY(30px) translateX(20px) rotate(50deg) scale(0.75);
    opacity: .7;
  }
  100% {
    transform: translateY(-15px) translateX(15px) rotate(0) scale(0.5);
    opacity: .9;
  }
`

const fadeInRight = keyframes`
  0% {
    left: 20%;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 1;
  }
`

export { rotate, zoom, jumping, jumping2, jumping3, jumping4, fadeInRight }
