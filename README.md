
# URLs

NextJS Server:
```
http://localhost:3000
```
phpMyAdmin Server:
```
http://localhost:8081
```
WordPress Server:
```
http://localhost:8000
```

# INSTALLATION & EXECUTION
## Whole microservices
```
docker-compose up
```

## Frontend client
Go to ```frontend``` folder:

```
yarn
yarn run dev
```

# Get token authorization from WordPress

Send request to:
```
http://localhost:8000/wp-json/jwt-auth/v1/token
```

With this data in the body:
```json
{
	"username":"lucas",
	"password":"123456"
}
```
Example:

```json
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMCIsImlhdCI6MTU2MDM3NjU1MiwibmJmIjoxNTYwMzc2NTUyLCJleHAiOjE1NjA5ODEzNTIsImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.7A7gC8nV952RMbh7gI6REj7aaEWop19EKXkLpt0LMC0",
    "user_email": "test@test.com",
    "user_nicename": "lucas",
    "user_display_name": "lucas"
}
```

# Custom Wordpress content
## Post new content


1. `POST` to `http://localhost:8000/wp-json/wp/v2/<custom_object>`

    Example: `http://localhost:8000/wp-json/wp/v2/artist`

    With some `body` like this:
    
    ```json
    {
        "title":"David Guetta",
        "fields":{
            "name":"David Guetta",
            "webpage":"http://www.davidguetta.com"
        }
    }
    ```
    Where `fields` are the custom ACF


## Get custom content

```
GET http://localhost:8000/wp-json/wp/v2/<custom_content>
```

Example:
```
GET http://localhost:8000/wp-json/wp/v2/artist
```


Markdown syntax:
https://markdown-it.github.io/