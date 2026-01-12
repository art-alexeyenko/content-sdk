[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [utils](../README.md) / isRegexOrUrl

# Function: isRegexOrUrl()

> **isRegexOrUrl**(`input`): `"regex"` \| `"url"`

Defined in: [packages/core/src/utils/utils.ts:228](https://github.com/art-alexeyenko/content-sdk/blob/2b832659ae160ef9ca74750ee8a38981ea98a9cf/packages/core/src/utils/utils.ts#L228)

Determines whether the given input is a regular expression or resembles a URL.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The input string to evaluate. |

## Returns

`"regex"` \| `"url"`

- Returns 'url' if the input looks like a URL, otherwise 'regex'.
