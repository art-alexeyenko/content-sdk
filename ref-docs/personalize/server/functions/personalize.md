[**@sitecore-content-sdk/personalize**](../../README.md)

***

[@sitecore-content-sdk/personalize](../../README.md) / [server](../README.md) / personalize

# Function: personalize()

> **personalize**\<`T`\>(`request`, `personalizeData`, `opts?`): `Promise`\<`unknown`\>

Defined in: [personalization/personalizeServer.ts:24](https://github.com/art-alexeyenko/content-sdk/blob/8a81844b730cd0c9856d26d6c197b5d1dc6e8fa4/packages/personalize/src/personalization/personalizeServer.ts#L24)

A function that executes an interactive experiment or web experiment over any web-based or mobile application.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Request` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | `T` | The request object, either a Middleware Request or an HTTP Request |
| `personalizeData` | [`PersonalizeData`](../../browser/interfaces/PersonalizeData.md) | The required/optional attributes in order to create a flow execution |
| `opts?` | `PersonalizeServerOpts` | An optional object containing additional options such as timeout. Used to abort the request to execute an interactive experiment or web experiment. |

## Returns

`Promise`\<`unknown`\>

A flow execution response
