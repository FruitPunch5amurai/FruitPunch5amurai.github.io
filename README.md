# Portfolio

A personal site built with Next.js, TypeScript, and Node.js. `next build` writes a static site to `out/`, and GitHub Actions publishes that folder to GitHub Pages. Point your own domain at it from the repository settings.

## Edit the site

All visitor-facing copy, projects, and links live in [`src/content/site.ts`](src/content/site.ts). The projects and biography there are starter copy. Replace them before you share the site.

## Run it locally

Node.js 20.9 or newer is required.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To preview the static files GitHub Pages will serve:

```bash
npm run build
npm run preview
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## Publish to GitHub Pages

GitHub Pages on the free plan is available for public repositories. Private repositories need a plan that includes Pages.

This folder currently sits inside the git repository at your home directory. Publish it as its own repository so it does not get committed there.

1. Create a new repository on GitHub. The default branch should be `main`.
2. From this folder, connect it and push:

```bash
git init
git add .
git commit -m "Add static Next.js portfolio"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

3. In the repository, open **Settings → Pages → Build and deployment**.
4. Set **Source** to **GitHub Actions**.

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site and deploys `out/` on every push to `main`. The first run needs the Pages source set to GitHub Actions, or the deploy job will fail.

A user site repository named `YOUR_USERNAME.github.io` is served at the root. A project repository is served at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/` until a custom domain is attached. This project assumes the site is served from `/`, which is what you want once your domain points at GitHub Pages. If you need the project URL to work before DNS is ready, set `NEXT_PUBLIC_BASE_PATH` to `/YOUR_REPOSITORY` in the workflow's build step and rebuild.

## Use your own domain

Add the domain in GitHub before you change DNS. That order avoids someone else claiming the hostname while it points at GitHub.

1. Open **Settings → Pages**.
2. Under **Custom domain**, enter your domain (`example.com` or `www.example.com`) and save.
3. Verify the domain for your GitHub account so another repository cannot use it. GitHub's guide is [Verifying your custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).
4. At your DNS provider, add the records below. Remove any old parking-page records for the same name. Do not use a wildcard such as `*.example.com`.
5. Wait for DNS to propagate, then turn on **Enforce HTTPS**. The certificate can take up to 24 hours to become available.

Because this site deploys with GitHub Actions, you do not need a `CNAME` file in the repository. The domain saved in Pages settings is what GitHub uses.

### Apex domain (`example.com`)

Add all four `A` records and all four `AAAA` records. If your provider supports `ALIAS` or `ANAME`, you can use that instead of the `A`/`AAAA` records and point `@` at `YOUR_USERNAME.github.io`.

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

Also add a `CNAME` record so `www` reaches the same site:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `www` | `YOUR_USERNAME.github.io` |

Point that `CNAME` at `YOUR_USERNAME.github.io`, not at `YOUR_USERNAME.github.io/repository` and not at the `*.pages.github.io` host shown in the Pages settings.

If the custom domain saved in GitHub is `example.com`, GitHub redirects `www.example.com` to it. If you save `www.example.com` instead, the apex redirects to `www`.

### Subdomain only (`www.example.com`)

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `www` | `YOUR_USERNAME.github.io` |

Check the records once they propagate:

```bash
dig example.com +noall +answer -t A
dig www.example.com +nostats +nocomments +nocmd
```

The `A` answers should be the four GitHub Pages addresses above. The `www` answer should be a `CNAME` to `YOUR_USERNAME.github.io`.
