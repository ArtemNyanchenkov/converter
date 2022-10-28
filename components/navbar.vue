<template>
  <div class="navbar_container">
    <NuxtLink exact active-class="active" to="/" class="Link">Калькулятор</NuxtLink>
    <NuxtLink active-class="active" to="/rubles/" class="Link">Курс рубля</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>
@media (max-width: 1280px) {
  .navbar_container {
    width: 1280px!important;
  }
}
@media (max-width: 768px) {
  .navbar_container {
    width: 768px!important;
  }
}
@media (max-width: 360px) {
  .navbar_container {
    width: 360px!important;
    padding-left: 30px!important;
  }
}

.navbar_container {
  box-sizing: border-box;
  width: 100%;
  background: #F8F8F8;
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 80px;
  justify-content: start;
}
.Link{
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
  margin-right: 30px;
  font-family: 'Roboto';
  font-style: normal;
  text-decoration: none;
}
.active{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: #343434;
}
</style>