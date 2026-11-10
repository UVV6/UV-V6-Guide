// Resource progression values from EU1 community calculator tables; UV V6 equivalence is based on owner confirmation.
const chiefGearTiers = [
      { name: "Uncrafted ➔ Green (Rare T1)",       amber: 0,   alloy: 120,   polish: 15,   plans: 0,    note: "Basic Chief Gear Unlock" },
      { name: "Green (Rare T1) ➔ Green T2",         amber: 0,   alloy: 240,   polish: 30,   plans: 0,    note: "Troop Attack Boost" },
      { name: "Green T2 ➔ Blue (Epic T1)",          amber: 0,   alloy: 480,   polish: 60,   plans: 5,    note: "Tier Expansion" },
      { name: "Blue T1 ➔ Blue T2",                 amber: 0,   alloy: 750,   polish: 90,   plans: 10,   note: "Troop Defense Boost" },
      { name: "Blue T2 ➔ Purple (Mythic T1)",       amber: 0,   alloy: 1200,  polish: 150,  plans: 20,   note: "Lethality Unlock" },
      { name: "Purple T1 ➔ Purple T2",             amber: 0,   alloy: 1800,  polish: 220,  plans: 35,   note: "Squad Health Boost" },
      { name: "Purple T2 ➔ Gold (Dominator T1)",   amber: 0,   alloy: 2600,  polish: 320,  plans: 55,   note: "Dominator Aura" },
      { name: "Gold T1 ➔ Gold T2",                 amber: 0,   alloy: 3600,  polish: 450,  plans: 80,   note: "High-Tier PvP Combat" },
      { name: "Gold T2 ➔ Gold T3",                 amber: 0,   alloy: 4800,  polish: 600,  plans: 110,  note: "Pre-Lunar Master Tier" },
      // LUNAR / RED TIERS (AMBER INFUSION)
      { name: "Gold T3 ➔ Red T1 (Lunar T1)",       amber: 15,  alloy: 6500,  polish: 800,  plans: 150,  note: "🔥 Unlocks Lunar Amber Infusion" },
      { name: "Red T1 ➔ Red T2",                   amber: 25,  alloy: 8500,  polish: 1050, plans: 200,  note: "Sovereign Stat Expansion" },
      { name: "Red T2 ➔ Red T3",                   amber: 40,  alloy: 11000, polish: 1350, plans: 260,  note: "Major Rally Lethality Buff" },
      { name: "Red T3 ➔ Red T4",                   amber: 60,  alloy: 14000, polish: 1700, plans: 330,  note: "Apex Battle Scaling" },
      { name: "Red T4 ➔ Red T5",                   amber: 85,  alloy: 18000, polish: 2200, plans: 420,  note: "High Sovereign Tier" },
      // RED T6 3-STARS EXTENSION (MAX CAP)
      { name: "Red T5 ➔ Red T6 (1★)",              amber: 115, alloy: 23000, polish: 2800, plans: 520,  note: "⚡ Red Tier 6 (1-Star Awakening)" },
      { name: "Red T6 (1★) ➔ Red T6 (2★)",         amber: 150, alloy: 29000, polish: 3500, plans: 640,  note: "⚡ Red Tier 6 (2-Star Refinement)" },
      { name: "Red T6 (2★) ➔ Red T6 (3★ Max)",     amber: 200, alloy: 36000, polish: 4300, plans: 780,  note: "👑 Absolute Endgame Cap (+255% Stats)" }
    ];
