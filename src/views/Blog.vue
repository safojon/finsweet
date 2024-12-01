<script setup>
import Logo from '@/../public/images/navbar/Logo.svg';
import Image2 from '@/../public/images/blog/Image2.png';
import Image from '@/../public/images/blog/Image.png';
import Shapes from '@/../public/images/blog/Shapes.png';
import Image3 from '@/../public/images/blog/Image3.png';
import Image4 from '@/../public/images/blog/Image4.png';
import RecentImg1 from '@/../public/images/blog/Recent_img_1.png';
import RecentImg2 from '@/../public/images/blog/Recent_img_2.png';
import RecentImg3 from '@/../public/images/blog/Recent_img_3.png';
import RecentImg4 from '@/../public/images/blog/Recent_img_4.png';
import Andrew from '@/../public/images/blog/Andrew.png';
import PostImg1 from '@/../public/images/blog/post_img_1.png';
import PostImg2 from '@/../public/images/blog/post_img_2.png';
import PostImg3 from '@/../public/images/blog/post_img_3.png';
import PostImg4 from '@/../public/images/blog/post_img_4.png';
import PostImg5 from '@/../public/images/blog/post_img_5.png';
import PostImg6 from '@/../public/images/blog/post_img_6.png';
</script>

<template>
    <header>
        <div class="header container">
            <div class="header-first-section">
                <div>
                    <p class="trending">TRENDING</p>
                </div>
                <div class="breaking-div">
                    <p class="breaking">Breaking the code How did we build our Figma plugin</p>
                </div>
                <div class="long-established-div">
                    <p class="long-established">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</p>
                </div>
                <div>
                    <p class="read-more">Read More &nbsp;<img :src="Logo" alt="Icon"></p>
                </div>
                <div class="andrew-jonson-div">
                    <div class="andrew-jonson">
                        <div class="andrew-jonson-img">
                            <img :src="Image2" alt="">
                        </div>
                        <div class="andrew-jonson-text">
                            <p>Andrew Jonson</p>
                        </div>
                    </div>
                    <div class="Posted">
                        <p>|&nbsp;&nbsp;Posted on 27th January 2021</p>
                    </div>
                </div>
                <div><img :src="Image" alt=""></div>
            </div>
            <div class="header-second-section">
                <span class="shapes">
                    <img :src="Shapes" alt="">
                </span>
                <div class="BG">
                    <div class="text">
                        <p>Great design expectations prejudice in digital products in Next Year</p>
                    </div>
                    <div class="name">
                        <div class="BG-img">
                            <img :src="Image3" alt="">
                        </div>
                        <div class="BG-name">
                            <p>Mathew Jasele</p>
                            <p class="date">Jan 19, 2021</p>
                        </div>

                    </div>  
                </div>

                <div class="BG">
                    <div class="text">
                        <p>Great design expectations prejudice in digital products in Next Year</p>
                    </div>
                    <div class="name">
                        <div class="BG-img">
                            <img :src="Image4" alt="">
                        </div>
                        <div class="BG-name">
                            <p>Hussen Abakas</p>
                            <p class="date">Jan 19, 2021</p>
                        </div>

                    </div>  
                </div>

                <div class="BG">
                    <div class="text">
                        <p>Great design expectations prejudice in digital products in Next Year</p>
                    </div>
                    <div class="name">
                        <div class="BG-img">
                            <img :src="Image2" alt="">
                        </div>
                        <div class="BG-name">
                            <p>Hussen Abakas</p>
                            <p class="date">Jan 19, 2021</p>
                        </div>

                    </div>  
                </div>
            </div>
        </div>
    </header>

    <div class="Recent-Section">
        <div class="Recent-container container">
            <p class="Recent-Read-p">Read Recent Post</p>
            <br>
            <div class="Recent-cards">
                <div class="Recent-card">
                    <div class="Recent-card-img">
                        <img :src="RecentImg1" alt="">
                    </div>
                    <div class="Recent-card-text">
                        <p>Today’s best design trends for digital products</p>
                        <br>
                        <div class="Person">
                            <div>
                                <img :src="Andrew" alt="">
                            </div>
                            <div class="Person-Name">
                                <p>Andrew Jonson</p>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="Recent-card">
                    <div class="Recent-card-img">
                        <img :src="RecentImg2" alt="">
                    </div>
                    <div class="Recent-card-text">
                        <p>Today’s best design trends for digital products</p>
                        <br>
                        <div class="Person">
                            <div>
                                <img :src="Andrew" alt="">
                            </div>
                            <div class="Person-Name">
                                <p>Andrew Jonson</p>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Recent-cards">
                <div class="Recent-card">
                    <div class="Recent-card-img">
                        <img :src="RecentImg3" alt="">
                    </div>
                    <div class="Recent-card-text">
                        <p>Today’s best design trends for digital products</p>
                        <br>
                        <div class="Person">
                            <div>
                                <img :src="Andrew" alt="">
                            </div>
                            <div class="Person-Name">
                                <p>Andrew Jonson</p>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="Recent-card">
                    <div class="Recent-card-img">
                        <img :src="RecentImg4" alt="">
                    </div>
                    <div class="Recent-card-text">
                        <p>Today’s best design trends for digital products</p>
                        <br>
                        <div class="Person">
                            <div>
                                <img :src="Andrew" alt="">
                            </div>
                            <div class="Person-Name">
                                <p>Andrew Jonson</p>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

    <div class="all-posts">
        <div class="all-posts-container container">
            <p class="all-posts-p">All posts</p>
            <br>
            <div class="all-posts-cards">
                <div class="all-posts-card">
                    <div class="posts-card-img">
                        <img :src="PostImg1" alt="">
                    </div>
                    <div class="posts-card-text">
                        <p class="we-aim-p" >We aim to attain the greatest satisfaction for our clients </p>
                        <br>
                        <p class="it-is">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <br>
                        <div class="Person">
                            <div>
                                <img :src="Andrew" alt="">
                            </div>
                            <div class="Person-Name">
                                <p>Andrew Jonson</p>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="all-posts-card">
                    <div class="posts-card-img">
                        <img :src="PostImg2" alt="">
                    </div>
                    <div class="posts-card-text">
                        <p class="we-aim-p" >We aim to attain the greatest satisfaction for our clients </p>
                        <br>
                        <p class="it-is">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <br>
                        <div class="Person">
                            <div>
                                <img :src="Andrew" alt="">
                            </div>
                            <div class="Person-Name">
                                <p>Andrew Jonson</p>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="all-posts-card">
                    <div class="posts-card-img">
                        <img :src="PostImg3" alt="">
                    </div>
                    <div class="posts-card-text">
                        <p class="we-aim-p" >We aim to attain the greatest satisfaction for our clients </p>
                        <br>
                        <p class="it-is">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <br>
                        <div class="Person">
                            <div>
                                <img :src="Andrew" alt="">
                            </div>
                            <div class="Person-Name">
                                <p>Andrew Jonson</p>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="all-posts-cards">
                <div class="all-posts-card">
                    <div class="posts-card-img">
                        <img :src="PostImg4" alt="">
                    </div>
                    <div class="posts-card-text">
                        <p class="we-aim-p" >We aim to attain the greatest satisfaction for our clients </p>
                        <br>
                        <p class="it-is">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <br>
                        <div class="Person">
                            <div>
                                <img :src="Andrew" alt="">
                            </div>
                            <div class="Person-Name">
                                <p>Andrew Jonson</p>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="all-posts-card">
                    <div class="posts-card-img">
                        <img :src="PostImg5" alt="">
                    </div>
                    <div class="posts-card-text">
                        <p class="we-aim-p" >We aim to attain the greatest satisfaction for our clients </p>
                        <br>
                        <p class="it-is">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <br>
                        <div class="Person">
                            <div>
                                <img :src="Andrew" alt="">
                            </div>
                            <div class="Person-Name">
                                <p>Andrew Jonson</p>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="all-posts-card">
                    <div class="posts-card-img">
                        <img :src="PostImg6" alt="">
                    </div>
                    <div class="posts-card-text">
                        <p class="we-aim-p" >We aim to attain the greatest satisfaction for our clients </p>
                        <br>
                        <p class="it-is">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <br>
                        <div class="Person">
                            <div>
                                <img :src="Andrew" alt="">
                            </div>
                            <div class="Person-Name">
                                <p>Andrew Jonson</p>
                                <span>Jan 19, 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>

    </div>

    
