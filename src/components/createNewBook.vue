<template>
    <div class="justify-content-center m-5" style="margin: 10px 20% !important;">
        <div class="m-5 p5">
            <h3 class="text-center">{{ Heading }}</h3>
            <form @submit.prevent="handleSubmitForm" class="border p-5 my-5">
                <div class="form-group">
                    <label>{{ pagetextLabel.bookName }}</label>
                    <input type="text" class="form-control" v-model="book.bookName" required>
                </div>
                <div class="form-group">
                    <label>{{ pagetextLabel.bookPrice }}</label>
                    <input type="number" class="form-control" v-model="book.price" required>
                </div>
                <div class="form-group mt-2">
                    <img v-if="book.bookImg.length == 0" class="card-img-top" src="https://via.placeholder.com/150"
                        height="300">
                    <img v-else :src="book.bookImg" class="card-img-top" alt="..." height="300" />
                </div>
                <div class="form-group">
                    <label>{{ pagetextLabel.bookImg }}</label>
                    <input type="text" class="form-control" v-model="book.bookImg" required>
                </div>
                <div class="form-group py-3">
                    <button class="btn btn-danger btn-block">Create Book</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axiosService from "../Services/axoisService";
import router from '@/router';
export default {
    data() {
        return {
            pagetextLabel: {
                bookName: 'Book Name',
                bookPrice: 'Book price',
                bookImg: 'Book Image'
            },
            heading: '',
            book: {
                bookName: '',
                price: '',
                bookImg: ''
            }
        }
    },
    methods: {
        handleSubmitForm() {
            axiosService.createBook(this.book).then(function (res) {
                console.log(res);
                router.push({ path: '/getBooks' });
            }).catch(error => {
                console.log(error)
            });
        }
    },
    created() {
        this.Heading = "Add New Book"
    }
}
</script>
<style>

</style>