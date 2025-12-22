[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / isHttpRequest

# Function: isHttpRequest()

> **isHttpRequest**(`request`): `request is HttpRequest`

Defined in: [typeguards/is-http-request.ts:8](https://github.com/art-alexeyenko/content-sdk/blob/1b2a179d259d1764bc31716a149252d59a5ba5be/packages/utils/src/typeguards/is-http-request.ts#L8)

Determines whether the given request is an HTTP request instance.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | [`Request`](../type-aliases/Request.md) | The request candidate to validate. |

## Returns

`request is HttpRequest`

True when the request exposes HTTP headers.