const charmData = [
      { lvl: 1,  guides: 5,    designs: 0,   secrets: 0,   bonus: "+2% Squad Attack & Defense" },
      { lvl: 2,  guides: 10,   designs: 0,   secrets: 0,   bonus: "+4% Squad Attack & Defense" },
      { lvl: 3,  guides: 20,   designs: 2,   secrets: 0,   bonus: "+7% Squad Stats" },
      { lvl: 4,  guides: 35,   designs: 5,   secrets: 0,   bonus: "+11% Squad Stats" },
      { lvl: 5,  guides: 55,   designs: 10,  secrets: 0,   bonus: "+16% Squad Stats" },
      { lvl: 6,  guides: 80,   designs: 18,  secrets: 0,   bonus: "+22% Squad Lethality" },
      { lvl: 7,  guides: 115,  designs: 30,  secrets: 0,   bonus: "+29% Squad Lethality & Health" },
      { lvl: 8,  guides: 160,  designs: 48,  secrets: 0,   bonus: "+37% Combat Lethality" },
      { lvl: 9,  guides: 220,  designs: 72,  secrets: 0,   bonus: "+46% High-Tier Combat Power" },
      { lvl: 10, guides: 300,  designs: 105, secrets: 0,   bonus: "+56% Sovereign Combat Power" },
      { lvl: 11, guides: 400,  designs: 150, secrets: 0,   bonus: "+68% Apex Realm Power" },
      // JEWEL SECRETS BOTTLENECK ERA
      { lvl: 12, guides: 530,  designs: 210, secrets: 15,  bonus: "⚡ Unlocks Jewel Secrets (Lv 12)" },
      { lvl: 13, guides: 680,  designs: 280, secrets: 30,  bonus: "+85% Squad Combat Amplification" },
      { lvl: 14, guides: 850,  designs: 360, secrets: 50,  bonus: "+102% Combat Lethality Boost" },
      { lvl: 15, guides: 1050, designs: 460, secrets: 75,  bonus: "+122% High-Tier Health & Attack" },
      { lvl: 16, guides: 1300, designs: 580, secrets: 110, bonus: "+145% Sovereign Battle Lethality" },
      { lvl: 17, guides: 1600, designs: 720, secrets: 155, bonus: "+170% Apex Mastery Scaling" },
      { lvl: 18, guides: 2000, designs: 900, secrets: 220, bonus: "👑 Absolute Charm Cap (+200% Stats)" }
    ];
const expertsRoster = [
      { id: "cyrille", name: "Cyrille", role: "Bear Hunt",       sigilMult: 1.0,  bookMult: 1.0,  note: "Essential: extra Essence Stones on Bear" },
      { id: "agnes",   name: "Agnes",   role: "City Economy",    sigilMult: 1.0,  bookMult: 1.0,  note: "Essential: free stamina & daily intel" },
      { id: "holger",  name: "Holger",  role: "Arena Master",    sigilMult: 1.6,  bookMult: 3.8,  note: "Arena token bonus & combat attack" },
      { id: "romulus", name: "Romulus", role: "Military Lead",   sigilMult: 6.6,  bookMult: 19.5, note: "Whale combat: massive rally cap & lethality" },
      { id: "baldur",  name: "Baldur",  role: "Alliance Events", sigilMult: 1.2,  bookMult: 1.2,  note: "Alliance championship currency & rewards" },
      { id: "fabian",  name: "Fabian",  role: "Foundry Battle",  sigilMult: 2.4,  bookMult: 7.4,  note: "Foundry battle healing & arsenal score" },
      { id: "valeria", name: "Valeria", role: "SvS / Battle",    sigilMult: 4.0,  bookMult: 16.3, note: "SvS prep points & castle combat stats" },
      { id: "ronne",   name: "Ronne",   role: "Trade Route",     sigilMult: 1.6,  bookMult: 5.1,  note: "Tundra caravan protection, speed & cargo" },
      { id: "kathy",   name: "Kathy",   role: "Frostfire Mine",  sigilMult: 2.0,  bookMult: 6.0,  note: "Frostfire mine Orichalcum regeneration" },
      { id: "gareth",  name: "Gareth",  role: "Troop Defense",   sigilMult: 7.0,  bookMult: 20.0, note: "Late Whale: troop health & training rewards" },
      { id: "justus",  name: "Justus",  role: "Chests & Trek",   sigilMult: 1.1,  bookMult: 1.1,  note: "Top F2P: Exploration chests, Trek & Pet perks" }
    ];
const baseMilestones = [
      { from: 0,  to: 10,  sigils: 15,  books: 800,   affinity: 1000,  note: "Unlocks Active Skill 1" },
      { from: 10, to: 20,  sigils: 20,  books: 1200,  affinity: 2200,  note: "Affinity Milestone 2" },
      { from: 20, to: 30,  sigils: 25,  books: 1800,  affinity: 3800,  note: "Unlocks Skill 1 Upgrade" },
      { from: 30, to: 40,  sigils: 30,  books: 2400,  affinity: 5800,  note: "Unlocks Active Skill 2" },
      { from: 40, to: 50,  sigils: 35,  books: 3200,  affinity: 8200,  note: "Key Mid-Game Breakpoint" },
      { from: 50, to: 60,  sigils: 40,  books: 4200,  affinity: 11000, note: "Unlocks Active Skill 3" },
      { from: 60, to: 70,  sigils: 45,  books: 5400,  affinity: 14500, note: "Skill 2 & 3 Amplification" },
      { from: 70, to: 80,  sigils: 50,  books: 6800,  affinity: 18500, note: "Unlocks Active Skill 4" },
      { from: 80, to: 90,  sigils: 55,  books: 8500,  affinity: 23500, note: "High-Tier Passive Scaling" },
      { from: 90, to: 100, sigils: 60,  books: 10500, affinity: 30000, note: "👑 Full Expert Master Cap" }
    ];
