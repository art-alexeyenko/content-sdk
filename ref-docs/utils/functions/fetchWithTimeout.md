[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / fetchWithTimeout

# Function: fetchWithTimeout()

> **fetchWithTimeout**(`url`, `timeout`, `fetchOptions`): `Promise`\<`Response` \| `null`\>

Defined in: [fetch/fetch-with-timeout.ts:11](https://github.com/art-alexeyenko/content-sdk/blob/8a81844b730cd0c9856d26d6c197b5d1dc6e8fa4/packages/utils/src/fetch/fetch-with-timeout.ts#L11)

Fetches a resource while enforcing a timeout guard.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The URL to fetch. |
| `timeout` | `number` | Timeout window in milliseconds. |
| `fetchOptions` | `RequestInit` | Options forwarded to the Fetch API. |

## Returns

`Promise`\<`Response` \| `null`\>

Fetch response or null when the request is aborted or times out.

## Throws

When the timeout value is not a non-negative integer or when the request aborts.
