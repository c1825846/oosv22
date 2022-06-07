<template>
  <div class="item">
    <div class="item__loading" v-if="isLoading">
      Загрузка...
    </div>
    <div class="item__body" v-else>
      <div class="item__image">
        <img :src="item.imagePath" alt="">
        <input type="file" @change="handleFileChange">
      </div>
      <div class="item__info">
        <div class="item__message">

        </div>
        <div class="item__buttons">
          <div class="item__button" @click="saveItem">Сохранить</div>
          <div class="item__button" v-if="$route.params.id" @click="deleteItem">Удалить</div>
        </div>
        <input type="text" class="item__title" v-model="item.title">
        <input type="text" class="item__price" v-model="item.price"> р.
        <br>
        <select class="item__category" v-model="item.category">
          <option :value="category._id" v-for="category in $store.getters.categories">
            {{ category.title }}
          </option>
        </select>
        <textarea class="item__description" v-model="item.description"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminItemDetail",
  data() {
    return {
      item: {
        title: '',
        price: '',
        description: '',
        category: '',
      },
      image: null,
      isLoading: false,
    }
  },
  methods: {
    saveItem() {
      const isItemNew = !this.$route.params.id
      console.log(isItemNew)
      const url = isItemNew ? '/api/item' : `/api/item/${this.$route.params.id}`
      let formData = new FormData()
      formData.append('title', this.item.title)
      formData.append('price', this.item.price)
      formData.append('description', this.item.description)
      formData.append('category', this.item.category)
      formData.append('image', this.image)
      fetch(url, {
        method: 'POST',
        body: formData
      }).then(response => response.json()).then(data => {
        this.$store.dispatch('fetchItems')
        this.$router.push('/admin/items')
      })
    },
    deleteItem() {
      fetch(`/api/item/${this.$route.params.id}`, {
        method: 'DELETE'
      }).then(response => response.json()).then(data => {
        this.$store.dispatch('fetchItems')
        this.$router.push('/admin/items')
      })
    },
    handleFileChange(event) {
      this.image = event.target.files[0]
    },
    fetchItem() {
      this.isLoading = true
      fetch(`/api/item/${this.$route.params.id}`).then(response => response.json()).then(data => {
        this.item = data
        this.item.category = data.category._id
        this.isLoading = false
      })
    }
  },
  created() {
    if (this.$route.params.id)
      this.fetchItem()
    if (!this.$cookies.isKey('session')) {
      this.$router.push('/admin/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
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
    width: 100%;
  }

  &__category {
    font-size: 24px;
    margin-bottom: 20px;
  }

  &__price {
    font-size: 40px;
    margin-bottom: 20px;
  }

  &__buttons {
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  &__button {
    padding: 10px 20px;
    cursor: pointer;
    background: lightgray;

    &:hover {
      background: darken(lightgray, 10%);
    }
  }

  &__description {
    font-size: 18px;
    line-height: 1.5;
    width: 100%;
    height: 300px;
    resize: vertical;
  }
}
</style>