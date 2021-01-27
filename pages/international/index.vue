<template>
  <div class="container">
    <Layout>
      <Header
        :style="{
          background: '#fff',
          position: 'fixed',
          width: '100%',
          boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'
        }"
      >
        <Button type="primary" class="headerButton" @click="onSubmit">添加</Button>
        <Button type="primary" class="headerButton">导入</Button>
        <Button type="primary" class="headerButton">下载导入模板</Button>
      </Header>
    </Layout>
    <div class="litsContainer">
       <div class="headerLabel" >
        <div v-for="title in langTitles" v-bind:key="title+'123'">
          <p class="p">{{title}}</p>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
import { obj } from "./index";
export default obj;
</script>

<style>
@import url("./index.css");
</style>
