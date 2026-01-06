[**@sitecore-content-sdk/events**](../../README.md)

***

[@sitecore-content-sdk/events](../../README.md) / [server](../README.md) / pageView

# Function: pageView()

> **pageView**\<`T`\>(`request`, `pageViewData?`): `Promise`\<`EPResponse` \| `null`\>

Defined in: [events/src/events/page-view/page-view-server.ts:18](https://github.com/art-alexeyenko/content-sdk/blob/8a81844b730cd0c9856d26d6c197b5d1dc6e8fa4/packages/events/src/events/page-view/page-view-server.ts#L18)

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
