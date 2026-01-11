[**@sitecore-content-sdk/nextjs**](../../README.md)

***

[@sitecore-content-sdk/nextjs](../../README.md) / [index](../README.md) / LinkProps

# Type Alias: LinkProps

> **LinkProps** = `ReactLinkProps` & `object` & `Pick`\<`NextLinkProps`, *typeof* `supportedNextLinkProps`\[`number`\]\>

Defined in: [nextjs/src/components/Link.tsx:28](https://github.com/art-alexeyenko/content-sdk/blob/87f30499afc81160963d293ab9e455b746087d3c/packages/nextjs/src/components/Link.tsx#L28)

The interface for the Link component props.

## Type Declaration

### internalLinkMatcher?

> `optional` **internalLinkMatcher**: `RegExp`

If `href` match with `internalLinkMatcher` regexp, then it's internal link and NextLink will be rendered

#### Default

```ts
/^//g
```
