<template>
<div class="items">
  <div class="items__list">
    <router-link to="/admin/detail" class="items__item item">
      Добавить новый товар
    </router-link>
    <router-link :to="`/admin/detail/${item._id}`" class="items__item item" v-for="item in items" :key="item._id">
      <div class="item__cell">
        {{ item.title }}
      </div>
      <div class="item__cell">
        {{ item.category.title }}
      </div>
      <div class="item__cell">
        {{ item.price }}
      </div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "AdminItems",
  data(){
    return {
      items: []
    }
  },
  created() {
    this.fetchItems()
    if (!this.$cookies.isKey('session')) {
      this.$router.push('/admin/login')
    }
  },
  methods: {
    fetchItems() {
      fetch('/api/item').then(response => response.json()).then(data => {
        this.items = data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 5px 10px;
  &__cell{

  }
}
</style>