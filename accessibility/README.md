# Accessibility and Keyboard Navigation Improvements

This project is about improving a website’s accessibility, keyboard navigation, and structure, step by step. You will start from a given codebase and apply the following changes across multiple tasks. By the end, the site should be more accessible, properly structured with semantic tags, and fully navigable using a keyboard.

## Tasks Overview

### 0. Make the "Works" Card Focus Visible
- Update the `.card-work` components so that when focusing on a link (using TAB), the title and its dark overlay become visible, similar to when hovering with the mouse.
- Adjust the CSS:
  - Remove `opacity: 0` from `.card-work .card-title`.
  - Remove the hover-based selectors that manage visibility.
  - For `.card-work .card-title a`, set `opacity: 0` by default.
  - On `.card-work .card-title a:focus` and `.card-work:hover .card-title a`:
    - Set `opacity: 1`
    - `height: 100%`
    - `background-color: rgba(0, 0, 0, 0.7)`

### 1. Add Skip-Links
- Insert a skip-links navigation right after the opening `<body>` tag.
- Provide links to skip directly to the main navigation and main content sections.
- Assign unique IDs (`a11y-primary-nav`, `a11y-main-content`) to the navigation and main content for these skip-links.
- Update CSS to hide skip-links off-screen and reveal them on focus.

### 2. Ensure Sufficient Color Contrast
- Remove the inline body styles causing poor contrast.
- Check with a tool like Axe to confirm improved contrast.

### 3. Documents Must Have a `<title>` Element
- Add a descriptive `<title>` to the document, for example: `Homepage - A fake website`.

### 4. `<html>` Element Must Have a `lang` Attribute
- Add `lang="en"` (or the appropriate language code) to the `<html>` element.

### 5. Images Must Have Alternate Text
- For the site’s logo, add an `alt` attribute describing the logo.
- For decorative images, include an empty `alt=""`.

### 6. Form Elements Must Have Labels
- Add a `<label>` for form inputs with proper `for` and `id` attributes.
- Change input type and add appropriate attributes (`type="email"`, `required`, `aria-required="true"`, `autocomplete="email"`).
- Replace placeholder-only instructions with meaningful labels.

### 7. Links Must Have Discernible Text
- Add `aria-label` attributes to links that rely on icons, such as social media icons, ensuring that screen readers can announce their purpose.

### 8. Zooming and Scaling Must Not Be Disabled
- Remove `user-scalable=no` from the viewport meta tag to allow users to zoom.

### 9. Heading Levels Should Increase Logically
- Adjust heading levels to create a logical hierarchy.
- Replace inappropriate heading tags with the correct semantic level, or wrap some headings in spans if they’re not actual headings.

### 10. Document Must Have One Main Landmark
- Use semantic landmarks (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`) to structure the page.
- Ensure that the main content is wrapped in a `<main>` element.

### 11. More Than Two Elements Become a List
- Replace structures that visually appear as a list (like multiple `<p>` or `<div>` elements) with semantic lists (`<ul>` and `<li>`).

## Additional Notes
- The tasks are incremental; each step uses the previous code as a base.
- Use accessibility testing tools like Axe, or browser extensions for headings and landmarks, to verify improvements.
- No new images need to be downloaded. Focus on structure, semantics, and attributes for accessibility.

## License
This project is for educational purposes and is provided under the Holberton School guidelines.
