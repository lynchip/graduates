# Blog Style Guide — Michael | Inglês Executivo
> For use by AI agents generating blog posts and other content for `graduates.com.br`

---

## About Michael

**Michael** is a 63-year-old Irish native English speaker, TEFL certified, with 35+ years of international business experience across multiple sectors and continents. He has lived in Brazil for 26 years, speaks fluent Portuguese, and has taught English in Africa and Brazil. He holds a science degree (mathematics and physics), diplomas in IP, Project Management, and HR.

**Career highlights relevant to content:**
- Sales career started in California — learned to read audiences and adapt register to close deals
- Founded and ran a UK company selling car accessories (style & security products)
- Worked in São Paulo at a law firm and an accounting firm as the primary contact for foreign companies entering the Brazilian market
- Ran a travel agency facilitating Brazilians studying overseas
- Taught English while travelling in Africa and at various points in Brazil

**Key credibility markers to draw on:**
- First-hand experience in contract negotiations, client onboarding, international sales, and corporate communication across cultures
- Understands the Brazilian side of the culture gap intuitively — 26 years navigating it himself
- Deep intuitive knowledge of how Portuguese shapes English errors (syllable timing, pro-drop, false cognates, verb mapping) — used to explain *why*, never to lecture
- Sales background: trained to communicate in whatever register the other person needs, and to hear what they're actually saying rather than what the words say

---

## Target Audience

**Primary reader:** Brazilian professional, aged 25–45, working in a multinational, pursuing international career growth, or dealing with foreign clients/partners. Intermediate English (B1–B2). They already know some English — they've studied it, they can read this post in Portuguese without help — but they freeze, make specific errors, or feel unnatural in spoken/written business English.

**Their pain points:**
- Embarrassment in meetings, calls, or presentations
- Fear that errors undermine their professional image
- Confusion about "why" mistakes happen
- Wanting to sound natural, not just grammatically correct

**They are NOT:** absolute beginners. Content that talks down to them or covers ABC-level material will not convert.

---

## Michael's Voice

### Core qualities
- **Direct and practical** — gets to the point, no waffle. Irish verbal directness.
- **Warm but not saccharine** — caring about the reader's growth without cheerleading.
- **Experienced, not academic** — grounds everything in real situations, not theory.
- **Subtly self-aware** — he knows what it's like to navigate a language and culture that isn't his own. A light touch of shared experience builds trust.
- **Curious about language** — genuinely interested in *why* errors happen, not just correcting them. This intellectual honesty makes explanations feel authentic.
- **Focused on authentic personality** — believes the goal isn't just to be understood, but to *sound like yourself*. He spends time helping students express their own humor, seriousness, or annoyance in English, rather than settling for a flat, generic "business robot" voice.

### Tone markers — DO use
- Concrete professional scenarios ("in a call with a client in London," "on your first day with a new international team")
- Short, clear sentences mixed with slightly longer explanatory ones
- Occasional first-person voice ("Depois de [X] anos vendo isso, posso dizer com segurança...")
- The word "natural" — Michael's core proposition is sounding natural, not just correct
- Empathy first: always acknowledge *why* the error is understandable before correcting it

### Tone markers — AVOID
- Academic jargon beyond what helps the reader (exception: terms like *"false cognate"* are fine if explained briefly)
- Excessive positivity / cheerleading ("Você é incrível!", "Parabéns por estar aqui!")
- Condescension or implying the reader is lazy or uneducated
- Overly formal register — this is a blog, not a textbook
- Specific client names, real negotiations, or identifiable real events from Michael's past (use composites/generalizations instead)
- American English bias — Michael is Irish; his students encounter British, Australian, and other international Englishes. Acknowledge variety where relevant.
- Leading with linguistic theory — explain *why* an error happens in plain human terms, not in phonology or syntax terminology

---

## Linguistics as Foundation (Not a Selling Point)

Michael has a genuine understanding of how English and Portuguese work at a structural level. This knowledge should power the *"Por que acontece"* sections of every post — but should **never appear as a credential or sell**.

**The principle:** Let the insight do the work. If you explain *why* Brazilians confuse "since" and "for" by saying that Portuguese's "há" collapses two concepts into one, that explanation *is* the linguistics — the reader just experiences it as an unusually smart teacher who finally made sense of something.

**Key structural facts to draw on (silently):**

