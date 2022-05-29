<template>
  <router-link :to="`/detail/${item._id}`" class="card" >
    <div class="card__image">
      <img :src="item.imagePath" alt="">
    </div>
    <div class="card__title">
      {{ item.title }}
    </div>
    <div class="card__footer">
      <div class="card__price">
        {{ item.price }} р.
      </div>
      <div class="card__button" @click.prevent="">
        В корзину
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 10px;
  &__image {
    height: 300px;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__title{
    margin-bottom: 10px;
  }
  &__footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__price{}
  &__button{
    padding: 10px 20px;
    cursor: pointer;
    background: lightgray;
    &:hover {
      background: darken(lightgray, 10%);
    }
  }
}
</style>