<template>
<div class="admin">
  <div class="container">
    <div class="admin__body">
      <div class="admin__menu menu">
        <div class="menu__item">
          Категории
        </div>
        <div class="menu__item">
          Товары
        </div>
        <div class="menu__item">
          Заявки
        </div>
        <div class="menu__item">
          Заявки на звонок
        </div>
      </div>
      <div class="admin__view">
        <AdminCategories/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AdminCategories from "@/components/AdminCategories";

export default {
  name: "Admin",
  components: {
    AdminCategories
  },
  data(){
    return {
      categories: ['ДР-1', 'ДР-2', 'Шнеки', 'Транспортёры', 'Грануляторы'],
    }
  }
}
</script>

<style lang="scss" scoped>
.menu{
  display: flex;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  &__item{
    padding: 10px 20px;
    cursor: pointer;
  }
}

</style>