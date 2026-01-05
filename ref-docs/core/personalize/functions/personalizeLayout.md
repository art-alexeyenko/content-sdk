[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [personalize](../README.md) / personalizeLayout

# Function: personalizeLayout()

> **personalizeLayout**(`layout`, `variantId`, `componentVariantIds?`): [`PlaceholdersData`](../../layout/type-aliases/PlaceholdersData.md)\<`string`\> \| `undefined`

Defined in: [packages/core/src/personalize/layout-personalizer.ts:21](https://github.com/art-alexeyenko/content-sdk/blob/0ed73ce8fe13bd7db4b4355919225edac7228777/packages/core/src/personalize/layout-personalizer.ts#L21)

Apply personalization to layout data. This will recursively go through all placeholders/components, check experiences nodes and replace default with object from specific experience.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layout` | [`LayoutServiceData`](../../layout/interfaces/LayoutServiceData.md) | Layout data |
| `variantId` | `string` | variant id |
| `componentVariantIds?` | `string`[] | component variant ids |

## Returns

[`PlaceholdersData`](../../layout/type-aliases/PlaceholdersData.md)\<`string`\> \| `undefined`
