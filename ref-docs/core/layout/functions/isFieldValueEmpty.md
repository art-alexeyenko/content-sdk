[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [layout](../README.md) / isFieldValueEmpty

# Function: isFieldValueEmpty()

> **isFieldValueEmpty**(`field`): field is null \| undefined

Defined in: [packages/core/src/layout/utils.ts:119](https://github.com/art-alexeyenko/content-sdk/blob/4b84bfb5807c6dcb4783150dcb4b23fe57d15982/packages/core/src/layout/utils.ts#L119)

Determines if the passed in field object's value is empty.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `field` | [`GenericFieldValue`](../type-aliases/GenericFieldValue.md) \| `Partial`\<[`Field`](../interfaces/Field.md)\<[`GenericFieldValue`](../type-aliases/GenericFieldValue.md)\>\> \| `null` \| `undefined` | the field object. Partial<T> type is used here because _field.value_ could be required or optional for the different field types |

## Returns

field is null \| undefined

True if the field value is empty
