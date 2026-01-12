[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [site](../README.md) / RedirectsServiceConfig

# Type Alias: RedirectsServiceConfig

> **RedirectsServiceConfig** = [`CacheOptions`](../../index/interfaces/CacheOptions.md) & `object`

Defined in: [packages/core/src/site/redirects-service.ts:58](https://github.com/art-alexeyenko/content-sdk/blob/2b832659ae160ef9ca74750ee8a38981ea98a9cf/packages/core/src/site/redirects-service.ts#L58)

Configuration for

## Type Declaration

### clientFactory

> **clientFactory**: [`GraphQLRequestClientFactory`](../../index/type-aliases/GraphQLRequestClientFactory.md)

A GraphQL Request Client Factory is a function that accepts configuration and returns an instance of a GraphQLRequestClient.
This factory function is used to create and configure GraphQL clients for making GraphQL API requests.

### fetch?

> `optional` **fetch**: *typeof* `fetch`

Override fetch method. Uses 'GraphQLRequestClient' default otherwise.

## See

RedirectsService instances
