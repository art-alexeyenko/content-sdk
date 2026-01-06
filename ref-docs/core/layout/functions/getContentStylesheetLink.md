[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [layout](../README.md) / getContentStylesheetLink

# Function: getContentStylesheetLink()

> **getContentStylesheetLink**(`layoutData`, `sitecoreEdgeContextId`, `sitecoreEdgeUrl?`): [`HTMLLink`](../../index/type-aliases/HTMLLink.md) \| `null`

Defined in: [packages/core/src/layout/content-styles.ts:21](https://github.com/art-alexeyenko/content-sdk/blob/8a81844b730cd0c9856d26d6c197b5d1dc6e8fa4/packages/core/src/layout/content-styles.ts#L21)

Get the content styles link to be loaded from the Sitecore Edge Platform

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `layoutData` | [`LayoutServiceData`](../interfaces/LayoutServiceData.md) | `undefined` | Layout service data |
| `sitecoreEdgeContextId` | `string` | `undefined` | Sitecore Edge Context ID |
| `sitecoreEdgeUrl?` | `string` | `SITECORE_EDGE_URL_DEFAULT` | Sitecore Edge Platform URL. Default is https://edge-platform.sitecorecloud.io |

## Returns

[`HTMLLink`](../../index/type-aliases/HTMLLink.md) \| `null`

content styles link, null if no styles are used in layout
