[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [client](../README.md) / FetchOptions

# Type Alias: FetchOptions

> **FetchOptions** = `object`

Defined in: [packages/core/src/models.ts:78](https://github.com/art-alexeyenko/content-sdk/blob/6c9a86bbd7231abfc8551dcf29eee14e028478b7/packages/core/src/models.ts#L78)

Fetch options

## Properties

### debugger?

> `optional` **debugger**: `Debugger`

Defined in: [packages/core/src/models.ts:98](https://github.com/art-alexeyenko/content-sdk/blob/6c9a86bbd7231abfc8551dcf29eee14e028478b7/packages/core/src/models.ts#L98)

Override debugger for logging. Uses 'content-sdk:http' by default.

***

### fetch?

> `optional` **fetch**: *typeof* `fetch`

Defined in: [packages/core/src/models.ts:90](https://github.com/art-alexeyenko/content-sdk/blob/6c9a86bbd7231abfc8551dcf29eee14e028478b7/packages/core/src/models.ts#L90)

Override to replace default nodeJS fetch implementation

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: [packages/core/src/models.ts:94](https://github.com/art-alexeyenko/content-sdk/blob/6c9a86bbd7231abfc8551dcf29eee14e028478b7/packages/core/src/models.ts#L94)

Custom headers to be sent with each request.

***

### retries?

> `optional` **retries**: `number`

Defined in: [packages/core/src/models.ts:82](https://github.com/art-alexeyenko/content-sdk/blob/6c9a86bbd7231abfc8551dcf29eee14e028478b7/packages/core/src/models.ts#L82)

Number of retries GraphQL client will attempt on request error

***

### retryStrategy?

> `optional` **retryStrategy**: [`RetryStrategy`](../../index/interfaces/RetryStrategy.md)

Defined in: [packages/core/src/models.ts:86](https://github.com/art-alexeyenko/content-sdk/blob/6c9a86bbd7231abfc8551dcf29eee14e028478b7/packages/core/src/models.ts#L86)

Retry strategy instance
