<template>
  <!-- <div id="nav" class="col-sm-12 col-md-10 col-lg-8 col-xl-6 col-xxl-4"> -->
 

  <Header class="navbar" />

    <div class="container">
      <main class="col-sm-12 col-md-10 col-lg-8 col-xl-6 col-xxl-6 mx-auto ">
        <div class="row justify-content-center">
          <router-view class="col routerLink" />
        </div>
      </main>
      </div>
  <Footer class="col" />

 
  
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
    --primary-color: #1E73BE;
    --secondary-color: #EDED00;
    --backgroundColor: #D4E2EB;
  }
 
  .bgColor{
    background-color: var(--backgroundColor);
  }
  .bgPrimaryColor{
    background-color: var(--primary-color);
  }
  .bgSecondaryColor{
    background-color: var(--secondary-color);
  }
  .textPrimary{
    color: var(--primary-color);
  }
  .routerLink{
    text-decoration: none;
  }
  
  hr {
    height: 2px  !important;
    opacity: 1 !important;
  }
  
</style>
