<template>
  <div class="orders">
    <div class="orders__list">
      <div class="orders__item order" v-for="order in orders">
        <div class="order__cell">
          <div class="order__row">
            <span class="order__label">Имя</span>:
            <span class="order__value">{{ order.name }}</span>
          </div>
          <div class="order__row">
            <span class="order__label">Телефон</span>:
            <span class="order__value">
              <a :href="`tel:${order.phone}`">
                {{ order.phone }}
              </a>
            </span>
          </div>
          <div class="order__row">
            <span class="order__label">Email</span>:
            <span class="order__value">
              <a :href="`mailto:${order.email}`">
                {{ order.email }}
              </a>
            </span>
          </div>
          <div class="order__row">
            <span class="order__label">ИНН</span>:
            <span class="order__value">{{ order.inn }}</span>
          </div>
          <div class="order__row">
            <span class="order__label">Комментарий</span>:
            <span class="order__value order__value--comment">{{ order.comment }}</span>
          </div>
        </div>
        <div class="order__cell">
          <div class="order__cart">
            Товары:
            <div class="order__item" v-for="item in order.cart">
              {{ item.item.title }}
              {{ item.quantity }}
              {{ item.item.price }}
            </div>
          </div>
        </div>
        <div class="order__cell">
        </div>
        <div class="order__cell">
          <div class="order__cart">
            Сумма заказа:
            {{ order.cart.reduce((acc, item) => { return acc + item.item.price * item.quantity }, 0) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminOrders",
  data() {
    return {
      orders: []
    }
  },
  created() {
    this.fetchOrders()
    if (!this.$cookies.isKey('session')) {
      this.$router.push('/admin/login')
    }
  },
  methods: {
    fetchOrders() {
      fetch('/api/order').then(response => response.json()).then(data => {
        this.orders = data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  display: grid;
  grid-template-columns: 300px 1fr;
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
  &__cell {
  }
  &__value {
    font-weight: 700;

    &--comment {
      font-weight: 400;
    }
  }
}
</style>