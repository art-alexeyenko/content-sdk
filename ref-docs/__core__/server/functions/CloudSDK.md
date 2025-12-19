[**@sitecore-content-sdk/__core__**](../../README.md)

***

[@sitecore-content-sdk/__core__](../../README.md) / [server](../README.md) / CloudSDK

# Function: CloudSDK()

> **CloudSDK**(`request`, `response`, `settings`): [`CloudSDKServerInitializer`](../classes/CloudSDKServerInitializer.md)

Defined in: [src/initializer/server/initializer.ts:259](https://github.com/art-alexeyenko/content-sdk/blob/1ca74789d4b4237e64e45a69e575ac9001871ce7/packages/__core__/src/initializer/server/initializer.ts#L259)

Runs the initialization logic. Enables packages and creates cookies for CloudSDK.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | `Request` | The request object, either a Middleware Request or an HTTP Request. |
| `response` | `Response` | The response object, either a Middleware Next Response or an HTTP Response. |
| `settings` | `ServerSettings` | Common settings for the CloudSDK. |

## Returns

[`CloudSDKServerInitializer`](../classes/CloudSDKServerInitializer.md)

An instance of CloudSDKServerInitializer.

## Throws

ErrorMessages.MV_0001

## Throws

ErrorMessages.MV_0002

## Throws

ErrorMessages.IV_0001
