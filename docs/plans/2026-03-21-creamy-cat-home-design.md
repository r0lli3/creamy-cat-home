# Creamy Cat Home — Website Design

**Date:** 2026-03-21
**Reference:** viral-sma.framer.website (1:1 layout replica)
**Stack:** Next.js 14 (App Router) + Tailwind CSS
**Deployment:** Vercel

---

## Overview

A single-page scroll website for **Creamy Cat Home**, a premium cat home hotel. The design is a 1:1 structural replica of the Viral social media agency Framer site, adapted for a cat hotel brand with a custom warm colour palette.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom colour tokens
- **Fonts:** Playfair Display (serif, headlines) + Inter (sans-serif, body/labels) via next/font
- **Deployment:** Vercel

---

## Colour Palette

| Token | Name | Hex |
|-------|------|-----|
| `background` | Parchment | `#F7F5F2` |
| `surface` | Soft Linen | `#E9E3DA` |
| `border` / accent warm | Pale Oak | `#D8C3A5` |
| `accent` | Ash Grey | `#A8B5A2` |
| `foreground` | Carbon Black | `#222222` |

---

## Typography

- **Headlines:** Playfair Display — bold weight, mix of regular and italic within headings for word-level emphasis (matching original design pattern)
- **Body / labels / nav:** Inter — various weights (400, 500, 600)
- **Heading scale:** xl hero headline → lg section headings → md card titles → sm labels

---

## Page Structure (Single-page scroll)

### 1. Sticky Navigation
- Left: "Creamy Cat Home" wordmark + rounded-square paw icon logo mark
- Centre: Home, About, Services, Gallery links
- Right: "Book a Stay" pill button (Carbon Black bg, white text)

### 2. Hero
- Large serif headline: "Premium cat care, done *right*" (italic on last word)
- Short subheading tagline
- "Book a Stay" CTA pill button
- Cat lifestyle image/abstract warm shape on right side

### 3. Social Proof Strip
- Label: "Trusted by cat owners across the city"
- Muted logo/icon row (placeholder brand marks)

### 4. Services (3 cards)
- Section label: "Services"
- Heading: "How we care for your *cat*"
- Cards: Overnight Stays · Daycare · Grooming
- Each card: icon at top, title, description — Soft Linen background

### 5. Mission
- Section label: "Our mission"
- Large heading: "Turning worried owners into *confident* cat parents"
- Multi-paragraph body text
- Logo mark at bottom
- Contained in Soft Linen card with generous padding

### 6. Results / Case Studies (2 blocks)
- Alternating split layout (text left + visual right, then visual left + text right)
- Block 1: "Caring for a *family's* most precious pet" — metrics: "500+ Cats Hosted / Since opening" · "98% Return Rate / From satisfied owners"
- Block 2: "Building *trust* one stay at a time" — metrics: "4.9★ Rating / Across all reviews" · "100% Update Rate / Daily photo updates sent"

### 7. Process (3 steps)
- Section label: "How we work"
- Heading: "We like to keep things *simple*"
- Steps: Consultation → Check-in → Daily Updates
- Icons with connecting lines, title + description per step

### 8. Testimonial
- Large quotation icon (Carbon Black rounded square)
- Large centered serif quote
- Attribution: name + cat's name

### 9. Comparison Table
- Section label: "The difference"
- Heading: "Why choose Creamy Cat Home over *everyone* else?"
- Left: "Other Kennels" with ✗ items
- Right: "Creamy Cat Home" with ✓ items

### 10. Team (3 cards)
- Section label: "Our team"
- Heading: "Meet the team behind your cat's *happiness*"
- 3 caretaker cards: photo + name + role
- Recruitment CTA below

### 11. FAQ Accordion
- Section label: "Questions"
- Heading: "Frequently Asked *Questions*"
- 5 accordion items with expand/collapse (+/−) toggle

### 12. CTA Section
- Section label: "Get started"
- Heading: "Your cat's home away from home starts *right here*"
- "Book a Stay" button
- Soft Linen card, centered, generous padding

### 13. Footer
- Left: Logo + tagline + social icons
- Columns: Navigate · Connect · Legal
- Copyright line

---

## Interaction Patterns

- Scroll-triggered fade-in animations on sections
- FAQ accordion expand/collapse
- Hover states on buttons (opacity/scale)
- Smooth scroll navigation anchors
- Sticky nav with subtle backdrop blur on scroll

---

## Responsive Behaviour

- Mobile-first Tailwind breakpoints
- Multi-column sections stack to single column on mobile (`sm:` / `md:` breakpoints)
- Nav collapses to hamburger menu on mobile
- Touch-friendly button sizes (min 44px tap targets)
