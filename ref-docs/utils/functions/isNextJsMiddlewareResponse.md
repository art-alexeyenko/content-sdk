[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / isNextJsMiddlewareResponse

# Function: isNextJsMiddlewareResponse()

> **isNextJsMiddlewareResponse**(`response`): `response is MiddlewareNextResponse`

Defined in: [typeguards/is-next-js-middleware-response.ts:8](https://github.com/art-alexeyenko/content-sdk/blob/a13613ea851d13256db0ab1ca1304a784d319602/packages/utils/src/typeguards/is-next-js-middleware-response.ts#L8)

Determines whether the given response is a Next.js middleware response.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `response` | [`HttpResponse`](../interfaces/HttpResponse.md) \| [`MiddlewareNextResponse`](../interfaces/MiddlewareNextResponse.md) | The response candidate to validate. |

## Returns

`response is MiddlewareNextResponse`

True when the response exposes middleware cookie helpers.
