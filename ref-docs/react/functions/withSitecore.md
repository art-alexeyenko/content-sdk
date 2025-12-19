[**@sitecore-content-sdk/react**](../README.md)

***

[@sitecore-content-sdk/react](../README.md) / withSitecore

# Function: withSitecore()

> **withSitecore**(`options?`): \<`ComponentProps`\>(`Component`) => (`props`) => `Element`

Defined in: [packages/react/src/enhancers/withSitecore.tsx:55](https://github.com/art-alexeyenko/content-sdk/blob/1ca74789d4b4237e64e45a69e575ac9001871ce7/packages/react/src/enhancers/withSitecore.tsx#L55)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`WithSitecoreOptions`](../interfaces/WithSitecoreOptions.md) |  |

## Returns

> \<`ComponentProps`\>(`Component`): (`props`) => `Element`

### Type Parameters

| Type Parameter |
| ------ |
| `ComponentProps` *extends* [`WithSitecoreProps`](../interfaces/WithSitecoreProps.md) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `Component` | `ComponentType`\<`ComponentProps`\> |

### Returns

> (`props`): `Element`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`WithSitecoreHocProps`](../type-aliases/WithSitecoreHocProps.md)\<`ComponentProps`\> |

#### Returns

`Element`
