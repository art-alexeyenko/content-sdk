[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / getCookieServerSide

# Function: getCookieServerSide()

> **getCookieServerSide**(`cookiesHeader`, `cookieName`): \{ `name`: `string`; `value`: `string`; \} \| `undefined`

Defined in: [cookies/get-cookie-server-side.ts:9](https://github.com/art-alexeyenko/content-sdk/blob/a1b608d7430d39cdc031d12a01971d89deb9d1dd/packages/utils/src/cookies/get-cookie-server-side.ts#L9)

Retrieves a cookie from the server-side request header string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cookiesHeader` | `string` \| `undefined` | Raw `cookie` header contents. |
| `cookieName` | `string` | The cookie name to look up. |

## Returns

\{ `name`: `string`; `value`: `string`; \} \| `undefined`

The resolved cookie information when found.
