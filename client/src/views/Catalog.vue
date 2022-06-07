<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog__body">
        <AsideMenu
            :link-list="categories"
            @select="selectCategory($event)"
        />
        <div class="catalog__grid">
          <Card
              v-for="item in filteredItems"
              :key="item.title"
              :item="item"
              @add="addToCart($event)"
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
      selectedCategory: '',
    }
  },
  computed: {
    categories() {
      return this.$store.getters.categories
    },
    items() {
      return this.$store.getters.items
    },
    filteredItems() {
      if (this.selectedCategory !== '')
        return this.items.filter(item => item.category._id === this.selectedCategory._id)
      return this.items
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category
    },
    addToCart(item) {
      this.$store.commit('addItemToCart', {
        item,
        quantity: 1,
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  &__body {
    display: grid;
    grid-column-gap: 10px;
    @media (min-width: 768px) {
      grid-template-columns: 300px 1fr;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 10px;
  }
}
</style>