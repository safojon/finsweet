<script setup>
import Button from '../components/Button.vue';
import CTA from '../components/CTA.vue';
import Expertise from '../components/Expertise.vue';
import Process from '../components/Process.vue';

import Header from '@/../public/images/header/header-image.png';
import logoClient from '@/../public/images/header/svg/logo-client.svg';
import logoClient2 from '@/../public/images/header/svg/logo-client2.svg';
import logoClient3 from '@/../public/images/header/svg/logo-client2.svg';
import logoClient4 from '@/../public/images/header/svg/logo-client2.svg';
import logoClient5 from '@/../public/images/header/svg/logo-client2.svg';
import Image1 from '@/../public/images/copmany/Image1.png';
import Image2 from '@/../public/images/copmany/Image2.png';
import Image3 from '@/../public/images/copmany/Image3.png';
import Group1710 from '@/../public/images/home/Group1710.png';
import One from '@/../public/images/home/1.png';
import Two from '@/../public/images/home/2.png';
import Three from '@/../public/images/home/3.png';
import Icon from '@/../public/images/home/Icon.png';
import HImage1 from '@/../public/images/home/Image1.png';
import HImage2 from '@/../public/images/home/Image2.png';
import HImage3 from '@/../public/images/home/Image3.png';
import Shapes_left from '@/../public/images/home/Shapes_left.png';
import Logo from '@/../public/images/home/Logo.png';
import ImageBG1 from '@/../public/images/home/Image_BG_1.png';
import ImageBG2 from '@/../public/images/home/Image_BG_2.png';
</script>

