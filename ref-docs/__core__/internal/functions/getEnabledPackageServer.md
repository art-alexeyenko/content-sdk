[**@sitecore-content-sdk/__core__**](../../README.md)

***

[@sitecore-content-sdk/__core__](../../README.md) / [internal](../README.md) / getEnabledPackageServer

# Function: getEnabledPackageServer()

> **getEnabledPackageServer**(`packageName`): [`PackageInitializerServer`](../classes/PackageInitializerServer.md) \| `undefined`

Defined in: [src/initializer/server/initializer.ts:219](https://github.com/art-alexeyenko/content-sdk/blob/be971d8507ca2ee50b70c8f8e04cbf8e7b423cf9/packages/__core__/src/initializer/server/initializer.ts#L219)

Gets an enabled package by name.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `packageName` | `string` | The name of the package to retrieve. |

## Returns

[`PackageInitializerServer`](../classes/PackageInitializerServer.md) \| `undefined`

The package initializer or undefined if not found.
