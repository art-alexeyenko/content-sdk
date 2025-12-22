[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / normalizeHeaders

# Function: normalizeHeaders()

> **normalizeHeaders**(`incomingHeaders`): `Record`\<`string`, `string` \| `string`[]\>

Defined in: [converters/normalizeHeaders.ts:6](https://github.com/art-alexeyenko/content-sdk/blob/d53ee27f3ff2a5443095851bffd958117be7a372/packages/utils/src/converters/normalizeHeaders.ts#L6)

Converts headers from various formats into a uniform key-value pair object.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `incomingHeaders` | `HeadersInit` | Incoming headers such as a Headers instance or plain object. |

## Returns

`Record`\<`string`, `string` \| `string`[]\>

Normalized headers as key-value pairs.
