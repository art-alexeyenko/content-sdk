[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [tools](../README.md) / defaultImportMapTemplate

# Variable: defaultImportMapTemplate()

> **defaultImportMapTemplate**: (`indexedImportMap`, `framework`) => `string` = `_defaultMapTemplate`

Defined in: [packages/core/src/tools/codegen/import-map.ts:34](https://github.com/art-alexeyenko/content-sdk/blob/1e7c0f41c94bd5d18622e4f7e52cdf15e3231ce8/packages/core/src/tools/codegen/import-map.ts#L34)

**`Internal`**

Builds file contents for component map based on the default template

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `indexedImportMap` | `Map`\<`string`, [`ModuleExports`](../type-aliases/ModuleExports.md)\> | `undefined` | map to be processed into final component-map.ts file |
| `framework` | `string` | `'core'` | - |

## Returns

`string`

file code for component-map.ts
