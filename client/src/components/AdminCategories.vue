<template>
  <div class="categories__list">
    <div class="categories__item" v-for="category in categories">
      <div class="categories__title">
        {{ category }}
      </div>
      <div class="categories__button">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    </div>
    <div class="categories__item" v-show="!isFromOpened">
      <div class="categories__add" @click="showAddFrom">
        Добавить
      </div>
    </div>
    <div class="categories__item" v-show="isFromOpened">
      <input type="text" class="categories__input" ref="input" v-model="newCategoryTitle" @keyup.enter="addCategory">
      <div class="categories__button" @click="addCategory">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminCategories",
  data(){
    return {
      isFromOpened: false,
      newCategoryTitle: '',
      categories: ['ДР-1', 'ДР-2', 'Шнеки', 'Транспортёры', 'Грануляторы'],
    }
  },
  methods: {
    showAddFrom() {
      this.isFromOpened = true
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    addCategory() {
      this.categories.push(this.newCategoryTitle)
      this.isFromOpened = false
    }
  }
}
</script>

<style lang="scss" scoped>
.categories{
  &__list{
    max-width: 300px;
  }
  &__item {
    display: flex;
    padding: 5px 10px;
  }
  &__title {
    flex: 1;

  }
  &__button{
    cursor: pointer;
    margin-left: 6px;
  }
  &__add {
    cursor: pointer;
    width: 100%;
  }
  &__input {
    flex: 1;
    outline: none;
  }
}
</style>