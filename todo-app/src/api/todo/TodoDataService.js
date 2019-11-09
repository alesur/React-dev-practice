import axios from "axios";

class TodoDataService {
        getAllTodos(name){
            //console.log('executed service')
            return axios.get(`http://localhost:8080/users/${name}/todos`);
        }

        getTodo(name, id){
            return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
        }

        deleteTodo(name, id){
            //console.log('executed service')
            return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
        }
    

}

export default new TodoDataService