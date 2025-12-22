[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / isNextJsMiddlewareResponse

# Function: isNextJsMiddlewareResponse()

> **isNextJsMiddlewareResponse**(`response`): `response is MiddlewareNextResponse`

Defined in: [typeguards/is-next-js-middleware-response.ts:8](https://github.com/art-alexeyenko/content-sdk/blob/c4121ed79c517668fe049d0732ca31a70ead1500/packages/utils/src/typeguards/is-next-js-middleware-response.ts#L8)

Determines whether the given response is a Next.js middleware response.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `response` | [`HttpResponse`](../interfaces/HttpResponse.md) \| [`MiddlewareNextResponse`](../interfaces/MiddlewareNextResponse.md) | The response candidate to validate. |

## Returns

`response is MiddlewareNextResponse`

True when the response exposes middleware cookie helpers.
