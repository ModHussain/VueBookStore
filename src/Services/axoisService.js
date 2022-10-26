import  axios  from "axios";

const BASE_URL= "http://localhost:4000/api"
const axiosService = {
    createBook: function createBook(data){
        return axios.post(BASE_URL+'/create-book',data);
    },
    getBooks: function getBooks(){
        return axios.get(BASE_URL);
    },
    getSelectedBook: function getSelectedBook(data){
        return axios.get(BASE_URL+'/edit-book/'+data);
    },
    editBook: function editBook(data){
        return axios.put(BASE_URL+'/update-book/'+data._id,data)
    },
    deleteBook: function deleteBook(data){
        return axios.delete(BASE_URL+"/delete-book/"+data);
    }
}
export default axiosService;