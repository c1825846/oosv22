<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog__body">
        <AsideMenu
            :link-list="categories"
        />
        <div class="catalog__grid">
          <Card
              v-for="item in items"
              :key="item.title"
              :item="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsideMenu from "@/components/AsideMenu";
import Card from "@/components/Card";

export default {
  name: "Catalog",
  components: {
    AsideMenu,
    Card,
  },
  data() {
    return {
      categories: ['ДР-1', 'ДР-2', 'Шнеки', 'Транспортёры', 'Грануляторы'],
      items: [
        {title: 'Дробилка', price: '30000', imagePath: ''},
        {title: 'Транспортёр', price: '15000', imagePath: ''},
        {title: 'Часть дробилки', price: '7000', imagePath: ''},
        {title: 'Бункер', price: '6000', imagePath: ''},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  &__body {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-column-gap: 10px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 10px;
  }
}
</style>