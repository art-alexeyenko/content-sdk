[**@sitecore-content-sdk/nextjs**](../../README.md)

***

[@sitecore-content-sdk/nextjs](../../README.md) / [middleware](../README.md) / Middleware

# Abstract Class: Middleware

Defined in: [nextjs/src/middleware/middleware.ts:44](https://github.com/art-alexeyenko/content-sdk/blob/b2576230b80e8601364b6106089e676fb30b8c34/packages/nextjs/src/middleware/middleware.ts#L44)

Middleware class to be extended by all middleware implementations

## Extended by

- [`MiddlewareBase`](MiddlewareBase.md)

## Constructors

### Constructor

> **new Middleware**(): `Middleware`

#### Returns

`Middleware`

## Methods

### handle()

> `abstract` **handle**(`req`, `res`, `ev`): `Promise`\<`NextResponse`\<`unknown`\>\>

Defined in: [nextjs/src/middleware/middleware.ts:51](https://github.com/art-alexeyenko/content-sdk/blob/b2576230b80e8601364b6106089e676fb30b8c34/packages/nextjs/src/middleware/middleware.ts#L51)

Handler method to execute middleware logic

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `req` | `NextRequest` | request |
| `res` | `NextResponse` | response |
| `ev` | `NextFetchEvent` | fetch event |

#### Returns

`Promise`\<`NextResponse`\<`unknown`\>\>
