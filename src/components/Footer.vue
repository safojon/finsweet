<script setup>
import { ref } from 'vue';
import CTA from '../components/CTA.vue';
import Modal from '../components/Modal.vue';
import Button from '../components/Button.vue';

import Facebook from '@/../public/images/footer/Facebook.png';
import Twitter from '@/../public/images/footer/Twitter.png';
import Instagram from '@/../public/images/footer/Instagram.png';
import LinkedIn from '@/../public/images/footer/LinkedIn.png';

import Logo from '@/../public/images/footer/Logo.svg';

import Shape from '@/../public/images/footer/Shape.png';
import Shape2 from '@/../public/images/footer/Shape_2.png';

import Icon from '@/../public/images/home/Icon.png';

const isOpenModal = ref(false);

const openModal = () => {
  isOpenModal.value = true;
};

const closeModal = () => {
  isOpenModal.value = false;
};

const Year = new Date().getFullYear();
</script>

<template>
    <Modal :isOpen="isOpenModal" @close="closeModal">
    <div class="Modal">
        <p class="have-a">
            Have a Question ?<br>
            Let’s Get in Touch with us 👋
        </p>
        <br>
        <p>Fill up the form and the team will get back to within 24 hrs</p>
        <br><br>
        <div class="inputs">
            <div>
                Name
                <br><input type="text" value="Paresh Srichandan" placeholder="Name">
            </div>
            <div>
                E-mail
            <br><input type="email" value="Paresh@pixeto.com" placeholder="E-mail">
            </div>
            <div>
                Subject
                <br><input type="text" value="For web design work Enquire " placeholder="Subject">
            </div>
            <div>
                Messege
                <br><input type="text" placeholder="Type your Messege">
            </div>
            <br>
            <div>
        </div>
                </div>
        <Button :data="{ name: 'Send Messege'}"/>
    </div>
    </Modal>

  <div class="CTA-section">
    <div class="CTA-main">
        <CTA />
    </div>
  </div>

    <div class="Footer">
        <div class="main-footer container">
            <div class="left-footer">
                <img :src="Shape" alt="">
                <br>
                <br>
                <div class="Lets-make">
                    Let's make
                    something special
                </div>
                <br>
                <div class="Lets-talk">
                    Let's talk! 🤙 
                </div>
                <br>
                <div class="number-mail">
                    <p>020 7993 2905</p>
                    <p>hi@finsweet.com</p>
                </div>
                <br>
            </div>

            <div class="right-footer">
                <div class="Link">
                    <div>
                        <RouterLink to="/" exact-active-class="router-link-exact-active">
                            Home
                        </RouterLink>
                    </div>
                    <div>
                        <RouterLink to="/service" exact-active-class="router-link-exact-active">
                            Service
                        </RouterLink>
                    </div>
                    <div>
                        <RouterLink to="/company" exact-active-class="router-link-exact-active">
                            Company
                        </RouterLink>
                    </div>
                    <div>
                        <RouterLink to="/career" exact-active-class="router-link-exact-active">
                            Career
                        </RouterLink>
                    </div>
                    <div>News</div>
                </div>
                <div class="Services">
                    <div><b>Service</b></div>
                    <div>Technical support</div>
                    <div>Testing</div>
                    <div>Development</div>
                    <div>AWS/Azure</div>
                    <div>Consulting</div>
                    <div>Information Technology</div>
                </div>
                <div class="Resources">
                    <div><b>Resourses</b></div>
                    <div>About Us</div>
                    <div>Testimonial</div>
                    <div>Privacy Policy</div>
                    <div>Terms of use</div>
                    <div>Blog</div>
                </div>
            </div>
        </div>
        <div class="company-contact-footer container">
            <div class="company">
                    <p>DLF Cybercity, Bhubaneswar, </p>
                    <p>India, &52050</p>
            </div>
            <div class="contact-us">
                <button @click="openModal" class="contact-btn"><img :src="Shape2" alt=""> &nbsp;Contact Us &nbsp;<img :src="Icon" alt=""></button>    
            </div>
        </div>
            <div>
        </div>
    </div>

    <div class="Footer-Bottom">
        <div class="Main-Footer-Bottom container">
            <div class="Footer-icon">
                <div>
                    <img :src="Logo" alt="">
                </div>
                <div>
                    ©{{ Year }} Finsweet
                </div>
            </div>
            <div class="Footer-social">
                <div>
                    <a href="https://www.facebook.com/"><img :src="Facebook" alt=""></a>
                </div>
                <div>
                    <a href="https://www.twitter.com/"><img :src="Twitter" alt=""></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/"><img :src="Instagram" alt=""></a>
                </div>
                <div>
                    <a href="https://linkedin.com/"><img :src="LinkedIn" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.CTA-section{
  width: 100%;
  height: 525px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Footer{
    padding-bottom: 64px;
}
.main-footer{
    display: flex;
    align-items: center;
    gap: 200px;
}

.Lets-make{
    width: 460px;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
}

.Lets-talk{
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
}

.number-mail{
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: rgba(35, 37, 54, 1);
}

.company{
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: rgba(35, 37, 54, 1);
}

.right-footer{
    display: flex;
    gap: 60px;
}

.Link, .Services, .Resources{
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.Link{
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
}

.company-contact-footer{
    display: flex;
    justify-content: space-between;
}

.Main-Footer-Bottom{
    display: flex; 
    gap: 800px
}

.Footer-Bottom{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 230, 210, 1);
}

.Footer-icon{
    display: flex;
    gap: 42px;
}

.Footer-social{
    display: flex;
    gap: 26px;
}

a, .router-link-exact-active {
      color: black;
      transition: all 0.5s ease;

      &:hover {
        color: rgb(79, 79, 79);
      }
    }

.contact-btn{
    background-color: white;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    border: none;
}

.Modal{
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 100px;
    padding-right: 100px;
}

.inputs{
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: rgba(35, 37, 54, 1);
}

input{
    width: 405px;
    height: 40px;
    border: none;
    border-bottom: 1px solid rgb(168, 168, 168);
}

input:focus{
    outline: none;
    border-bottom: 1px solid rgb(0, 0, 0);
}

.have-a{
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
}


</style>
