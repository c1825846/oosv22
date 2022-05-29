<template>
  <div class="menu">
    <div class="menu__list">
      <div class="menu__link" v-for="link in linkList">
        {{ link }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsideMenu",
  props: {
    linkList: Array,
  },
  data() {
    return {
      selectedItem: null,
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.menu{
  &__list{
    display: grid;
    gap: 5px;

  }
  &__link {
    padding: 10px 20px;
    background: lightgray;
    cursor: pointer;
    &:hover {
      background: darken(lightgray, 10%);
    }
  }
}
</style>