[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / isNextJsMiddlewareResponse

# Function: isNextJsMiddlewareResponse()

> **isNextJsMiddlewareResponse**(`response`): `response is MiddlewareNextResponse`

Defined in: [typeguards/is-next-js-middleware-response.ts:8](https://github.com/art-alexeyenko/content-sdk/blob/7d6b6bcd429d8765579a73cb4dabefc4d9064576/packages/utils/src/typeguards/is-next-js-middleware-response.ts#L8)

Determines whether the given response is a Next.js middleware response.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `response` | [`HttpResponse`](../interfaces/HttpResponse.md) \| [`MiddlewareNextResponse`](../interfaces/MiddlewareNextResponse.md) | The response candidate to validate. |

## Returns

`response is MiddlewareNextResponse`

True when the response exposes middleware cookie helpers.
