<script setup>
import Button from '../components/Button.vue';

import Group from '@/../public/images/contact/Group.png';
import Shape from '@/../public/images/contact/Shape.png';
import Facebook from '@/../public/images/contact/Facebook.png';
import Twitter from '@/../public/images/contact/Twitter.png';
import Instagram from '@/../public/images/contact/Instagram.png';
import LinkedIn from '@/../public/images/contact/LinkedIn.png';
import Map from '@/../public/images/contact/Map.png';
</script>

<template>
    <header>
        <div class="header container">
            <div class="left-section">
                <div class="shape"></div>
                <br>
                <p class="contact-p">CONTACT US</p>
                <br>
                <p class="have-a">Have a Question ? 
                    <br>Let’s Get in Touch with us 👋</p>
                <br>
                <p class="fill">Fill up the Form  and ou team will get back to within 24 hrs</p>
                <br><br><br>
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
                        <Button :data="{ name: 'Send Messege'}"/>
                    </div>
                </div>
            </div>
           <div class="right-section">
                <div class="group"><img class="group-img" :src="Group" alt=""></div>
                <div class="BG-Shape">
                    <img class="shape-img" :src="Shape" alt="">
                    <div class="BG">
                        <div class="BG-container">
                            <p class="p">Location</p><br>
                            <p class="DLF">DLF Cybercity, Bhubaneswar,<br>
                                India, &52050</p><br>
                            <p class="p">Working Hour</p><br>
                            <p class="DLF">
                                Monday To Friday<br>
                                9:00 AM to 8:00 PM 
                            </p>
                            <p class="p">Our Support Team is available 24Hrs</p><br>
                            <p class="p">Contact Us</p><br>
                            <p class="DLF">020 7993 2905</p>
                            <p class="p">Hello@ether.com</p><br><br>

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
                </div>
            </div>
        </div>
        <div class="map container">
            <img class="map-img" :src="Map" alt="">
        </div>
    </header>
</template>

<style scoped >
header{
    width: 100%;
    height: auto;
}

.header{
    margin-top: 96px;
    display: flex;
    gap: 44px;
}

.left-section{
    width: 664px;
}

.shape{
    width: 24px;
    height: 24px;
    background-color: rgba(255, 211, 175, 1);
}

.contact-p{
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 3px;
}

.have-a{
    font-size: 48px;
    font-weight: 600;
    line-height: 58px;
}

.fill{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
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

.BG-Shape{
    display: flex;
    flex-direction: column;
}


.BG{
    width: 512px;
    height: 645px;
    background-color: rgba(102, 109, 255, 1);
}

.right-section{
    padding-top: 30px;
    display: flex;
}

.group{
    margin-top: 372px;
    margin-left: 100px;
}

.group-img{
    width: 24px;
    height: 296px;
}

.shape-img{
    width: 133px;
    margin-left: 379px;
}

.BG-container{
    padding: 90px;
}

span{
    margin-left: 100px;
}

.p{
    color: rgb(196, 196, 196);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
}

.DLF{
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
}


.map{
    padding-top: 96px;
}

.map-img{
    width: 1242px;
}
</style>
