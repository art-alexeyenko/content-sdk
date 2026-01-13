[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [utils](../README.md) / tryParseEnvValue

# Function: tryParseEnvValue()

> **tryParseEnvValue**\<`T`\>(`envValue`, `defaultValue`): `T`

Defined in: [packages/core/src/utils/env.ts:8](https://github.com/art-alexeyenko/content-sdk/blob/2c429229afa7f3ed739cd74d05344daf2e792503/packages/core/src/utils/env.ts#L8)

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
