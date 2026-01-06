[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [tools](../README.md) / scaffoldComponent

# Function: scaffoldComponent()

> **scaffoldComponent**(`outputFolderPath`, `componentName`, `templateName`, `templates`): `void`

Defined in: [packages/core/src/tools/scaffold.ts:47](https://github.com/art-alexeyenko/content-sdk/blob/8a81844b730cd0c9856d26d6c197b5d1dc6e8fa4/packages/core/src/tools/scaffold.ts#L47)

**`Internal`**

Scaffolds a new component based on the provided template.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `outputFolderPath` | `string` | The file path where the component will be created. |
| `componentName` | `string` | The name of the component to be created. |
| `templateName` | `string` | The name of the template to use for scaffolding. If not provided, defaults to 'byoc' if `byoc` is true, otherwise 'default'. |
| `templates` | [`ScaffoldTemplate`](../../config/type-aliases/ScaffoldTemplate.md)[] | An array of template objects, each containing a name, a template function, and a getNextSteps function. |

## Returns

`void`

## Throws

Will throw an error if the specified template is not found.
