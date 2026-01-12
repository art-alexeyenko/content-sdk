[**@sitecore-content-sdk/__core__**](../../README.md)

***

[@sitecore-content-sdk/__core__](../../README.md) / [internal](../README.md) / PackageInitializerServer

# Class: PackageInitializerServer

Defined in: [src/initializer/server/package-initializer.ts:9](https://github.com/art-alexeyenko/content-sdk/blob/b2576230b80e8601364b6106089e676fb30b8c34/packages/__core__/src/initializer/server/package-initializer.ts#L9)

Package initializer for server environments.
This class is used by other packages to plugin to the core CloudSDK initializer.
It manages package dependencies, settings, and side effects execution on the server.

## Constructors

### Constructor

> **new PackageInitializerServer**(`packageContext`): `PackageInitializerServer`

Defined in: [src/initializer/server/package-initializer.ts:17](https://github.com/art-alexeyenko/content-sdk/blob/b2576230b80e8601364b6106089e676fb30b8c34/packages/__core__/src/initializer/server/package-initializer.ts#L17)

Creates a new PackageInitializerServer instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `packageContext` | `PackageContext` | The package context containing side effects, settings, and dependencies. |

#### Returns

`PackageInitializerServer`

## Accessors

### settings

#### Get Signature

> **get** **settings**(): `unknown`

Defined in: [src/initializer/server/package-initializer.ts:27](https://github.com/art-alexeyenko/content-sdk/blob/b2576230b80e8601364b6106089e676fb30b8c34/packages/__core__/src/initializer/server/package-initializer.ts#L27)

Gets the package-specific settings.

##### Returns

`unknown`

The package settings.

## Methods

### exec()

> **exec**(): `Promise`\<`void`\>

Defined in: [src/initializer/server/package-initializer.ts:36](https://github.com/art-alexeyenko/content-sdk/blob/b2576230b80e8601364b6106089e676fb30b8c34/packages/__core__/src/initializer/server/package-initializer.ts#L36)

Executes the package initialization.
Validates dependencies and executes side effects.

#### Returns

`Promise`\<`void`\>

A promise that resolves when initialization is complete.
