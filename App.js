const heading1 = React.createElement(
  "h1",
  {
    id: "head1",
    className: "headClass",
  },
  "Actionable Insights from ",
  React.createElement("i", null, "Pramod,"),
  " Welcome!"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "head2",
    className: "headClass2",
  },
  "This is from React CDN!"
);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.appendChild(heading)

console.log(heading1);
console.log(heading2);
console.log(root);

root.render(container);

console.log(root.render(container));