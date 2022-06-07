<template>
  <div class="categories">
    <div class="categories__message">
      {{ message }}
    </div>
    <div class="categories__list">
      <div class="categories__item item" v-for="category in categories">
        <div class="item__title">
          {{ category.title }}
        </div>
        <div class="item__button" @click="deleteCategory(category._id)">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="categories__add item">
        <input type="text" class="categories__input" v-model="formInput" @keyup.enter="addCategory">
        <div class="item__button" @click="addCategory">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminCategories",
  data() {
    return {
      formInput: '',
      message: '',
    }
  },
  computed: {
    categories() {
      return this.$store.getters.categories
    }
  },
  methods: {
    deleteCategory(id) {
      fetch(`/api/category/${id}`, {
        method: 'DELETE'
      }).then(response => response.json()).then(data => {
        this.message = data.message
        this.$store.dispatch('fetchCategories')
      })
    },
    addCategory() {
      fetch('/api/category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.formInput
        })
      }).then(response => response.json()).then(data => {
        this.formInput = ''
        this.$store.dispatch('fetchCategories')
      })
    }
  },
  created() {
    if (!this.$cookies.isKey('session')) {
      this.$router.push('/admin/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.categories {
  &__add {
    display: flex;
  }

  &__input {
    flex: 1;
    border: 1px solid #000;
    padding: 4px 8px;
    font-size: 16px;
  }
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  padding: 5px 0;

  &__button {
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>