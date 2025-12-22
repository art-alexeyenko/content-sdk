[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / getCookie

# Function: getCookie()

> **getCookie**(`cookieStr`, `cookieName`): \{ `name`: `string`; `value`: `string`; \} \| `undefined`

Defined in: [cookies/get-cookie.ts:7](https://github.com/art-alexeyenko/content-sdk/blob/2dd3f0c6f575bbf108a517b44c8f7fbfc11506ed/packages/utils/src/cookies/get-cookie.ts#L7)

Retrieves a cookie by name from a cookie string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cookieStr` | `string` \| `undefined` | Cookie string containing serialized cookies. |
| `cookieName` | `string` | The cookie name to locate. |

## Returns

\{ `name`: `string`; `value`: `string`; \} \| `undefined`

The cookie name/value pair when found.