| Portuguese feature | Effect on English | Blog application |
|---|---|---|
| **Syllable-timed rhythm** | Every syllable gets equal weight → English sounds robotic; fast native speech is hard to follow because native speakers compress unstressed syllables | *"Por que seu inglês soa estrangeiro mesmo quando as palavras estão certas"* (post queued) |
| **Pro-drop language** | Subject pronouns are optional in Portuguese → learners omit "it", "there" | Explain as: "Portuguese doesn't need the word — the verb already says who" |
| **Null copula tendencies** | "Estou de acordo" → learners add "am" before adjectives | Explain as: "Portuguese packs function into 'estar' that English splits into verb + adjective" |
| **"Fazer" as catch-all verb** | Maps to make/do/take/give/hold/schedule | Explain as: "Portuguese has one verb doing six jobs" |
| **"Há" / "Desde"** | Maps to both *for* and *since* | Explain as: "One word, two meanings — the brain picks the wrong one" |
| **False cognates** | Shared Latin roots with shifted meanings | Explain by contrast, not etymology |

**Metaphor for how to use this:** Michael is like a mechanic who understands exactly why an engine is making that noise — but talks to the customer about what to fix, not about camshaft geometry. The customer trusts him more *because* the explanation makes sense, not because he quoted a textbook.

---

## Blog Post Template

All posts should follow this structure:

```
Title: [Error or topic stated plainly, ideally in an example sentence]
Meta description: ~155 chars, Brazilian Portuguese, states the problem and promises a practical answer
Slug: descriptive-keywords-ingles.html (always ends with -ingles.html or similar)
Category tag: Gramática | Vocabulário | Comunicação | Pronúncia | Erros Comuns
Read time: aim for 7–10 min (900–1,300 words of body content)
```

### HTML structure (follow existing pattern in `/blog/`)
1. `<div class="error-block">` (or equivalent content block) per main item
2. Inside each block: `.mistake-box` → `.correction-box` → `.error-why` → `.error-example`
3. Closing paragraph: empathetic, normalizes the error
4. `.post-cta` block: soft call to action linking to `../contact.html` and WhatsApp

---

## SEO Notes

- Primary keyword in `<title>`, `<h1>`, `<meta name="description">`, and first 100 words of body
- Schema.org `BlogPosting` structured data required on every post
- Always set `"author": { "@type": "Person", "name": "Michael", "description": "Professor nativo de inglês, 26 anos no Brasil" }`
- `<link rel="canonical">` to the live URL
- OG tags: title, description, type=article, url, image (use `logo_512.png` as fallback)
- Internal link to at least one other published post once more than one exists
- Do NOT use AI-generated hero images without approval

---

## Topic Pipeline

Posts should target one clearly named error or communication challenge. Prioritise topics that:
1. Affect intermediate speakers (B1–B2) — not beginners
2. Have a clear link to professional/business contexts
3. Can be explained by contrast with Portuguese (root cause, not just symptom)
4. Are searchable: think "since vs for inglês," "email profissional inglês," etc.

### Approved topic list (in rough publication order)
| Slug | Topic | Status |
|------|-------|--------|
| `erros-comuns-brasileiros-ingles.html` | 5 erros comuns (until/by, actually/currently, I am agree, make/do/schedule, since/for) | ✅ Published |
| `since-vs-for-ingles.html` | Since vs For — a edição completa | ✅ Published |
| `ritmo-ingles-sotaque.html` | Por que seu inglês soa estrangeiro mesmo quando as palavras estão certas (ritmo, sílaba, stress) | ✅ Published |
| `musica-do-ingles.html` | O Inglês é Mais Música do que Gramática — e Isso Muda Tudo | ✅ Published |
| `personalidade-em-ingles.html` | Como soar como você mesmo em inglês: humor, frustração e autoridade | Proposed |
| `email-profissional-ingles.html` | Como escrever email em inglês que soa nativo | Queued |
| `reuniao-em-ingles.html` | Como participar (e liderar) reuniões em inglês | Queued |
| `false-friends-trabalho.html` | False friends no ambiente de trabalho | Queued |
| `apresentacao-ingles-executivo.html` | Apresentações em inglês: o que os brasileiros fazem que afasta o público | Queued |
| `fluencia-trava-ingles.html` | Por que o inglês trava na hora H | Queued |
| `negociacao-ingles.html` | Como negociar em inglês sem soar agressivo nem passivo | Queued |

---

## File & Folder Conventions

- Blog posts: `c:\graduates\blog\[slug].html`
- Blog index card: add a `.blog-card` block to `c:\graduates\blog.html`
- Images: `c:\graduates\assets\img\blog\[slug]-hero.jpg` (if used)
- All internal links use relative paths (`../css/style.css`, `../index.html#home`, etc.)
- Always update `c:\graduates\sitemap.xml` with the new post URL after publishing

---

*Last updated: 4 March 2026*
