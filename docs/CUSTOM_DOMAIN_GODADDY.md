# Protected custom-domain activation

The repository is prepared to build the approved password-protected review site
for:

`https://www.timemau.com/`

No GoDaddy, DNS, GitHub account-level domain verification, or repository custom
domain setting was changed by the release commit.

## Repository release state

- Astro `site`: `https://www.timemau.com`.
- Astro `base`: `/`.
- GitHub Actions build origin: `https://www.timemau.com`.
- GitHub Actions build base path: `/`.
- Password gate: enabled.
- Clear review password: absent from repository source.
- `noindex, nofollow`: enabled.
- `robots.txt`: `Disallow: /`.
- Sitemap: omitted while the review gate or `noindex` is active.
- Early-access submissions: disabled.
- Downloads: unavailable.

The old project-site configuration remains available only as a documented local
diagnostic override:

```sh
PUBLIC_SITE_ORIGIN=https://mauainoah.github.io \
PUBLIC_BASE_PATH=/timemau-website \
npm run build
```

## CNAME file decision

Do **not** add `public/CNAME` for this deployment.

This repository publishes through a custom GitHub Actions Pages workflow.
GitHub's current documentation says a `CNAME` file is ignored and is not
required for that publishing architecture. The custom domain must instead be
saved in the repository's Pages settings.

References:

- [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

## Exact next manual step

Open:

**GitHub Repository → Settings → Pages → Custom domain**

Enter:

`www.timemau.com`

Then save. This is a repository setting; do not open or change GitHub
account-level domain verification unless it is separately authorized.

## Manual DNS step after GitHub accepts the domain

Mau performs this step in GoDaddy.

1. Export or screenshot the current DNS zone for rollback.
2. Preserve MX, SPF, DKIM, DMARC, verification, and unrelated service records.
3. Configure the `www` CNAME using GitHub's then-current instructions. For this
   repository owner, the expected target is `mauainoah.github.io` without the
   repository path.
4. Configure the apex only if desired, using GitHub's current official A/AAAA,
   ALIAS, or ANAME guidance.
5. Do not use wildcard DNS.
6. Wait for propagation and certificate issuance.
7. Enable **Enforce HTTPS** when GitHub makes it available.
8. Verify `www`, the apex redirect decision, all 18 routes, assets, the password
   gate, `noindex`, and `robots.txt`.

DNS changes can affect routing and email. Do not guess records or delete
unrelated entries.

## Current protected review state

Once the two manual activation steps are complete:

- `www.timemau.com` is active;
- password gate remains active;
- `noindex` remains active;
- robots remain blocked;
- sitemap remains excluded;
- the site remains a review/testing release.

## Future public launch

This requires a separate release decision and validation:

- remove the password gate;
- remove the password digest only when the gate is removed;
- remove `noindex`;
- change robots to allow crawling;
- restore the sitemap;
- validate canonical and hreflang URLs;
- validate indexing in search-engine tooling;
- keep analytics, trackers, external fonts, submissions, and downloads disabled
  unless each is separately approved.

## Rollback

If custom-domain routing, TLS, email, or canonical behavior is wrong:

1. restore the saved DNS records exactly;
2. remove the repository custom domain only if that is part of the approved
   rollback;
3. retain the protected build and use the former project-site diagnostic
   configuration;
4. do not improvise replacement DNS records.
