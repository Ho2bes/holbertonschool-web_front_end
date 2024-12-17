# Responsive Design Tasks

This project guides you through a series of tasks to improve and make a web page fully responsive, including fixing layouts, integrating responsive images, and creating a mobile-friendly navigation without JavaScript.

## Project Structure

You will work with multiple HTML and CSS files that incrementally build upon each other. For each task, use the previous files as your starting point and apply the required changes.

## Tasks Overview

### 0. Fix the Hero Banner
- Use the provided starter HTML and CSS.
- In `01-styles.css`:
  - Within `.hero-homepage`:
    - `background-position: 65% 8rem;`
    - `background-size: 90rem auto;`
  - Within `section.section-hero .section-inner`:
    - `min-height: 35vh;`

### 1. Make the Container Flexible
- In `02-styles.css`:
  - Change `.container` width to `max-width`.

### 2. Fix Layout Issues (Media Queries)
- In `02-1-styles.css`:
  - Under `/* Helpers */`:
    - For all images in `main`: `width: 100%; height: auto;`
  - Under `/* Section Latest news */` at `(max-width: 767px)`:
    - `.section-latest-news .row { flex-direction: column; }`
  - Under `/* Grid */` at `(max-width: 767px)`:
    - Redefine `--section-padding: 5rem 1.5rem;`
    - Redefine `--section-body-padding: 2rem 0 0;`
    - `.row, ul.row { flex-direction: column; margin: 0; }`
    - `.col-* { margin: 0 0 3rem 0; }`
    - `.col-1-3, .col-1-2 { width: 100%; }`
  - Under `/* Navbar */` at `(max-width: 767px)`:
    - `.navbar-menu { display: none; }`

### 3. Generate Responsive Images
- Use the Responsive Breakpoints tool.
- For each image (`pic-about-01.jpg`, `pic-article-01.jpg`, `pic-article-02.jpg`, `pic-article-03.jpg`), generate responsive versions and `srcset`.
- Replace existing `<img>` tags with the generated code.
- Download the generated images and place them in the `images/` directory.

### 4. Create Mobile Icon and Hide the Menu
- In `04-index.html`:
  - Before `<nav class="navbar-menu">`:
    - Add `<input class="menu-btn" type="checkbox" id="menu-btn" />`
    - Add a corresponding label: `<label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>`
- In `04-styles.css` under `(max-width: 767px)`:
  - `:root { --nav-item-margin: 0; }`
  - `.navbar-menu { flex: 1; }`
  - `header nav { flex-direction: column; overflow: hidden; max-height: 0; transition: max-height 0.2s ease-out; }`

### 5. Create the Hamburger Icon
- In `05-styles.css`:
  - Style `.menu-icon` and `.navicon` to form a hamburger icon using CSS, including `::before` and `::after` pseudo-elements.

### 6. Add Behavior Based on `menu-btn` State
- In `06-styles.css`:
  - Hide `.menu-btn` by default.
  - When `.menu-btn` is checked, `.navbar-menu` is displayed and `nav` expands.
  - Adjust hero section styles for mobile view.
  - When checked, transform the `navicon` into an “X” by rotating `::before` and `::after`.
  - Add media queries to reposition and style header elements for various screen sizes.

### 7. Make Font Sizes Responsive
- In `07-styles.css`:
  - Use media queries to adjust `html { font-size: ... }` so that all REM-based units scale accordingly:
    - `(max-width: 480px)` -> `font-size: 57%;`
    - `(min-width: 481px) and (max-width: 767px)` -> `font-size: 60%;`

### 8. Improve the "Works" Section
- In `08-styles.css` at `(max-width: 767px)`:
  - `.card-work .card-inner { --text-color: var(--color-white); position: relative; }`
  - `.card-work .card-title { opacity: 1; }`
  - `.card-work .card-title a { padding: 2rem 1rem 0 1rem; }`

### 9. Improve the "Footer" Section
- In `09-styles.css` at `(max-width: 767px)`:
  - `:root { --footer-padding: 5rem 2rem 1rem; }`
  - `footer .social.nav, footer .footer-nav { text-align: center; }`
  - `footer .social.nav li + li, footer .footer-nav li + li { padding-left: 2rem; }`

### 10. Fix the Top Header Background on Article Page
- In `10-index.html`:
  - Add `class="article-page"` to the `<body>`.
- In `10-styles.css`:
  - `.article-page .section-hero { margin-top: -8.5rem; padding-top: 5rem; }`

## Getting Started
1. Use the provided starter code for each step.
2. Follow each instruction carefully and update your HTML/CSS files.
3. Test your page at different viewport sizes to ensure responsiveness.

## License
This project is for educational purposes, provided under the [Holberton School guidelines](https://www.holbertonschool.com/).

