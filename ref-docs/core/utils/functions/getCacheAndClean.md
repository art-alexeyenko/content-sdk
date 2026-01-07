[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [utils](../README.md) / getCacheAndClean

# Function: getCacheAndClean()

> **getCacheAndClean**\<`T`\>(`key`): `T` \| `undefined`

Defined in: [packages/core/src/utils/globalCache.ts:40](https://github.com/art-alexeyenko/content-sdk/blob/be971d8507ca2ee50b70c8f8e04cbf8e7b423cf9/packages/core/src/utils/globalCache.ts#L40)

**`Internal`**

Retrieves a value from the global cache by key and removes it from the cache.
 - The cache is stored on `globalThis`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The cache key to retrieve and remove. |

## Returns

`T` \| `undefined`

- The cached value if present, otherwise undefined.
