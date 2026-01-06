[**@sitecore-content-sdk/nextjs**](../../README.md)

***

[@sitecore-content-sdk/nextjs](../../README.md) / [middleware](../README.md) / defineMiddleware

# Function: defineMiddleware()

> **defineMiddleware**(...`middlewares`): `object`

Defined in: [nextjs/src/middleware/middleware.ts:234](https://github.com/art-alexeyenko/content-sdk/blob/8a81844b730cd0c9856d26d6c197b5d1dc6e8fa4/packages/nextjs/src/middleware/middleware.ts#L234)

Define a middleware with a list of middlewares

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`middlewares` | [`Middleware`](../classes/Middleware.md)[] | List of middlewares to execute |

## Returns

### exec()

> **exec**: (`req`, `ev`, `res?`) => `Promise`\<`NextResponse`\<`unknown`\>\>

Execute all middlewares

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `req` | `NextRequest` | request |
| `ev` | `NextFetchEvent` | fetch event |
| `res?` | `NextResponse`\<`unknown`\> | response |

#### Returns

`Promise`\<`NextResponse`\<`unknown`\>\>
