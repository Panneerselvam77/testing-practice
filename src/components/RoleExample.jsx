import React from "react";

export default function RoleExample() {
  return (
    <div>
      <a href="/">link</a>
      <button>Button</button>
      <footer>Contentinfo</footer>
      <h1>heading</h1>
      <header>banner</header>
      <img alt="image-desc" /> img
      <input type="checkbox" /> checkbox
      <input type="number" /> number
      <input type="radio" /> radio
      <input type="text" /> text
      <li>listitem</li>
      <ul>listgroup</ul>
    </div>
  );
}

export function AccessibleName() {
  return (
    <div>
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
}

export function MoreNames() {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="search">Search</label>
      <input type="text" id="search" />
    </div>
  );
}
