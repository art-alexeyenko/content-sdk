[**@sitecore-content-sdk/__core__**](../../README.md)

***

[@sitecore-content-sdk/__core__](../../README.md) / [internal](../README.md) / pageName

# Function: pageName()

> **pageName**(): `string`

Defined in: [src/infer/infer.ts:17](https://github.com/art-alexeyenko/content-sdk/blob/beadd6e495d5f24730d94de024b63002d04f529b/packages/__core__/src/infer/infer.ts#L17)

Returns the name of the current page extracted from the URL's pathname.
If it's the home page, it returns `Home Page`.

## Returns

`string`

`Home Page` if root, otherwise the pathname segment.
