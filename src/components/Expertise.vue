<script setup>
import Image1 from '@/../public/images/expertise/1.png';
import Image2 from '@/../public/images/expertise/2.png';
import Image3 from '@/../public/images/expertise/3.png';
import Group from '@/../public/images/expertise/Group.png';
</script>

<template>
    <div class="expertise">
        <div class="expertise-main container">
            <div class="expertise-left">
                <div class="our-expertise-text">
                    OUR EXPERTISE
                </div>
                <div class="we-want-text">
                    We want to get local identification in every corner of the world in this era of global citizenship
                </div>
                <div class="through-true-text">
                    Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
                </div>
            </div>
            <div class="expertise-right">
                <div class="expertise-card">
                    <div class="expertise-card-main">
                        <div class="card-image">
                            <img :src="Image1" alt="">
                        </div>      
                        <div class="card-text">
                            <div class="card-text-title">
                                On Time Delivery
                            </div>
                            <div class="card-text-info">
                                Through True Rich Attended does no end it his mother since real had half every him.
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="expertise-card">
                    <div class="expertise-card-main">
                        <div class="card-image">
                            <img :src="Image2" alt="">
                        </div>      
                        <div class="card-text">
                            <div class="card-text-title">
                                Best Quality    
                            </div>
                            <div class="card-text-info">
                                Through True Rich Attended does no end it his mother since real had half every him.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="expertise-card">
                    <div class="expertise-card-main">
                        <div class="card-image">
                            <img :src="Image3" alt="">
                        </div>
                        <div class="card-text">
                            <div class="card-text-title">
                                Support Assist
                            </div>
                            <div class="card-text-info">
                                Through True Rich Attended does no end it his mother since real had half every him.
                            </div>
                        </div>
                    </div>
                </div>
                <img class="card-group" :src="Group" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@400;600&display=swap");

.expertise{
    width: auto;
    height: 660px;
    background-color: rgba(236, 248, 249, 1);
    display: flex;
    align-items: center;
}

.expertise-main{
    display: flex;
    align-items: center;
    gap: 100px;
}

.expertise-left{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.expertise-right {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.our-expertise-text{
    letter-spacing: 3px;
    font-family: "Poppins", serif;
    font-weight: 400;
    font-size: 14px;
}

.we-want-text{
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: rgba(35, 37, 54, 1);
}

.through-true-text{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(93, 95, 109, 1);
}

.expertise-card{
    width: 515px;
    height: 140px;
    background-color: rgba(255, 255, 255, 1);
}

.expertise-card-main{
    padding: 32px;
}

.expertise-card-main{
    display: flex;
    gap: 16px;
}

.card-text{
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.card-text-title{
    font-weight: 600;
    font-size: 16px;
}

.card-text-info{
    width: 303px;
    font-weight: 500;
    font-size: 14px;
    color: rgba(93, 95, 109, 1);
}

.card-group{
    margin-top: -15px;
}

</style>
