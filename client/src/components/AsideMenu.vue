<template>
  <div class="menu">
    <div class="menu__list">
      <div
          class="menu__link"
          :class="{'menu__link--selected': selectedItem === ''}"
          @click="clearIem"
      >
        Все категории
      </div>
      <div
          class="menu__link"
          :class="{'menu__link--selected': link === selectedItem}"
          v-for="link in linkList"
          @click="selectItem(link)"
      >
        {{ link.title }}
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
      selectedItem: '',
    }
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item
      this.$emit('select', item)
    },
    clearIem() {
      this.selectedItem = ''
      this.$emit('select', '')
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  &__list {
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

    &--selected {
      background: darken(lightgray, 20%);
    }
  }
}
</style>