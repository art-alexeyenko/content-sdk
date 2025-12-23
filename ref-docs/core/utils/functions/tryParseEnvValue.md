[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [utils](../README.md) / tryParseEnvValue

# Function: tryParseEnvValue()

> **tryParseEnvValue**\<`T`\>(`envValue`, `defaultValue`): `T`

Defined in: [packages/core/src/utils/env.ts:8](https://github.com/art-alexeyenko/content-sdk/blob/6c9a86bbd7231abfc8551dcf29eee14e028478b7/packages/core/src/utils/env.ts#L8)

Method to parse JSON-formatted environment variables

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `envValue` | `string` \| `undefined` | can be undefined when providing values via process.env |
| `defaultValue` | `T` | default value |

## Returns

`T`

parsed value
