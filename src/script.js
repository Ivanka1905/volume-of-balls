'use strict';
const DIAMETER = 0.5;
const WALL = 0.01;
let firstRadius = DIAMETER / 2 - WALL;
let result = 0;

for (let i = 0; i < 12; i++) {
  const radius = firstRadius + i*WALL;
  const volume = (4 * Math.PI * Math.pow(radius, 3)) / 3;
  result += volume;
}

const show = result.toFixed(3);
console.log(`Сумарний об'єм 12 куль, вкладених одна в одну - ${show}м³`);