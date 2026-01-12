[**@sitecore-content-sdk/__core__**](../../README.md)

***

[@sitecore-content-sdk/__core__](../../README.md) / [internal](../README.md) / getEnabledPackageServer

# Function: getEnabledPackageServer()

> **getEnabledPackageServer**(`packageName`): [`PackageInitializerServer`](../classes/PackageInitializerServer.md) \| `undefined`

Defined in: [src/initializer/server/initializer.ts:219](https://github.com/art-alexeyenko/content-sdk/blob/01ee1f25ef0fc51dfd648d69152f2b4f4ba352f9/packages/__core__/src/initializer/server/initializer.ts#L219)

Gets an enabled package by name.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `packageName` | `string` | The name of the package to retrieve. |

## Returns

[`PackageInitializerServer`](../classes/PackageInitializerServer.md) \| `undefined`

The package initializer or undefined if not found.
