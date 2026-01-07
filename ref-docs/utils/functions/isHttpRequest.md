[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / isHttpRequest

# Function: isHttpRequest()

> **isHttpRequest**(`request`): `request is HttpRequest`

Defined in: [typeguards/is-http-request.ts:8](https://github.com/art-alexeyenko/content-sdk/blob/b6e41aa7734010a43e172f661838132f3f789d2d/packages/utils/src/typeguards/is-http-request.ts#L8)

Determines whether the given request is an HTTP request instance.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | [`Request`](../type-aliases/Request.md) | The request candidate to validate. |

## Returns

`request is HttpRequest`

True when the request exposes HTTP headers.
