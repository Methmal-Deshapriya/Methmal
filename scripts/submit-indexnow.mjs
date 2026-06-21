const DEFAULT_URLS = [
  "https://methmaldeshapriya.com",
  "https://methmaldeshapriya.com/projects",
  "https://methmaldeshapriya.com/blogs",
  "https://methmaldeshapriya.com/foundry",
  "https://methmaldeshapriya.com/education",
  "https://methmaldeshapriya.com/xoxodevs",
  "https://methmaldeshapriya.com/connect",
];

const INDEXNOW_ENDPOINT =
  process.env.INDEXNOW_ENDPOINT ?? "https://api.indexnow.org/indexnow";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const INDEXNOW_KEY_LOCATION =
  process.env.INDEXNOW_KEY_LOCATION ??
  (INDEXNOW_KEY
    ? `https://methmaldeshapriya.com/${INDEXNOW_KEY}.txt`
    : undefined);

function fail(message) {
  console.error(message);
  process.exit(1);
}

if (!INDEXNOW_KEY) {
  fail(
    "INDEXNOW_KEY is not set. Create an IndexNow key, deploy public/<key>.txt with the same key inside it, then rerun this script."
  );
}

if (!INDEXNOW_KEY_LOCATION) {
  fail("INDEXNOW_KEY_LOCATION could not be determined.");
}

const urlList = process.argv.slice(2);
const urlsToSubmit = urlList.length > 0 ? urlList : DEFAULT_URLS;

if (urlsToSubmit.length === 0) {
  fail("No URLs were provided for IndexNow submission.");
}

for (const url of urlsToSubmit) {
  if (!url.startsWith("https://methmaldeshapriya.com")) {
    fail(
      `IndexNow submissions must stay on methmaldeshapriya.com. Invalid URL: ${url}`
    );
  }
}

const response = await fetch(INDEXNOW_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({
    host: "methmaldeshapriya.com",
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urlsToSubmit,
  }),
});

if (!response.ok) {
  const body = await response.text();
  fail(
    `IndexNow submission failed with ${response.status} ${response.statusText}.\n${body}`
  );
}

console.log(
  `Submitted ${urlsToSubmit.length} URL(s) to IndexNow via ${INDEXNOW_ENDPOINT}.`
);
