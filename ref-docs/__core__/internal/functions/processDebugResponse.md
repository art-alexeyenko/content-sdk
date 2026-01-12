[**@sitecore-content-sdk/__core__**](../../README.md)

***

[@sitecore-content-sdk/__core__](../../README.md) / [internal](../README.md) / processDebugResponse

# Function: processDebugResponse()

> **processDebugResponse**(`namespace`, `response`): `object`

Defined in: [src/debug/debug.ts:13](https://github.com/art-alexeyenko/content-sdk/blob/2b832659ae160ef9ca74750ee8a38981ea98a9cf/packages/__core__/src/debug/debug.ts#L13)

Extracts debug information from an HTTP response if debugging is enabled.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `namespace` | `string` | The debug namespace used to check if debugging is enabled. |
| `response` | `Response` | The HTTP response object from fetch. |

## Returns

`object`

An object containing selected response details for debugging purposes.
