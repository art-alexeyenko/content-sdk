[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [index](../README.md) / CacheOptions

# Interface: CacheOptions

Defined in: [packages/core/src/cache-client.ts:37](https://github.com/art-alexeyenko/content-sdk/blob/2dd3f0c6f575bbf108a517b44c8f7fbfc11506ed/packages/core/src/cache-client.ts#L37)

Minimum configuration options for classes that implement

## See

CacheClient

## Extended by

- [`DictionaryServiceConfig`](../../i18n/interfaces/DictionaryServiceConfig.md)

## Properties

### cacheEnabled?

> `optional` **cacheEnabled**: `boolean`

Defined in: [packages/core/src/cache-client.ts:42](https://github.com/art-alexeyenko/content-sdk/blob/2dd3f0c6f575bbf108a517b44c8f7fbfc11506ed/packages/core/src/cache-client.ts#L42)

Enable/disable caching mechanism

#### Default

```ts
true
```

***

### cacheTimeout?

> `optional` **cacheTimeout**: `number`

Defined in: [packages/core/src/cache-client.ts:47](https://github.com/art-alexeyenko/content-sdk/blob/2dd3f0c6f575bbf108a517b44c8f7fbfc11506ed/packages/core/src/cache-client.ts#L47)

Cache timeout (sec)

#### Default

```ts
60
```
