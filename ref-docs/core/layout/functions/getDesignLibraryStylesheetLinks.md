[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [layout](../README.md) / getDesignLibraryStylesheetLinks

# Function: getDesignLibraryStylesheetLinks()

> **getDesignLibraryStylesheetLinks**(`layoutData`, `sitecoreEdgeContextId`, `sitecoreEdgeUrl?`): [`HTMLLink`](../../index/type-aliases/HTMLLink.md)[]

Defined in: [packages/core/src/layout/themes.ts:20](https://github.com/art-alexeyenko/content-sdk/blob/3e23b8ca98724f506135610b52e609cf037ab9ac/packages/core/src/layout/themes.ts#L20)

Walks through rendering tree and returns list of links of all FEAAS, BYOC or SXA Design Library Stylesheets that are used

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `layoutData` | [`LayoutServiceData`](../interfaces/LayoutServiceData.md) | `undefined` | Layout service data |
| `sitecoreEdgeContextId` | `string` | `undefined` | Sitecore Edge Context ID |
| `sitecoreEdgeUrl?` | `string` | `SITECORE_EDGE_URL_DEFAULT` | Sitecore Edge Platform URL. Default is https://edge-platform.sitecorecloud.io |

## Returns

[`HTMLLink`](../../index/type-aliases/HTMLLink.md)[]

library stylesheet links
