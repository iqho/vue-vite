<template>
    <div><h1>Home Page</h1>
      <ul>
        <li v-for="(book, index) in $store.state.products" :key="index">{{ book.title }}</li>
      </ul>
  <button type="button" @click="$store.state.count++" class="btn btn-danger">Count is: {{ $store.state.count }}</button>
    </div>
  </template>
