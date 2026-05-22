// js/main.js — selector wiring and initial render
import { applyColors, renderMacro, renderSummary, renderWeek, renderExercises } from './render.js';

const selA   = document.getElementById('selA');
const selB   = document.getElementById('selB');
const selMeso= document.getElementById('selMeso');
const lblA   = document.getElementById('lblA');
const lblB   = document.getElementById('lblB');

function render() {
  const keyA = selA.value, keyB = selB.value;
  const meso = selMeso.value;
  const mA = window.METHODS[keyA], mB = window.METHODS[keyB];
  const cA = window.COLORS[keyA],  cB = window.COLORS[keyB];

  selA.style.borderColor = cA.hex;
  selB.style.borderColor = cB.hex;
  lblA.style.color = cA.hex;
  lblB.style.color = cB.hex;

  applyColors(cA, cB);
  renderMacro(mA, mB);
  renderSummary(mA, mB);
  renderWeek(keyA, keyB, meso);
  renderExercises(keyA, keyB, mA, mB);
}

selA.addEventListener('change', render);
selB.addEventListener('change', render);
selMeso.addEventListener('change', () => renderWeek(selA.value, selB.value, selMeso.value));

render();
