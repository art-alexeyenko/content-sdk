[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [utils](../README.md) / getCache

# Function: getCache()

> **getCache**\<`T`\>(`key`): `T` \| `undefined`

Defined in: [packages/core/src/utils/globalCache.ts:28](https://github.com/art-alexeyenko/content-sdk/blob/beadd6e495d5f24730d94de024b63002d04f529b/packages/core/src/utils/globalCache.ts#L28)

**`Internal`**

Retrieves a value from the global cache by key.
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
