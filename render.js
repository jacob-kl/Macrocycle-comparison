// js/render.js — all DOM rendering functions
const MESO_LABELS = [
  'Mesocycle 1 · Weeks 1–4 · Accumulation',
  'Mesocycle 2 · Weeks 5–8 · Intensification',
  'Mesocycle 3 · Weeks 9–12 · Peaking & Competition Prep',
];
const MESO_START = new Set([0,4,8]);
const WEEK_PHASE = ['Accum','Accum','Accum','Deload','Intens','Intens','Intens','Deload','Peak','Peak','Taper','Comp'];
const DAYS = ['mon','tue','wed','fri','sat'];
const DAY_LABELS = ['Monday','Tuesday','Wednesday','Friday','Saturday'];

export function applyColors(cA, cB) {
  const r = document.documentElement.style;
  r.setProperty('--ca',     cA.hex);
  r.setProperty('--ca-rgb', cA.rgb);
  r.setProperty('--cb',     cB.hex);
  r.setProperty('--cb-rgb', cB.rgb);
}

export function renderMacro(mA, mB) {
  const g = document.getElementById('macroGrid');
  const p = [];
  p.push(`<div class="mg-head axis"></div>`);
  p.push(`<div class="mg-head cola"><div class="mg-name cola">${mA.name}</div><div class="mg-sub">${mA.sub}</div></div>`);
  p.push(`<div class="mg-head colb"><div class="mg-name colb">${mB.name}</div><div class="mg-sub">${mB.sub}</div></div>`);
  for (let i = 0; i < 12; i++) {
    if (MESO_START.has(i)) {
      const mi = i < 4 ? 0 : i < 8 ? 1 : 2;
      p.push(`<div class="mg-meso">${MESO_LABELS[mi]}</div>`);
    }
    const wA = mA.weeks[i], wB = mB.weeks[i];
    const axDl = (wA.deload && wB.deload) ? ' deload' : '';
    p.push(`<div class="mg-axis${axDl}"><div class="mg-wn">W${i+1}</div><div class="mg-wt">${WEEK_PHASE[i]}</div></div>`);
    p.push(_cell(wA,'cola')); p.push(_cell(wB,'colb'));
  }
  g.innerHTML = p.join('');
}

function _cell(w, cls) {
  const dl = w.deload ? ' deload' : '';
  const tags = w.tags.map((t,j) => {
    const lbl = j===0 ? w.tv : j===1 ? w.ti : w.fr;
    return `<span class="tag ${t}">${lbl}</span>`;
  }).join('');
  return `<div class="mg-cell ${cls}${dl}">
    <div class="mg-hl">${w.hl}</div>
    <div class="mg-tags">${tags}</div>
    <div class="mg-desc">${w.desc}</div>
    <div class="mg-focus">${w.focus}</div>
  </div>`;
}

export function renderSummary(mA, mB) {
  document.getElementById('summWrap').innerHTML = _sc(mA,'cola') + _sc(mB,'colb');
}
function _sc(m, cls) {
  const rows = m.summary.map(([k,v]) => `<li><span>${k}:</span> ${v}</li>`).join('');
  return `<div class="summ-card"><h3 class="${cls}">${m.name}</h3><ul class="attr-list">${rows}</ul></div>`;
}

export function renderWeek(keyA, keyB, meso) {
  const EW = window.EXAMPLE_WEEKS;
  const wA = EW[keyA]?.[meso], wB = EW[keyB]?.[meso];
  const grid = document.getElementById('weekGrid');
  const lbl  = document.getElementById('weekLabel');
  if (!wA && !wB) {
    grid.innerHTML = '<p style="color:var(--muted);font-family:DM Mono,monospace;font-size:11px;padding:12px">No example week data for this selection.</p>';
    lbl.textContent = '';
    return;
  }
  const srcA = wA || wB, srcB = wB || wA;
  lbl.textContent = `${window.METHODS[keyA].name}  vs  ${window.METHODS[keyB].name}  ·  ${(wA||wB).label}`;
  grid.innerHTML = DAYS.map((day,i) => _dayCard(DAY_LABELS[i], srcA.days[day], srcB.days[day], keyA, keyB)).join('');
}

function _dayCard(label, dA, dB, keyA, keyB) {
  const cA = `style="color:var(--ca)"`, cB = `style="color:var(--cb)"`;
  return `<div class="day-card">
    <div class="day-head">
      <div class="day-name">${label}</div>
      <div class="day-focus" ${cA}>${dA.focus}</div>
      <div class="day-focus" ${cB}>${dB.focus}</div>
    </div>
    <div class="day-body">
      <div class="method-label" ${cA}>${window.METHODS[keyA].name}</div>
      ${dA.sessions.map(_sb).join('')}
      <div class="method-sep"></div>
      <div class="method-label" ${cB}>${window.METHODS[keyB].name}</div>
      ${dB.sessions.map(_sb).join('')}
    </div>
  </div>`;
}

function _sb(s) {
  return `<div class="sb">
    <div class="sb-order">${s.order}</div>
    <div class="sb-name">${s.name}</div>
    <div class="sb-sets">${s.sets}</div>
    ${s.note ? `<div class="sb-note">${s.note}</div>` : ''}
  </div>`;
}

export function renderExercises(keyA, keyB, mA, mB) {
  const t = document.getElementById('exTable');
  const EX = window.EXERCISES;
  let html = `<thead><tr>
    <th class="th-cat">Exercise</th>
    <th class="th-a">${mA.name}</th>
    <th class="th-b">${mB.name}</th>
  </tr></thead><tbody>`;
  for (const [cat, exMap] of Object.entries(EX)) {
    html += `<tr class="sec-row"><td colspan="3">${cat}</td></tr>`;
    for (const [name, byMethod] of Object.entries(exMap)) {
      const vA = byMethod[keyA]||'', vB = byMethod[keyB]||'';
      const abA = (!vA||vA.startsWith('—')) ? ' absent' : '';
      const abB = (!vB||vB.startsWith('—')) ? ' absent' : '';
      html += `<tr>
        <td class="td-n">${name}</td>
        <td class="td-a${abA}">${vA||'— Not present'}</td>
        <td class="td-b${abB}">${vB||'— Not present'}</td>
      </tr>`;
    }
  }
  html += '</tbody>';
  t.innerHTML = html;
}
