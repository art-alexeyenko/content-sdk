[**@sitecore-content-sdk/nextjs**](../../README.md)

***

[@sitecore-content-sdk/nextjs](../../README.md) / [utils](../README.md) / isServerSidePropsContext

# Function: isServerSidePropsContext()

> **isServerSidePropsContext**(`context`): `context is GetServerSidePropsContext`

Defined in: [nextjs/src/utils/utils.ts:70](https://github.com/art-alexeyenko/content-sdk/blob/8dfd2af042fa56663d300593fd62e13066c2b706/packages/nextjs/src/utils/utils.ts#L70)

Determines whether context is GetServerSidePropsContext (SSR) or GetStaticPropsContext (SSG)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `context` | `GetServerSidePropsContext` \| `GetStaticPropsContext` |  |

## Returns

`context is GetServerSidePropsContext`
