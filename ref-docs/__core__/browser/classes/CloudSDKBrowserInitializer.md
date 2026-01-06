[**@sitecore-content-sdk/__core__**](../../README.md)

***

[@sitecore-content-sdk/__core__](../../README.md) / [browser](../README.md) / CloudSDKBrowserInitializer

# Class: CloudSDKBrowserInitializer

Defined in: [src/initializer/browser/initializer.ts:25](https://github.com/art-alexeyenko/content-sdk/blob/8a81844b730cd0c9856d26d6c197b5d1dc6e8fa4/packages/__core__/src/initializer/browser/initializer.ts#L25)

## Constructors

### Constructor

> **new CloudSDKBrowserInitializer**(`settings`): `CloudSDKBrowserInitializer`

Defined in: [src/initializer/browser/initializer.ts:34](https://github.com/art-alexeyenko/content-sdk/blob/8a81844b730cd0c9856d26d6c197b5d1dc6e8fa4/packages/__core__/src/initializer/browser/initializer.ts#L34)

Runs the initialization logic. Enables packages and creates cookies for CloudSDK.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `settings` | [`BrowserSettings`](../../internal/interfaces/BrowserSettings.md) | Common settings for the CloudSDK. |

#### Returns

`CloudSDKBrowserInitializer`

#### Throws

ErrorMessages.MV_0001

#### Throws

ErrorMessages.MV_0002

#### Throws

ErrorMessages.IE_0001

#### Throws

ErrorMessages.IV_0001

## Methods

### initialize()

> **initialize**(): `void`

Defined in: [src/initializer/browser/initializer.ts:44](https://github.com/art-alexeyenko/content-sdk/blob/8a81844b730cd0c9856d26d6c197b5d1dc6e8fa4/packages/__core__/src/initializer/browser/initializer.ts#L44)

Runs the initialization logic. Enables packages and create cookies for CloudSDK.

#### Returns

`void`