const cityCurves = {
      furnace: [
        { lvl: 1,  sec: 30,     meat: 0.001, wood: 0.001, coal: 0,     iron: 0,    prereq: "None" },
        { lvl: 2,  sec: 60,     meat: 0.002, wood: 0.002, coal: 0,     iron: 0,    prereq: "Sawmill 1" },
        { lvl: 3,  sec: 120,    meat: 0.005, wood: 0.005, coal: 0,     iron: 0,    prereq: "Cookhouse 2" },
        { lvl: 4,  sec: 300,    meat: 0.012, wood: 0.012, coal: 0,     iron: 0,    prereq: "Shelter 3" },
        { lvl: 5,  sec: 600,    meat: 0.025, wood: 0.025, coal: 0,     iron: 0,    prereq: "Shelter 4 + Sawmill 4" },
        { lvl: 6,  sec: 1200,   meat: 0.05,  wood: 0.05,  coal: 0,     iron: 0,    prereq: "Clinic 5" },
        { lvl: 7,  sec: 2400,   meat: 0.09,  wood: 0.09,  coal: 0,     iron: 0,    prereq: "Shelter 6 + Hunter Cabin 6" },
        { lvl: 8,  sec: 4800,   meat: 0.16,  wood: 0.16,  coal: 0,     iron: 0,    prereq: "Clinic 7 + Sawmill 7" },
        { lvl: 9,  sec: 9600,   meat: 0.28,  wood: 0.28,  coal: 0,     iron: 0,    prereq: "Cookhouse 8 + Coal Mine 8" },
        { lvl: 10, sec: 18000,  meat: 0.45,  wood: 0.45,  coal: 0.05,  iron: 0,    prereq: "Coal Mine 9 + Embassy 9" },
        { lvl: 11, sec: 32400,  meat: 0.72,  wood: 0.72,  coal: 0.11,  iron: 0,    prereq: "Embassy 10 + Marksman Camp 10" },
        { lvl: 12, sec: 50400,  meat: 1.15,  wood: 1.15,  coal: 0.20,  iron: 0,    prereq: "Embassy 11 + Lancer Camp 11" },
        { lvl: 13, sec: 75600,  meat: 1.80,  wood: 1.80,  coal: 0.35,  iron: 0,    prereq: "Embassy 12 + Infantry Camp 12" },
        { lvl: 14, sec: 108000, meat: 2.70,  wood: 2.70,  coal: 0.55,  iron: 0,    prereq: "Embassy 13 + Sawmill 13" },
        { lvl: 15, sec: 151200, meat: 3.90,  wood: 3.90,  coal: 0.82,  iron: 0.12, prereq: "Embassy 14 + Command Center 14" },
        { lvl: 16, sec: 205200, meat: 5.50,  wood: 5.50,  coal: 1.20,  iron: 0.24, prereq: "Embassy 15 + Iron Mine 15" },
        { lvl: 17, sec: 273600, meat: 7.60,  wood: 7.60,  coal: 1.70,  iron: 0.40, prereq: "Embassy 16 + Marksman Camp 16" },
        { lvl: 18, sec: 360000, meat: 10.2,  wood: 10.2,  coal: 2.30,  iron: 0.62, prereq: "Embassy 17 + Lancer Camp 17" },
        { lvl: 19, sec: 468000, meat: 13.5,  wood: 13.5,  coal: 3.10,  iron: 0.90, prereq: "Embassy 18 + Infantry Camp 18" },
        { lvl: 20, sec: 604800, meat: 17.6,  wood: 17.6,  coal: 4.10,  iron: 1.28, prereq: "Embassy 19 + Research Center 19" },
        { lvl: 21, sec: 777600, meat: 22.8,  wood: 22.8,  coal: 5.30,  iron: 1.75, prereq: "Embassy 20 + Marksman Camp 20" },
        { lvl: 22, sec: 993600, meat: 29.2,  wood: 29.2,  coal: 6.80,  iron: 2.35, prereq: "Embassy 21 + Lancer Camp 21" },
        { lvl: 23, sec: 1252800,meat: 37.0,  wood: 37.0,  coal: 8.60,  iron: 3.10, prereq: "Embassy 22 + Infantry Camp 22" },
        { lvl: 24, sec: 1566000,meat: 46.5,  wood: 46.5,  coal: 10.8,  iron: 4.05, prereq: "Embassy 23 + Command Center 23" },
        { lvl: 25, sec: 1944000,meat: 58.0,  wood: 58.0,  coal: 13.5,  iron: 5.25, prereq: "Embassy 24 + Marksman Camp 24" },
        { lvl: 26, sec: 2419200,meat: 72.0,  wood: 72.0,  coal: 16.8,  iron: 6.75, prereq: "Embassy 25 + Lancer Camp 25" },
        { lvl: 27, sec: 3002400,meat: 89.0,  wood: 89.0,  coal: 20.8,  iron: 8.60, prereq: "Embassy 26 + Infantry Camp 26" },
        { lvl: 28, sec: 3715200,meat: 110.0, wood: 110.0, coal: 25.6,  iron: 10.9, prereq: "Embassy 27 + Command Center 27" },
        { lvl: 29, sec: 4579200,meat: 135.0, wood: 135.0, coal: 31.5,  iron: 13.8, prereq: "Embassy 28 + Marksman Camp 28" },
        { lvl: 30, sec: 5616000,meat: 165.0, wood: 165.0, coal: 38.5,  iron: 17.5, prereq: "Embassy 29 + Troop Camp 29 ➔ UNLOCKS FIRE CRYSTALS" }
      ]
    };
