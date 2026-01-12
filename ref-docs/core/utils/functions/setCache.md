[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [utils](../README.md) / setCache

# Function: setCache()

> **setCache**(`key`, `data`): `void`

Defined in: [packages/core/src/utils/globalCache.ts:14](https://github.com/art-alexeyenko/content-sdk/blob/b2576230b80e8601364b6106089e676fb30b8c34/packages/core/src/utils/globalCache.ts#L14)

**`Internal`**

Stores a value in the global cache under the specified key.
- Initializes the cache object on `globalThis` if it does not exist.
- Overwrites any existing value for the given key.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The cache key to set. |
| `data` | `unknown` | The value to store in the cache. |

## Returns

`void`
