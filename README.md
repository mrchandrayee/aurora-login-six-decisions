# Aurora Login Form — Six Decisions

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/aurora-login-six-decisions/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A complete responsive HTML/CSS/JavaScript login-form recreation based on the uploaded 121.1-second video, “Same form. Six decisions.”

## The six upgrades shown in the video

### 01 — Hierarchy: “One thing to do.”
- 40px title, weight 800
- 22px quiet subtitle
- One primary button; Create account is a secondary text link
- Video rationale: “A login has one job: get them in. When two buttons shout equally, the user stops to compare instead of tapping.”
- Rule: One primary action. Everything else is a link.

### 02 — Spacing: “Room to tap.”
- 56px fields
- 16px between fields
- 32px before the button
- Every gap is a multiple of 8
- Video rationale: a 56px field is easy to hit with a thumb; gaps on an 8pt grid tell the eye which lines belong together.

### 03 — Labels: “Labels stay. Hints help.”
- Label above every field
- Placeholder shows an example / password hint
- Label remains visible while typing; placeholder disappears
- Video rationale: a placeholder disappears the moment you type; a label above the field never leaves.

### 04 — Color & focus: “Show them where they are.”
- Three text tiers, one accent
- Title `#FFFFFF`
- Subtitle `#93A1BA`
- Hints `#5E6B84`
- Accent `#38BDF8`
- 2px focus ring using `#38BDF8`
- Video rationale: three text tiers rank the content and one accent marks the action; a visible focus ring shows which field is listening.

### 05 — Depth & corners: “Lift it off the page.”
- 24px card radius
- 12px field and button radius
- 1px hairline border
- Surface lighter at the top
- Downward shadow: 24px y-offset / 60px blur
- Video rationale: a hairline border, a lit top edge and a downward shadow make the form a surface you can act on; one radius family keeps every corner in agreement.

### 06 — Motion: “Every tap answers.”
- Focus ring: 150ms
- Button press: 120ms scale response
- Spinner → check: 300ms demo completion
- Ease-out: 200ms
- Video end slate repeats: focus ring 150ms, press 120ms, spinner → check 300ms.

## Included interactions
- Before / After view toggle to compare the compact baseline with the upgraded form
- Email and password validation
- Password Show / Hide
- Remember me checkbox
- Focus-visible rings and pressed button feedback
- Simulated 300ms sign-in spinner → check state
- Forgot password / Create account demo feedback
- Responsive mobile layout

## Run locally

No dependencies or build step:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.

## Files
- `index.html` — login form and six decision summary
- `styles.css` — upgraded design plus BEFORE comparison mode
- `app.js` — validation and local demo interactions

## Accuracy note
The video is a UI walkthrough and does not expose the original complete HTML/CSS/JS source. This project recreates the visible design rules, labels, values and interactions in a standalone runnable frontend. Login is a local demo only: no credentials are transmitted and there is no authentication backend.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
