[**@sitecore-content-sdk/events**](../../README.md)

***

[@sitecore-content-sdk/events](../../README.md) / [browser](../README.md) / EventData

# Interface: EventData

Defined in: [events/src/events/custom-event/custom-event.ts:90](https://github.com/art-alexeyenko/content-sdk/blob/3d85a10b24e09c2e39c8b8a8ee173ceb59ffd8bd/packages/events/src/events/custom-event/custom-event.ts#L90)

Interface with the required/optional attributes in order to send a custom event to SitecoreCloud API

## Extends

- `EventAttributesInput`.`NestedObject`

## Indexable

\[`key`: `string`\]: `NestedObject` \| `BasicTypes`

## Properties

### channel?

> `optional` **channel**: `string`

Defined in: [events/src/events/common-interfaces.ts:9](https://github.com/art-alexeyenko/content-sdk/blob/3d85a10b24e09c2e39c8b8a8ee173ceb59ffd8bd/packages/events/src/events/common-interfaces.ts#L9)

#### Inherited from

`EventAttributesInput.channel`

***

### currency?

> `optional` **currency**: `string`

Defined in: [events/src/events/common-interfaces.ts:10](https://github.com/art-alexeyenko/content-sdk/blob/3d85a10b24e09c2e39c8b8a8ee173ceb59ffd8bd/packages/events/src/events/common-interfaces.ts#L10)

#### Inherited from

`EventAttributesInput.currency`

***

### extensionData?

> `optional` **extensionData**: `NestedObject`

Defined in: [events/src/events/custom-event/custom-event.ts:93](https://github.com/art-alexeyenko/content-sdk/blob/3d85a10b24e09c2e39c8b8a8ee173ceb59ffd8bd/packages/events/src/events/custom-event/custom-event.ts#L93)

***

### language?

> `optional` **language**: `string`

Defined in: [events/src/events/common-interfaces.ts:7](https://github.com/art-alexeyenko/content-sdk/blob/3d85a10b24e09c2e39c8b8a8ee173ceb59ffd8bd/packages/events/src/events/common-interfaces.ts#L7)

#### Inherited from

`EventAttributesInput.language`

***

### page?

> `optional` **page**: `string`

Defined in: [events/src/events/common-interfaces.ts:8](https://github.com/art-alexeyenko/content-sdk/blob/3d85a10b24e09c2e39c8b8a8ee173ceb59ffd8bd/packages/events/src/events/common-interfaces.ts#L8)

#### Inherited from

`EventAttributesInput.page`

***

### searchData?

> `optional` **searchData**: `NestedObject`

Defined in: [events/src/events/custom-event/custom-event.ts:92](https://github.com/art-alexeyenko/content-sdk/blob/3d85a10b24e09c2e39c8b8a8ee173ceb59ffd8bd/packages/events/src/events/custom-event/custom-event.ts#L92)

***

### type

> **type**: `string`

Defined in: [events/src/events/custom-event/custom-event.ts:91](https://github.com/art-alexeyenko/content-sdk/blob/3d85a10b24e09c2e39c8b8a8ee173ceb59ffd8bd/packages/events/src/events/custom-event/custom-event.ts#L91)
