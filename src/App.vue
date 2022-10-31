<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
    <ul class="navbar-nav float-end">
      <li class="nav-item">
        <a class="nav-link active" href="#">BookStore App</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <RouterLink to="/">Home</RouterLink>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><RouterLink to="/addBook">Add Book</RouterLink></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><RouterLink to="/getBooks">Get Books</RouterLink></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><RouterLink to="/getActivity">Get Notifications</RouterLink></a>
      </li>
    </ul>
  </div>
</nav>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
