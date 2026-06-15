const actions = [
  { user: "A", action: "login" },
  { user: "B", action: "logout" },
  { user: "C", action: "login" }
];

console.log(actions.filter(a => a.action === "login").length);