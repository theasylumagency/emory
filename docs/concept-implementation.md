# Emory — first website exploration

This is a local, Georgian-language interactive concept based on `website-concept-brief.md`, not a production booking site.

## Direction

An independent neighborhood studio with human, editorial photography. The principal visual contrast is warm, imperfect portraiture against a cool, precise interface.

- Paper `#f7f8f7`, ink `#171c25`, cobalt `#244ddd`, pale blue `#e7edf9`, aluminium `#bdc2c7`.
- Noto Sans Georgian for Georgian display and body text; Manrope ExtraBold for the Emory wordmark and street number. Fonts and OFL licenses are local.
- Large photographs alternate with open typography and service rows. No identical service cards, testimonial carousel, or salon-interior hero.
- Signature interaction: discover a specialist through a situation, then select their marker in the shared team scene. The selection carries into booking.

## Homepage flow

Hero → intent-based service discovery → illustrated case stories → Ninutsa editorial interruption → situation-based team discovery → professional judgment → consultation → address.

Header links navigate within this first homepage exploration. Standalone service, case and team routes can follow after the direction and content are approved. Sticky desktop navigation and a mobile bottom booking action keep the next step available.

## Working interactions

- Expand all six service categories to see indicative prices, duration and scope.
- Switch among three illustrated case narratives.
- Select team members by situation or photo marker.
- Open booking from general, service, case, consultation or specialist contexts.
- Four booking steps: service, optional specialist, date/time, name/phone. Back navigation preserves choices; changing service resets the specialist. Past dates and invalid phone numbers are rejected. Near-term date buttons and a native date field are available.
- Native modal focus containment, Escape dismissal, focus restoration, keyboard focus styles, reduced-motion support and responsive layouts.
- The final screen explicitly says no booking was created. Contact details stay in component memory and are discarded when the dialog closes. No backend, analytics or storage receives them.

## Content and asset status

All four photos in `public/images` are AI-generated concept assets. The Ninutsa scene uses `characters/ninutsa/Ninutsa Master Collection Model Board.png` as the identity reference and follows her character bible. She is labeled as an AI character and appears once, separately from staff and cases.

Team names, specialties, case narratives, times and prices are illustrative and labeled on the site. No customer testimonials or rating numbers are invented. The address comes from the supplied brief; Maps links are search links, not a verified business listing. Phone, hours, entrance photography, real cases, real staff and external reviews remain to be supplied.

Before a public launch, replace illustrative content, confirm the booking provider and availability rules, connect submission, confirm privacy copy, and remove `robots: { index: false, follow: false }` only when ready for indexing.

## Validation

Production build and TypeScript check pass. Browser checks cover desktop and narrow mobile layouts, service expansion, case switching, team selection, service/specialist preselection, booking progression, invalid phone feedback, demo completion and modal dismissal.
