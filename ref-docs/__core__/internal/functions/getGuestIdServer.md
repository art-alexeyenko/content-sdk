[**@sitecore-content-sdk/__core__**](../../README.md)

***

[@sitecore-content-sdk/__core__](../../README.md) / [internal](../README.md) / getGuestIdServer

# Function: getGuestIdServer()

> **getGuestIdServer**(`browserId`): `Promise`\<`string`\>

Defined in: [src/guest-id/get-guest-id-server.ts:10](https://github.com/art-alexeyenko/content-sdk/blob/6c9a86bbd7231abfc8551dcf29eee14e028478b7/packages/__core__/src/guest-id/get-guest-id-server.ts#L10)

Returns the guest ID for the given browser ID.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `browserId` | `string` | The browser ID of the client. |

## Returns

`Promise`\<`string`\>

A promise that resolves with the guest ID.

## Throws

Will throw an error if the Sitecore Edge context ID is incorrect.
