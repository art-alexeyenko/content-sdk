[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [config](../README.md) / DeepRequired

# Type Alias: DeepRequired\<T\>

> **DeepRequired**\<`T`\> = `Required`\<`{ [K in keyof T]: T[K] extends Required<T[K]> ? T[K] : DeepRequired<T[K]> }`\>

Defined in: [packages/core/src/config/models.ts:8](https://github.com/art-alexeyenko/content-sdk/blob/2c429229afa7f3ed739cd74d05344daf2e792503/packages/core/src/config/models.ts#L8)

Utility type to make every property in a type required

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
