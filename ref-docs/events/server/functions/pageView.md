[**@sitecore-content-sdk/events**](../../README.md)

***

[@sitecore-content-sdk/events](../../README.md) / [server](../README.md) / pageView

# Function: pageView()

> **pageView**\<`T`\>(`request`, `pageViewData?`): `Promise`\<`EPResponse` \| `null`\>

Defined in: [events/src/events/page-view/page-view-server.ts:18](https://github.com/art-alexeyenko/content-sdk/blob/3e23b8ca98724f506135610b52e609cf037ab9ac/packages/events/src/events/page-view/page-view-server.ts#L18)

A function that sends a VIEW event to SitecoreCloud API

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Request` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | `T` | Interface with constraint for extending request |
| `pageViewData?` | [`PageViewData`](../../browser/interfaces/PageViewData.md) | The required/optional attributes in order to be send to SitecoreCloud API |

## Returns

`Promise`\<`EPResponse` \| `null`\>

The response object that Sitecore EP returns
