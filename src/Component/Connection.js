import axios from 'axios'

const connection_url="https://booksmith-backend.herokuapp.com";
class Connection {
      getBookList()
    {
        return axios.get(connection_url+"/books/list");
    }
}
 export default new Connection();