[**@sitecore-content-sdk/__core__**](../../README.md)

***

[@sitecore-content-sdk/__core__](../../README.md) / [internal](../README.md) / getEnabledPackageBrowser

# Function: getEnabledPackageBrowser()

> **getEnabledPackageBrowser**(`packageName`): [`PackageInitializer`](../classes/PackageInitializer.md) \| `undefined`

Defined in: [src/initializer/browser/initializer.ts:173](https://github.com/art-alexeyenko/content-sdk/blob/d4e9fb1eec4b9df146febaa5566096221de3f17c/packages/__core__/src/initializer/browser/initializer.ts#L173)

Gets an enabled package by name.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `packageName` | `string` | The name of the package to retrieve. |

## Returns

[`PackageInitializer`](../classes/PackageInitializer.md) \| `undefined`

The package initializer or undefined if not found.