const buildingCurves = {
      furnace: [
        { fc: 132, ref: 0, meat: 13.4, wood: 13.4, coal: 2.6, iron: 0.7 },
        { fc: 158, ref: 0, meat: 14.4, wood: 14.4, coal: 2.8, iron: 0.72 },
        { fc: 238, ref: 0, meat: 15.8, wood: 15.8, coal: 3.1, iron: 0.78 },
        { fc: 280, ref: 0, meat: 16.4, wood: 16.4, coal: 3.3, iron: 0.82 },
        { fc: 335, ref: 0, meat: 16.8, wood: 16.8, coal: 3.4, iron: 0.84 },
        { fc: 180, ref: 12, meat: 19.2, wood: 19.2, coal: 3.8, iron: 0.96 },
        { fc: 216, ref: 18, meat: 20.0, wood: 20.0, coal: 4.0, iron: 1.0 },
        { fc: 216, ref: 24, meat: 26.0, wood: 26.0, coal: 5.2, iron: 1.3 },
        { fc: 252, ref: 36, meat: 29.0, wood: 29.0, coal: 5.8, iron: 1.45 },
        { fc: 315, ref: 84, meat: 33.0, wood: 33.0, coal: 6.6, iron: 1.65 }
      ],
      waracademy: [
        { fc: 71,  ref: 0, meat: 36.0, wood: 36.0, coal: 7.2, iron: 1.8 },
        { fc: 107, ref: 0, meat: 39.0, wood: 39.0, coal: 7.9, iron: 1.9 },
        { fc: 126, ref: 0, meat: 41.0, wood: 41.0, coal: 8.2, iron: 2.0 },
        { fc: 150, ref: 0, meat: 42.0, wood: 42.0, coal: 8.2, iron: 2.1 },
        { fc: 90,  ref: 4, meat: 48.0, wood: 48.0, coal: 9.6, iron: 2.4 },
        { fc: 108, ref: 6, meat: 54.0, wood: 54.0, coal: 10.0, iron: 2.7 },
        { fc: 125, ref: 12, meat: 58.0, wood: 58.0, coal: 11.2, iron: 2.9 },
        { fc: 145, ref: 18, meat: 64.0, wood: 64.0, coal: 12.8, iron: 3.2 },
        { fc: 170, ref: 28, meat: 72.0, wood: 72.0, coal: 14.4, iron: 3.6 },
        { fc: 210, ref: 65, meat: 82.0, wood: 82.0, coal: 16.4, iron: 4.1 }
      ],
      embassy: [
        { fc: 33, ref: 0, meat: 14.0, wood: 14.0, coal: 2.8, iron: 0.7 },
        { fc: 39, ref: 0, meat: 15.0, wood: 15.0, coal: 3.0, iron: 0.75 },
        { fc: 59, ref: 0, meat: 16.0, wood: 16.0, coal: 3.2, iron: 0.8 },
        { fc: 70, ref: 0, meat: 16.0, wood: 16.0, coal: 3.2, iron: 0.8 },
        { fc: 83, ref: 0, meat: 17.0, wood: 17.0, coal: 3.4, iron: 0.85 },
        { fc: 45, ref: 2.6, meat: 19.0, wood: 19.0, coal: 3.8, iron: 0.96 },
        { fc: 54, ref: 4.0, meat: 20.0, wood: 20.0, coal: 4.0, iron: 1.0 },
        { fc: 54, ref: 6.0, meat: 26.0, wood: 26.0, coal: 5.3, iron: 1.3 },
        { fc: 63, ref: 8.6, meat: 29.0, wood: 29.0, coal: 5.8, iron: 1.4 },
        { fc: 78, ref: 20.6, meat: 33.0, wood: 33.0, coal: 6.7, iron: 1.6 }
      ],
      camp: [
        { fc: 66, ref: 0, meat: 13.0, wood: 13.0, coal: 2.6, iron: 0.65 },
        { fc: 79, ref: 0, meat: 14.0, wood: 14.0, coal: 2.8, iron: 0.7 },
        { fc: 119, ref: 0, meat: 15.0, wood: 15.0, coal: 3.0, iron: 0.75 },
        { fc: 140, ref: 0, meat: 16.0, wood: 16.0, coal: 3.2, iron: 0.8 },
        { fc: 168, ref: 0, meat: 17.0, wood: 17.0, coal: 3.4, iron: 0.85 },
        { fc: 90, ref: 6.0, meat: 19.0, wood: 19.0, coal: 3.8, iron: 0.95 },
        { fc: 108, ref: 9.0, meat: 20.0, wood: 20.0, coal: 4.0, iron: 1.0 },
        { fc: 108, ref: 12.0, meat: 25.0, wood: 25.0, coal: 5.0, iron: 1.25 },
        { fc: 126, ref: 18.0, meat: 28.0, wood: 28.0, coal: 5.6, iron: 1.4 },
        { fc: 158, ref: 42.0, meat: 32.0, wood: 32.0, coal: 6.4, iron: 1.6 }
      ],
      command: [
        { fc: 26, ref: 0, meat: 10.0, wood: 10.0, coal: 2.0, iron: 0.5 },
        { fc: 31, ref: 0, meat: 11.0, wood: 11.0, coal: 2.2, iron: 0.55 },
        { fc: 47, ref: 0, meat: 12.0, wood: 12.0, coal: 2.4, iron: 0.6 },
        { fc: 56, ref: 0, meat: 13.0, wood: 13.0, coal: 2.6, iron: 0.65 },
        { fc: 67, ref: 0, meat: 14.0, wood: 14.0, coal: 2.8, iron: 0.7 },
        { fc: 36, ref: 2.4, meat: 15.0, wood: 15.0, coal: 3.0, iron: 0.75 },
        { fc: 43, ref: 3.6, meat: 16.0, wood: 16.0, coal: 3.2, iron: 0.8 },
        { fc: 43, ref: 4.8, meat: 20.0, wood: 20.0, coal: 4.0, iron: 1.0 },
        { fc: 50, ref: 7.2, meat: 22.0, wood: 22.0, coal: 4.4, iron: 1.1 },
        { fc: 63, ref: 16.8, meat: 25.0, wood: 25.0, coal: 5.0, iron: 1.25 }
      ],
      infirmary: [
        { fc: 26, ref: 0, meat: 10.0, wood: 10.0, coal: 2.0, iron: 0.5 },
        { fc: 31, ref: 0, meat: 11.0, wood: 11.0, coal: 2.2, iron: 0.55 },
        { fc: 47, ref: 0, meat: 12.0, wood: 12.0, coal: 2.4, iron: 0.6 },
        { fc: 56, ref: 0, meat: 13.0, wood: 13.0, coal: 2.6, iron: 0.65 },
        { fc: 67, ref: 0, meat: 14.0, wood: 14.0, coal: 2.8, iron: 0.7 },
        { fc: 36, ref: 2.4, meat: 15.0, wood: 15.0, coal: 3.0, iron: 0.75 },
        { fc: 43, ref: 3.6, meat: 16.0, wood: 16.0, coal: 3.2, iron: 0.8 },
        { fc: 43, ref: 4.8, meat: 20.0, wood: 20.0, coal: 4.0, iron: 1.0 },
        { fc: 50, ref: 7.2, meat: 22.0, wood: 22.0, coal: 4.4, iron: 1.1 },
        { fc: 63, ref: 16.8, meat: 25.0, wood: 25.0, coal: 5.0, iron: 1.25 }
      ]
    };
