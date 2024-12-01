<script setup>
import Button from "@/components/Button.vue";
import Process from "@/components/Process.vue";

import Icon from '@/../public/images/service/Icon.png';
import Image1 from '@/../public/images/service/Image_1.png';
import Image2 from '@/../public/images/service/Image_2.png';
import Image3 from '@/../public/images/service/Image_3.png';
import Image4 from '@/../public/images/service/Image_4.png';
import Image5 from '@/../public/images/service/Image_5.png';
</script>

<template>
  <header>
    <div class="header-left">
      <span class="our-services">OUR SERVICES</span>
      <h1>We Build Software Solutionthat Solve Clients Business Challenges</h1>
      <p class="header-left-text">
        Through True Rich Attended does no end it his mother since favourable
        real had half every him case in packages enquire we up ecstatic.
      </p>

      <br /><Button :data="{ name: 'Request A Quote' }" />
    </div>
    <div class="header-right">
      <p>Technical support</p>
      <p>
        Development
        <img :src="Icon" alt="shapes" />
      </p>
      <p>AWS/Azur</p>
      <p>Consulting</p>
      <p>Information Technology</p>
    </div>
  </header>

  <Process />

  <div class="Feature-1">
    <div class="Feature-main container">
      <div class="Feature-section-text">
        <p class="Feature-Technical">Technical Support</p>
        <br />
        <p class="Feature-Best-in">
          Best in class tech support for your company. We become your tech
          backbone
        </p>
        <br />
        <p class="Feature-Through">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          his giving Remain expense you position concluded. Through True Rich
          Attended does no end it his mother since real had half every.
        </p>
      </div>
      <div class="Feature-section-photo">
        <img :src="Image1" alt="" />
      </div>
    </div>
  </div>

  <div class="Feature-2">
    <div class="Feature-2-main container">
      <div class="Feature-2-photo">
        <img :src="Image2" alt="" />
      </div>
      <div class="Feature-2-text">
        <p class="Feature-2-dev">Developoment</p>
        <br />
        <p class="Feature-2-bring">
          Bring your ideas to reality with certified team of developers, working
          with latest technologies
        </p>
        <br />
        <p class="Feature-2-through">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          his giving Remain expense you position concluded. Through True Rich
          Attended does no end it his mother since real had half every.
        </p>
      </div>
    </div>
  </div>

  <div class="Feature-3">
    <div class="Feature-main container">
      <div class="Feature-section-text">
        <p class="Feature-AWS">AWS/Azure</p>
        <br />
        <p class="Feature-We-help">
          We help you deploy, manage and secure your application on leading web
          services
        </p>
        <br />
        <p class="Feature-Through">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          his giving Remain expense you position concluded. Through True Rich
          Attended does no end it his mother since real had half every.
        </p>
      </div>
      <div class="Feature-section-photo">
        <img :src="Image3" alt="" />
      </div>
    </div>
  </div>

  <div class="Feature-4">
    <div class="Feature-4-main container">
      <div class="Feature-2-photo">
        <img :src="Image4" alt="" />
      </div>
      <div class="Feature-4-text">
        <p class="Feature-4-Consul">Consulting</p>
        <br />
        <p class="Feature-4-bring">Get advice from world class professionals</p>
        <br />
        <p class="Feature-4-through">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          his giving Remain expense you position concluded. Through True Rich
          Attended does no end it his mother since real had half every.
        </p>
      </div>
    </div>
  </div>

  <div class="Feature-5">
    <div class="Feature-main container">
      <div class="Feature-section-text">
        <p class="Feature-infor">Information Technology</p>
        <br />
        <p class="Feature-We-want">
          We want to get local identification in every corner of the world in
          this era of global citizenship.
        </p>
        <br />
        <p class="Feature-Through">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          his giving Remain expense you position concluded. Through True Rich
          Attended does no end it his mother since real had half every.
        </p>
      </div>
      <div class="Feature-section-photo">
        <img :src="Image5" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@400;600&display=swap");

.our-services {
  color: black;
  letter-spacing: 3px;
  font-family: "Poppins", serif;
  font-weight: 400;
  letter-spacing: 3px;
  font-style: normal;
  font-style: 14px;
}

header {
  width: 100%;
  height: 574px;
  background-color: #ffe6d2;
  display: flex;
  gap: 300px;
  align-items: center;
  justify-content: center;
}

h1 {
  font-family: "Poppins", serif;
  font-size: 48px;
  font-weight: 600;
}

.header-left {
  margin-left: 200px;
  width: 624px;
}

.header-right {
  margin-right: 271px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

p {
  font-family: "Poppins", serif;
  font-size: 24px;
  font-weight: 600;
}

.header-left-text {
  font-family: "Poppins", serif;
  font-size: 16px;
  font-weight: 300;
  color: rgba(35, 37, 54, 0.6);
}

.Feature-1 {
  width: 100%;
  height: 635px;

  .Feature-main {
    display: flex;
    gap: 140px;
  }

  .Feature-section-text {
    padding-top: 141px;
    width: 624px;
    display: flex;
    flex-direction: column;
  }

  .Feature-Technical {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  .Feature-Best-in {
    font-weight: 600;
    font-size: 36px;
    line-height: 56px;
  }

  .Feature-Through {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgb(101, 101, 101);
  }
}

.Feature-2 {
  width: 100%;
  height: 635px;
  background-color: #ecf8f9;

  .Feature-2-main {
    display: flex;
    gap: 141px;
  }

  .Feature-2-text {
    padding-top: 141px;
    width: 800px;
  }

  .Feature-2-dev {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  .Feature-2-bring {
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
  }

  .Feature-2-through {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgb(101, 101, 101);
  }
}

.Feature-3 {
  width: 100%;
  height: 635px;

  .Feature-main {
    display: flex;
    gap: 140px;
  }

  .Feature-section-text {
    padding-top: 141px;
    width: 624px;
    display: flex;
    flex-direction: column;
  }

  .Feature-AWS {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #232536;
  }

  .Feature-We-help {
    font-weight: 600;
    font-size: 36px;
    line-height: 56px;
  }

  .Feature-Through {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgb(101, 101, 101);
  }
}

.Feature-4 {
  width: 100%;
  height: 635px;
  background-color: #f9f9ff;

  .Feature-4-main {
    display: flex;
    gap: 141px;
  }

  .Feature-4-text {
    padding-top: 141px;
    width: 800px;
  }

  .Feature-4-Consul {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  .Feature-4-bring {
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
  }

  .Feature-4-through {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgb(101, 101, 101);
  }
}

.Feature-5 {
  width: 100%;
  height: 635px;

  .Feature-main {
    display: flex;
    gap: 99px;
  }

  .Feature-section-text {
    padding-top: 141px;
    width: 650px;
    display: flex;
    flex-direction: column;
  }

  .Feature-infor {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #232536;
  }

  .Feature-We-want {
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
  }

  .Feature-Through {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgb(101, 101, 101);
  }
}
</style>
