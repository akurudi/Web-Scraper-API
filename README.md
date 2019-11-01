# WEB SCRAPER
An API server for web scraping built using [Express](https://expressjs.com/) and [Cheerio](https://cheerio.js.org/). This implementation provides multiple API endpoints that can be consumed in an app to scrape content like:

1. Canonical
2. Meta Keywords
3. Meta Description
4. Title
5. Headings (H1, H2 and H3)
6. Hreflangs

## Installation
You can install project dependacies using either `npm` or `yarn`.

## Usage
To run app locally, install dependancies and run
```bash
node server.js
```
Or using nodemon
```
nodemon server.js
```

## API Endpoints
1. `POST /api/all`

Endpoint to get all data at once from the URL. You can selectively request a subset of data also.

### Parameters

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|YES
canoncial|`bool`|If set to true, will return canonical tag value.|NO
keywords|`bool`|If set to true, will return meta keywords.|NO
description|`bool`|If set to true, will return meta description.|NO
title|`bool`|If set to true, will return title tag value.|NO
headings|`bool`|If set to true, will return H1, H2 and H3 tage values.|NO
hreflangs|`bool`|If set to true, will return all hreflang tag values.|NO

### cURL

```curl -d '{"url":"https://example.com","canonical":true,"keywords":true,"description":true,"title":true,"headings":true,"hreflangs":true}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/all```

2. `/api/canoncial`

Endpoint to get canoncial tag value from the URL.

### Parameters

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|YES

### cURL

```curl -d '{"url":"https://example.com"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/canoncial```

3. `/api/keywords`

Endpoint to get meta keywords from the URL.

### Parameters

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|YES

### cURL

```curl -d '{"url":"https://example.com"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/keywords```

4. `/api/description`

Endpoint to get meta description from the URL.

### Parameters

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|YES

### cURL

```curl -d '{"url":"https://example.com"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/description```

5. `/api/title`

Endpoint to get title tage value from the URL.

### Parameters

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|YES

### cURL

```curl -d '{"url":"https://example.com"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/title```

6. `/api/headings`

Endpoint to get H1, H2 and H3 tag values from the URL.

### Parameters

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|YES

### cURL

```curl -d '{"url":"https://example.com"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/headings```

7. `/api/hreflangs`

Endpoint to get hreflang values from the URL.

### Parameters

Name | Data Type |Description | Required
-----|-----------|------------|---------
url|`string`|URL or the webpage to scrape data from.|YES

### cURL

```curl -d '{"url":"https://example.com"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/hreflangs```