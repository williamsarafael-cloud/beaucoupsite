# Beaucoup Consulting website

A fast static website (Astro) for beaucoupconsult.com. No database, no server, no monthly hosting fee.
All original Wix copy is preserved word-for-word. Built to be edited with Claude Code or by hand.

## What is in the box

| Page | Address | Where to edit |
|---|---|---|
| Home | `/` | `src/pages/index.astro` (text shared with other pages is in `src/data/site.ts`) |
| About | `/about` | `src/data/site.ts` (the `about` section) |
| Founder | `/about/rafael-williams` | `src/data/site.ts` (the `founder` section) |
| Services | `/services` | `src/data/site.ts` (the `services` list) |
| 5 service pages | `/services/leadership-development` etc. | same `services` list; each has its own SEO title, description and heading |
| Contact | `/contact` | `src/pages/contact.astro` |
| Insights (blog) | `/blog` | Markdown files in `src/content/blog` (hidden from menu and Google until you publish a post) |
| Privacy | `/privacy` | `src/pages/privacy.astro` (**have a lawyer review before relying on it**) |

Built-in SEO: unique titles and descriptions, canonical URLs, sitemap (`/sitemap-index.xml`), robots.txt, Open Graph and Twitter
cards using your logo, and structured data (ProfessionalService, WebSite, Person, Service, BreadcrumbList, ContactPage, BlogPosting).

## Still needed from you (nothing is invented; these show gracefully until provided)

1. **Founder photo**: save as `src/assets/photos/rafael.jpg` (until then a lime arch shows).
2. **Hero photo** (optional): `src/assets/photos/hero.jpg` replaces the circle graphic in the top-right of the home page.
3. **Partner logo(s)**: drop image files in `src/assets/partners/`. The Partners row appears only when a file exists.
4. **Form key**: see "Contact form" below. Without it the form cannot send email.
5. **Old video**: the Wix "Brainstorming" video was not carried over. Send the original if you want it back.

## Run it on your computer (optional)

```
npm install
npm run dev        # preview at http://localhost:4321
npm run build      # creates the ./dist folder
```

## Contact form (2 minutes, free)

1. Go to https://web3forms.com and request an access key for rafael.williams@beaucoupconsult.com. The key arrives by email.
2. In Cloudflare (see Deploy below), add a **build variable** named `PUBLIC_WEB3FORMS_KEY` with that key. For local testing, copy `.env.example` to `.env`.
3. Send a test inquiry after launch. Web3Forms' free plan has a monthly submission limit; check their pricing page for the current number.

## Deploy (Cloudflare, free)

Cloudflare now recommends **Workers with static assets** for new sites (it replaces Cloudflare Pages; still free, and commercial use is allowed).
The dashboard wording changes from time to time, so if a label differs, follow Cloudflare's on-screen prompts.

1. Create a free GitHub account and a **private** repository. Upload this folder's contents (or push it with git).
2. Create a free Cloudflare account. In the dashboard choose **Workers & Pages > Create > Import a repository**, and pick your repo.
3. Build settings: **Build command** `npx astro build`, **Deploy command** `npx wrangler deploy`. Add the build variable `PUBLIC_WEB3FORMS_KEY`.
4. Deploy. You get a temporary `*.workers.dev` address to review the site. Nothing changes on beaucoupconsult.com yet.
5. When you are happy: open the project's **Settings > Domains & Routes > Add > Custom domain** and enter `beaucoupconsult.com` (and `www.beaucoupconsult.com`).
   If the domain's DNS is not on Cloudflare, use the safe steps below.

Every future change: edit, commit to GitHub, Cloudflare rebuilds and publishes in about a minute.

## Migration checklist (take the site off Wix safely)

Your domain already is not connected to Wix, so there is no Wix DNS to unwind. Do these in order:

- [ ] **Export what lives only in Wix**: form submissions/contacts (Wix dashboard), the original photos, the "Brainstorming" video and the partner logo.
- [ ] **Find where beaucoupconsult.com DNS is managed** (your registrar or a DNS host) and **screenshot every existing record**, especially **MX, SPF (TXT), DKIM and DMARC** records. These keep `rafael.williams@beaucoupconsult.com` working.
- [ ] Deploy to the temporary address and review every page on your phone and laptop.
- [ ] Add `PUBLIC_WEB3FORMS_KEY`, submit a test inquiry, and confirm it arrives.
- [ ] Add the custom domain in Cloudflare. **Only change the website records (A/AAAA/CNAME for the root and www). Do not delete MX/TXT records.**
  If you move nameservers to Cloudflare, first make sure every existing record was copied over.
- [ ] After launch, send a test email to and from your address to confirm mail still works.
- [ ] Verify the site in **Google Search Console** (add the domain property, then submit `https://beaucoupconsult.com/sitemap-index.xml`).
- [ ] Only after everything works for a week: **cancel Wix** (Premium plan and any paid add-ons) and keep the Wix export.

## SEO to-do after launch (this is what gets you found)

- [ ] Google Search Console and Bing Webmaster Tools: verify and submit the sitemap.
- [ ] Create or claim a **Google Business Profile** if you serve a local area (an address is intentionally not on the site; add it to `site.ts` and the schema if you want local search).
- [ ] Update the LinkedIn company page with the new site link and logo.
- [ ] Publish 1 to 2 useful articles per month in `src/content/blog` (ideas: first HR hire checklist, employee handbook basics for startups, onboarding in the first 90 days). Write them from real experience; that is what ranks.
- [ ] Ask satisfied clients for a short testimonial and permission to add it. (None are on the site because none were provided.)
- [ ] Optionally add free, cookie-free **Cloudflare Web Analytics** in the Cloudflare dashboard for traffic numbers (update the Privacy page if it changes what you collect).

## How to make common changes

- **Change text**: open the file in the table above, edit the words between the quotes, save.
- **Update phone/email/LinkedIn**: `src/data/site.ts`, top section.
- **Add a service**: copy one block in the `services` list in `src/data/site.ts`; a page and menu card are created automatically.
- **Replace an image**: swap the file with the same name in `src/assets/photos`.
- **Change menu items**: `nav` list in `src/data/site.ts`.
- **Publish a blog post**: copy `src/content/blog/_TEMPLATE.md`, rename it, fill it in, set `draft: false`.
- **Colors and fonts**: `:root` variables at the top of `src/styles/global.css`.

Tip: open this folder in Claude Code and ask it to make any of these changes for you.

## Costs

| | Wix (today) | This site |
|---|---|---|
| Hosting | included in your Wix plan (check your plan price) | $0 (Cloudflare free) |
| Domain | your registrar renewal (about $10 to $15/yr, unchanged) | same |
| CMS | included | $0 (edit files, or ask Claude) |
| Form | included | $0 (Web3Forms free tier) |
| **Estimated monthly** | your Wix plan | **about $1** (domain only) |

Design tokens: forest #005E35, leaf #4AA342, lime #CEE560, deep #004020, off-white #FBFAF9. Fonts: Newsreader (headings) and Jost (body), self-hosted.
