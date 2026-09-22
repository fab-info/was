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
    }
  ]
};
