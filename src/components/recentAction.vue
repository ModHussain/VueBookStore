<template>
    <div class="jumbotron mt-5 pt-5" v-if="notify==false">
        <div class="container text-center">
            No Action recorded
        </div>
    </div>
    <div class="jumbotron" v-else="notify==true">
        <div class="container text-center">
            <div class="m-4" v :class="notify ? 'd-block': 'd-none'">
                <h6 class="text-center btn btn-primary m-4 position-relative" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> Click to Know Activity Notifications
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {{bookInfo.length}}
            <span class="visually-hidden">unread messages</span>
            </span>
            </h6>
            </div>
            <div class="row collapse" id="collapseExample">
                <div class="col-sm-8 offset-sm-2">
                    <div v-for="bookinfo in bookInfo" class="alert alert-success">
                        {{bookinfo}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import activityService from "../Services/activityService"

export default{
    data(){
        return {
            bookInfo:[],
            notify:false
        }
    },
    mounted(){
        this.getAllActivity();
    },
    methods: {
        getAllActivity(){
            activityService.getActivity().subscribe((res)=>{
                console.log(res);
                this.notify=true;
                this.bookInfo.push(res);
            })
        }
    }

}
</script>