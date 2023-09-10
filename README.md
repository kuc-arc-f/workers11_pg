# workers11_pg

 Version: 0.9.2

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2023/09/08

 update  : 2023/09/10

***
### Summary

cloudflare workers + postgres,  sample

***
### wrangler.toml, setting

* db setting, sample
```
name = "name123"
main = "src/index.ts"
compatibility_date = "2023-09-04"
node_compat = true

# Variable bindings. These are arbitrary, plaintext strings (similar to environment variables)
# Note: Use secrets to store sensitive data.
# Docs: https://developers.cloudflare.com/workers/platform/environment-variables
# MY_VARIABLE = "production_value"

[vars]
API_KEY = "123"
DB_NAME = ""
DB_USERNAME = "postgres"
DB_HOST = "hoge123.db.com"
DB_PORT = "5432"
DB_PASSWORD = ""

```
***
### blog 

***

