<script setup>
import Expertise from '../components/Expertise.vue';

import Shape from '@/../public/images/copmany/Shape.png';
import Shape2 from '@/../public/images/copmany/Shape2.png';
import Shapes from '@/../public/images/copmany/Shapes.png';
import Image1 from '@/../public/images/copmany/Image1.png';
import Image2 from '@/../public/images/copmany/Image2.png';
import Image3 from '@/../public/images/copmany/Image3.png';
import Logo1 from '@/../public/images/copmany/Logo_1.png';
import Logo2 from '@/../public/images/copmany/Logo_2.png';
import Logo3 from '@/../public/images/copmany/Logo_3.png';
import Logo4 from '@/../public/images/copmany/Logo_4.png';
import Logo5 from '@/../public/images/copmany/Logo_5.png';
import Vision from '@/../public/images/copmany/Vision.png';
import Members from '@/../public/images/copmany/Members.png';
</script>

<template>
  <header>
    <div class="container main">
      <div class="div-text">
        <div class="shapes">
          <div class="shape">
            <img :src="Shape" alt="" />
          </div>
          <div class="shape">
            <img :src="Shape2" alt="" />
          </div>
        </div>
        <br />
        <span class="company">Company</span>
        <h1>
          Award-winning Company seen and used by millions around the world.
        </h1>
        <br />
        <h2>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The Maker is a
          decentralized.
        </h2>
      </div>
      <div class="div-image">
        <div class="image">
          <img :src="Image1" />
        </div>
        <div class="image">
          <img :src="Image2" />
        </div>
        <div class="image">
          <img :src="Image3" />
        </div>
      </div>
      <div class="story">
        <div class="story-left">
          <div class="shape-story"></div>
          <br />
          <p class="Our-Story-Text">Our Story 👇</p>
          <br />
          <p class="Story-From-Startup">From Startups to Titans of Industry</p>
          <br />
          <p class="Story-Through">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic unsatiable saw his giving Remain expense of gay produce
            excited perceived do an a china mean its so ye when in explained
            Hearts am next over match mr partiality not shoud latter thus as out
            no passed forming middleton exercise up
          </p>
        </div>
        <div class="story-right">
          <div class="story-right-left">
            <div class="story-right-number">
              <div class="story-right-number-p">1560+</div>
              <div>
                <img :src="Shapes" alt="" />
                <p class="story-Project-text">Project Delivered</p>
              </div>
            </div>

            <div class="story-right-number">
              <div class="story-right-number-p">100+</div>
              <div>
                <img :src="Shapes" alt="" />
                <p class="story-Project-text">Professional</p>
              </div>
            </div>
          </div>

          <div class="story-right-left">
            <div class="story-right-number">
              <div class="story-right-number-p">950+</div>
              <div>
                <img :src="Shapes" alt="" />
                <p class="story-Project-text">Happy Client</p>
              </div>
            </div>

            <div class="story-right-number story-yrs">
              <div class="story-right-number-p">10 yrs</div>
              <div>
                <img :src="Shapes" alt="" />
                <p class="story-Project-text">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="Logos">
        <div class="logos-container">
          <div><img :src="Logo1" alt=""></div>
          <div><img :src="Logo2" alt=""></div>
          <div><img :src="Logo3" alt=""></div>
          <div><img :src="Logo4" alt=""></div>
          <div><img :src="Logo5" alt=""></div>
        </div>
      </div>
    </div>
  </header>

  <Expertise />

  <div class="Vision">
    <div class="Vision-container container">
      <div class="vision-text">
        <p class="vision-p">OUR VISION</p>
        <br>
        <p class="want-p">We want to get local identification in every corner of the world in this era of global citizenship.</p>
        <br>
        <p class="Through-p">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
        <br><br>
      </div>
      <img :src="Vision" alt="">
    </div>
  </div>

  <div class="Team">
    <div class="Team-container container">
      <div class="Team-text">
        <p class="meet-our-p">MEET OUR TEAM</p>
        <br>
        <p class="teamwork-p">Teamwork is the only way we work</p>
            <br>
        <p class="Team-Throughp">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
      </div>
      <br><br>
      <img :src="Members" alt="">
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@400;600&display=swap");

header {
  margin-top: 96px;
  width: 100%;
  padding-bottom: 90px;
}

.company {
  letter-spacing: 3px;
  font-family: "Poppins", serif;
  font-weight: 400;
  font-size: 14px;
}

.shapes {
  width: 1270px;
  height: 50px;
  display: flex;
  align-items: start;
  justify-content: space-between;
}

.div-image {
  display: flex;
}

.div-text {
  width: 500px;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 11px;
  color: #232536;
}

.div-image {
  display: flex;
  gap: 12px;
}

.story {
  display: flex;
  gap: 106px;

  .story-right{
    display: flex;
    flex-direction: column;
  }

  .story-right-left {
    padding-top: 62px;
    display: flex;
    padding-left: 110px;
    gap: 50px;
  }

  .story-right-right {
    padding-top: 62px;
    display: flex;
    padding-left: 110px;
  }

  .shape-story {
    width: 16px;
    height: 16px;
    background-color: #666dff;
  }

  .story-right-number-p {
    font-weight: 600;
    line-height: 54px;
    font-size: 36px;
  }

  .story-Project-text {
    font-weight: 600;
    line-height: 28px;
    font-size: 16px;
  }

  .story-left {
    width: 550px;
  }

  .story-right {
    width: 624px;
    height: 368px;
    background-color: #ffd3af91;
  }

  .Our-Story-Text {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
  }

  .Story-From-Startup {
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
  }

  .Story-Through {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgb(101, 101, 101);
  }

  .story-yrs{
    margin-left: 30px;
  }
}

.Logos{
  width: 1280px;
  height: 106px;
  background-color: #FAFAFC;
  .logos-container{
    padding-left: 110px;
    display: flex;
    gap: 32px;
  }


}

.Vision{
  padding-top: 96px;
  .vision-text{
    width: 701px;
  }

  .vision-p{
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 3px;
  }

  .want-p{
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
  }

  .Through-p{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgb(143, 143, 143);
  }
}

.Team{
  padding-top: 96px;

  .Team-text{
    width: 520px;
  }

  .meet-our-p{
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 3px;
  }

  .teamwork-p{
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
  }

  .Team-Throughp{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgb(143, 143, 143);
  }
}

</style>
