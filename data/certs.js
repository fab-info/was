// ============================================================
//  W.A.S. REGISTRY – DATEN
//  Neue Karte = neuen Eintrag in "certs" anlegen + Bilder in /img legen.
//  Der QR-Code auf dem Label zeigt auf  https://fab-info.github.io/was/?c=<id oder alias>
//  "listed:false" = Karte nur per QR/Cert-Nummer auffindbar, nicht in der Galerie.
// ============================================================
window.WAS = {
  brand: {
    short: "W.A.S.",
    name: "Wonders Authentication Services",   // allgemein; pro Set überschreibbar
    tagline: "Every card is a one of one.",
    est: "EST. 2026"
  },
  sets: {
    "newlyweds-2026": {
      name: "2026 Newlyweds Series",
      issuer: "Wedding Authentication Services",
      occasion: "Wedding · Kiki & Steffen",
      place: "Borgo degli Aranci, Tuscany",
      date: "September 2026",
      blurb: "A two-card set celebrating the rookie season of Kiki & Steffen: a Dolce Vita base card and a Sparkling Night 1/1 refractor. Printed, laminated and slabbed by hand."
    },
    "wedding-alex-rieke-2026": {
      name: "2026 Honeymoon Quest Set",
      issuer: "Wedding Authentication Services",
      occasion: "Wedding · Alex & Rieke",
      date: "May 2026",
      blurb: "Two holo-foil fantasy cards for Alex & Rieke's next great adventure: a sorcery that sends them on a honeymoon between worlds, and the legendary couple itself. Given with the words: may your honeymoon be more legendary than any quest."
    },
    "wedding-eva-markus-2025": {
      name: "2025 Wedding Commander Set",
      issuer: "Wedding Authentication Services",
      occasion: "Wedding · Eva & Markus",
      date: "6 September 2025",
      blurb: "Four custom fantasy cards for Eva & Markus, written in pure Bavarian: a lawyer who can't be targeted, a solar-powered electrician with first strike, and a sorcery that puts them both into play. Together."
    }
  },
  certs: [
    {
      id: "17072026-01", alias: ["01"], set: "newlyweds-2026", listed: true,
      no: "#1", title: "Dolce Vita", player: "Kiki & Steffen", team: "Tuscany Sparklers",
      variety: "Rookie · Base", grade: 10, gradeLabel: "GEM MINT", pop: 1, popHigher: 0,
      sub: { Centering: 10, Corners: 10, Edges: 10, Sparkle: 10 },
      front: "img/card1_front.jpg", back: "img/card1_back.jpg", finish: "gold",
      facts: [["Signed","17.07.2026"],["Ceremony","24.09.2026"],["Venue","Borgo degli Aranci, Tuscany"],["Surname","Under review"],["Contract","Lifetime · no trade clause"]],
      notes: "Warm Tuscan tones, full-body action pose, bouquet intact. The sun literally rises behind this duo. Chemistry off the charts: an easy 10."
    },
    {
      id: "17072026-02", alias: ["02"], set: "newlyweds-2026", listed: true,
      no: "#2", title: "Sparkling Night", player: "Kiki & Steffen", team: "Tuscany Sparklers",
      variety: "Rookie · Refractor 1/1", grade: 10, gradeLabel: "GEM MINT", pop: 1, popHigher: 0,
      sub: { Centering: 10, Corners: 10, Edges: 10, Sparkle: 10 },
      front: "img/card2_front.jpg", back: "img/card2_back.jpg", finish: "silver",
      facts: [["Show","25.09.2026"],["Theme","This Night is Sparkling"],["Eras attended","All of them"],["Surname","Under review"],["Contract","Lifetime · no trade clause"]],
      notes: "Silver refractor, floodlights on, glitter level at maximum. Swiftie by heart, raver by night. The only copy in existence, just like them."
    },
    {
      id: "06092025-01", alias: [], set: "wedding-eva-markus-2025", listed: true,
      no: "#1", title: "Zur Hochzeit", player: "Eva & Markus",
      variety: "Enchantment · Mythic", grade: 10, gradeLabel: "GEM MINT", pop: 1, popHigher: 0,
      sub: { Centering: 10, Corners: 10, Edges: 10, Magic: 10 },
      front: "img/em2025_01.jpg", finish: "gold",
      facts: [["Type","Enchantment"],["Rarity","Mythic"],["Date","06.09.2025"],["Language","German"]],
      notes: "The opening card of the set. Love as a card game: a little magic, a lot of luck, and two players who know exactly when to go all-in together. Permanent effect, no expiry."
    },
    {
      id: "06092025-02", alias: [], set: "wedding-eva-markus-2025", listed: true,
      no: "#2", title: "Markus, da Sunnakraft-Moasta", player: "Markus",
      variety: "Legendary Creature · Elegdronika Hejd", grade: 10, gradeLabel: "GEM MINT", pop: 1, popHigher: 0,
      sub: { Centering: 10, Corners: 10, Edges: 10, Voltage: 10 },
      front: "img/em2025_02.jpg", finish: "",
      facts: [["Type","Legendary Creature"],["Power / Toughness","3 / 2"],["Keywords","Lifelink, First Strike"],["Language","Bavarian"]],
      notes: "Pulls power straight from the sun and makes sure the electrons always run in the right direction. Enters the battlefield with a bang. Handle with insulated gloves."
    },
    {
      id: "06092025-03", alias: [], set: "wedding-eva-markus-2025", listed: true,
      no: "#3", title: "Eva, d'Schdanzlmoastarin", player: "Eva",
      variety: "Legendary Creature · Anwoitin Politikerin", grade: 10, gradeLabel: "GEM MINT", pop: 1, popHigher: 0,
      sub: { Centering: 10, Corners: 10, Edges: 10, Justice: 10 },
      front: "img/em2025_03.jpg", finish: "gold",
      facts: [["Type","Legendary Creature"],["Power / Toughness","4 / 5"],["Keywords","Hexproof"],["Language","Bavarian"]],
      notes: "Hexproof for a reason: nobody out-argues her. Grants protection to her allies and extra life to whoever she chooses. \"Wer ko, der ko.\""
    },
    {
      id: "06092025-04", alias: [], set: "wedding-eva-markus-2025", listed: true,
      no: "#4", title: "Fireinond, Miteinond", player: "Eva & Markus",
      variety: "Sorcery · Mythic", grade: 10, gradeLabel: "GEM MINT", pop: 1, popHigher: 0,
      sub: { Centering: 10, Corners: 10, Edges: 10, Magic: 10 },
      front: "img/em2025_04.jpg", finish: "gold",
      facts: [["Type","Sorcery"],["Rarity","Mythic"],["Effect","Puts the lawyer and the electrician into play, together"],["Language","Bavarian"]],
      notes: "The combo piece of the set. Finds the Anwoitin and the Elegdronika and brings them onto the battlefield side by side. Their luck multiplies, and so does their power."
    },
    {
      id: "052026-01", alias: [], set: "wedding-alex-rieke-2026", listed: true,
      no: "#1", title: "Flitterwochen zwischen Welten", player: "Alex & Rieke",
      variety: "Legendary Sorcery · Holo Foil", grade: 10, gradeLabel: "GEM MINT", pop: 1, popHigher: 0,
      sub: { Centering: 10, Corners: 10, Edges: 10, Adventure: 10 },
      front: "img/ar2026_01.jpg", finish: "gold",
      facts: [["Type","Legendary Sorcery"],["Mana cost","2 + White + Blue"],["Creates","Alex (3/3 Wizard) & Rieke (3/3 Warrior)"],["Keywords","Haste, Weltenreise"],["Language","German"]],
      notes: "A honeymoon between worlds: Alex opens the portals, Rieke clears the path with a sword. Every attack exiles the top card of the library and plays it for free. And the PlayStation stays on, because Rieke simply plays along with her husband."
    },
    {
      id: "052026-02", alias: [], set: "wedding-alex-rieke-2026", listed: true,
      no: "#2", title: "Schicksalsverbundenes Paar", player: "Alex & Rieke",
      variety: "Legendary Creature · Holo Foil", grade: 10, gradeLabel: "GEM MINT", pop: 1, popHigher: 0,
      sub: { Centering: 10, Corners: 10, Edges: 10, Destiny: 10 },
      front: "img/ar2026_02.jpg", finish: "gold",
      facts: [["Type","Legendary Creature · Alex und Rieke"],["Power / Toughness","6 / 6"],["Keywords","Hexproof, Lifelink, Indestructible"],["Win condition","Double your starting life total"],["Language","German"]],
      notes: "Bound by fate and practically unbeatable: hexproof, lifelink and indestructible, with an alternate win condition built in. Their only known weakness is the Latin quiz on Friday."
    }
  ]
};
