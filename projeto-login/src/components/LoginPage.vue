<template>
  <div class="site-content">
    <div class="container">
      <section>
        <form>
          <h1>Login</h1>
          <div class="inputbox">
            
            <input id="user" type="email" required @focus="moveLabelUp('user')" @blur="moveLabelDown('user')" />
            <label for="user" :class="{ 'active' : userActive }">Usuário</label>
          </div>
          <div class="inputbox">
            
            <input id="password" type="password" required @focus="moveLabelUp('password')" @blur="moveLabelDown('password')" />
            <label for="password" :class="{ 'active' : passwordActive }">Senha</label>
          </div>
          <div class="forget">
            <label for="to recover">
              <input
              type="checkbox" />
              Lembrar de mim
            </label>
          </div>
          <a href="#">Recuperar a senha</a>
          <button>
            Iniciar
          </button>
          <div class="register">
            <p>Não tem conta? <a href="#">Cadastre-se</a></p>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      userActive: false,
      passwordActive: false
    };
  },

  methods: {
    moveLabelUp(field) {
      if (field === 'user') {
        this.userActive = true;
      } else if (field === 'password') {
        this.passwordActive = true;
      }
    },

    moveLabelDown(field) {
      if (field === 'user') {
        this.userActive = !this.$refs.user?.value;
      } else if (field === 'password') {
        this.passwordActive = !this.$refs.password?.value;
      }
    }
  }
}
</script>

<style scoped>

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}

.section {
 position: relative;
 max-width: 400px;
 background-color: transparent;
 border: 2px solid #ffffff80;
 border-radius: 20px;
 backdrop-filter: blur(55px);
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 2rem 3rem;
}

.inputbox input {
  width: 100%;
  height: 60px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0 35px 0 5px;
  color: #fff;
}

.inputbox ion-icon {
  position: relative;
  right: 8px;
  color: #fff;
  font-size: 1.2rem;
  top: 20px;
}

.inputbox label.active {
  top: 10px; 
  font-size: 0.8rem; 
  color: #fff;
}

.forget {
  margin: 35px 0;
  font-size: 0.85rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

h1 {
  font-size: 2rem;
  color: #fff;
  text-align: center;
}

.inputbox {
  position: relative;
  margin: 30px 0;
  max-width: 310px;
  border-bottom: 2px solid #fff;
}

.inputbox label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.5s ease-in-out;
}

.forget label {
  display: flex;
  align-items: center;
}

.forget label input {
  margin-right: 3px;
}

.forget a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.forget a:hover {
  text-decoration: underline;
}

button {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(255, 255, 255, 1);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.4s ease;
}

button:hover {
  background-color: rgb(255, 255, 255, 0.5);
}

.register {
  font-size: 0.9rem;
  color: #fff;
  text-align: center;
  margin: 25px 0 10px;
}

register p a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}

register p a:hover {
  text-decoration: underline;
}

a {
  color: #5D919F;
}

@media (max-width: 600px) {
  .container {
    width: 100%;
  }

  .form-group {
    max-width: 100%;
  }

  .form-control {
    width: 100%;
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .container {
    width: 80%;
    margin: auto;
    justify-content: center;
    align-items: center;
  }

  .form-group {
    max-width: 100%;
  }

  .form-control {
    width: 100%;
  }
}
</style>