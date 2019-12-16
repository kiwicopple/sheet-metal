---
id: authentication
title: Authentication
---


## Using your Metal Key

Authentication is extremely basic. Each sheet you set up has only one key associated with it, which is included in every URL request. 

For example, this is how a `GET` request is may look:

```bash
curl \
  "https://sheetmetal.io/api/v1/64b47056-8599-4429-8f73-e0dde8317607/Employees"
```

Where:

- `64b47056-8599-4429-8f73-e0dde8317607` is an example of a Metal Key that we give you when you link a Google Sheet in your Sheet Metal Dashboard.
- `Employees` is the name of the Tab within your Google Sheet


## Refreshing Keys

There is only one key per sheet. If you need to refresh the key you can either:

- unlink in your Sheet Metal Dashboard and link it again
- set up a new link to the same sheet. We do not limit how many times you can link to the same Google Sheet