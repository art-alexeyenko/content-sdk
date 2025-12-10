[**@sitecore-content-sdk/events**](../../README.md)

***

[@sitecore-content-sdk/events](../../README.md) / [server](../README.md) / identity

# Function: identity()

> **identity**(`request`, `identityData`): `Promise`\<`EPResponse` \| `null`\>

Defined in: [events/src/events/identity/identityServer.ts:18](https://github.com/art-alexeyenko/content-sdk/blob/d2aeed0eb182d0d22c7cf0fc3a7b20aa8a205edb/packages/events/src/events/identity/identityServer.ts#L18)

A function that sends an IDENTITY event to SitecoreCloud API

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | `Request` | Interface with constraint for extending request |
| `identityData` | [`IdentityData`](../../browser/interfaces/IdentityData.md) | The required/optional attributes in order to be send to SitecoreCloud API |

## Returns

`Promise`\<`EPResponse` \| `null`\>

The response object that Sitecore EP returns
