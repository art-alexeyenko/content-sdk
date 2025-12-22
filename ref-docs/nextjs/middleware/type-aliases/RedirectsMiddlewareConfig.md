[**@sitecore-content-sdk/nextjs**](../../README.md)

***

[@sitecore-content-sdk/nextjs](../../README.md) / [middleware](../README.md) / RedirectsMiddlewareConfig

# Type Alias: RedirectsMiddlewareConfig

> **RedirectsMiddlewareConfig** = `Omit`\<[`RedirectsServiceConfig`](../../index/type-aliases/RedirectsServiceConfig.md), `"fetch"` \| `"clientFactory"`\> & `SitecoreConfig`\[`"api"`\]\[`"edge"`\] & `Partial`\<`NonNullable`\<`SitecoreConfig`\[`"api"`\]\[`"local"`\]\>\> & [`MiddlewareBaseConfig`](MiddlewareBaseConfig.md) & `SitecoreConfig`\[`"redirects"`\] & `object`

Defined in: [nextjs/src/middleware/redirects-middleware.ts:32](https://github.com/art-alexeyenko/content-sdk/blob/c565ad26d3f89f4d9fb63b5a199bac1f1a50cdc7/packages/nextjs/src/middleware/redirects-middleware.ts#L32)

The interface for the RedirectsMiddleware configuration.

## Type Declaration

### redirectsService?

> `optional` **redirectsService**: [`RedirectsService`](../../index/classes/RedirectsService.md)
