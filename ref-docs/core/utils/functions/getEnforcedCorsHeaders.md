[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [utils](../README.md) / getEnforcedCorsHeaders

# Function: getEnforcedCorsHeaders()

> **getEnforcedCorsHeaders**(`requestMethod`): \{\[`key`: `string`\]: `string`; \} \| `null`

Defined in: [packages/core/src/utils/utils.ts:171](https://github.com/art-alexeyenko/content-sdk/blob/2b832659ae160ef9ca74750ee8a38981ea98a9cf/packages/core/src/utils/utils.ts#L171)

Gets enforced CORS headers

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `requestMethod` | \{ `allowedOrigins?`: `string`[]; `headers`: `Headers` \| `IncomingHttpHeaders`; `presetCorsHeader?`: `string` \| `string`[]; `requestMethod`: `string` \| `undefined`; \} | The HTTP method of the request. |
| `requestMethod.allowedOrigins?` | `string`[] | - |
| `requestMethod.headers` | `Headers` \| `IncomingHttpHeaders` | - |
| `requestMethod.presetCorsHeader?` | `string` \| `string`[] | - |
| `requestMethod.requestMethod` | `string` \| `undefined` | - |

## Returns

\{\[`key`: `string`\]: `string`; \} \| `null`

- The enforced CORS headers.
