const reservations = [
{ numero: 101, client: "Nadia", destination: "Bali", montant: 1800,
statut: "Confirmée" },
{ numero: 102, client: "Karim", destination: "Rome", montant: 950,
statut: "En attente" },
{ numero: 103, client: "Leila", destination: "Tokyo", montant: 2500,
statut: "Confirmée" },
{ numero: 104, client: "Sami", destination: "Santorin", montant: 1200,
statut: "Annulée" },
{ numero: 105, client: "Amira", destination: "Djerba", montant: 500,
statut: "Confirmée" }
];

let conf= reservations.filter(res => res.statut=='Confirmée');
console.log(conf);
let noms=reservations.map(res => res.client);
console.log(noms);
let num =reservations.find(res => res.numero==103);
console.log(num);
let tot=conf.reduce((n,c) => n+c.montant,0);
console.log(tot);
let resCnf=reservations.every(res => res.statut=='Confirmée');
console.log(resCnf);