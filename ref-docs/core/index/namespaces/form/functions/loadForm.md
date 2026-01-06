[**@sitecore-content-sdk/core**](../../../../README.md)

***

[@sitecore-content-sdk/core](../../../../README.md) / [index](../../../README.md) / [form](../README.md) / loadForm

# Function: loadForm()

> **loadForm**(`contextId`, `formId`, `edgeUrl?`): `Promise`\<`string`\>

Defined in: [packages/core/src/form/form.ts:12](https://github.com/art-alexeyenko/content-sdk/blob/a13613ea851d13256db0ab1ca1304a784d319602/packages/core/src/form/form.ts#L12)

**`Internal`**

Fetches the form markup from the Sitecore Edge service and renders it in the component's template.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `contextId` | `string` | The unique identifier of the current context |
| `formId` | `string` | The unique identifier of the form |
| `edgeUrl?` | `string` | The URL of the Sitecore Edge Platform |

## Returns

`Promise`\<`string`\>
