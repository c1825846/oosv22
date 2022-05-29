<template>
  <div class="detail">
    <div class="container">
      <div class="detail__loading" v-if="isLoading">
        Загрузка...
      </div>
      <div class="detail__body" v-else>
        <div class="detail__image">
          <img :src="item.imagePath" alt="">
        </div>
        <div class="detail__info">
          <div class="detail__title">
            {{ item.title }}
          </div>
          <div class="detail__price">
            {{ item.price }} р.
          </div>
          <div class="detail__button">
            В корзину
          </div>
          <div class="detail__description">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      item: {
        title: '',
        price: 0,
        imagePath: '',
        description: '',
      },
      isLoading: false
    }
  },
  created() {
    this.isLoading = true
    fetch(`/api/item/${this.$route.params.id}`).then(response => response.json()).then(data => {
      this.item = data
      this.isLoading = false
    })
  }
}
</script>

<style lang="scss" scoped>
.detail {
  padding-top: 40px;
  &__body {
    display: grid;
    grid-template-columns: 500px 1fr;
    gap: 20px;
  }

  &__image {
    height: 400px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__title {
    font-size: 34px;
    margin-bottom: 30px;
  }

  &__price {
    font-size: 40px;
    margin-bottom: 20px;
  }

  &__button {
    padding: 10px 20px;
    cursor: pointer;
    background: lightgray;
    margin-bottom: 30px;
    &:hover {
      background: darken(lightgray, 10%);
    }
  }
  &__description {
    font-size: 18px;
    line-height: 1.5;
  }
}
</style>