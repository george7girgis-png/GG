---
version: 1
name: Blaum-Dienstleistungen-design
description: The design language of the Blaum Dienstleistungen website, a building-cleaning firm in Köln. A stone-grey ground, one near-black ink and a single burnt-orange action colour; Schibsted Grotesk at regular weight with tight tracking; photographs of the work carry the colour. Built on the tasteskill 2.5 kit (service page) and checked against the impeccable craft floor.

colors:
  canvas: "#eeeeeb"
  surface: "#e1e1dd"
  ink: "#1c1d1f"
  ink-mute: "#5c5e62"
  action: "#c2501b"
  on-action: "#ffffff"
  inverse-canvas: "#1c1d1f"
  inverse-ink: "#eeeeeb"

typography:
  family: "Schibsted Grotesk, system-ui, sans-serif"
  display-weight: 400
  display-tracking: "-0.035em (hero -0.042em)"
  h1: "72px / 40px phone, line-height 1.02"
  h2: "48px / 30px phone"
  h3: "28px / 24px phone"
  lead: "20px / 18px phone"
  body: "16px, line-height 1.6"
  label: "13px, weight 500, sentence case"

rounded:
  scheme: soft
  sm: 8px
  md: 12px
  lg: 20px

spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
---

## Overview

The page is a stack of screens: every section is exactly one or two screens tall at 1440x900, so a visitor scrolling sees one idea at a time. The colour comes from the photographs of the work (white offices, teal treatment chairs, blue cloths, the Dom behind the glass); the interface itself stays stone, ink and one orange.

**Key characteristics**
- One filled button style, burnt orange, used only for the one action: "Angebot anfragen". It reads the same in the nav, the hero, the form, the close and the phone bar.
- Photographs lead every section: the hero, a photograph per service that swaps as you point at its row, three wide photographs in the process section, the trolley, the door handle, the entrance hall.
- One moving moment below the hero: `photo-chapters` in "So läuft ein Auftrag ab", where each step's photograph uncovers the last as you scroll.
- Flat grounds: the canvas everywhere, the `surface` grey once (the "Betrieb" section). No gradients, glows, glass or grain.
- German in plain words: the category and the place in the h1, a noun in every heading, a verb and an object on every button.

## Colors

### Brand and action
- **Action** (`{colors.action}`, `#c2501b`): the primary button, the focus ring, the selection tint, the caret, the live dot on the hero card. Under 3% of any screen.
- **On action** (`{colors.on-action}`, `#ffffff`): button labels on orange.

### Surface
- **Canvas** (`{colors.canvas}`, `#eeeeeb`): the page ground and the fixed header.
- **Surface** (`{colors.surface}`, `#e1e1dd`): the one contrasting band (`.ground-surface`, the "Betrieb" section).

### Text
- **Ink** (`{colors.ink}`, `#1c1d1f`): headings and every line people read, 7:1 or more on canvas. Never pure black.
- **Ink mute** (`{colors.ink-mute}`, `#5c5e62`): labels, the form's reply line, the credits. 4.5:1 or more.

### Never
Violet or lavender anywhere; a second accent; colour inside a word; text over a photograph outside the hero card.

## Typography

**Schibsted Grotesk**, one family, weights 400 and 500 only. Headlines at 400; size and tight tracking carry them, never bold-and-big. The first dealt pairing (Lora with Nunito Sans) was dropped because a 45-character German headline took four lines in the hero column; Schibsted is the second dealt pairing.

| Role | Desktop | Phone |
|---|---|---|
| h1 (hero) | 72 / 1.02 | 40 / 1.02 |
| h2 | 48 | 30 |
| h3, chapter titles | 28 | 24 |
| Lead, card titles | 20 | 18 |
| Body | 16 / 1.6 | 16 / 1.6 |
| Label | 13 / 500 | 13 / 500 |

German compounds hyphenate (`hyphens: auto`, `lang="de"`). Lines stay under 62 characters.

## Layout

- **Container:** one `.wrap`, 1280px at 1440 (lines at x 80 and 1360), 342px at 390. Every block starts on the left line or a column start.
- **Grid:** 12 columns, 24px gutter (12 on a phone).
- **Split pair:** text on columns 1 to 5 or 1 to 6, the picture from column 7 to the right line. The same pair on every split (hero, both service lists, Betrieb, Anfrage); text always left, never mirrored.
- **Section box:** `height: calc(var(--h) * 100svh)`, padding 120 top and 72 bottom (96 and 48 on a phone). Phone sections that hold more take `--hm: 2` or `.g2m`; at the tablet "Betrieb" and "Anfrage" take two screens.
- **Section order:** hero, Firmen (4 services), Ablauf (photo chapters), Wohnhäuser (4 services), Betrieb, Anfrage, closing footer.

## Elevation and depth

Flat. No shadow at rest on cards or photographs. The header is opaque with a 1px hairline from the first paint. The hero's float card is opaque with a hairline and no shadow.

## Shapes

- Radius `soft`: 8 controls, 12 panels, 20 photographs and cards.
- Photographs fill their frames (`object-fit: cover`), one ratio per row: 16:9 chapters, 4:3 detail, 1:1 trolley, fill-height service frames.

## Components

### Buttons
- `.btn--primary`: orange fill, 44px high (48 in the phone bar), 16px label, the drawn arrow as its last child where an action leads on.
- `.btn--secondary`: the one secondary look ("Leistungen ansehen"). Never a third style.
- Hover steps the button, press pushes it (the kit's motion layer; no page CSS on `.btn`).

### Service rows (peek-list)
`ul.rows` of four rows beside one photograph frame. Each row: the name (500), one line in ink, a one- or two-word value on the right. Pointing at, focusing or tapping a row swaps the photograph at once.

### Form
Name and E-Mail required, Firma and Leistung optional (hidden on a phone), "Objekt und Wünsche" required. Labels you can see; each error under its field in German; the first wrong field takes the focus; the status line reads "Bitte {n} Felder ergänzen." The form opens a `mailto:` to info@blaum-dienstleistungen.de until the client has a form service (`data-endpoint`).

### Navigation
`nav-centre`: the ring mark and "Blaum" on the left line, four words in the middle (Firmen and Wohnhäuser open small menus), the orange action on the right line. On a phone: a full-screen sheet with the action at its foot, and an action bar that appears once the hero's button has scrolled away.

### Closing footer
`close-photo` (the h2 "Angebot anfragen", one line, the action, then the entrance-hall photograph) over `footer-columns` (Leistungen, Betrieb, Rechtliches) and the legal row.

## Do's and Don'ts

### Do
- Keep one orange button per view and the same words for it everywhere.
- Give every new section a photograph of the work and make it exactly one or two screens.
- Write German that names the thing: the service, the building, the place.
- Replace the AI-generated stand-in photographs with real ones of Blaum's team and jobs as they come in.

### Don't
- Add labels above headings, gradient text, glows, glass panels or scroll fade-ins.
- Use emoji or Unicode stars as icons.
- Invent reviews, customer counts, years in business or response times.
- Add a second accent colour or a dark section.
