<template>
  <div class="admin">
    <div class="container">
      <div class="admin__body">
        <div class="admin__menu menu">
          <router-link to="/admin/categories" class="menu__item">
            Категории
          </router-link>
          <router-link to="/admin/items" class="menu__item">
            Товары
          </router-link>
          <router-link to="/admin/orders" class="menu__item">
            Заявки
          </router-link>
          <router-link to="/admin/calls" class="menu__item">
            Заявки на звонок
          </router-link>
          <div class="menu__item" @click="logout">
            Выйти
          </div>
        </div>
        <router-view class="admin__view"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  created() {
    if (this.$route.path === '/admin')
      this.$router.push('/admin/orders')
    if (!this.$cookies.isKey('session')) {
      this.$router.push('/admin/login')
    }
  },
  methods : {
    logout() {
      fetch('/api/logout').then(response => {
        this.$cookies.remove('session')
        this.$router.push('/admin/login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;

  &__item {
    padding: 10px 20px;
    cursor: pointer;
  }
}

.admin {
  &__view {
    padding: 10px 0;
  }
}

</style>