const furnacePrereqs = {
      1: "Embassy Level 30 + Research Center Level 30",
      2: "Embassy FC 1 + Lancer Camp FC 1",
      3: "Embassy FC 2 + Infantry Camp FC 2",
      4: "Embassy FC 3 + Marksman Camp FC 3",
      5: "Embassy FC 4 + Lancer Camp FC 4",
      6: "Embassy FC 5 + Infantry Camp FC 5",
      7: "Embassy FC 6 + Marksman Camp FC 6",
      8: "Embassy FC 7 + Lancer Camp FC 7",
      9: "Embassy FC 8 + Infantry Camp FC 8",
      10: "Embassy FC 9 + Marksman Camp FC 9"
    };
const empTiers = [
      { id: 1, name: "Mythic Lv 100 ➔ Red Ascension", mithril: 0,  sacrifice: 2,  note: "Ascend to Red / Legendary Tier (Unlocks Mithril Era)" },
      { id: 2, name: "Level 19 ➔ 20 Checkpoint",      mithril: 10, sacrifice: 3,  note: "+20% Attack / Defense Expedition Buff" },
      { id: 3, name: "Level 39 ➔ 40 Checkpoint",      mithril: 20, sacrifice: 5,  note: "+7.5% Hero Health / Lethality Exploration Buff" },
      { id: 4, name: "Level 59 ➔ 60 Checkpoint",      mithril: 30, sacrifice: 5,  note: "+15% Combat Health & Defense Buff" },
      { id: 5, name: "Level 79 ➔ 80 Checkpoint",      mithril: 40, sacrifice: 10, note: "+35% Lethality & Expedition Command Power" },
      { id: 6, name: "Level 99 ➔ 100 Final Cap",      mithril: 50, sacrifice: 10, note: "👑 +50% Attack / Defense Max Empowerment" }
    ];
