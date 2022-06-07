<template>
  <div class="menu">
    <div class="container">
      <div class="menu__body">
        <div class="menu__list">
          <router-link to="/" class="menu__link">Каталог</router-link>
          <router-link to="/about" class="menu__link">О нас</router-link>
          <router-link to="/cart" class="menu__link">
            Корзина
            <span v-if="$store.getters.cart.length">
            {{ $store.getters.cart.length }}
          </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu"
}
</script>

<style lang="scss" scoped>
.menu {
  &__body {
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
  }

  &__list {
    display: flex;
  }

  &__link {
    display: block;
    padding: 10px 20px;
  }
}
</style>