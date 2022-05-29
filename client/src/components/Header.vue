<template>
  <header class="header">
    <div class="container">
      <div class="header__body">
        <div class="header__logo">
          СЕРВИС <br>
          ВПРОК
        </div>
        <div class="header__contacts">
          <div class="header__contact">
            ул. Попова, 228
          </div>
          <div class="header__contact">
            8 (923) 888-88-88
          </div>
          <div class="header__button">
            Заказать звонок
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 0;
  &__body {
    display: flex;
    justify-content: space-between;
  }
  &__contacts {
    text-align: right;
  }
}
</style>