<template>
<div class="calls">
  <div class="calls__list">
    <div class="calls__item item" v-for="order in orders.sort((a, b) => a.isDone - b.isDone)" :class="{'item--done': order.isDone}">
      <div class="item__name">
        {{ order.name }}
      </div>
      <a :href="`tel:${order.phone}`" class="item__phone">
        {{ order.phone }}
      </a>
      <div class="item__button" @click="checkOrder(order._id)">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <div class="item__button" @click="deleteOrder(order._id)">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AdminCalls",
  data() {
    return {
      orders: [],
    }
  },
  created() {
    this.fetchOrders()
    if (!this.$cookies.isKey('session')) {
      this.$router.push('/admin/login')
    }
  },
  methods: {
    fetchOrders(){
      fetch('/api/callOrder').then(response => response.json()).then(data => {
        this.orders = data
      })
    },
    deleteOrder(id){
      fetch(`/api/callOrder/${id}`, {
        method: 'DELETE'
      }).then(response => response.json()).then(data => {
        this.fetchOrders()
      })
    },
    checkOrder(id){
      fetch(`/api/callOrder/${id}`, {
        method: 'PUT'
      }).then(response => response.json()).then(data => {
        this.fetchOrders()
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.item {
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 120px 40px 40px;
  align-items: center;
  padding: 5px 10px;
  &__button {
    cursor: pointer;
  }
  &--done {
    background: lightgreen;
  }
}
</style>