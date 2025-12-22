[**@sitecore-content-sdk/react**](../README.md)

***

[@sitecore-content-sdk/react](../README.md) / DesignLibrary

# Variable: DesignLibrary

> `const` **DesignLibrary**: \{(`props`): `Element`; `displayName`: `string`; \}

Defined in: [packages/react/src/components/DesignLibrary/DesignLibrary.tsx:53](https://github.com/art-alexeyenko/content-sdk/blob/d4e9fb1eec4b9df146febaa5566096221de3f17c/packages/react/src/components/DesignLibrary/DesignLibrary.tsx#L53)

Design Library component.

Renders the **real** Sitecore component for `library` / `library-metadata` modes and,
when generation is enabled (`page.mode.designLibrary.isVariantGeneration === true`),
wires the **variant generation** handshake so the parent (DL Studio) can send
generated code to preview and iterate on.

## Type Declaration

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props` | `DesignLibraryProps` |  |

## Returns

`Element`

The preview surface, or `null` when not in Design Library mode.

### displayName

> **displayName**: `string`
