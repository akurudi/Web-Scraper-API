# Web Scraping API
RESTful API server for web scraping built using [Express](https://expressjs.com/) and [Cheerio](https://cheerio.js.org/). This implementation provides multiple API endpoints that can be consumed in an app to scrape content like:

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
`yarn install`

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

> ### `GET /api/all`

 Endpoint to get all data at once from the URL. You can selectively request a subset of data.

#### Query Parameters

Name |Description | Required
-----|-----------|------------|---------
url|URL or the webpage to scrape data from.|yes
canoncial|If set to true, will return canonical tag value.|no
keywords|If set to true, will return meta keywords.|no
description|If set to true, will return meta description.|no
title|If set to true, will return title tag value.|no
headings|If set to true, will return H1, H2 and H3 tag values.|no
hreflangs|If set to true, will return all hreflang tag values.|no

#### cURL

```
curl --location --request GET 'http://localhost:4000/api/all?url=https://www.shopmarriott.com/product.aspx?the-marriott-pillow&canonical=true&description=true&keywords=true&title=true&headings=true&hreflangs=true'
```

> ### `GET /api/canoncial`

Endpoint to get canoncial tag value from the URL.

#### Query Parameters

Name |Description | Required
-----|-----------|------------|---------
url|URL or the webpage to scrape data from.|yes

#### cURL

```
curl --location --request GET 'http://localhost:4000/api/canonical?url=https://www.shopmarriott.com/product.aspx?the-marriott-pillow'
```

> ### `GET /api/hreflangs`

Endpoint to get hreflang values from the URL.

#### Body

Name | Description | Required
-----|-----------|------------
url|URL or the webpage to scrape data from.|yes

#### cURL

```
curl --location --request GET 'http://localhost:4000/api/hreflangs?url=https://www.shopmarriott.com/product.aspx?the-marriott-pillow'
```

> ### `GET /api/headings`

Endpoint to get H1, H2 and H3 tag values from the URL.

#### Body

Name | Description | Required
-----|-----------|-----------
url|URL or the webpage to scrape data from.|yes

#### cURL

```
curl --location --request GET 'http://localhost:4000/api/headings?url=https://www.shopmarriott.com/product.aspx?the-marriott-pillow'
```

> ### `GET /api/opengraph`

Endpoint to get open graph values from the URL.

#### Body

Name |Description | Required
-----|-----------|------------|---------
url|URL or the webpage to scrape data from.|yes

#### cURL

```
curl --location --request GET 'http://localhost:4000/api/opengraph?url=https://www.shopmarriott.com/product.aspx?the-marriott-pillow'
```

> ### `GET /api/title`

Endpoint to get page title value from the URL.

#### Body

Name |Description | Required
-----|-----------|------------
url|URL or the webpage to scrape data from.|yes

#### cURL

```
curl --location --request GET 'http://localhost:4000/api/title?url=https://www.shopmarriott.com/product.aspx?the-marriott-pillow'
```

> ### `GET /api/description`

Endpoint to get meta description from the URL.

#### Body

Name | Description | Required
-----|-----------|------------
url|URL or the webpage to scrape data from.|yes

#### cURL

```
curl --location --request GET 'http://localhost:4000/api/description?url=https://www.shopmarriott.com/product.aspx?the-marriott-pillow'
```

> ### `GET /api/keywords`

Endpoint to get meta keywords from the URL.

#### Body

Name | Description | Required
-----|-----------|------------
url|URL or the webpage to scrape data from.|yes

#### cURL

```
curl --location --request GET 'http://localhost:4000/api/keywords?url=https://www.shopmarriott.com/product.aspx?the-marriott-pillow'
```

## CORS Requests

All API enpoints support CORS requests. You can make API requests directly from the frontend app.

```
{
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "GET"
}
```
