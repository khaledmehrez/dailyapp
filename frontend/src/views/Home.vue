<template>
  <div class="home  ">
    <img class="landingHome" src="../assets/landingHome.jpg" />
    <div class="box">
    <div class="homeSection1 p-d-flex p-flex-column   ">
      <img class="HomePicture1" src="../assets/Todo.png" />
      <router-link to="/todo"> <Button class="p-button-raised p-button-rounded p-m-2 ">Create your todo list</Button></router-link>
    </div>
    <div class="homeSection2 p-d-flex p-flex-column  ">
      <img class="HomePicture2" src="../assets/news.jpg" />
     <router-link to="news">  <Button class="p-button-raised p-button-rounded p-m-2">Check your news</Button> </router-link>
      
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style >
.landingHome {
  height: 130vh;
  width: 100%;
}
.HomePicture1 {
  height:10rem
  
}
.HomePicture2 {
  height:10rem
 
}
.box{
  display: flex;
  justify-content: space-evenly;
}
.btn{
  
}
</style>