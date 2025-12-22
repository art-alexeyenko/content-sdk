[**@sitecore-content-sdk/nextjs**](../../README.md)

***

[@sitecore-content-sdk/nextjs](../../README.md) / [route-handler](../README.md) / createRobotsRouteHandler

# Function: createRobotsRouteHandler()

> **createRobotsRouteHandler**(`options`): `object`

Defined in: [nextjs/src/route-handler/robots-route-handler.ts:30](https://github.com/art-alexeyenko/content-sdk/blob/84f33d3dfa259e1f93151ebba6e8b47fff4e8b7a/packages/nextjs/src/route-handler/robots-route-handler.ts#L30)

Creates a route handler to serve the robots.txt file.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `RouteHandlerOptions` | The options for the route handler. |

## Returns

`object`

The route handler object with GET method.

### GET()

> **GET**: (`req`) => `Promise`\<`Response`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `req` | `NextRequest` |

#### Returns

`Promise`\<`Response`\>
