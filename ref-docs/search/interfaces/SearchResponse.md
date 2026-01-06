[**@sitecore-content-sdk/search**](../README.md)

***

[@sitecore-content-sdk/search](../README.md) / SearchResponse

# Interface: SearchResponse\<T\>

Defined in: [search-service.ts:48](https://github.com/art-alexeyenko/content-sdk/blob/8a81844b730cd0c9856d26d6c197b5d1dc6e8fa4/packages/search/src/search-service.ts#L48)

Response from the Search Service.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`SearchDocument`](../type-aliases/SearchDocument.md) | [`SearchDocument`](../type-aliases/SearchDocument.md) |

## Properties

### results

> **results**: `T`[]

Defined in: [search-service.ts:52](https://github.com/art-alexeyenko/content-sdk/blob/8a81844b730cd0c9856d26d6c197b5d1dc6e8fa4/packages/search/src/search-service.ts#L52)

The search results.

***

### total

> **total**: `number`

Defined in: [search-service.ts:56](https://github.com/art-alexeyenko/content-sdk/blob/8a81844b730cd0c9856d26d6c197b5d1dc6e8fa4/packages/search/src/search-service.ts#L56)

The total number of search results.
