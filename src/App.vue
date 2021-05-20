<template>
  <!-- <div id="nav" class="col-sm-12 col-md-10 col-lg-8 col-xl-6 col-xxl-4"> -->
  <main class="col-sm-12 col-md-10 col-lg-8 col-xl-6 col-xxl-6 mx-auto">
    <div class="row justify-content-center">
      <Header class="col" />
      <router-view class="col" />
      <Footer class="col" />
    </div>
  </main>
  
</template>

<script>
import Footer from '@/components/Footer';
import Header from '@/components/Header';
export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>


<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  :root {
      --primary-color: #C1545A;
      --secondary-color: #F6F6F6;
      --color-icons: #C1545A;
      --input-color: #E3E3E3;
      --color-button: #DFBFC0;
      --complementary-color: #B8B5FF;
      --contact-color: #DFBFC0;
      --input-color: #E3E3E3;
      --border-contact-color: #C1545A;
      --font-family: 'Redressed', cursive;
  }
</style>
