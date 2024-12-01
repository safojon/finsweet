<script setup>
import Shapes from '@/../public/images/CTA/Shapes.png';
</script>

<template>
  <div class="main">
    <span class="shapes">
      <img :src="Shapes" alt="shapes" />
    </span>
    <div class="card">
      <div class="name">
        <p>Subscribe our News Letterto to get Latest Updates.</p>
      </div>
      <div class="input">
        <input type="text" placeholder="Paresh@Pixeto.com" />
      </div>
    </div>
  </div>

  <span class="newslitter"> NEWSLETTER </span>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@500&display=swap");

.main {
  width: 1256px;
  height: 333px;
  background-color: #666dff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.newslitter {
  position: relative;
  top: -230px;
  left: 92px;
  color: white;
  font-family: "Poppins", serif;
  font-weight: 300;
  letter-spacing: 3px;
  font-style: normal;
  font-style: 14px;
}

.shapes {
  position: relative;
  img {
    width: 88.59px;
    height: 80px;
    position: absolute;
    top: -167px;
    left: 0px;
  }
}

.card {
  display: flex;
  justify-content: center;
  gap: 112px;
}

.name {
  font-family: "Poppins", serif;
  font-weight: 550;
  font-style: normal;
  font-size: 35px;
  margin-top: 129px;
  margin-left: 90px;
  margin-bottom: 96px;
  color: white;
}

input {
  padding: 32px;
  width: 454px;
  height: 64px;
  margin-top: 141px;
  margin-right: 96px;
  margin-bottom: 128px;
  color: #232536;
}
</style>
