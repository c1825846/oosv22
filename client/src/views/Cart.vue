<template>
  <div class="cart">
    <div class="container">
      <div class="cart__body">
        <div class="" v-if="!items.length">
          Корзина пуста
        </div>
        <div class="cart__list">
          <div class="cart__item item" v-for="item in items">
            <div class="item__title">
              {{ item.item.title }}
            </div>
            <div class="item__price">
              {{ item.item.price }}
            </div>
            <div class="item__button" @click="decrementItem(item.item._id)">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"/>
                </svg>
              </div>
            </div>
            <div class="item__quantity">
              {{ item.quantity }}
            </div>
            <div class="item__button" @click="incrementItem(item.item._id)">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </div>
            </div>
            <div class="item__sum">
              {{ item.item.price * item.quantity }}
            </div>
          </div>
        </div>
        <div class="cart__footer">
          Итого:
          <div class="cart__amount">
            {{ amount }}
          </div>
        </div>
        <div class="cart__order-button" v-if="!isFormOpened && $store.getters.cart.length" @click="isFormOpened=true">
          Оформить заявку
        </div>
        <div class="cart__order form" v-if="isFormOpened">
          <div class="form__label">Имя</div>
          <input class="form__input" v-model="name"/>
          <div class="form__label">E-mail</div>
          <input class="form__input" v-model="email"/>
          <div class="form__label">Телефон</div>
          <input class="form__input" v-model="phone"/>
          <div class="form__label">ИНН</div>
          <input class="form__input" v-model="inn"/>
          <div class="form__label">Комментарий</div>
          <textarea class="form__input" v-model="comment"/>
          <div class="form__button" @click="sendOrder">
            Отправить
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      isFormOpened: false,
      name: '',
      email: '',
      phone: '',
      inn: '',
      comment: '',
    }
  },
  computed: {
    items() {
      return this.$store.getters.cart
    },
    amount() {
      return this.items.reduce((acc, item) => {
        return acc + item.item.price * item.quantity
      }, 0)
    }
  },
  methods: {
    incrementItem(id) {
      this.$store.commit('incrementItem', id)
    },
    decrementItem(id) {
      this.$store.commit('decrementItem', id)
    },
    sendOrder() {
      fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          phone: this.phone,
          inn: this.inn,
          comment: this.comment,
          cart: this.$store.getters.cart
        })
      }).then(response => response.json()).then(data => {
        this.isFormOpened = false
        this.name = ''
        this.email = ''
        this.phone = ''
        this.inn = ''
        this.comment = ''
        this.$store.commit('clearCart')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  &__list {
    margin-bottom: 10px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #000;
    padding: 10px 0;
    font-weight: 700;
  }

  &__order-button {
    padding: 10px 20px;
    cursor: pointer;
    background: lightgray;

    &:hover {
      background: darken(lightgray, 10%);
    }
  }
}

.item {
  display: grid;
  grid-template-columns: 1fr 100px 100px 100px 100px 100px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  &__title {
    @media (max-width: 767px) {
      grid-area: 1/1/2/3;
    }
  }

  &__button {
    cursor: pointer;
  }

  &__sum {
    text-align: right;
    @media (max-width: 767px) {
      display: none;
    }
  }
}

.form {
  max-width: 300px;

  &__label {
    margin-bottom: 2px;
  }

  &__input {
    resize: vertical;
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