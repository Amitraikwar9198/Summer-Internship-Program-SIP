const repos = [
  { repo: "A", stars: 100 },
  { repo: "B", stars: 200 }
];

console.log(repos.reduce((sum, r) => sum + r.stars, 0));