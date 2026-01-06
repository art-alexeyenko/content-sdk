[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / getCookie

# Function: getCookie()

> **getCookie**(`cookieStr`, `cookieName`): \{ `name`: `string`; `value`: `string`; \} \| `undefined`

Defined in: [cookies/get-cookie.ts:7](https://github.com/art-alexeyenko/content-sdk/blob/8a81844b730cd0c9856d26d6c197b5d1dc6e8fa4/packages/utils/src/cookies/get-cookie.ts#L7)

Retrieves a cookie by name from a cookie string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cookieStr` | `string` \| `undefined` | Cookie string containing serialized cookies. |
| `cookieName` | `string` | The cookie name to locate. |

## Returns

\{ `name`: `string`; `value`: `string`; \} \| `undefined`

The cookie name/value pair when found.
