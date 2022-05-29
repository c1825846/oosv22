<template>
  <div class="card">
    <div class="card__image">
      <img :src="item.imagePath" alt="">
    </div>
    <div class="card__title">
      {{ item.title }}
    </div>
    <div class="card__footer">
      <div class="card__price">
        {{ item.price }}
      </div>
      <div class="card__button"></div>
    </div>
  </div>
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
  background: gray;
  height: 400px;
}
</style>