[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [tools](../README.md) / generateMetadata

# Function: generateMetadata()

> **generateMetadata**(`config?`): () => `Promise`\<`void`\>

Defined in: [packages/core/src/tools/generateMetadata.ts:36](https://github.com/art-alexeyenko/content-sdk/blob/2dd3f0c6f575bbf108a517b44c8f7fbfc11506ed/packages/core/src/tools/generateMetadata.ts#L36)

Generate application metadata

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config?` | `GenerateMetadataConfig` | Optional configuration for generating metadata. If not provided, the default '.sitecore/metadata.json' will be used and allowWorkspaces will be set to false. |

## Returns

A promise that resolves when the metadata generation is complete.

> (): `Promise`\<`void`\>

### Returns

`Promise`\<`void`\>
