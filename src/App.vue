<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import  { useRouter } from 'vue-router'
const router = useRouter();
router.push({ path: '/new' });

  function checkActive(event: Event) {

      const navBarClicked = event.target as HTMLElement | null
      if (!navBarClicked) return
      navBarClicked.classList.add('navbarActive');
  }

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <a><RouterLink @click="checkActive($event)" to="/new">New</RouterLink></a>
        <a><RouterLink @click="checkActive($event)" to="/art">Art</RouterLink></a>
        <a><RouterLink @click="checkActive($event)" to="/music">Music</RouterLink></a>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>

#app {
  width: 100%;
  margin: 0 auto;
  font-weight: normal;
}

nav {
  display: flex;
  justify-content: center;
  border: 1px solid rgba(248, 250, 252, 0.0588235294);
  padding: 1rem;
  font-size: 1.5rem;
  gap: 2rem;


    a {
    text-decoration: none;
    color: rgb(226 232 240 / 1);
    font-weight: 700;
  }

  a:hover {
    color: rgb(56 189 248 / 1 );
    // border-bottom: 1px solid rgb(56 189 248 / 1 );
  }

  a .router-link-active {
    color: rgb(56 189 248 / 1 );
    // border-bottom: 1px solid rgb(56 189 248 / 1 );
  }
}

</style>
