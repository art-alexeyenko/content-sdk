[**@sitecore-content-sdk/events**](../../README.md)

***

[@sitecore-content-sdk/events](../../README.md) / [browser](../README.md) / identity

# Function: identity()

> **identity**(`identityData`): `Promise`\<`EPResponse` \| `null`\>

Defined in: [events/src/events/identity/identity.ts:14](https://github.com/art-alexeyenko/content-sdk/blob/a1b608d7430d39cdc031d12a01971d89deb9d1dd/packages/events/src/events/identity/identity.ts#L14)

A function that sends an IDENTITY event to SitecoreCloud API

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `identityData` | [`IdentityData`](../interfaces/IdentityData.md) | The required/optional attributes in order to be send to SitecoreCloud API |

## Returns

`Promise`\<`EPResponse` \| `null`\>

The response object that Sitecore EP returns