const masteryData = [
      { lvl: 1,  stones: 10,  sacrifice: 0, perk: "+1.5% Base Stat Boost" },
      { lvl: 2,  stones: 20,  sacrifice: 0, perk: "Stat Expansion Tier 2" },
      { lvl: 3,  stones: 30,  sacrifice: 0, perk: "Stat Expansion Tier 3" },
      { lvl: 4,  stones: 40,  sacrifice: 0, perk: "Stat Expansion Tier 4" },
      { lvl: 5,  stones: 50,  sacrifice: 0, perk: "Major Command Boost" },
      { lvl: 6,  stones: 60,  sacrifice: 0, perk: "Combat Scaling Tier 6" },
      { lvl: 7,  stones: 70,  sacrifice: 0, perk: "Combat Scaling Tier 7" },
      { lvl: 8,  stones: 80,  sacrifice: 0, perk: "Combat Scaling Tier 8" },
      { lvl: 9,  stones: 90,  sacrifice: 0, perk: "Combat Scaling Tier 9" },
      { lvl: 10, stones: 100, sacrifice: 0, perk: "⭐ Unlocks Red Ascension Prerequisite" },
      // INCREMENTAL SACRIFICE ERA (LEVELS 11 TO 20)
      { lvl: 11, stones: 110, sacrifice: 1, perk: "⚡ Mastery Lv 11: Requires 1x Mythic Gear" },
      { lvl: 12, stones: 120, sacrifice: 2, perk: "⚡ Mastery Lv 12: Requires 2x Mythic Gear" },
      { lvl: 13, stones: 130, sacrifice: 3, perk: "⚡ Mastery Lv 13: Requires 3x Mythic Gear" },
      { lvl: 14, stones: 140, sacrifice: 4, perk: "⚡ Mastery Lv 14: Requires 4x Mythic Gear" },
      { lvl: 15, stones: 150, sacrifice: 5, perk: "⚡ Mastery Lv 15: Requires 5x Mythic Gear" },
      { lvl: 16, stones: 160, sacrifice: 6, perk: "⚡ Mastery Lv 16: Requires 6x Mythic Gear" },
      { lvl: 17, stones: 170, sacrifice: 7, perk: "⚡ Mastery Lv 17: Requires 7x Mythic Gear" },
      { lvl: 18, stones: 180, sacrifice: 8, perk: "⚡ Mastery Lv 18: Requires 8x Mythic Gear" },
      { lvl: 19, stones: 190, sacrifice: 9, perk: "⚡ Mastery Lv 19: Requires 9x Mythic Gear" },
      { lvl: 20, stones: 200, sacrifice: 10, perk: "👑 Mastery Lv 20 Cap: Requires 10x Mythic Gear" }
    ];
