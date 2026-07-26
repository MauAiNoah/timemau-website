# Later custom-domain transition

This guide is for a later, separately approved switch from the temporary GitHub Pages project URL to `https://www.timemau.com`.

No GoDaddy, DNS, GitHub Pages domain, CNAME, or certificate change was made during the website implementation.

## Gate 1 — approve the temporary Pages site

Before touching the domain:

1. enable **Settings → Pages → Source → GitHub Actions** if required;
2. confirm the workflow deploys successfully;
3. review every English and Romanian route at the temporary URL;
4. verify the password-review decision, early-access state, privacy policy, terms, mobile menu, social card, sitemap, and 404;
5. retain the previous domain state and DNS export for rollback.

## Gate 2 — prepare the root-path build

For the custom-domain release:

```text
PUBLIC_SITE_ORIGIN=https://www.timemau.com
PUBLIC_BASE_PATH=/
```

Rebuild and rerun all validation. Confirm that internal links, assets, canonicals, hreflang, robots, and sitemap use the root path.

Do not add a `CNAME` file until the custom-domain change is explicitly approved.

## Gate 3 — configure GitHub first

1. In GitHub Pages settings, enter `www.timemau.com` as the custom domain.
2. Follow GitHub's current domain-verification workflow.
3. Add only the TXT verification record shown by GitHub for this repository/account.
4. Wait until GitHub reports the verification state expected by its current documentation.

Never reuse a TXT value from an old screenshot or this document.

## Gate 4 — update GoDaddy carefully

Before editing:

1. export or screenshot the complete current DNS zone;
2. identify all MX and mail-related TXT/CNAME records;
3. confirm which services currently use the apex and `www`;
4. prepare a rollback record list.

Then:

1. point `www` to the exact CNAME target GitHub currently provides, expected to be the account's `github.io` host;
2. for the apex domain, consult GitHub's current official Pages documentation and use only the A/AAAA records published there at change time;
3. preserve all mail MX, SPF, DKIM, DMARC, verification, and unrelated service records;
4. remove or replace only records that directly conflict with the approved website routing.

Do not guess or copy apex IP addresses from an old guide.

## Gate 5 — propagation and HTTPS

After DNS changes:

1. wait for DNS propagation;
2. confirm both apex and `www` resolve as planned;
3. wait for GitHub's TLS certificate to become available;
4. enable **Enforce HTTPS**;
5. verify HTTP-to-HTTPS behavior;
6. verify the chosen canonical `www` host;
7. verify apex-to-`www` behavior;
8. recheck mail delivery and existing non-website DNS services;
9. rerun route, metadata, social-card, sitemap, robots, accessibility, and performance checks.

## Rollback

If routing, TLS, email, or canonical behavior is wrong:

1. restore the saved DNS records exactly;
2. remove the custom domain from GitHub Pages only if that is part of the approved rollback;
3. keep the temporary Pages project URL available for diagnosis;
4. do not improvise replacement records.

Official references:

- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [GoDaddy DNS record management](https://www.godaddy.com/help/manage-dns-records-680)
