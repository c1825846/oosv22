<template>
  <div class="login">
    <div class="login__label">Логин</div>
    <input type="text" class="login__input" v-model="login">
    <div class="login__label">Пароль</div>
    <input type="password" class="login__input" v-model="password">
    <div class="login__button" @click="auth">
      Войти
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLogin",
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    auth() {
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: this.login,
          password: this.password
        })
      }).then(response => response.json()).then(data => {
        this.$cookies.set('session', data.session)
        this.$router.push('/admin/items')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  max-width: 300px;
  &__label{
    
  }
  &__input{
    font-size: 16px;
    border: 1px solid #000;
    margin-bottom: 10px;
    padding: 4px 8px;
    width: 100%;
  }
  &__button{
    padding: 10px 20px;
    cursor: pointer;
    background: lightgray;

    &:hover {
      background: darken(lightgray, 10%);
    }
  }
}
</style>