</template>
  
<style scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 80px;
}

.header{
    margin-top: 96px;
    display: flex;
    gap: 141px;
}

.header-first-section{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;

    .trending{
        font-family: "Poppins", serif;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 3px;
        color: #232536;
    }

    .breaking-div{
        width: 624px;
    }

    .breaking{
        font-family: "Poppins", serif;
        font-weight: 600;
        font-size: 48px;
        color: #232536;
    }

    .long-established-div{
        width: 624px;
    }

    .long-established{
        font-weight: 300;
        font-size: 16px;
        color: #232536;
    }

    .read-more{
        color: #444CFC;
    }

    .andrew-jonson-div{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .andrew-jonson{
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
    }

    .andrew-jonsdon{
        font-size: 16px;
        color: #232536;
        display: flex;
        flex-direction: column; 
    }

    .Posted{
        color: #6c6d78;
        font-size: 16px;
    }
}

.header-second-section{
    padding: 0 72px;
    width: 515px;
    height: 738px;
    background-color: #FFDFC6;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .shapes{
        margin-left: 395px;
    }

    .BG{
        display: flex;
        flex-direction: column;
        gap: 20px;

        .text{
            font-weight: 600;
            font-size: 24px;
        }

        .name{
            font-weight: 400;
            display: flex;
            gap: 10px;
            align-items: center;
            font-size: 14px;
        }

        .date{
            color: rgb(119, 119, 119);
        }
    }
}

.Recent-Section{
    padding-bottom: 96px;
    .Recent-container{
        display: flex;
        flex-direction: column;
        gap: 32px;
    }


    .Recent-Read-p{
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
        color: #232536;
    }

    .Recent-cards{
        display: flex;
        gap: 32px;
    }

    .Recent-card{
        display: flex;
    }

    .Recent-card-text{
        width: 330px;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        background-color: rgba(249, 249, 255, 1);
        padding: 32px;
    }
}

.Person{
        display: flex;
        gap: 12px;
        align-items: center;

        .Person-Name{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;

            span{
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: rgb(121, 121, 121);
            }
        }
    }

.all-posts{
    background-color: rgba(249, 249, 249, 1);
    .all-posts-container{
        padding-top: 65px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding-bottom: 96px;
    }

    .all-posts-card{
        background-color: rgba(255, 255, 255, 1);
        width: 405px;
    }

    .all-posts-cards{
        display: flex;
        gap: 32px
    }

    .posts-card-text{
        padding: 32px;
    }

    .all-posts-p{
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
    }

    .we-aim-p{
        font-weight: 600;
        font-size: 24px;
        line-height: 36px; 
    }

    .it-is{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px; 
        color: rgb(86, 86, 86);
    }

}




</style>
  
