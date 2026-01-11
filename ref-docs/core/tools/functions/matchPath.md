[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [tools](../README.md) / matchPath

# Function: matchPath()

> **matchPath**(`itemPath`, `compare`): `boolean`

Defined in: [packages/core/src/tools/templating/utils.ts:39](https://github.com/art-alexeyenko/content-sdk/blob/a1544d7573ce221b8fa383f903d8ea496a58d2ed/packages/core/src/tools/templating/utils.ts#L39)

Compares two paths to determine if they match.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `itemPath` | `string` | base path to compare against, can be absolute or relative |
| `compare` | `string` | comparer, can be relate, absolute or regex string |

## Returns

`boolean`

true if paths match, false otherwise
