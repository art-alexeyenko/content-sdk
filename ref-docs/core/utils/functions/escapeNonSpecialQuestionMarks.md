[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [utils](../README.md) / escapeNonSpecialQuestionMarks

# Function: escapeNonSpecialQuestionMarks()

> **escapeNonSpecialQuestionMarks**(`input`): `string`

Defined in: [packages/core/src/utils/utils.ts:277](https://github.com/art-alexeyenko/content-sdk/blob/b2576230b80e8601364b6106089e676fb30b8c34/packages/core/src/utils/utils.ts#L277)

Escapes non-special "?" characters in a string or regex.
- For regex patterns that start with `^` or end with `$`, it returns the pattern unchanged.
- For other strings, it escapes literal "?" characters but preserves regex quantifiers and special patterns.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The input string or regex pattern. |

## Returns

`string`

- The modified string or regex with non-special "?" characters escaped.
