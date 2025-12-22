[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [personalize](../README.md) / getGroomedVariantIds

# Function: getGroomedVariantIds()

> **getGroomedVariantIds**(`variantIds`): [`PersonalizedRewriteData`](../type-aliases/PersonalizedRewriteData.md)

Defined in: [packages/core/src/personalize/utils.ts:49](https://github.com/art-alexeyenko/content-sdk/blob/d4e9fb1eec4b9df146febaa5566096221de3f17c/packages/core/src/personalize/utils.ts#L49)

Parses a list of variantIds and divides into layout and component variants

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `variantIds` | `string`[] | the list of variant IDs for a page |

## Returns

[`PersonalizedRewriteData`](../type-aliases/PersonalizedRewriteData.md)

object with variant IDs sorted
