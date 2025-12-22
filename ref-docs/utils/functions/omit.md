[**@sitecore-content-sdk/utils**](../README.md)

***

[@sitecore-content-sdk/utils](../README.md) / omit

# Function: omit()

> **omit**\<`Data`, `Keys`\>(`data`, `keys`): `Omit`\<`Data`, `Keys`\>

Defined in: [objects/omit.ts:7](https://github.com/art-alexeyenko/content-sdk/blob/0437df48773319db16bfff7850dd439f57830181/packages/utils/src/objects/omit.ts#L7)

Omits the provided keys from the given object.

## Type Parameters

| Type Parameter |
| ------ |
| `Data` *extends* `object` |
| `Keys` *extends* `string` \| `number` \| `symbol` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `Data` | The source object. |
| `keys` | `Keys`[] | Keys to omit from the source object. |

## Returns

`Omit`\<`Data`, `Keys`\>

Object without the specified keys.
