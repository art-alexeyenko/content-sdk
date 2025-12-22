[**@sitecore-content-sdk/core**](../../README.md)

***

[@sitecore-content-sdk/core](../../README.md) / [editing](../README.md) / getDesignLibraryStatusEvent

# Function: getDesignLibraryStatusEvent()

> **getDesignLibraryStatusEvent**(`status`, `uid`): [`DesignLibraryStatusEvent`](../interfaces/DesignLibraryStatusEvent.md)

Defined in: [packages/core/src/editing/design-library.ts:209](https://github.com/art-alexeyenko/content-sdk/blob/c4121ed79c517668fe049d0732ca31a70ead1500/packages/core/src/editing/design-library.ts#L209)

**`Internal`**

Generates a DesignLibraryStatusEvent with the given status and uid.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `status` | [`DesignLibraryStatus`](../enumerations/DesignLibraryStatus.md) | The status of rendering. |
| `uid` | `string` | The unique identifier for the event. |

## Returns

[`DesignLibraryStatusEvent`](../interfaces/DesignLibraryStatusEvent.md)

An object representing the DesignLibraryStatusEvent.
