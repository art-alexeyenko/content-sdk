[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [utils](../README.md) / hasCache

# Function: hasCache()

> **hasCache**(`key`): `boolean`

Defined in: [packages/core/src/utils/globalCache.ts:54](https://github.com/art-alexeyenko/content-sdk/blob/1e7c0f41c94bd5d18622e4f7e52cdf15e3231ce8/packages/core/src/utils/globalCache.ts#L54)

**`Internal`**

Determines whether a cached value exists for the provided key
 - The cache is stored on `globalThis`

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The cache key to test for existence. |

## Returns

`boolean`

- true if a value is present for the given key; otherwise false.
