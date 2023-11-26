# Error handling

Each function returns an object having property `code`, which is the status code of the function, and `message`, which contains an error/warning message (if any).

Below are the possible status codes:

| Code          | Meaning                                                               |
|---------------|-----------------------------------------------------------------------|
| 0             | Symbology was generated successfully.                                 |
| 2             | One or more options are invalid but the symbology was created anyway. |
| 5             | The file path was too long.                                           |
| 6             | The data for the specified symbology is invalid.                      |
| 7             | Error checking (if any) on the rendered barcode failed.               |
| 8             | One or more options are invalid and rendering failed.                 |
| 9             | Invalid characters in input data.                                     |
| 10            | Cannot write to the given path.                                       |
| 11            | Corrupt or insufficient memory.                                       |

:::tip Deprecation Notice
Starting in version 2.1.0, the `ErrorCode` enum has been deprecated and will be removed in the next major release.
:::
