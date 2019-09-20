## Food App Integration of [food2fork](https://www.food2fork.com/about/api) API

# Code Architecture
## State Management
- Use react core state management

## Component Structure and module CSS
- `filename.module.css`: use module css for avoid global css issue
- global css contains only `App.css` and `index.css` file

### In [Api](src/api.js) File Define api helper  
```js
import axios from "axios";

/* description: this function for callback api endpoint
                 contains GET,POST,PUT, DELETE requests via axios package

   params: id , data
         - getOne method need only id params
         - getAll method no need any param
         - create method need only data param
         - updateByID method need both id and data params
         - update method need only data param
         - delete method also need only id param

   return: getOne, getAll, updateByID, update, delete
*/

export default {
    endpoint(url) {
        url = "route.apiBase" + url; //concat base url and url with base api endpoint
        return {
            getOne: (id) => axios.get(url + `/${id}`), //id_url
            getAll: () => axios.get(url),
            create: (data) => axios.post(url, data), //url, data
            updateByID: (id, data) => axios.put(url + `/${id}`, data), //url, data
            update: (data) => axios.put(url, data),  // without id
            delete: (id) => axios.delete(url + `/${id}`),
        }
    },
}
```
### [route](src/route.js) contains `apiRoute` and `localRoute` route.
- In this file `apiRoute` contains api route where define all api endpoint and `localRoute` contains local traverse route which responsible for traverse from react app 
### Uses of [api](src/api.js) helper and [route](src/route.js) 
```js
api.endpoint(url).getAll()
api.endpoint(url).getOne({id})
api.endpoint(url).create( data)
api.endpoint(url).update({ id }, data)
api.endpoint(url).delete({ id })
```
# N.B.
food2fork gives only 50 api calling for free, if don't show
any data create an account in [food2fork](https://www.food2fork.com/default/user/register)
and copy API Key from [here](https://www.food2fork.com/user/api) and added it to [route](src/route.js)
```sh
const apiKey = "food2fork api key";
```