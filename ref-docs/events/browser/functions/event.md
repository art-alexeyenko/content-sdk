[**@sitecore-content-sdk/events**](../../README.md)

***

[@sitecore-content-sdk/events](../../README.md) / [browser](../README.md) / event

# Function: event()

> **event**(`eventData`): `Promise`\<`EPResponse` \| `null`\>

Defined in: [events/src/events/custom-event/event.ts:14](https://github.com/art-alexeyenko/content-sdk/blob/be971d8507ca2ee50b70c8f8e04cbf8e7b423cf9/packages/events/src/events/custom-event/event.ts#L14)

A function that sends an event to SitecoreCloud API with the specified type

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventData` | [`EventData`](../interfaces/EventData.md) | The required/optional attributes in order to be send to SitecoreCloud API |

## Returns

`Promise`\<`EPResponse` \| `null`\>

The response object that Sitecore EP returns
