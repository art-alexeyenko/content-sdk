[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / isHttpRequest

# Function: isHttpRequest()

> **isHttpRequest**(`request`): `request is HttpRequest`

Defined in: [typeguards/is-http-request.ts:8](https://github.com/art-alexeyenko/content-sdk/blob/d2aeed0eb182d0d22c7cf0fc3a7b20aa8a205edb/packages/utils/src/typeguards/is-http-request.ts#L8)

Determines whether the given request is an HTTP request instance.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | [`Request`](../type-aliases/Request.md) | The request candidate to validate. |

## Returns

`request is HttpRequest`

True when the request exposes HTTP headers.