<template>
    <header>
      <div class="container">
        <div class="header-card">
          <div class="header__left">
            <div class="mini-card"></div>
            <h1>Transform Your Idea Into Reality with Finsweet</h1>
            <p>
              The entire Finsweet team knows what's good with Webflow and<br />
              you can too with 1 week and a good attitude.
            </p>
            <Button :data="{ name: 'Request Quote'}"/>
          </div>
          <div class="header__right">
            <img
              :src="Header"
              alt="header-image"
            />
          </div>
        </div>

        <div class="header-clients">
          <div class="clients-title">
            <span>Our Clients</span>
            <h5>We've Worked with</h5>
          </div>

          <div class="clients-logo">
            <div class="logo-img">
              <img
                :src="logoClient"
                alt="logo-client"
              />
            </div>
            <div class="logo-img">
              <img
                :src="logoClient2"
                alt="logo-client"
              />
            </div>
            <div class="logo-img">
              <img
                :src="logoClient3"
                alt="logo-client"
              />
            </div>
            <div class="logo-img">
              <img
                :src="logoClient4"
                alt="logo-client"
              />
            </div>
            <div class="logo-img">
              <img
                :src="logoClient5"
                alt="logo-client"
              />
            </div>
          </div>
        </div>
      </div>
    </header>

  <div class="section">
    <div class="container main">
      <div class="div-text">
        <div class="about">
          ABOUT US
        </div>
        <div class="texts">
          <div>
            <h1>The company leads entire webdesign process from concept to delivery.</h1>
          </div>
          <div >
            <h1>The Era Of Technology.</h1>
            <span>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </span>
          </div>
        </div>
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
      <div class="number-text">
        <div class="numbers">
          <div class="number-first">
            <div class="number">
              1560+
            </div>
            <div class="text">
              <img :src="Group1710" alt="">
              <p>Project Delivered</p>
            </div>
          </div>
          <div class="number-second">
            <div class="number">
              100+
            </div>
            <div class="text">
              <img :src="Group1710" alt="">
              <p>Professional</p>
            </div>
          </div>
          <div class="number-second">
            <div class="number">
              950+
            </div>
            <div class="text">
              <img :src="Group1710" alt="">
              <p>Happy Client</p>
            </div>
          </div>
          <div class="number-third">
            <div class="number">
              10 yrs
            </div>
            <div class="text">
              <img :src="Group1710" alt="">
              <p>Experience</p>
            </div>
          </div>
        </div>
        <div class="div-read-about">
          <div>
            Read about us
          </div>
          <div>
            <img :src="Group1710" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>

  <Expertise />

  <div class="services">
    <div class="services-main container">
      <div class="services-text">
        <div class="services-our-text">
          OUR SERVICES
        </div>
        <div>
          <p>
            We build software solutions that solve client's business challenges
          </p>
        </div>
        <div>
          <Button :data="{ name: 'Start a Project'}"/>
        </div>
      </div>
      <div class="service-cards">
        <div class="service-card">
          <div class="service-card-icon">
            <img :src="One" alt="">
          </div>
          <div class="service-card-name">
            Technical support
          </div>
          <div class="service-card-info">
            We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service
          </div>
          <div class="service-card-read-more">
            Read more &nbsp;<img :src="Icon" alt="">
          </div>
        </div>

        <div class="service-card">
          <div class="service-card-icon">
            <img :src="Two" alt="">
          </div>
          <div class="service-card-name">
            Testing Management
          </div>
          <div class="service-card-info">
            We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service
          </div>
          <div class="service-card-read-more">
            Read more &nbsp;<img :src="Icon" alt="">
          </div>
        </div>
    
        <div class="service-card">
          <div class="service-card-icon">
            <img :src="Three" alt="">
          </div>
          <div class="service-card-name">
            Development
          </div>
          <div class="service-card-info">
            We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service
          </div>
          <div class="service-card-read-more">
            Read more &nbsp;<img :src="Icon" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>

  <Process />

  <div class="Testimonials">
    <div class="testimonial container">
      <div class="testimonial-left">
        <div class="testimonial-shape"></div>
        <div class="testimonial-our-custom">
          Our customers love what we do
        </div>
        <div class="testimonial-your-idea">
          Transform your idea into reality with finsweet
        </div>
        <div class="testimonial-long">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        </div>
        <div class="testimonial-members">
          <div class="testimonial-images">
            <div>
              <img :src="HImage1" alt="">
            </div>
            <div>
              <img :src="HImage2" alt="">
            </div>
            <div>
              <img :src="HImage3" alt="">
            </div>
          </div>
          <div class="testimonial-customer">
            30+ Customer Reviews
          </div>
        </div>
      </div>
      <div class="testimonial-right">
        <div class="testimonial-right-shape">
          <img :src="Shapes_left" alt="">
        </div>
        <div class="testimonial-right-card">
          <div class="testimonial-right-card-finsweet">
            Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!
          </div>
          <div class="testimonial-director">
            <div class="testimonial-director-left">
              <div class="testimonial-director-photo">
                <img :src="HImage1" alt="">
              </div>
              <div class="testimonial-director-name">
                <p>Johnny Andro</p>
                <span>Director, Company</span>
              </div>
            </div>
            <div class="testimonial-director-right">
              <img :src="Logo" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="BG-section">
    <div class="BG-section-main container">
      <div class="BG-section-shape"></div>
      <div class="BG-read-our">Read our latest blogs & news</div>

      <div class="BG-cards">
        <div class="BG-card">
          <div>
            <img :src="ImageBG1" alt="">
          </div>
          <div class="BG-card-info">
            <div class="BG-card-date">
              Jan 19, 2021
            </div>

            <div class="BG-card-Todays">
              Today’s best design trends for digital products
            </div>

            <div class="BG-card-read-more">
              Read more &nbsp;<img :src="Icon" alt="">
            </div>
          </div>
        </div>
        <div class="BG-card">
          <div>
            <img :src="ImageBG2" alt="">
          </div>
          <div class="BG-card-info">
            <div class="BG-card-date">
              Jan 19, 2021
            </div>

            <div class="BG-card-Todays">
              A practical guide to building a brand strategy
            </div>

            <div class="BG-card-read-more">
              Read more &nbsp;<img :src="Icon" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
  
<style scoped >
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@400;600&display=swap");


header {
  background-color: #232536;
  height: 100%;
}

.header-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding-top: 96px;
}
.header__left {
  .mini-card {
    width: 24px;
    height: 24px;
    background-color: #ffffff10;
  }

  h1 {
    font-size: 56px;
    line-height: 56px;
    font-weight: 500;
    margin: 24px 0;
  }

  p {
    font-style: 16px;
    line-height: 24px;
    color: #ffffff88;
    margin-bottom: 32px;
  }
}

