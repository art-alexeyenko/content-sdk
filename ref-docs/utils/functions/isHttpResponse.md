[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / isHttpResponse

# Function: isHttpResponse()

> **isHttpResponse**(`response`): `response is HttpResponse`

Defined in: [typeguards/is-http-response.ts:8](https://github.com/art-alexeyenko/content-sdk/blob/b8246f9021f5af08e8401dc62db33cfc1828e995/packages/utils/src/typeguards/is-http-response.ts#L8)

Determines whether the given response is an HTTP response instance.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `response` | [`HttpResponse`](../interfaces/HttpResponse.md) \| [`MiddlewareNextResponse`](../interfaces/MiddlewareNextResponse.md) | The response candidate to validate. |

## Returns

`response is HttpResponse`

True when the response implements the required HTTP methods.
