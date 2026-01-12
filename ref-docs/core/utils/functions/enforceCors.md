[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [utils](../README.md) / enforceCors

# ~~Function: enforceCors()~~

> **enforceCors**(`req`, `res`, `allowedOrigins?`): `boolean`

Defined in: [packages/core/src/utils/utils.ts:121](https://github.com/art-alexeyenko/content-sdk/blob/2b832659ae160ef9ca74750ee8a38981ea98a9cf/packages/core/src/utils/utils.ts#L121)

Tests origin from incoming request against allowed origins list that can be
set in JSS's JSS_ALLOWED_ORIGINS env variable, passed via allowedOrigins param and/or
be already set in Access-Control-Allow-Origin by other logic.
Applies Access-Control-Allow-Origin and Access-Control-Allow-Methods on match
Also applies Access-Control-Allow-Headers for preflight requests

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `req` | `IncomingMessage` | incoming request |
| `res` | `OutgoingMessage` | response to set CORS headers for |
| `allowedOrigins?` | `string`[] | additional list of origins to test against |

## Returns

`boolean`

true if incoming origin matches the allowed lists, false when it does not

## Deprecated

use getEnforcedCorsHeaders instead
