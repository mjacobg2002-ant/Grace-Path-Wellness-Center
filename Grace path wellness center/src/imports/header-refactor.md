The header is currently duplicated.

There are two header layouts stacked vertically:
• Desktop navigation header
• Mobile hamburger header

This is incorrect.

Refactor the header into proper responsive breakpoints instead of stacking both versions.

Follow these exact instructions:

1️⃣ Remove Duplicate Layout

Delete the second header block that appears below the main desktop header.

There should only be ONE header component rendered per breakpoint.

Do not stack desktop and mobile versions in the same frame.

2️⃣ Create Proper Responsive Variants

Create two variants of the same header component:

Desktop Header (≥1024px)
Mobile Header (<1024px)

Use Figma component variants or conditional layout logic.

Do NOT place both inside the same visible layout.

3️⃣ Desktop Header Structure

Left: Logo block
Center: Navigation
Right: CTA button

Use 12-column grid.
Max width: 1200px.
Side padding: 80px.

Ensure perfect vertical centering.

Remove any extra vertical spacing.

4️⃣ Mobile Header Structure

Left: Grace Path Wellness Center logo
Right: Hamburger menu icon

No navigation links visible inline.

Hide:
Programs
Admissions
Referral Partners
About
Contact
CTA button

These should appear inside a slide-out mobile menu.

Header height mobile: 72–80px.

Maintain same background color.

5️⃣ Ensure Breakpoint Logic

Desktop version visible only on desktop.
Mobile version visible only on mobile.

Do not display both simultaneously.

6️⃣ Clean Vertical Rhythm

After removal of duplicate header:

• Ensure hero section moves directly below header
• No extra spacing gap
• No duplicated logo block

7️⃣ Quality Control

Verify:
• No duplicate logo
• No stacked header elements
• Proper spacing
• Clean hierarchy

The header should feel architectural, intentional, and refined.

Not stacked.
Not duplicated.
Not compressed.