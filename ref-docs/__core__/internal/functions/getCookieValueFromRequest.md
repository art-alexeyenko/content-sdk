[**@sitecore-content-sdk/__core__**](../../README.md)

***

[@sitecore-content-sdk/__core__](../../README.md) / [internal](../README.md) / getCookieValueFromRequest

# Function: getCookieValueFromRequest()

> **getCookieValueFromRequest**\<`T`\>(`request`, `cookieName`): `string`

Defined in: [src/cookie/get-cookie-value-from-request.ts:15](https://github.com/art-alexeyenko/content-sdk/blob/cb360062d5d2727c847137947cca7f385d30f982/packages/__core__/src/cookie/get-cookie-value-from-request.ts#L15)

Retrieves the cookie value from the provided request object, using the specified `cookieName`.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Request` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | `T` | The request object, either a middleware request or an HTTP request. |
| `cookieName` | `string` | The name of the cookie to retrieve the cookie value from. |

## Returns

`string`

The cookie value extracted from the cookie or an empty string if not found.
