<template>
  <div class="order">
    <div class="container">
      <div class="order__body">
        <div class="order__label">Имя</div>
        <input type="text" class="order__input" v-model="name">
        <div class="order__label">Телефон</div>
        <input type="text" class="order__input" v-model="phone">
        <div class="order__button" @click="orderCall">Перезвонить мне</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderCall",
  data() {
    return {
      name: '',
      phone: ''
    }
  },
  methods: {
    orderCall() {
      fetch('/api/callOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          phone: this.phone
        })
      }).then(response => response.json()).then(data => {
        this.phone = ''
        this.name = ''
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  &__body {
    max-width: 300px;
  }

  &__input {
    border: 1px solid #000;
    padding: 10px;
    outline: none;
    font-size: 16px;
    margin-bottom: 10px;
    width: 100%;
  }

  &__button {
    padding: 10px 20px;
    cursor: pointer;
    background: lightgray;

    &:hover {
      background: darken(lightgray, 10%);
    }
  }
}
</style>