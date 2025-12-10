[**@sitecore-content-sdk/nextjs**](../../README.md)

***

[@sitecore-content-sdk/nextjs](../../README.md) / [middleware](../README.md) / SitemapMiddleware

# Class: SitemapMiddleware

Defined in: [nextjs/src/middleware/sitemap-middleware.ts:10](https://github.com/art-alexeyenko/content-sdk/blob/8dfd2af042fa56663d300593fd62e13066c2b706/packages/nextjs/src/middleware/sitemap-middleware.ts#L10)

Middleware for handling sitemap requests in a Next.js application.
Encapsulates all HTTP-related logic for sitemap generation and delivery.

## Constructors

### Constructor

> **new SitemapMiddleware**(`client`, `sites`): `SitemapMiddleware`

Defined in: [nextjs/src/middleware/sitemap-middleware.ts:14](https://github.com/art-alexeyenko/content-sdk/blob/8dfd2af042fa56663d300593fd62e13066c2b706/packages/nextjs/src/middleware/sitemap-middleware.ts#L14)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `SitecoreClient` |
| `sites` | [`SiteInfo`](../../index/type-aliases/SiteInfo.md)[] |

#### Returns

`SitemapMiddleware`

## Methods

### getHandler()

> **getHandler**(): (`req`, `res`) => `Promise`\<`void`\>

Defined in: [nextjs/src/middleware/sitemap-middleware.ts:19](https://github.com/art-alexeyenko/content-sdk/blob/8dfd2af042fa56663d300593fd62e13066c2b706/packages/nextjs/src/middleware/sitemap-middleware.ts#L19)

#### Returns

> (`req`, `res`): `Promise`\<`void`\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `req` | `NextApiRequest` |
| `res` | `NextApiResponse` |

##### Returns

`Promise`\<`void`\>
