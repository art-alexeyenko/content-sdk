[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / isNextJsMiddlewareRequest

# Function: isNextJsMiddlewareRequest()

> **isNextJsMiddlewareRequest**(`request`): `request is MiddlewareRequest`

Defined in: [typeguards/is-next-js-middleware-request.ts:8](https://github.com/art-alexeyenko/content-sdk/blob/6a0e8a50da1a3fd5ec8a7095da09c7b568dc100e/packages/utils/src/typeguards/is-next-js-middleware-request.ts#L8)

Determines whether the given request is a Next.js middleware request.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | [`Request`](../type-aliases/Request.md) | The request candidate to validate. |

## Returns

`request is MiddlewareRequest`

True when the request exposes middleware cookie helpers.
