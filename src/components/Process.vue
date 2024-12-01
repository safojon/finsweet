<script setup>

import Image1 from '@/../public/images/process/1.png';
import Image2 from '@/../public/images/process/2.png';
import Image3 from '@/../public/images/process/3.png';
import Image4 from '@/../public/images/process/4.png';
import Image5 from '@/../public/images/process/5.png';
import Image6 from '@/../public/images/process/6.png';

import Line from '@/../public/images/process/Line.png';
</script>

<template>
  <div class="process" style="background-color: white">
    <div class="process-main container">
      <div class="process-text">
        <div class="our-process-text">OUR PROCESS</div>
        <div class="the-process-text">
          The process we are working With Our client Worldwide
        </div>
        <div class="the-process-info">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
        </div>
      </div>
      <div class="process-cards">
        <div class="process-card-1">
          <div class="process-card">
            <div class="process-card-icon">
              <img :src="Image1" alt="" />
            </div>
            <div class="process-card-text">
              <div class="process-card-name">Discover</div>
              <div class="process-card-info">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </div>
            </div>
          </div>
          <div>
            <img :src="Line" alt="" />
          </div>
          <div class="process-card">
            <div class="process-card-icon">
              <img :src="Image2" alt="" />
            </div>
            <div class="process-card-text">
              <div class="process-card-name">Designing</div>
              <div class="process-card-info">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </div>
            </div>
          </div>
          <div>
            <img :src="Line" alt="" />
          </div>
          <div class="process-card">
            <div class="process-card-icon">
              <img :src="Image3" alt="" />
            </div>
            <div class="process-card-text">
              <div class="process-card-name">Development</div>
              <div class="process-card-info">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </div>
            </div>
          </div>
        </div>
        <div class="process-card-1">
          <div class="process-card">
            <div class="process-card-icon">
              <img :src="Image4" alt="" />
            </div>
            <div class="process-card-text">
              <div class="process-card-name">Testing</div>
              <div class="process-card-info">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </div>
            </div>
          </div>
          <div>
            <img :src="Line" alt="" />
          </div>
          <div class="process-card">
            <div class="process-card-icon">
              <img :src="Image5" alt="" />
            </div>
            <div class="process-card-text">
              <div class="process-card-name">Deployment</div>
              <div class="process-card-info">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </div>
            </div>
          </div>
          <div>
            <img :src="Line" alt="" />
          </div>
          <div class="process-card">
            <div class="process-card-icon">
              <img :src="Image6" alt="" />
            </div>
            <div class="process-card-text">
              <div class="process-card-name">Maintenance</div>
              <div class="process-card-info">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.process {
  width: 100%;
  height: 852px;
}

.process-main {
  display: flex;
  flex-direction: column;
  gap: 68px;
}

.process-shape {
  margin-top: 1000px;
  margin-left: 1100px;
  width: 29px;
  height: 27px;
}

.process-text {
  padding-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.our-process-text {
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  letter-spacing: 3px;
}

.the-process-text {
  width: 733px;
  color: rgba(35, 37, 54, 1);
  font-size: 48px;
  font-weight: 700;
}

.the-process-info {
  width: 642px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(35, 37, 54, 1);
}

.process-cards {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.process-card {
  width: 395px;
  height: 164px;
  padding-top: 32px;
  padding-left: 32px;
  border: 1px solid rgba(35, 37, 54, 0.17);
  display: flex;
  gap: 16px;
}

.process-card-1 {
  display: flex;
  align-items: center;
}

.process-card-text {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.process-card-name {
  font-weight: 600;
  font-size: 16px;
}

.process-card-info {
  color: rgb(92, 94, 114);
  font-weight: 400;
}

.card-shape {
  width: 395px;
  height: 8px;
}
</style>
