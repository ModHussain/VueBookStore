
<script>
import axiosService from "../Services/axoisService"
import activityService from "../Services/activityService";
import recentAction from '../components/recentAction.vue';
export default {
    components: {
        recentAction
  },
    data() {
        return {
            mainResult: [],
            pagetextLabel: {
                bookName: 'Book Name',
                bookPrice: 'Book price',
                bookImg: 'Book Image'
            },
            book: {
                bookName: '',
                price: '',
                bookImg: ''
            },
            bookInfo:[]
        }
    },
    mounted() {
        this.getAllbooks();
    },
    methods: {
        getSelectedBook(data) {
            let bookId=data._id;
            axiosService.getSelectedBook(bookId).then((res) => {
                activityService.setActivity(data.bookName+" is Viewed");
                this.book = res.data;
            }).catch((err) => {
                console.log(err);
            })
        },
        handleEditSubmitForm() {
            axiosService.editBook(this.book).then((res) => {
                activityService.setActivity(this.book.bookName+" is Updated");
                console.log(res);
                document.querySelector("#closeModel").click();
                this.getAllbooks();
            }).catch(error => {
                console.log(error)
            });
        },
        getAllbooks() {
            axiosService.getBooks().then((res) => {
                this.mainResult = res.data;
                console.log(res.data);
            }
            ).catch(function (err) {
                console.log(err);
            })
        },
        deleteBook(data) {
            let bookId=data._id;
            axiosService.deleteBook(bookId).then((res) => {
                activityService.setActivity(data.bookName+" is Deleted");
                console.log(res);
                this.getAllbooks();
            }).catch((err) => {
                console.log("error in deleting record");
            })
        },
        subString(data){
            let subStringData= data.length>=15 ? data.substring(0,15) + '...' : data;
            return subStringData
        }
    }
}
</script>

<template>
    <recentAction />
    <div class="container">
        <div class="row">
            <div class="col-sm-3" v-for="result in mainResult" :key="result._id">
                <div class="card my-3">
                    <img v-if="result.bookImg == null" src="https://via.placeholder.com/150" height="300">
                    <img v-else :src="result.bookImg" class="card-img-top" alt="..." height="300">
                    <div class="card-body">
                        <h5 class="card-title" :title="result.bookName">{{ subString(result.bookName) }}</h5>
                        <span class="card-link">Rs: {{ result.price }}</span>
                        <span class="card-link btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                            @click="getSelectedBook(result)">Edit</span>
                        <span class="card-link btn btn-danger" @click="deleteBook(result)">Delete</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Edit Book</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="handleEditSubmitForm" class="border p-2 my-2">
                        <div class="form-group">
                            <label>{{ pagetextLabel.bookName }}</label>
                            <input type="text" class="form-control" v-model="book.bookName" required>
                        </div>
                        <div class="form-group">
                            <label>{{ pagetextLabel.bookPrice }}</label>
                            <input type="number" class="form-control" v-model="book.price" required>
                        </div>
                        <div class="form-group mt-2">
                            <img v-if="book.bookImg.length == 0" class="card-img-top"
                                src="https://via.placeholder.com/150" height="300">
                            <img v-else :src="book.bookImg" class="card-img-top" alt="..." height="300" />
                        </div>
                        <div class="form-group">
                            <label>{{ pagetextLabel.bookImg }}</label>
                            <input type="text" class="form-control" v-model="book.bookImg" required>
                        </div>
                        <div class="form-group py-3">
                            <button class="btn btn-danger btn-block">Update Book</button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        id="closeModel">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>