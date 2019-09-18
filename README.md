## React FoodList API Integration of food2fork

### In [Api](src/api.js) File Define all routes
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
### Uses of route
```js
api.endpoint(url).getAll()
api.endpoint(url).getOne({id})
api.endpoint(url).create( data)
api.endpoint(url).update({ id }, data)
api.endpoint(url)).delete({ id })
```
