# Web Scraping API
An API server for web scraping built using [Express](https://expressjs.com/) and [Cheerio](https://cheerio.js.org/). This implementation provides multiple API endpoints that can be consumed in an app to scrape content like:

1. Canonical
2. Hreflangs
3. Headings (H1, H2 and H3)
4. Open Graph
5. Title
6. Meta Description
7. Meta Keywords

## Tech Stack
1. Express
2. Cheerio
3. Heroku

## Installation
You can install project dependacies using either `npm` or `yarn`.

## Usage
To run app locally, install dependancies and run
```
node server.js
```
Or using nodemon
```
nodemon server.js
```

## API Endpoints

> ### `POST /api/all`

 Endpoint to get all data at once from the URL. You can selectively request a subset of data also.

#### Headers

Header | Value
-------|------
Content-Type|application/json

#### Body

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|yes
canoncial|`bool`|If set to true, will return canonical tag value.|no
keywords|`bool`|If set to true, will return meta keywords.|no
description|`bool`|If set to true, will return meta description.|no
title|`bool`|If set to true, will return title tag value.|no
headings|`bool`|If set to true, will return H1, H2 and H3 tage values.|no
hreflangs|`bool`|If set to true, will return all hreflang tag values.|no

#### cURL

```
curl -d '{"url":"https://example.com","canonical":true,"keywords":true,"description":true,"title":true,"headings":true,"hreflangs":true}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/all
```

> ### `POST /api/canoncial`

Endpoint to get canoncial tag value from the URL.

#### Headers

Header | Value
-------|------
Content-Type|application/json

#### Body

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|yes

#### cURL

```
curl -d '{"url":"https://example.com"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/canoncial
```

> ### `POST /api/hreflangs`

Endpoint to get hreflang values from the URL.

#### Headers

Header | Value
-------|------
Content-Type|application/json

#### Body

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|yes

#### cURL

```
curl -d '{"url":"https://example.com"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/hreflangs
```

> ### `POST /api/headings`

Endpoint to get H1, H2 and H3 tag values from the URL.

#### Headers

Header | Value
-------|------
Content-Type|application/json

#### Body

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|yes

#### cURL

```
curl -d '{"url":"https://example.com"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/headings
```

> ### `POST /api/opengraph`

Endpoint to get open graph values from the URL.

#### Headers

Header | Value
-------|------
Content-Type|application/json

#### Body

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|yes

#### cURL

```
curl -d '{"url":"https://example.com"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/opengraph
```

> ### `POST /api/title`

Endpoint to get page title value from the URL.

#### Headers

Header | Value
-------|------
Content-Type|application/json

#### Body

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|yes

#### cURL

```
curl -d '{"url":"https://example.com"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/title
```

> ### `POST /api/description`

Endpoint to get meta description from the URL.

#### Headers

Header | Value
-------|------
Content-Type|application/json

#### Body

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|yes

#### cURL

```
curl -d '{"url":"https://example.com"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/description
```

> ### `POST /api/keywords`

Endpoint to get meta keywords from the URL.

#### Headers

Header | Value
-------|------
Content-Type|application/json

#### Body

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|yes

#### cURL

```
curl -d '{"url":"https://example.com"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/keywords
```

## CORS Requests

All API enpoints support CORS requests. You can make API requests directly from the frontend app using JS.

```
{
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST"
}
```
