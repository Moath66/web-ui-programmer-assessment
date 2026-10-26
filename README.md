# Web UI Programmer Assessment

A web UI programmer assessment project built with HTML, CSS, and Vanilla JavaScript.

## Project Parts

### Part 1 — Friend Search

A simple friend search application demonstrating asynchronous JavaScript, Promises, array methods, input validation, and automated Jasmine tests.

#### Features

- Search friends by name
- Case-insensitive search
- Partial name matching
- Handles empty search input
- Handles invalid input
- Displays a message when no friends are found
- Uses Promises and `async/await`
- Includes automated Jasmine tests

#### Technologies

- HTML
- CSS
- JavaScript ES6+
- Jasmine
- Node.js

### Part 2 — Responsive Web Layout

A modern, responsive technology store interface demonstrating semantic HTML, advanced CSS, Flexbox, responsive design, and basic JavaScript interactions.

#### Features

- Responsive navigation bar
- Mobile navigation menu
- Flexbox-based layouts
- Responsive product grid
- Product search and filtering
- Category filtering
- Empty search result handling
- Semantic HTML
- Accessibility attributes
- Responsive layouts for mobile, tablet, and desktop
- Reduced-motion support

#### Technologies

- HTML5
- CSS3
- JavaScript ES6+

## Running Part 1

Open the Part 1 HTML file using a local development server such as Live Server.

### Running Tests

From the project root:

```bash
npm install
npm test
```

Expected result:

```text
7 specs, 0 failures
```

## Running Part 2

Open:

```text
part2/index.html
```

using a local development server such as Live Server.

## Project Structure

```text
web-ui-programmer-assessment/
├── part1/
│   ├── index.html
│   ├── src/
│   │   └── friendSearch.js
│   └── spec/
│       └── friendSearch.spec.js
│
├── part2/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── package.json
├── package-lock.json
└── README.md
```

## Development Notes

Part 1 focuses on asynchronous JavaScript, clean data handling, filtering, validation, and automated testing.

Part 2 focuses on semantic HTML, Flexbox, responsive CSS, accessibility, and maintainable front-end structure.