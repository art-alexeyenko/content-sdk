[**@sitecore-content-sdk/__core__**](../../README.md)

***

[@sitecore-content-sdk/__core__](../../README.md) / [internal](../README.md) / fetchBrowserIdFromEdgeProxy

# Function: fetchBrowserIdFromEdgeProxy()

> **fetchBrowserIdFromEdgeProxy**(`sitecoreEdgeUrl`, `sitecoreEdgeContextId`, `timeout?`): `Promise`\<`ProxySettings`\>

Defined in: [src/browser-id/fetch-browser-id-from-edge-proxy.ts:13](https://github.com/art-alexeyenko/content-sdk/blob/be971d8507ca2ee50b70c8f8e04cbf8e7b423cf9/packages/__core__/src/browser-id/fetch-browser-id-from-edge-proxy.ts#L13)

Gets the browser ID and client key from Sitecore Edge proxy.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sitecoreEdgeUrl` | `string` | The base URL for the Edge proxy API. |
| `sitecoreEdgeContextId` | `string` | The Sitecore context ID parameter for the Edge proxy API. |
| `timeout?` | `number` | The timeout in milliseconds for the call to the proxy. |

## Returns

`Promise`\<`ProxySettings`\>

The browser ID and guest ID from the proxy.
