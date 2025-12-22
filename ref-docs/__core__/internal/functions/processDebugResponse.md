[**@sitecore-content-sdk/__core__**](../../README.md)

***

[@sitecore-content-sdk/__core__](../../README.md) / [internal](../README.md) / processDebugResponse

# Function: processDebugResponse()

> **processDebugResponse**(`namespace`, `response`): `object`

Defined in: [src/debug/debug.ts:13](https://github.com/art-alexeyenko/content-sdk/blob/2dd3f0c6f575bbf108a517b44c8f7fbfc11506ed/packages/__core__/src/debug/debug.ts#L13)

Extracts debug information from an HTTP response if debugging is enabled.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `namespace` | `string` | The debug namespace used to check if debugging is enabled. |
| `response` | `Response` | The HTTP response object from fetch. |

## Returns

`object`

An object containing selected response details for debugging purposes.