.header-clients {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 23px;

  .clients-title {
    h5 {
      font-size: 14px;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #ffffff76;
    }
  }
  .clients-logo {
    display: flex;
    align-items: center;
    gap: 32px;

    .logo-img {
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

.section {
  margin-top: 96px;
  padding-bottom: 100px;
  width: 100%;
  .about {
  letter-spacing: 3px;
  font-family: "Poppins", serif;
  font-weight: 400;
  font-size: 14px;
}

  .texts {
    gap: 50px;
    width: 1300px;
    display: flex;
    color: #232536;

    span{
      font-size: 16px;
      color: #5D5F6D;
    }
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

  .number-text{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .numbers{
    display: flex;
    gap: 67px;

    .number{
      font-family: "Poppins", serif;
      font-weight: 600;
      font-size: 36px;
      line-height: 54px;
    }

    .text{
      font-family: "Poppins", serif;
      font-weight: 400;
      font-size: 16px;
    }
  }

  .div-read-about{
      color: rgba(68, 76, 252, 1);
      display: flex;
      gap: 15px;
    }
}

.services{
  width: 100%;
  background-color: rgba(255, 230, 210, 1);
  height: 917px;

  .services-text{
    padding-top: 96px;
    width: 777px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p{
      font-weight: 600;
      font-size: 48px;
      line-height: 58px;
      color: rgba(35, 37, 54, 1);
    }
  }

  .services-our-text{
    letter-spacing: 3px;
    font-family: "Poppins", serif;
    font-weight: 500;
    font-size: 14px;
  }

  .service-cards{
    padding-top: 80px;
    display: flex;
    gap: 32px;
  }

  .service-card{
    width: 405px;
    height: 335px;
    background: rgba(255, 255, 255, 1);
    padding: 45px;
    display: flex;
    flex-direction: column;
    gap: 20px
  }

  .service-card-name{
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
  }

  .service-card-info{
    font-size: 16px;
    font-weight: 400;
    color: rgba(93, 95, 109, 1);
  }


  .service-card-read-more{
    color: rgba(68, 76, 252, 1);
    font-weight: 500;
  }

}

.Testimonials{
  width: 100%;
  height: 587px;
  background-color: rgba(249, 249, 255, 1);
  display: flex;
  align-items: center;

  .testimonial{
    display: flex;
    gap: 154px;
  }

  .testimonial-left{
    width: 502px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .testimonial-shape{
    width: 16px;
    height: 16px;
    background-color: rgba(102, 109, 255, 1);
  }

  .testimonial-our-custom{
    font-size: 48px;
    font-weight: 600;
    line-height: 58px;
  }

  .testimonial-your-idea{
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
  }

  .testimonial-long{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(35, 37, 54, 1)
  }

  .testimonial-members{
    display: flex;
    flex-direction: column;
    gap: 10px
  }

  .testimonial-images{
    display: flex;
    gap: 12px
  }

  .testimonial-customer{
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: rgba(0, 0, 0, 1)
  }

  .testimonial-right-card{
    color: rgba(255, 255, 255, 1);
  }

  .testimonial-right{
    display: flex
  }

  .testimonial-right-card{
    width: 607px;
    height: 340px;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }

  .testimonial-right-card-finsweet{
    margin-left: 40px;
    width: 498px;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    color: rgba(35, 37, 54, 1);
  }

  .testimonial-director-left{
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .testimonial-director{
    margin-left: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 42.3px;
  }

  .testimonial-director-name{
    color: rgba(35, 37, 54, 1);
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;

    span{
      color: rgb(144, 144, 144);
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
  }
}

.BG-section{
  width: 100%;
  height: 581px;
  background-color: rgba(236, 248, 249, 1);

  .BG-section-main{
    padding-top: 96px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }


  .BG-section-shape{
    width: 16px;
    height: 16px;
    background-color: rgba(102, 109, 255, 1);
  }

  .BG-read-our{
    color: rgba(35, 37, 54, 1);
    font-size: 48px;
    font-weight: 600;
    line-height: 58px;
  }

  .BG-cards{
    display: flex;
    gap: 32px;
  }

  .BG-card{
    width: 624px;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 1)
  }

  .BG-card-info{
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .BG-card-date{
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: rgb(105, 106, 118);
  }

  .BG-card-Todays{
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    color: rgba(35, 37, 54, 1);
  }

  .BG-card-read-more{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: rgba(68, 76, 252, 1);
  }

}

</style>    
  
