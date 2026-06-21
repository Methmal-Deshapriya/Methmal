# Search Indexing Checklist

## Production Details

- Production URL: `https://methmaldeshapriya.com`
- Sitemap URL: `https://methmaldeshapriya.com/sitemap.xml`
- Robots URL: `https://methmaldeshapriya.com/robots.txt`
- Bing verification file already in the repo: `https://methmaldeshapriya.com/BingSiteAuth.xml`

## Important Public URLs To Submit

- `https://methmaldeshapriya.com`
- `https://methmaldeshapriya.com/projects`
- `https://methmaldeshapriya.com/blogs`
- `https://methmaldeshapriya.com/foundry`
- `https://methmaldeshapriya.com/education`
- `https://methmaldeshapriya.com/xoxodevs`
- `https://methmaldeshapriya.com/connect`

## Google Search Console

1. Open the property for `https://methmaldeshapriya.com/`.
2. Open `URL Inspection`.
3. Paste each important URL one at a time.
4. Click `Test Live URL`.
5. If the live test succeeds, click `Request Indexing`.
6. Open `Sitemaps`.
7. Submit `https://methmaldeshapriya.com/sitemap.xml`.
8. Recheck the Coverage or Page Indexing reports later for crawl or canonical issues.

## Bing Webmaster Tools

1. Open the site property for `https://methmaldeshapriya.com/`.
2. Confirm the existing `BingSiteAuth.xml` verification method if Bing asks for ownership validation.
3. Open the sitemap submission area and submit `https://methmaldeshapriya.com/sitemap.xml`.
4. Open the URL submission tool and submit the important URLs listed above.
5. Revisit crawl or indexing reports later to confirm discovery and processing.

## Optional IndexNow

1. Generate an IndexNow key.
2. Add a UTF-8 text file at `public/<INDEXNOW_KEY>.txt`.
3. Put the exact same key string inside that file.
4. Deploy the site so the key file is publicly reachable at `https://methmaldeshapriya.com/<INDEXNOW_KEY>.txt`.
5. Set `INDEXNOW_KEY=<your key>` in the environment where you will run the helper script.
6. If your key file will live at a different public URL, also set `INDEXNOW_KEY_LOCATION=<full public key URL>`.
7. Run `npm run indexnow:submit` to submit the main portfolio URLs.
8. To submit a smaller set of changed URLs only, run `npm run indexnow:submit -- <url1> <url2>`.

## Quick Post-Deploy Checks

- Open `https://methmaldeshapriya.com/robots.txt` and confirm it allows `/` and lists the sitemap.
- Open `https://methmaldeshapriya.com/sitemap.xml` and confirm the latest public routes are present.
- Test the homepage and one internal page in a social preview debugger if you want to confirm the new Open Graph image and descriptions are being picked up.