const widgetLevels = [
      { lvl: 1,  cost: 5,   note: "Unlocks Exclusive Weapon Skill" },
      { lvl: 2,  cost: 5,   note: "Base Stat Boost" },
      { lvl: 3,  cost: 10,  note: "Stat Scaling" },
      { lvl: 4,  cost: 10,  note: "Stat Scaling" },
      { lvl: 5,  cost: 15,  note: "Skill Tier 1 Enhancement" },
      { lvl: 6,  cost: 15,  note: "Attack Buff" },
      { lvl: 7,  cost: 20,  note: "Defense Buff" },
      { lvl: 8,  cost: 20,  note: "Health Buff" },
      { lvl: 9,  cost: 25,  note: "Lethality Buff" },
      { lvl: 10, cost: 35,  note: "⭐ Core Skill Upgrade Milestone" },
      { lvl: 11, cost: 40,  note: "Advanced Combat Scaling" },
      { lvl: 12, cost: 45,  note: "Advanced Combat Scaling" },
      { lvl: 13, cost: 50,  note: "Advanced Combat Scaling" },
      { lvl: 14, cost: 55,  note: "Advanced Combat Scaling" },
      { lvl: 15, cost: 65,  note: "Major Combat Amplification" },
      { lvl: 16, cost: 70,  note: "High-Tier Stat Scaling" },
      { lvl: 17, cost: 80,  note: "High-Tier Stat Scaling" },
      { lvl: 18, cost: 90,  note: "High-Tier Stat Scaling" },
      { lvl: 19, cost: 100, note: "High-Tier Stat Scaling" },
      { lvl: 20, cost: 120, note: "⭐ Second Core Skill Upgrade" },
      { lvl: 21, cost: 130, note: "Whale Tier Combat Buff" },
      { lvl: 22, cost: 140, note: "Whale Tier Combat Buff" },
      { lvl: 23, cost: 150, note: "Whale Tier Combat Buff" },
      { lvl: 24, cost: 160, note: "Whale Tier Combat Buff" },
      { lvl: 25, cost: 180, note: "Sovereign Combat Buff" },
      { lvl: 26, cost: 190, note: "Sovereign Combat Buff" },
      { lvl: 27, cost: 210, note: "Apex Level Refinement" },
      { lvl: 28, cost: 230, note: "Apex Level Refinement" },
      { lvl: 29, cost: 250, note: "Penultimate Milestone" },
      { lvl: 30, cost: 300, note: "👑 Absolute Widget Cap" }
    ];
const petsRoster = [
      { id: "hyena",        name: "Cave Hyena",            rarity: "Rare", max: 100 },
      { id: "wolf",         name: "Arctic Wolf",           rarity: "Rare", max: 100 },
      { id: "muskox",       name: "Musk Ox",               rarity: "Rare", max: 100 },
      { id: "tapir",        name: "Giant Tapir",           rarity: "Rare", max: 100 },
      { id: "titanroc",     name: "Titan Roc",             rarity: "Epic", max: 100 },
      { id: "elk",          name: "Giant Elk",             rarity: "Epic", max: 100 },
      { id: "leopard",      name: "Snow Leopard",          rarity: "Epic", max: 100 },
      { id: "cavelion",     name: "Cave Lion",             rarity: "SSR",  max: 100 },
      { id: "snowape",      name: "Snow Ape",              rarity: "SSR",  max: 100 },
      { id: "ironrhino",    name: "Iron Rhino",            rarity: "SSR",  max: 100 },
      { id: "tiger",        name: "Saber-tooth Tiger",     rarity: "SSR",  max: 100 },
      { id: "frostgorilla", name: "Frost Gorilla",         rarity: "SSR",  max: 100 },
      { id: "mammoth",      name: "Mammoth",               rarity: "SSR",  max: 100 },
      { id: "chameleon",    name: "Frostscale Chameleon",  rarity: "SSR",  max: 100 },
      { id: "shelldragon",  name: "Shelldragon",           rarity: "UR",   max: 150, isUR: true }
    ];
