// ─────────────────────────────────────────────────────────────────
//  data/weeks.js  —  EXAMPLE_WEEKS
//  Five-day training weeks (Mon/Tue/Wed/Fri/Sat) for each method
//  across accumulation, intensification, and peaking mesocycles.
//  Each session: [ { order, name, sets, note? }, ... ]
// ─────────────────────────────────────────────────────────────────

window.EXAMPLE_WEEKS = {

  // ══════════════════════════════════════════════════════════════════
  chinese: {
    accumulation: {
      label: 'M1 · Accumulation (Wk 2)',
      days: {
        mon: {
          focus: 'Snatch + Pulls + Squat',
          sessions: [
            { order:'A1', name:'Hang Snatch (Above Knee)',      sets:'4×3 @ 72%' },
            { order:'A2', name:'Snatch (Full)',                  sets:'5×3 @ 74%' },
            { order:'A3', name:'Snatch Pull',                    sets:'4×4 @ 103%', note:'Above snatch max' },
            { order:'A4', name:'Back Squat',                     sets:'4×5 @ 80%' },
            { order:'A5', name:'Good Morning',                   sets:'3×8 @ moderate' },
            { order:'A6', name:'GHD Sit-Up',                     sets:'3×15' },
          ]
        },
        tue: {
          focus: 'C&J + Jerk from Rack + Front Squat',
          sessions: [
            { order:'A1', name:'Hang Clean (Above Knee)',        sets:'4×3 @ 72%' },
            { order:'A2', name:'Clean & Jerk',                   sets:'5×(2+1) @ 74%' },
            { order:'A3', name:'Jerk from Rack',                 sets:'4×3 @ 78%' },
            { order:'A4', name:'Clean Pull',                     sets:'4×4 @ 103%', note:'Above clean max' },
            { order:'A5', name:'Front Squat',                    sets:'4×4 @ 82%' },
            { order:'A6', name:'GHD Sit-Up',                     sets:'3×15' },
          ]
        },
        wed: {
          focus: 'Snatch Technical + OHS + Press',
          sessions: [
            { order:'A1', name:'Segment Snatch (Pause at Knee)',  sets:'3×3 @ 68%', note:'2s pause' },
            { order:'A2', name:'Snatch Balance',                  sets:'4×3 @ 88%' },
            { order:'A3', name:'Snatch Pull + Snatch',            sets:'4×(1+2) @ 78%' },
            { order:'A4', name:'Overhead Squat',                  sets:'4×3 @ 74%' },
            { order:'A5', name:'Strict Press',                    sets:'4×5 @ moderate' },
            { order:'A6', name:'Back Squat',                      sets:'3×5 @ 78%' },
          ]
        },
        fri: {
          focus: 'Snatch + Pulls + Posterior Chain',
          sessions: [
            { order:'A1', name:'Power Snatch',                   sets:'3×3 @ 68%' },
            { order:'A2', name:'Snatch (Full)',                   sets:'5×3 @ 76%' },
            { order:'A3', name:'Snatch Pull from Deficit',       sets:'4×3 @ 93%', note:'2" platform' },
            { order:'A4', name:'Snatch Pull',                    sets:'3×4 @ 105%' },
            { order:'A5', name:'Back Squat',                     sets:'5×5 @ 82%' },
            { order:'A6', name:'Romanian Deadlift',              sets:'3×5 @ moderate' },
          ]
        },
        sat: {
          focus: 'C&J + Squat + Core',
          sessions: [
            { order:'A1', name:'Power Clean',                    sets:'3×3 @ 70%' },
            { order:'A2', name:'Clean (No Jerk)',                sets:'4×3 @ 76%' },
            { order:'A3', name:'Jerk from Rack',                 sets:'5×2 @ 80%' },
            { order:'A4', name:'Clean Pull',                     sets:'4×4 @ 105%' },
            { order:'A5', name:'Front Squat',                    sets:'5×3 @ 84%' },
            { order:'A6', name:'Weighted Plank',                 sets:'3×60s' },
          ]
        },
      }
    },
    intensification: {
      label: 'M2 · Intensification (Wk 6)',
      days: {
        mon: {
          focus: 'Snatch Heavy Singles + Pull',
          sessions: [
            { order:'A1', name:'Snatch (Full)',                  sets:'5×2 @ 83%' },
            { order:'A2', name:'Snatch (Full) — Heavy Singles',  sets:'3×1 @ 87%' },
            { order:'A3', name:'Snatch Pull',                    sets:'4×3 @ 105%' },
            { order:'A4', name:'Back Squat',                     sets:'4×3 @ 88%' },
            { order:'A5', name:'GHD Sit-Up',                     sets:'3×15' },
          ]
        },
        tue: {
          focus: 'C&J Heavy Singles + Jerk',
          sessions: [
            { order:'A1', name:'Clean & Jerk',                   sets:'4×(1+1) @ 83%' },
            { order:'A2', name:'Clean & Jerk — Heavy Singles',   sets:'3×(1+1) @ 87%' },
            { order:'A3', name:'Jerk from Rack',                 sets:'4×2 @ 86%' },
            { order:'A4', name:'Front Squat',                    sets:'4×3 @ 88%' },
            { order:'A5', name:'Clean Pull',                     sets:'3×3 @ 108%' },
          ]
        },
        wed: {
          focus: 'Snatch Tech + Squat',
          sessions: [
            { order:'A1', name:'Hang Snatch (Above Knee)',       sets:'3×2 @ 79%' },
            { order:'A2', name:'Snatch Balance',                 sets:'4×2 @ 93%' },
            { order:'A3', name:'Snatch (Full)',                  sets:'3×2 @ 80%' },
            { order:'A4', name:'Back Squat',                     sets:'5×3 @ 90%' },
            { order:'A5', name:'Jerk Dip Squat',                 sets:'3×5 @ 95%' },
          ]
        },
        fri: {
          focus: 'Snatch Peak + Pull',
          sessions: [
            { order:'A1', name:'Snatch (Full) — Heavy Singles',  sets:'5×1 @ 86–88%' },
            { order:'A2', name:'Snatch High Pull',               sets:'3×3 @ 88%' },
            { order:'A3', name:'Snatch Pull',                    sets:'4×3 @ 107%' },
            { order:'A4', name:'Back Squat',                     sets:'3×3 @ 92%' },
          ]
        },
        sat: {
          focus: 'C&J + Front Squat Peak',
          sessions: [
            { order:'A1', name:'Clean & Jerk — Heavy Singles',   sets:'5×(1+1) @ 85–87%' },
            { order:'A2', name:'Jerk from Rack',                 sets:'4×1 @ 88%' },
            { order:'A3', name:'Clean Pull',                     sets:'3×3 @ 108%' },
            { order:'A4', name:'Front Squat',                    sets:'4×2 @ 90%' },
          ]
        },
      }
    },
    peaking: {
      label: 'M3 · Peaking (Wk 10)',
      days: {
        mon: {
          focus: 'Snatch — Near Max + Pull',
          sessions: [
            { order:'A1', name:'Snatch (Full)',                  sets:'5×1 @ 90–93%' },
            { order:'A2', name:'Snatch Pull',                    sets:'3×3 @ 108%', note:'Reduced volume' },
            { order:'A3', name:'Back Squat',                     sets:'3×1 @ 95%' },
          ]
        },
        tue: {
          focus: 'C&J — Near Max + Jerk',
          sessions: [
            { order:'A1', name:'Clean & Jerk',                   sets:'5×(1+1) @ 90–93%' },
            { order:'A2', name:'Jerk from Rack',                 sets:'3×1 @ 93%' },
            { order:'A3', name:'Front Squat',                    sets:'3×1 @ 93%' },
          ]
        },
        wed: {
          focus: 'Snatch + Opener Attempts',
          sessions: [
            { order:'A1', name:'Snatch (Full)',                   sets:'3×1 @ 93–95%' },
            { order:'A2', name:'Snatch — Opener Attempt',        sets:'2×1 @ 95–97%', note:'Comp opener simulation' },
            { order:'A3', name:'Back Squat',                     sets:'2×1 @ 95%' },
          ]
        },
        fri: {
          focus: 'C&J — Opener Attempts',
          sessions: [
            { order:'A1', name:'Clean & Jerk',                   sets:'3×(1+1) @ 93–95%' },
            { order:'A2', name:'C&J — Opener Attempt',           sets:'2×(1+1) @ 95–97%', note:'Comp opener simulation' },
            { order:'A3', name:'Front Squat',                    sets:'2×1 @ 95%' },
          ]
        },
        sat: {
          focus: 'Snatch + C&J — Full Comp Simulation',
          sessions: [
            { order:'A1', name:'Snatch — Comp Simulation',       sets:'3 attempts: opener + second + third', note:'Full competition protocol' },
            { order:'A2', name:'Clean & Jerk — Comp Simulation', sets:'3 attempts: opener + second + third', note:'Full competition protocol' },
          ]
        },
      }
    },
  },

  // ══════════════════════════════════════════════════════════════════
  bulgarian: {
    accumulation: {
      label: 'M1 · Accumulation (Wk 2)',
      days: {
        mon: {
          focus: 'Daily Max — All Four Movements',
          sessions: [
            { order:'A1', name:'Snatch to Daily Max',            sets:'Build to DTM + 1–2 back-offs @ 90%', note:'Best attainable single today' },
            { order:'A2', name:'Clean & Jerk to Daily Max',      sets:'Build to DTM + 1–2 back-offs @ 90%' },
            { order:'A3', name:'Front Squat to Daily Max',       sets:'Build to DTM + 1 back-off @ 90%' },
            { order:'A4', name:'Snatch Balance to Daily Max',    sets:'Build to DTM', note:'4th primary lift' },
          ]
        },
        tue: {
          focus: 'Daily Max — All Four Movements',
          sessions: [
            { order:'A1', name:'Snatch to Daily Max',            sets:'Build to DTM + 1–2 back-offs @ 90%' },
            { order:'A2', name:'Clean & Jerk to Daily Max',      sets:'Build to DTM + 1–2 back-offs @ 90%' },
            { order:'A3', name:'Front Squat to Daily Max',       sets:'Build to DTM + 1 back-off @ 90%' },
            { order:'A4', name:'Snatch Balance to Daily Max',    sets:'Build to DTM' },
          ]
        },
        wed: {
          focus: 'Daily Max — Read the Body',
          sessions: [
            { order:'A1', name:'Power Snatch',                   sets:'Diagnostic — work to comfortable heavy single', note:'If heavy, pull needs work' },
            { order:'A2', name:'Snatch to Daily Max',            sets:'Build to DTM + back-off' },
            { order:'A3', name:'Clean & Jerk to Daily Max',      sets:'Build to DTM + back-off' },
            { order:'A4', name:'Front Squat to Daily Max',       sets:'Build to DTM' },
          ]
        },
        fri: {
          focus: 'Daily Max — All Four Movements',
          sessions: [
            { order:'A1', name:'Snatch to Daily Max',            sets:'Build to DTM + 1–2 back-offs @ 90%' },
            { order:'A2', name:'Clean & Jerk to Daily Max',      sets:'Build to DTM + 1–2 back-offs @ 90%' },
            { order:'A3', name:'Front Squat to Daily Max',       sets:'Build to DTM + 1 back-off @ 90%' },
            { order:'A4', name:'Snatch Balance to Daily Max',    sets:'Build to DTM' },
          ]
        },
        sat: {
          focus: 'Daily Max — PR Attempt Day',
          sessions: [
            { order:'A1', name:'Snatch to Daily Max',            sets:'Build to DTM — attempt PR if feeling good', note:'Autoregulate based on feel' },
            { order:'A2', name:'Jerk from Rack to Daily Max',    sets:'Build to DTM — jerk-specific work', note:'Optional second jerk session' },
            { order:'A3', name:'Clean & Jerk to Daily Max',      sets:'Build to DTM + back-off' },
            { order:'A4', name:'Front Squat to Daily Max',       sets:'Build to DTM' },
          ]
        },
      }
    },
    intensification: {
      label: 'M2 · Intensification (Wk 6)',
      days: {
        mon: {
          focus: 'PR Session — Push the Ceiling',
          sessions: [
            { order:'A1', name:'Snatch to Daily Max',            sets:'Build to DTM — attempt PR', note:'Post-deload supercompensation' },
            { order:'A2', name:'Clean & Jerk to Daily Max',      sets:'Build to DTM — attempt PR' },
            { order:'A3', name:'Front Squat to Daily Max',       sets:'Build to DTM' },
            { order:'A4', name:'Snatch Balance to Daily Max',    sets:'Build to DTM' },
          ]
        },
        tue: {
          focus: 'Daily Max — Maintain the Groove',
          sessions: [
            { order:'A1', name:'Snatch to Daily Max',            sets:'Build to DTM + back-off' },
            { order:'A2', name:'Clean & Jerk to Daily Max',      sets:'Build to DTM + back-off' },
            { order:'A3', name:'Front Squat to Daily Max',       sets:'Build to DTM' },
            { order:'A4', name:'Snatch Balance',                 sets:'Build to DTM' },
          ]
        },
        wed: {
          focus: 'Daily Max — Competition Simulation',
          sessions: [
            { order:'A1', name:'Power Snatch',                   sets:'Diagnostic — comfortable heavy single' },
            { order:'A2', name:'Snatch — Comp Style',            sets:'Build to DTM with comp-style builds', note:'Call attempts as if competing' },
            { order:'A3', name:'Clean & Jerk — Comp Style',      sets:'Build to DTM with comp-style builds' },
            { order:'A4', name:'Front Squat to Daily Max',       sets:'Build to DTM' },
          ]
        },
        fri: {
          focus: 'Daily Max — Push Again',
          sessions: [
            { order:'A1', name:'Snatch to Daily Max',            sets:'Build to DTM — PR attempt if feeling good' },
            { order:'A2', name:'Clean & Jerk to Daily Max',      sets:'Build to DTM' },
            { order:'A3', name:'Jerk from Rack to Daily Max',    sets:'Build to DTM', note:'If jerk needs extra work' },
            { order:'A4', name:'Front Squat to Daily Max',       sets:'Build to DTM' },
          ]
        },
        sat: {
          focus: 'Daily Max — Full Session',
          sessions: [
            { order:'A1', name:'Snatch to Daily Max',            sets:'Build to DTM + back-off' },
            { order:'A2', name:'Clean & Jerk to Daily Max',      sets:'Build to DTM + back-off' },
            { order:'A3', name:'Front Squat to Daily Max',       sets:'Build to DTM' },
            { order:'A4', name:'Snatch Balance to Daily Max',    sets:'Build to DTM' },
          ]
        },
      }
    },
    peaking: {
      label: 'M3 · Peaking (Wk 10)',
      days: {
        mon: {
          focus: 'True Max — PR Pursuit',
          sessions: [
            { order:'A1', name:'Snatch — True Max Pursuit',      sets:'Build to true 1RM attempt', note:'Not just a daily max — attempt a real PR' },
            { order:'A2', name:'Clean & Jerk — True Max',        sets:'Build to true 1RM attempt' },
            { order:'A3', name:'Front Squat to Daily Max',       sets:'Build to DTM' },
          ]
        },
        tue: {
          focus: 'Comp Openers + Back-Off',
          sessions: [
            { order:'A1', name:'Snatch — Opener Attempt',        sets:'Build to competition opener + back-off', note:'Call as a competition attempt' },
            { order:'A2', name:'Clean & Jerk — Opener Attempt',  sets:'Build to competition opener + back-off' },
            { order:'A3', name:'Front Squat to Daily Max',       sets:'Build to DTM' },
          ]
        },
        wed: {
          focus: 'Full Comp Simulation',
          sessions: [
            { order:'A1', name:'Snatch — Full Comp Sim',         sets:'3 attempts: opener, second, third', note:'Referee calls, clock, full protocol' },
            { order:'A2', name:'Clean & Jerk — Full Comp Sim',   sets:'3 attempts: opener, second, third' },
          ]
        },
        fri: {
          focus: 'Openers Only — Sharp and Fresh',
          sessions: [
            { order:'A1', name:'Snatch — Opener Only',           sets:'2×1 at competition opener', note:'No heavy work — stay sharp' },
            { order:'A2', name:'Clean & Jerk — Opener Only',     sets:'2×1 at competition opener' },
            { order:'A3', name:'Front Squat',                    sets:'1–2×1 at moderate weight' },
          ]
        },
        sat: {
          focus: 'Light Activation — Comp Tomorrow',
          sessions: [
            { order:'A1', name:'Snatch — Light Activation',      sets:'3–5 singles at 75–80%', note:'Stay in the groove — comp next day' },
            { order:'A2', name:'C&J — Light Activation',         sets:'3–5 singles at 75–80%' },
          ]
        },
      }
    },
  },

  // ══════════════════════════════════════════════════════════════════
  soviet: {
    accumulation: {
      label: 'M1 · Accumulation (Wk 2) — GPP Phase',
      days: {
        mon: {
          focus: 'GPP + Snatch Technical Volume',
          sessions: [
            { order:'A0', name:'GPP Block',                      sets:'Sprint 4×30m + Broad Jumps 3×5', note:'General physical preparation' },
            { order:'A1', name:'Segment Snatch (Pause Knee)',    sets:'3×3 @ 68% — Zone 2' },
            { order:'A2', name:'Snatch (Full)',                  sets:'5×3 @ 73% — Zone 2' },
            { order:'A3', name:'Snatch Pull',                    sets:'4×4 @ 100% — Zone 3' },
            { order:'A4', name:'Back Squat',                     sets:'4×5 @ 78% — Zone 2' },
            { order:'A5', name:'Good Morning',                   sets:'3×8 moderate' },
          ]
        },
        tue: {
          focus: 'C&J Technical Volume + Jerk',
          sessions: [
            { order:'A1', name:'Hang Clean (Above Knee)',        sets:'4×3 @ 70% — Zone 2' },
            { order:'A2', name:'Clean & Jerk',                   sets:'5×(2+1) @ 73% — Zone 2' },
            { order:'A3', name:'Jerk from Rack',                 sets:'4×3 @ 77% — Zone 2' },
            { order:'A4', name:'Clean Pull',                     sets:'4×4 @ 100% — Zone 3' },
            { order:'A5', name:'Front Squat',                    sets:'4×4 @ 80% — Zone 2' },
            { order:'A6', name:'Planks',                         sets:'3×60s' },
          ]
        },
        wed: {
          focus: 'GPP + Snatch Variation + Squat',
          sessions: [
            { order:'A0', name:'GPP Block',                      sets:'Medicine Ball Throws 4×5 + Gymnastics Drills', note:'Soviet-style GPP' },
            { order:'A1', name:'Power Snatch',                   sets:'3×3 @ 67% — Zone 1–2' },
            { order:'A2', name:'Snatch from Blocks (Mid-Shin)',  sets:'4×3 @ 78% — Zone 2' },
            { order:'A3', name:'Overhead Squat',                 sets:'4×3 @ 72% — Zone 2' },
            { order:'A4', name:'Back Squat',                     sets:'3×5 @ 80% — Zone 3' },
            { order:'A5', name:'Strict Press',                   sets:'4×5 moderate' },
          ]
        },
        fri: {
          focus: 'Snatch Full + Heavy Pulls',
          sessions: [
            { order:'A1', name:'Hang Snatch (Below Knee)',       sets:'3×3 @ 68% — Zone 2' },
            { order:'A2', name:'Snatch (Full)',                  sets:'5×3 @ 75% — Zone 2–3' },
            { order:'A3', name:'Snatch Pull from Deficit',       sets:'4×3 @ 93%' },
            { order:'A4', name:'Snatch Pull',                    sets:'4×4 @ 102% — Zone 3' },
            { order:'A5', name:'Back Squat',                     sets:'5×5 @ 80% — Zone 2–3' },
            { order:'A6', name:'Romanian Deadlift',              sets:'3×5 moderate' },
          ]
        },
        sat: {
          focus: 'C&J Full + Pull + Core',
          sessions: [
            { order:'A1', name:'Clean (No Jerk)',                sets:'4×3 @ 76% — Zone 2' },
            { order:'A2', name:'Clean & Jerk',                   sets:'5×(2+1) @ 75% — Zone 2–3' },
            { order:'A3', name:'Jerk from Rack',                 sets:'4×2 @ 79% — Zone 2' },
            { order:'A4', name:'Clean Pull',                     sets:'4×4 @ 102% — Zone 3' },
            { order:'A5', name:'Front Squat',                    sets:'4×4 @ 82% — Zone 3' },
            { order:'A6', name:'GHD Sit-Up',                     sets:'3×15' },
          ]
        },
      }
    },
    intensification: {
      label: 'M2 · Intensification (Wk 6) — Zone 3–4',
      days: {
        mon: {
          focus: 'Snatch Zone 3–4 Singles',
          sessions: [
            { order:'A1', name:'Snatch (Full)',                  sets:'3×2 @ 82% — Zone 3' },
            { order:'A2', name:'Snatch (Full) — Heavy Singles',  sets:'4×1 @ 86% — Zone 4' },
            { order:'A3', name:'Snatch Pull',                    sets:'4×3 @ 103%' },
            { order:'A4', name:'Back Squat',                     sets:'4×3 @ 88% — Zone 4' },
          ]
        },
        tue: {
          focus: 'C&J Zone 3–4 + Jerk',
          sessions: [
            { order:'A1', name:'Clean & Jerk',                   sets:'3×(1+1) @ 83% — Zone 3' },
            { order:'A2', name:'Clean & Jerk — Heavy Singles',   sets:'4×(1+1) @ 87% — Zone 4' },
            { order:'A3', name:'Jerk from Rack',                 sets:'4×2 @ 88% — Zone 4' },
            { order:'A4', name:'Clean Pull',                     sets:'4×3 @ 104%' },
            { order:'A5', name:'Front Squat',                    sets:'4×3 @ 88% — Zone 4' },
          ]
        },
        wed: {
          focus: 'Snatch Variation + Squat Volume',
          sessions: [
            { order:'A1', name:'Power Snatch',                   sets:'3×2 @ 75% — Zone 2' },
            { order:'A2', name:'Snatch from Blocks',             sets:'4×2 @ 82% — Zone 3' },
            { order:'A3', name:'Snatch Balance',                 sets:'4×2 @ 90%' },
            { order:'A4', name:'Back Squat',                     sets:'5×3 @ 90% — Zone 4' },
            { order:'A5', name:'Push Press',                     sets:'4×4 moderate-heavy' },
          ]
        },
        fri: {
          focus: 'Snatch Peak + Pull',
          sessions: [
            { order:'A1', name:'Snatch (Full) — Heavy Singles',  sets:'5×1 @ 87–89% — Zone 4' },
            { order:'A2', name:'Snatch Pull',                    sets:'4×3 @ 105% — Zone 4' },
            { order:'A3', name:'Back Squat',                     sets:'3×2 @ 92% — Zone 4–5' },
          ]
        },
        sat: {
          focus: 'C&J Peak + Front Squat',
          sessions: [
            { order:'A1', name:'Clean & Jerk — Heavy Singles',   sets:'5×(1+1) @ 86–88% — Zone 4' },
            { order:'A2', name:'Jerk from Rack',                 sets:'3×1 @ 90% — Zone 4–5' },
            { order:'A3', name:'Clean Pull',                     sets:'3×3 @ 105%' },
            { order:'A4', name:'Front Squat',                    sets:'4×2 @ 90% — Zone 4' },
          ]
        },
      }
    },
    peaking: {
      label: 'M3 · Peaking (Wk 10) — Zone 5',
      days: {
        mon: {
          focus: 'Snatch Zone 5 — Near Max',
          sessions: [
            { order:'A1', name:'Snatch (Full)',                  sets:'5×1 @ 90–93% — Zone 5' },
            { order:'A2', name:'Snatch Pull',                    sets:'3×2 @ 105%', note:'Reduced volume' },
            { order:'A3', name:'Back Squat',                     sets:'3×1 @ 95%' },
          ]
        },
        tue: {
          focus: 'C&J Zone 5 + Jerk',
          sessions: [
            { order:'A1', name:'Clean & Jerk',                   sets:'5×(1+1) @ 90–93% — Zone 5' },
            { order:'A2', name:'Jerk from Rack',                 sets:'3×1 @ 93%' },
            { order:'A3', name:'Front Squat',                    sets:'3×1 @ 93%' },
          ]
        },
        wed: {
          focus: 'Snatch — Opener Attempts',
          sessions: [
            { order:'A1', name:'Snatch',                         sets:'3×1 @ 93–95%' },
            { order:'A2', name:'Snatch — Opener',                sets:'2×1 @ 95–97%', note:'Comp opener simulation' },
            { order:'A3', name:'Back Squat',                     sets:'2×1 @ 95%' },
          ]
        },
        fri: {
          focus: 'C&J — Opener Attempts',
          sessions: [
            { order:'A1', name:'Clean & Jerk',                   sets:'3×(1+1) @ 92–94%' },
            { order:'A2', name:'C&J — Opener',                   sets:'2×(1+1) @ 95–97%' },
            { order:'A3', name:'Front Squat',                    sets:'2×1 @ 94%' },
          ]
        },
        sat: {
          focus: 'Full Competition Simulation',
          sessions: [
            { order:'A1', name:'Snatch — Comp Simulation',       sets:'3 competition attempts', note:'Full protocol — referee, clock, platform' },
            { order:'A2', name:'Clean & Jerk — Comp Simulation', sets:'3 competition attempts' },
          ]
        },
      }
    },
  },

  // ══════════════════════════════════════════════════════════════════
  catalyst: {
    accumulation: {
      label: 'M1 · Accumulation (Wk 2)',
      days: {
        mon: {
          focus: 'Snatch + Snatch Pull + Back Squat',
          sessions: [
            { order:'A1', name:'Hang Snatch (Above Knee)',       sets:'4×3 @ 71%' },
            { order:'A2', name:'Snatch (Full)',                  sets:'5×3 @ 74%' },
            { order:'A3', name:'Snatch Pull',                    sets:'4×4 @ 103%', note:'Above snatch max' },
            { order:'A4', name:'Back Squat',                     sets:'4×5 @ 80%' },
            { order:'A5', name:'GHD Sit-Up',                     sets:'3×15' },
          ]
        },
        tue: {
          focus: 'C&J + Jerk + Front Squat',
          sessions: [
            { order:'A1', name:'Clean (No Jerk)',                sets:'4×3 @ 76%' },
            { order:'A2', name:'Clean & Jerk',                   sets:'5×(2+1) @ 74%' },
            { order:'A3', name:'Jerk from Rack',                 sets:'4×3 @ 79%' },
            { order:'A4', name:'Clean Pull',                     sets:'4×4 @ 103%' },
            { order:'A5', name:'Front Squat',                    sets:'5×3 @ 82%' },
          ]
        },
        wed: {
          focus: 'Snatch Technical + OHS',
          sessions: [
            { order:'A1', name:'Segment Snatch (Pause Knee)',    sets:'3×3 @ 67%' },
            { order:'A2', name:'Snatch Balance',                 sets:'4×3 @ 88%' },
            { order:'A3', name:'Power Snatch + Snatch Complex',  sets:'3×(1+2) @ 70%' },
            { order:'A4', name:'Overhead Squat',                 sets:'4×3 @ 73%' },
            { order:'A5', name:'Strict Press',                   sets:'4×5 moderate' },
            { order:'A6', name:'Back Squat',                     sets:'3×5 @ 80%' },
          ]
        },
        fri: {
          focus: 'Snatch + Deficit Pull + Squat',
          sessions: [
            { order:'A1', name:'Hang Snatch (Below Knee)',       sets:'3×3 @ 68%' },
            { order:'A2', name:'Snatch (Full)',                  sets:'5×3 @ 76%' },
            { order:'A3', name:'Snatch Pull from Deficit',       sets:'4×3 @ 93%' },
            { order:'A4', name:'Snatch Pull',                    sets:'3×4 @ 104%' },
            { order:'A5', name:'Back Squat',                     sets:'5×5 @ 82%' },
          ]
        },
        sat: {
          focus: 'C&J + Clean Pull + Front Squat',
          sessions: [
            { order:'A1', name:'Power Clean',                    sets:'3×3 @ 70%' },
            { order:'A2', name:'Clean & Jerk',                   sets:'5×(2+1) @ 74%' },
            { order:'A3', name:'Jerk from Rack',                 sets:'5×2 @ 80%' },
            { order:'A4', name:'Clean Pull',                     sets:'4×4 @ 104%' },
            { order:'A5', name:'Front Squat',                    sets:'5×3 @ 83%' },
            { order:'A6', name:'Romanian Deadlift',              sets:'3×5 moderate' },
          ]
        },
      }
    },
    intensification: {
      label: 'M2 · Intensification (Wk 6)',
      days: {
        mon: {
          focus: 'Snatch Heavy Singles + Pull',
          sessions: [
            { order:'A1', name:'Snatch (Full)',                  sets:'4×2 @ 83%' },
            { order:'A2', name:'Snatch — Heavy Singles',         sets:'3×1 @ 87%' },
            { order:'A3', name:'Snatch Pull',                    sets:'4×3 @ 106%' },
            { order:'A4', name:'Back Squat',                     sets:'4×3 @ 88%' },
          ]
        },
        tue: {
          focus: 'C&J Heavy Singles + Jerk + FS',
          sessions: [
            { order:'A1', name:'Clean & Jerk',                   sets:'4×(1+1) @ 83%' },
            { order:'A2', name:'C&J — Heavy Singles',            sets:'3×(1+1) @ 87%' },
            { order:'A3', name:'Jerk from Rack',                 sets:'4×2 @ 87%' },
            { order:'A4', name:'Clean Pull',                     sets:'4×3 @ 108%' },
            { order:'A5', name:'Front Squat',                    sets:'4×3 @ 88%' },
          ]
        },
        wed: {
          focus: 'Snatch Variations + Squat',
          sessions: [
            { order:'A1', name:'Power Snatch',                   sets:'3×2 @ 76%' },
            { order:'A2', name:'Snatch from Blocks',             sets:'4×2 @ 83%' },
            { order:'A3', name:'Snatch Balance',                 sets:'4×2 @ 92%' },
            { order:'A4', name:'Back Squat',                     sets:'5×3 @ 90%' },
          ]
        },
        fri: {
          focus: 'Snatch Peak + Pull',
          sessions: [
            { order:'A1', name:'Snatch — Heavy Singles',         sets:'5×1 @ 86–88%' },
            { order:'A2', name:'Snatch Pull',                    sets:'4×2 @ 108%' },
            { order:'A3', name:'Back Squat',                     sets:'3×2 @ 92%' },
          ]
        },
        sat: {
          focus: 'C&J Peak + Front Squat',
          sessions: [
            { order:'A1', name:'Clean & Jerk — Heavy Singles',   sets:'5×(1+1) @ 86–88%' },
            { order:'A2', name:'Jerk from Rack',                 sets:'3×1 @ 89%' },
            { order:'A3', name:'Clean Pull',                     sets:'3×2 @ 108%' },
            { order:'A4', name:'Front Squat',                    sets:'4×2 @ 90%' },
          ]
        },
      }
    },
    peaking: {
      label: 'M3 · Peaking (Wk 10)',
      days: {
        mon: {
          focus: 'Snatch — Near Max',
          sessions: [
            { order:'A1', name:'Snatch',                         sets:'5×1 @ 91–93%' },
            { order:'A2', name:'Snatch Pull',                    sets:'3×2 @ 108%', note:'Reduced volume' },
            { order:'A3', name:'Back Squat',                     sets:'3×1 @ 94%' },
          ]
        },
        tue: {
          focus: 'C&J — Near Max + FS',
          sessions: [
            { order:'A1', name:'Clean & Jerk',                   sets:'5×(1+1) @ 91–93%' },
            { order:'A2', name:'Jerk from Rack',                 sets:'3×1 @ 93%' },
            { order:'A3', name:'Front Squat',                    sets:'3×1 @ 93%' },
          ]
        },
        wed: {
          focus: 'Snatch — Opener Attempts',
          sessions: [
            { order:'A1', name:'Snatch',                         sets:'3×1 @ 93–95%' },
            { order:'A2', name:'Snatch — Opener',                sets:'2×1 @ 95–97%' },
            { order:'A3', name:'Back Squat',                     sets:'2×1 @ 95%' },
          ]
        },
        fri: {
          focus: 'C&J — Opener Attempts',
          sessions: [
            { order:'A1', name:'Clean & Jerk',                   sets:'3×(1+1) @ 92–94%' },
            { order:'A2', name:'C&J — Opener',                   sets:'2×(1+1) @ 95–97%' },
            { order:'A3', name:'Front Squat',                    sets:'2×1 @ 93%' },
          ]
        },
        sat: {
          focus: 'Full Competition Simulation',
          sessions: [
            { order:'A1', name:'Snatch — Comp Simulation',       sets:'3 competition attempts', note:'Full protocol — opener, second, third' },
            { order:'A2', name:'Clean & Jerk — Comp Simulation', sets:'3 competition attempts' },
          ]
        },
      }
    },
  },

  // ══════════════════════════════════════════════════════════════════
  pendlay: {
    accumulation: {
      label: 'M1 · Accumulation (Wk 2) — Pull Focus',
      days: {
        mon: {
          focus: 'Snatch + Pulls (Very High Volume)',
          sessions: [
            { order:'A1', name:'Hang Snatch (Above Knee)',       sets:'4×3 @ 71%' },
            { order:'A2', name:'Snatch (Full)',                  sets:'5×3 @ 73%' },
            { order:'A3', name:'Snatch Pull from Deficit',       sets:'4×4 @ 93%', note:'2" platform' },
            { order:'A4', name:'Snatch Pull',                    sets:'5×4 @ 108%', note:'Pendlay hallmark volume' },
            { order:'A5', name:'Back Squat',                     sets:'5×5 @ 82%' },
            { order:'A6', name:'Good Morning',                   sets:'4×8 moderate-heavy' },
          ]
        },
        tue: {
          focus: 'Jerk from Rack (Independent) + Clean Pull',
          sessions: [
            { order:'A1', name:'Jerk from Rack',                 sets:'5×3 @ 77%', note:'Pendlay: jerk is a separate lift' },
            { order:'A2', name:'Clean (No Jerk)',                sets:'5×3 @ 76%', note:'High clean volume, no jerk fatigue' },
            { order:'A3', name:'Clean Pull from Deficit',        sets:'4×4 @ 97%' },
            { order:'A4', name:'Clean Pull',                     sets:'5×4 @ 108%' },
            { order:'A5', name:'Front Squat',                    sets:'5×4 @ 83%' },
            { order:'A6', name:'Romanian Deadlift',              sets:'4×5 moderate-heavy' },
          ]
        },
        wed: {
          focus: 'Snatch Technical + OHS + Squat',
          sessions: [
            { order:'A1', name:'Segment Snatch (Pause Knee)',    sets:'3×3 @ 67%' },
            { order:'A2', name:'Snatch Balance',                 sets:'4×3 @ 88%' },
            { order:'A3', name:'Snatch from Blocks',             sets:'4×3 @ 78%' },
            { order:'A4', name:'Overhead Squat',                 sets:'4×3 @ 73%' },
            { order:'A5', name:'Back Squat',                     sets:'5×5 @ 84%' },
            { order:'A6', name:'Strict Press',                   sets:'4×5 moderate' },
          ]
        },
        fri: {
          focus: 'Snatch Full + Massive Pull Volume',
          sessions: [
            { order:'A1', name:'Power Snatch',                   sets:'3×3 @ 68%' },
            { order:'A2', name:'Snatch (Full)',                  sets:'5×3 @ 75%' },
            { order:'A3', name:'Snatch Deadlift (Slow)',         sets:'3×3 @ 100%', note:'Bar path and position' },
            { order:'A4', name:'Snatch Pull',                    sets:'6×4 @ 110%', note:'Very high volume' },
            { order:'A5', name:'Back Squat',                     sets:'5×3 @ 86%' },
          ]
        },
        sat: {
          focus: 'C&J (Separated) + Clean Pull + FS',
          sessions: [
            { order:'A1', name:'Jerk from Rack',                 sets:'5×3 @ 79%', note:'Independent jerk — no clean' },
            { order:'A2', name:'Clean & Jerk (Full)',            sets:'5×(2+1) @ 74%' },
            { order:'A3', name:'Clean Deadlift (Slow)',          sets:'3×3 @ 103%' },
            { order:'A4', name:'Clean Pull',                     sets:'6×4 @ 108%' },
            { order:'A5', name:'Front Squat',                    sets:'5×4 @ 85%' },
            { order:'A6', name:'GHD Sit-Up',                     sets:'3×15' },
          ]
        },
      }
    },
    intensification: {
      label: 'M2 · Intensification (Wk 6) — Still High Volume',
      days: {
        mon: {
          focus: 'Snatch Heavy + Pull Intensity',
          sessions: [
            { order:'A1', name:'Snatch (Full)',                  sets:'4×2 @ 83%' },
            { order:'A2', name:'Snatch — Heavy Singles',         sets:'4×1 @ 87%' },
            { order:'A3', name:'Snatch Pull',                    sets:'5×3 @ 110%', note:'Still very high volume' },
            { order:'A4', name:'Back Squat',                     sets:'5×3 @ 89%' },
          ]
        },
        tue: {
          focus: 'Jerk (Heavy) + Clean + Pull',
          sessions: [
            { order:'A1', name:'Jerk from Rack',                 sets:'5×2 @ 87%', note:'Independent heavy jerk work' },
            { order:'A2', name:'Clean (No Jerk)',                sets:'5×2 @ 83%' },
            { order:'A3', name:'Clean Pull',                     sets:'5×3 @ 111%' },
            { order:'A4', name:'Front Squat',                    sets:'5×3 @ 89%' },
          ]
        },
        wed: {
          focus: 'Snatch Variations + Squat',
          sessions: [
            { order:'A1', name:'Power Snatch',                   sets:'3×2 @ 76%' },
            { order:'A2', name:'Snatch from Blocks',             sets:'4×2 @ 83%' },
            { order:'A3', name:'Snatch Balance',                 sets:'4×2 @ 92%' },
            { order:'A4', name:'Back Squat',                     sets:'5×3 @ 91%' },
          ]
        },
        fri: {
          focus: 'Snatch Peak + Maximum Pull',
          sessions: [
            { order:'A1', name:'Snatch — Heavy Singles',         sets:'5×1 @ 87–90%' },
            { order:'A2', name:'Snatch Pull',                    sets:'5×3 @ 113%', note:'Pendlay peak pull volume' },
            { order:'A3', name:'Back Squat',                     sets:'3×2 @ 93%' },
          ]
        },
        sat: {
          focus: 'C&J Peak + Jerk + Front Squat',
          sessions: [
            { order:'A1', name:'Clean & Jerk — Heavy Singles',   sets:'5×(1+1) @ 87–89%' },
            { order:'A2', name:'Jerk from Rack',                 sets:'4×1 @ 90%' },
            { order:'A3', name:'Clean Pull',                     sets:'4×3 @ 112%' },
            { order:'A4', name:'Front Squat',                    sets:'4×2 @ 91%' },
          ]
        },
      }
    },
    peaking: {
      label: 'M3 · Peaking (Wk 10) — Express the Pull',
      days: {
        mon: {
          focus: 'Snatch — Near Max',
          sessions: [
            { order:'A1', name:'Snatch',                         sets:'5×1 @ 91–93%', note:'Pull base expresses here' },
            { order:'A2', name:'Snatch Pull',                    sets:'3×2 @ 110%', note:'Reduced but maintained' },
            { order:'A3', name:'Back Squat',                     sets:'3×1 @ 95%' },
          ]
        },
        tue: {
          focus: 'C&J + Jerk Heavy',
          sessions: [
            { order:'A1', name:'Clean & Jerk',                   sets:'5×(1+1) @ 91–93%' },
            { order:'A2', name:'Jerk from Rack',                 sets:'3×1 @ 94%' },
            { order:'A3', name:'Front Squat',                    sets:'3×1 @ 93%' },
          ]
        },
        wed: {
          focus: 'Snatch Openers',
          sessions: [
            { order:'A1', name:'Snatch',                         sets:'3×1 @ 93–95%' },
            { order:'A2', name:'Snatch — Opener',                sets:'2×1 @ 96–98%' },
            { order:'A3', name:'Back Squat',                     sets:'2×1 @ 95%' },
          ]
        },
        fri: {
          focus: 'C&J Openers',
          sessions: [
            { order:'A1', name:'Clean & Jerk',                   sets:'3×(1+1) @ 92–94%' },
            { order:'A2', name:'C&J — Opener',                   sets:'2×(1+1) @ 95–97%' },
            { order:'A3', name:'Front Squat',                    sets:'2×1 @ 93%' },
          ]
        },
        sat: {
          focus: 'Full Competition Simulation',
          sessions: [
            { order:'A1', name:'Snatch — Comp Simulation',       sets:'3 competition attempts', note:'The pull base built over 10 weeks expresses here' },
            { order:'A2', name:'Clean & Jerk — Comp Simulation', sets:'3 competition attempts' },
          ]
        },
      }
    },
  },

  // ══════════════════════════════════════════════════════════════════
  klokov: {
    accumulation: {
      label: 'M1 · Accumulation (Wk 2) — Complex Focus',
      days: {
        mon: {
          focus: 'Snatch Complex + OHS + Press',
          sessions: [
            { order:'A1', name:'Snatch + OHS + Snatch Balance',  sets:'4×complex @ 68%', note:'Klokov signature complex' },
            { order:'A2', name:'Snatch (Full)',                   sets:'4×3 @ 72%' },
            { order:'A3', name:'Snatch Pull',                     sets:'4×4 @ 101%' },
            { order:'A4', name:'Overhead Squat (Heavy)',          sets:'4×3 @ 80% snatch', note:'Near-primary lift' },
            { order:'A5', name:'Press in Snatch Grip (BTN)',      sets:'4×5 moderate-heavy', note:'Klokov signature' },
            { order:'A6', name:'Back Squat',                      sets:'4×4 @ 79%' },
          ]
        },
        tue: {
          focus: 'Clean Complex + Front Squat + Jerk',
          sessions: [
            { order:'A1', name:'Pause Clean + Clean + Front Squat',sets:'4×complex @ 70%', note:'1 pause clean + 1 clean + 2 FS' },
            { order:'A2', name:'Clean & Jerk',                    sets:'5×(2+1) @ 73%' },
            { order:'A3', name:'Jerk from Rack',                  sets:'4×3 @ 77%' },
            { order:'A4', name:'Clean Pull',                      sets:'4×4 @ 102%' },
            { order:'A5', name:'Front Squat',                     sets:'4×4 @ 81%' },
          ]
        },
        wed: {
          focus: 'Snatch Pause Variations + OHS + BTN',
          sessions: [
            { order:'A1', name:'Pause Snatch (Pause Below Knee)', sets:'4×3 @ 67%', note:'2s pause — Klokov hallmark' },
            { order:'A2', name:'Snatch (Full)',                   sets:'4×3 @ 72%' },
            { order:'A3', name:'Snatch Balance',                  sets:'4×3 @ 88%' },
            { order:'A4', name:'Pause OHS (3–5s)',                sets:'3×3 @ 72% snatch', note:'Klokov signature' },
            { order:'A5', name:'BTN Push Press (Snatch Grip)',    sets:'4×4 @ 72% snatch' },
            { order:'A6', name:'GHD Sit-Up',                      sets:'3×15' },
          ]
        },
        fri: {
          focus: 'Snatch Complex + Deficit + Squat',
          sessions: [
            { order:'A1', name:'Power Snatch + OHS + Snatch Bal.',sets:'3×complex @ 65%', note:'Lighter version of signature' },
            { order:'A2', name:'Snatch (Full)',                   sets:'4×3 @ 74%' },
            { order:'A3', name:'Snatch Pull from Deficit',        sets:'4×3 @ 92%' },
            { order:'A4', name:'Snatch Pull',                     sets:'3×4 @ 102%' },
            { order:'A5', name:'Back Squat',                      sets:'4×5 @ 81%' },
          ]
        },
        sat: {
          focus: 'Clean + Jerk Complex + Press',
          sessions: [
            { order:'A1', name:'Clean + Front Squat + Jerk',     sets:'4×complex @ 70%', note:'Klokov signature C&J complex' },
            { order:'A2', name:'Clean & Jerk',                   sets:'4×(2+1) @ 73%' },
            { order:'A3', name:'BTN Jerk',                       sets:'3×3 @ 74%' },
            { order:'A4', name:'Clean Pull',                     sets:'3×4 @ 102%' },
            { order:'A5', name:'Front Squat',                    sets:'4×4 @ 81%' },
            { order:'A6', name:'Strict Press',                   sets:'4×5 moderate' },
          ]
        },
      }
    },
    intensification: {
      label: 'M2 · Intensification (Wk 6) — Heavy Complexes',
      days: {
        mon: {
          focus: 'Heavy Snatch Complex + OHS Max',
          sessions: [
            { order:'A1', name:'Snatch + OHS + Snatch Balance',  sets:'4×complex @ 78%', note:'Heavy complex — key M2 tool' },
            { order:'A2', name:'Snatch — Heavy Singles',         sets:'4×1 @ 84%' },
            { order:'A3', name:'Snatch Pull',                    sets:'4×3 @ 104%' },
            { order:'A4', name:'Overhead Squat (Heavy)',         sets:'4×2 @ 85% snatch', note:'Near-max OHS' },
            { order:'A5', name:'Press in Snatch Grip',           sets:'4×5 moderate-heavy' },
            { order:'A6', name:'Back Squat',                     sets:'4×3 @ 87%' },
          ]
        },
        tue: {
          focus: 'Heavy Clean Complex + Jerk',
          sessions: [
            { order:'A1', name:'Pause Clean + Clean + FS',       sets:'4×complex @ 78%' },
            { order:'A2', name:'Clean & Jerk — Heavy Singles',   sets:'4×(1+1) @ 83%' },
            { order:'A3', name:'Jerk from Rack',                 sets:'4×2 @ 86%' },
            { order:'A4', name:'Clean Pull',                     sets:'4×3 @ 105%' },
            { order:'A5', name:'Front Squat',                    sets:'4×3 @ 87%' },
          ]
        },
        wed: {
          focus: 'Pause Variations — Peak Load',
          sessions: [
            { order:'A1', name:'Pause Snatch (Below Knee)',      sets:'4×2 @ 76%', note:'Heavy pause work' },
            { order:'A2', name:'Snatch Balance — Heavy',         sets:'4×2 @ 94%', note:'Approaching max' },
            { order:'A3', name:'Pause OHS (3–5s)',               sets:'3×2 @ 78% snatch', note:'Near-max pause OHS' },
            { order:'A4', name:'BTN Push Press + OHS',           sets:'3×(3+2) @ 78% snatch' },
            { order:'A5', name:'Back Squat',                     sets:'5×3 @ 89%' },
          ]
        },
        fri: {
          focus: 'Snatch Peak + Pull',
          sessions: [
            { order:'A1', name:'Snatch — Heavy Singles',         sets:'5×1 @ 86–88%', note:'Complex base paying off' },
            { order:'A2', name:'Snatch Pull',                    sets:'4×2 @ 106%' },
            { order:'A3', name:'Back Squat',                     sets:'3×2 @ 91%' },
          ]
        },
        sat: {
          focus: 'C&J Peak + BTN Jerk + FS',
          sessions: [
            { order:'A1', name:'Clean & Jerk — Heavy Singles',   sets:'5×(1+1) @ 85–87%' },
            { order:'A2', name:'BTN Jerk',                       sets:'3×2 @ 82%' },
            { order:'A3', name:'Jerk from Rack',                 sets:'3×1 @ 89%' },
            { order:'A4', name:'Front Squat',                    sets:'4×2 @ 89%' },
          ]
        },
      }
    },
    peaking: {
      label: 'M3 · Peaking (Wk 10) — Complexes Give Way to Singles',
      days: {
        mon: {
          focus: 'Snatch Near Max + OHS',
          sessions: [
            { order:'A1', name:'Snatch',                         sets:'5×1 @ 90–93%', note:'Complex work pays off here' },
            { order:'A2', name:'Snatch Balance to Max',          sets:'3×1 heavy', note:'Near-max snatch balance' },
            { order:'A3', name:'Overhead Squat',                 sets:'3×2 @ 85% snatch' },
            { order:'A4', name:'Back Squat',                     sets:'3×1 @ 94%' },
          ]
        },
        tue: {
          focus: 'C&J Near Max + BTN',
          sessions: [
            { order:'A1', name:'Clean & Jerk',                   sets:'5×(1+1) @ 90–93%' },
            { order:'A2', name:'BTN Jerk',                       sets:'3×1 heavy' },
            { order:'A3', name:'Jerk from Rack',                 sets:'3×1 @ 93%' },
            { order:'A4', name:'Front Squat',                    sets:'3×1 @ 93%' },
          ]
        },
        wed: {
          focus: 'Snatch Openers + OHS Warm-Up',
          sessions: [
            { order:'A1', name:'Snatch',                         sets:'3×1 @ 93–95%' },
            { order:'A2', name:'Snatch — Opener',                sets:'2×1 @ 95–97%' },
            { order:'A3', name:'Overhead Squat',                 sets:'2×3 @ 78%', note:'Overhead maintained even in peak' },
            { order:'A4', name:'Back Squat',                     sets:'2×1 @ 95%' },
          ]
        },
        fri: {
          focus: 'C&J Openers',
          sessions: [
            { order:'A1', name:'Clean & Jerk',                   sets:'3×(1+1) @ 92–94%' },
            { order:'A2', name:'C&J — Opener',                   sets:'2×(1+1) @ 95–97%' },
            { order:'A3', name:'Front Squat',                    sets:'2×1 @ 93%' },
          ]
        },
        sat: {
          focus: 'Full Competition Simulation',
          sessions: [
            { order:'A1', name:'Snatch — Comp Simulation',       sets:'3 competition attempts', note:'Overhead position from complexes is rock solid' },
            { order:'A2', name:'Clean & Jerk — Comp Simulation', sets:'3 competition attempts' },
          ]
        },
      }
    },
  },

};
