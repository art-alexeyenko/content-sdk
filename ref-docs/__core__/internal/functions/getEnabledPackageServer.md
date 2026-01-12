[**@sitecore-content-sdk/__core__**](../../README.md)

***

[@sitecore-content-sdk/__core__](../../README.md) / [internal](../README.md) / getEnabledPackageServer

# Function: getEnabledPackageServer()

> **getEnabledPackageServer**(`packageName`): [`PackageInitializerServer`](../classes/PackageInitializerServer.md) \| `undefined`

Defined in: [src/initializer/server/initializer.ts:219](https://github.com/art-alexeyenko/content-sdk/blob/3d85a10b24e09c2e39c8b8a8ee173ceb59ffd8bd/packages/__core__/src/initializer/server/initializer.ts#L219)

Gets an enabled package by name.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `packageName` | `string` | The name of the package to retrieve. |

## Returns

[`PackageInitializerServer`](../classes/PackageInitializerServer.md) \| `undefined`

The package initializer or undefined if not found.