const standardTiers = [
      { from: 1,  to: 10,  food: 45000,    potions: 20,  marks: 10,  note: "Unlocks Skill Tier 1" },
      { from: 10, to: 20,  food: 110000,   potions: 40,  marks: 20,  note: "Stat Node Expansion" },
      { from: 20, to: 30,  food: 230000,   potions: 70,  marks: 35,  note: "Unlocks Skill Tier 2" },
      { from: 30, to: 40,  food: 440000,   potions: 110, marks: 55,  note: "Stat Node Expansion" },
      { from: 40, to: 50,  food: 780000,   potions: 160, marks: 80,  note: "Unlocks Skill Tier 3" },
      { from: 50, to: 60,  food: 1280000,  potions: 230, marks: 115, note: "Mid-Game Combat Peak" },
      { from: 60, to: 70,  food: 1980000,  potions: 320, marks: 160, note: "Unlocks Skill Tier 4" },
      { from: 70, to: 80,  food: 2950000,  potions: 430, marks: 215, note: "High-Tier Stat Scaling" },
      { from: 80, to: 90,  food: 4300000,  potions: 570, marks: 285, note: "Unlocks Skill Tier 5 (Max Skill)" },
      { from: 90, to: 100, food: 6200000,  potions: 750, marks: 375, note: "Level 100 Standard Cap" }
    ];
const urExtendedTiers = [
      { from: 100, to: 110, food: 8500000,   potions: 980,  marks: 490,  note: "UR Mastery Tier 1" },
      { from: 110, to: 120, food: 11500000,  potions: 1250, marks: 620,  note: "UR Defense & HP Scaling" },
      { from: 120, to: 130, food: 15200000,  potions: 1580, marks: 780,  note: "Legendary Refinement Cap" },
      { from: 130, to: 140, food: 19800000,  potions: 1980, marks: 980,  note: "Apex Lethality & Health" },
      { from: 140, to: 150, food: 25500000,  potions: 2450, marks: 1220, note: "👑 Sovereign Shelldragon Cap" }
    ];
const troopTiers = [
      { tier: 1,  name: "Tier 1",            baseSec: 10,  meat: 40,   wood: 40,   iron: 0,   pts: 1 },
      { tier: 2,  name: "Tier 2",            baseSec: 16,  meat: 65,   wood: 65,   iron: 0,   pts: 2 },
      { tier: 3,  name: "Tier 3",            baseSec: 24,  meat: 100,  wood: 100,  iron: 10,   pts: 3 },
      { tier: 4,  name: "Tier 4",            baseSec: 34,  meat: 150,  wood: 150,  iron: 20,   pts: 5 },
      { tier: 5,  name: "Tier 5",            baseSec: 46,  meat: 220,  wood: 220,  iron: 40,   pts: 8 },
      { tier: 6,  name: "Tier 6",            baseSec: 60,  meat: 320,  wood: 320,  iron: 70,   pts: 12 },
      { tier: 7,  name: "Tier 7",            baseSec: 76,  meat: 460,  wood: 460,  iron: 120,  pts: 18 },
      { tier: 8,  name: "Tier 8",            baseSec: 96,  meat: 650,  wood: 650,  iron: 180,  pts: 26 },
      { tier: 9,  name: "Tier 9",            baseSec: 120, meat: 900,  wood: 900,  iron: 270,  pts: 37 },
      { tier: 10, name: "Tier 10",          baseSec: 150, meat: 1250, wood: 1250, iron: 400,  pts: 52 },
      { tier: 11, name: "T11 (Helios FC)",  baseSec: 180, meat: 1700, wood: 1700, iron: 580,  pts: 72 },
      { tier: 12, name: "T12 (Exalted)",    baseSec: 215, meat: 2250, wood: 2250, iron: 820,  pts: 100 }
    ];
window.UVV6DATA={chiefGearTiers,charmData,expertsRoster,baseMilestones,cityCurves,buildingCurves,furnacePrereqs,empTiers,masteryData,widgetLevels,petsRoster,standardTiers,urExtendedTiers,troopTiers};