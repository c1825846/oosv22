<template>
  <header class="header">
    <div class="container">
      <div class="header__body">
        <div class="header__logo">
          <div class="header__image">
            <img src="@/assets/logo.svg" alt="">
          </div>
          СЕРВИС <br>
          ВПРОК
        </div>
        <div class="header__contacts">
          <div class="header__contact">
            ул. Попова, 228
          </div>
          <a href="tel:89619888898" class="header__contact">
            8-961-988-88-98
          </a>
          <router-link to="/orderCall" class="header__button">
            Заказать звонок
          </router-link>
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
@font-face {
  font-family: 'Arkhip';
  src: url('../assets/arkhip.woff2') format("woff2"), url('../assets/arkhip.woff') format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

.header {
  padding: 20px 0;

  &__logo {
    font-family: Arkhip, serif;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__image {
    width: 70px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__body {
    display: flex;
    justify-content: space-between;
  }

  &__contacts {
    text-align: right;
    line-height: 1.3;
  }

  &__contact {
    display: block;
  }
}
</style>