[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [tools](../README.md) / generateMetadata

# Function: generateMetadata()

> **generateMetadata**(`config?`): () => `Promise`\<`void`\>

Defined in: [packages/core/src/tools/generateMetadata.ts:36](https://github.com/art-alexeyenko/content-sdk/blob/c8186e61be966473f7057847cb9f594a30e438c4/packages/core/src/tools/generateMetadata.ts#L36)

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
