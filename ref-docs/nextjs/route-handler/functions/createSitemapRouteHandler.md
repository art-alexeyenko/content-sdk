[**@sitecore-content-sdk/nextjs**](../../README.md)

***

[@sitecore-content-sdk/nextjs](../../README.md) / [route-handler](../README.md) / createSitemapRouteHandler

# Function: createSitemapRouteHandler()

> **createSitemapRouteHandler**(`options`): `object`

Defined in: [nextjs/src/route-handler/sitemap-route-handler.ts:30](https://github.com/art-alexeyenko/content-sdk/blob/cb360062d5d2727c847137947cca7f385d30f982/packages/nextjs/src/route-handler/sitemap-route-handler.ts#L30)

Creates a route handler to serve the sitemap.xml file.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `RouteHandlerOptions` | The options for the route handler. |

## Returns

`object`

The route handler.

### GET()

> **GET**: (`req`) => `Promise`\<`Response`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `req` | `NextRequest` |

#### Returns

`Promise`\<`Response`\>
