<template>
  <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar reveal >
        <router-link to="/">
          <div class="q-py-sm q-mx-lg">
            <q-img :src="require('../assets/images/logo.png')" style="width: 50px;" />
          </div>
        </router-link>
        <q-toolbar-title> </q-toolbar-title>
        <q-btn label="Login" color="green-8" flat :to="{name: 'Login'}"/>
        <q-btn label="Signup" color="green-8" flat :to="{name: 'Signup'}"/>
      </q-toolbar>
    </q-header>
    <!--<div class="column">-->
      <!--<div id="homeBanner">-->
        <!--<div class="row q-mx-xl">-->
          <!--<div class="col-12 col-md-6 column justify-center items-center">-->
            <!--<div class="text-center">-->
              <!--<h2 class="text-white q-px-xl q-my-none">Earn Cash Around Your Schedule</h2>-->
              <!--<q-btn round class="shadow-10 q-my-xl" size="30px" @click="showVideo()">-->
                <!--<q-avatar size="90px">-->
                  <!--<q-icon name="play_circle_outline" color="white" size="90px"></q-icon>-->
                <!--</q-avatar>-->
              <!--</q-btn>-->
              <!--&lt;!&ndash;<p class="text-white text-h5">See how in 43 seconds</p>&ndash;&gt;-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="col-12 col-md-6 column justify-center items-center">-->
            <!--<div style="max-width: 400px;" class="full-width text-center relative-position">-->
              <!--<div id="dynamicSignupBonus">-->
                <!--<div id="dynamicSignupBonusInner">-->
                  <!--<span id="dynamicSignupBonusAmount"><sup>$</sup>3000</span>-->
                  <!--<span id="dynamicSignupBonusWord">Bonus</span>-->
                  <!--<sup id="dynamicSignupBonusAsterisk">*</sup>-->
                <!--</div>-->
              <!--</div>-->
              <!--<q-form-->
                <!--@submit="login"-->
                <!--class="q-gutter-md bg-white full-width rounded-borders q-pa-md"-->
              <!--&gt;-->
                <!--<br />-->
                <!--<div class="text-left q-mt-lg text-center" style="font-size: 28px">Become a NXT Rep Today</div>-->
                <!--<q-input outlined color="teal-10" v-model="userData.email" clearable label="Email Address" class="q-ml-none">-->
                  <!--<template v-slot:prepend>-->
                    <!--<q-icon name="account_circle" />-->
                  <!--</template>-->
                <!--</q-input>-->
                <!--<q-input outlined color="teal-10" label="Password" v-model="userData.password" type="password" clearable class="q-ml-none">-->
                  <!--<template v-slot:prepend>-->
                    <!--<q-icon name="lock" />-->
                  <!--</template>-->
                <!--</q-input>-->
                <!--<q-item class="q-mx-none q-px-none">-->
                  <!--<q-item-section>-->
                    <!--<q-checkbox v-model="remember" label="Remember me" color="teal" />-->
                  <!--</q-item-section>-->
                  <!--<q-item-section>-->
                    <!--<router-link to="/">-->
                      <!--Forgot your password?-->
                    <!--</router-link>-->
                  <!--</q-item-section>-->
                <!--</q-item>-->
                <!--<q-btn type="submit" class="full-width bg-cyan-7 text-white">-->
                  <!--Sign In-->
                <!--</q-btn>-->
                <!--<div class="row">-->
                  <!--<div class="col-5">-->
                    <!--<q-linear-progress :value="0" size="1px" class="q-mt-sm" />-->
                  <!--</div>-->
                  <!--<div class="col-2 text-center">-->
                    <!--<span>or</span>-->
                  <!--</div>-->
                  <!--<div class="col-5">-->
                    <!--<q-linear-progress :value="0" size="1px" class="q-mt-sm" />-->
                  <!--</div>-->
                <!--</div>-->
                <!--<q-btn class="full-width bg-orange-6 text-white" :to="{name: 'Signup'}">-->
                  <!--Join Take Charge NXT-->
                <!--</q-btn>-->
                <!--&lt;!&ndash;<q-toggle v-model="accept" label="By clicking here I agree to receive periodic emails with offers and promotional marketing messages from Swagbucks." />&ndash;&gt;-->
                <!--<q-item tag="label" class="q-ma-none q-pa-none q-mt-lg">-->
                  <!--<q-item-section avatar>-->
                    <!--<q-toggle color="red" v-model="accept"/>-->
                  <!--</q-item-section>-->
                  <!--<q-item-section>-->
                    <!--<q-item-label caption>By clicking here I agree to receive periodic emails with offers and promotional marketing messages from Take Charge NXT.</q-item-label>-->
                  <!--</q-item-section>-->
                <!--</q-item>-->
                <!--By Signing up I agree to the Terms and Privacy Policy.-->
              <!--</q-form>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->

        <!--<q-dialog ref="introVideo" @hide="onHideVideo">-->
          <!--<q-card class="q-dialog-plugin text-right" style="width: 60%">-->
            <!--<q-space />-->
            <!--<q-btn icon="close" flat round dense v-close-popup />-->
            <!--<q-video style="height: 315px;"-->
              <!--:src="require('../assets/videos/intro-video.mp4')"-->
            <!--/>-->
          <!--</q-card>-->
        <!--</q-dialog>-->
      <!--</div>-->
      <!--<div class="bg-blue-grey-1" style="border-bottom: .1rem solid #d2d7da;">-->
        <!--<div class="row q-px-xl q-py-lg q-mx-xl items-center text-center">-->
          <!--<div class="col-12 col-md-2">-->
            <!--<span style="font-size: 16px">Reasons to Join Take Charge NXT</span>-->
          <!--</div>-->
          <!--<div class="col-12 col-md-2 items-center" style="display:flex">-->
            <!--<q-avatar>-->
              <!--<img src="../assets/images/icons/daily-payout.png"/>-->
            <!--</q-avatar>-->
            <!--<div>-->
              <!--<span style="font-size: 16px">Daily Payouts</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="col-12 col-md-2 items-center" style="display:flex">-->
            <!--<q-avatar>-->
              <!--<img src="../assets/images/icons/referral-bonus.png"/>-->
            <!--</q-avatar>-->
            <!--<div>-->
              <!--<span style="font-size: 16px">Referral Bonuses</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="col-12 col-md-2 items-center" style="display:flex">-->
            <!--<q-avatar>-->
              <!--<img src="../assets/images/icons/flexible-scheduling.png"/>-->
            <!--</q-avatar>-->
            <!--<div>-->
              <!--<span style="font-size: 16px">Flexible Scheduling</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="col-12 col-md-2 items-center" style="display:flex">-->
            <!--<q-avatar>-->
              <!--<img src="../assets/images/icons/no-drug-test.png"/>-->
            <!--</q-avatar>-->
            <!--<div>-->
              <!--<span style="font-size: 16px">No Background / Drug Tests</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="col-12 col-md-2 items-center" style="display:flex">-->
            <!--<q-avatar>-->
              <!--<img src="../assets/images/icons/tournament-monthly.png"/>-->
            <!--</q-avatar>-->
            <!--<div>-->
              <!--<span style="font-size: 16px">Monthly Tournaments</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div>-->
        <!--<div class="q-px-xl q-py-lg q-mx-xl items-center">-->
          <!--<div class="text-center">-->
            <!--<span class="text-h3 text-weight-light">-->
              <!--Earning Cash Daily is Easy. Here's how…</span>-->
          <!--</div>-->
          <!--<div class="row q-mt-xl">-->
            <!--<div style="max-width: 500px" class="col-12 col-md-3 text-center q-mx-auto">-->
              <!--<img style="height: 90px; width: 300px" src="../assets/images/signup.png" />-->
              <!--<h4>Sign up</h4>-->
            <!--</div>-->
            <!--<div style="max-width: 500px" class="col-12 col-md-3 text-center q-mx-auto">-->
              <!--<img style="height: 90px; width: 300px" src="../assets/images/id-verify.jpg" />-->
              <!--<h4>ID Verification</h4>-->
            <!--</div>-->
            <!--&lt;!&ndash;<div class="col-12 col-md-2 items-center justify-center" style="display: flex">&ndash;&gt;-->
              <!--&lt;!&ndash;<img src="../assets/images/arrow-right.png" />&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--<div style="max-width: 500px" class="col-12 col-md-3 text-center q-mx-auto">-->
              <!--<img style="height: 90px; width: 300px" src="../assets/images/sell-products.png" />-->
              <!--<h4>Simply Show up and Sell products</h4>-->
            <!--</div>-->
            <!--<div style="max-width: 500px" class="col-12 col-md-3 text-center q-mx-auto">-->
              <!--<img style="height: 90px; width: 300px" src="../assets/images/get-paid.jpg" />-->
              <!--<h4>Get Paid</h4>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="bg-blue-grey-1" style="border-bottom: .1rem solid #d2d7da;">-->
        <!--<div class="q-px-lg q-mx-xl items-center text-center" style="padding-top: 60px; padding-bottom: 50px;">-->
          <!--<div class="text-h2 q-pb-lg">Take Charge NXT has pays out over</div>-->
          <!--<div id="flipCounterWrapper">-->
            <!--$-->
            <!--<div id="flipCounter">-->
              <!--<span class="flipCounterFrame">-->
                <!--<span class="flipCounterDigit">1</span>-->
              <!--</span>-->
              <!--<span class="flipCounterFrame">-->
                <!--<span class="flipCounterDigit">5</span>-->
              <!--</span>-->
              <!--<span class="flipCounterFrame">-->
                <!--<span class="flipCounterDigit">0</span>-->
              <!--</span>-->
              <!--,-->
              <!--<span class="flipCounterFrame">-->
                <!--<span class="flipCounterDigit">0</span>-->
              <!--</span>-->
              <!--<span class="flipCounterFrame">-->
                <!--<span class="flipCounterDigit">0</span>-->
              <!--</span>-->
              <!--<span class="flipCounterFrame">-->
                <!--<span class="flipCounterDigit">0</span>-->
              <!--</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div>-->
        <!--<div class="q-px-xl q-py-lg q-mx-xl items-center" style="display: flex; max-width: 800px; margin: auto">-->
          <!--<q-avatar class="q-ma-lg" size="90px">-->
            <!--<q-img src="https://app6-cdn2.sbx-cdn.com/content/home-6/images/logged-out/testimonials/female-mid3.jpg"></q-img>-->
          <!--</q-avatar>-->
          <!--<p class="text-left testimonial">-->
            <!--“My most rewarding moment with Take Charge NXT is using the gift cards I earn to buy gifts for my child's Christmas and February birthday.”-->
            <!--<span class="testimonialMeta">-->
              <!--<span class="testimonialMetaName">Kim,</span>-->
              <!--Member since 2009-->
            <!--</span>-->
          <!--</p>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="bg-blue-grey-1" style="border-bottom: .1rem solid #d2d7da;">-->
        <!--<div class="q-px-lg q-mx-xl q-py-xl items-center text-center" >-->
          <!--<div class="row">-->
            <!--<div class="col-2"></div>-->
            <!--<div class="col-3">-->
              <!--<q-linear-progress :value="0" size="2px" class="q-mt-lg" />-->
            <!--</div>-->
            <!--<div class="col-2 text-center">-->
              <!--<img src="../assets/images/horizontal-line.png" />-->
            <!--</div>-->
            <!--<div class="col-3">-->
              <!--<q-linear-progress :value="0" size="2px" class="q-mt-lg" />-->
            <!--</div>-->
            <!--<div class="col-2"></div>-->
          <!--</div>-->
          <!--<p id="lpContentGcCopy">-->
            <!--&lt;!&ndash;We give out <strong>7,000</strong> free gift cards <em>every day</em>&ndash;&gt;-->
            <!--Take Charge NXT gives out over <strong>1,000</strong> free gift cards and prizes each year to Houston community-->
          <!--</p>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="bg-blue-grey-1" style="border-bottom: .1rem solid #d2d7da;">-->
        <!--<div class="q-px-lg q-mx-xl q-py-xl text-center" >-->
          <!--&lt;!&ndash;<q-img style="width: 300px;" :src="require('../assets/images/logo.png')"></q-img>&ndash;&gt;-->
          <!--<div class="row">-->
            <!--<div class="col-md-4">-->
              <!--<h5 class="q-my-md">Contact</h5>-->
              <!--<q-item>-->
                <!--<q-item-section avatar top>-->
                  <!--<q-avatar icon="place" color="cyan-7" text-color="white" />-->
                <!--</q-item-section>-->
                <!--<q-item-section>-->
                  <!--<q-item-label>3845 Cypress Creek Pkwy Suite 181 , Houston Texas 77068</q-item-label>-->
                <!--</q-item-section>-->
              <!--</q-item>-->
              <!--<q-item>-->
                <!--<q-item-section avatar top>-->
                  <!--<q-avatar icon="fas fa-phone" color="cyan-7" text-color="white" />-->
                <!--</q-item-section>-->
                <!--<q-item-section>-->
                  <!--<q-item-label class="text-left">281-397-3244</q-item-label>-->
                <!--</q-item-section>-->
              <!--</q-item>-->
            <!--</div>-->
            <!--<div class="col-md-4">-->
              <!--<h5 class="q-my-md">Social Networks</h5>-->
              <!--<q-item class="justify-center">-->
                <!--<q-item-section avatar top>-->
                  <!--<q-btn flat rounded @click="socialNavigate(social.facebook)">-->
                    <!--<q-icon name="fab fa-facebook-square" color="indigo-7" size="lg"></q-icon>-->
                  <!--</q-btn>-->
                <!--</q-item-section>-->
                <!--<q-item-section avatar top>-->
                  <!--<q-btn flat rounded @click="socialNavigate(social.twitter)">-->
                    <!--<q-icon name="fab fa-twitter" color="light-blue-7" size="lg"></q-icon>-->
                  <!--</q-btn>-->
                <!--</q-item-section>-->
                <!--<q-item-section avatar top>-->
                  <!--<q-btn flat rounded @click="socialNavigate(social.instagram)">-->
                    <!--<q-icon name="fab fa-instagram" color="red-13" size="lg"></q-icon>-->
                  <!--</q-btn>-->
                <!--</q-item-section>-->
                <!--<q-item-section avatar top>-->
                  <!--<q-btn flat rounded @click="socialNavigate(social.youtube)">-->
                    <!--<q-icon name="fab fa-youtube" color="red-14" size="lg"></q-icon>-->
                  <!--</q-btn>-->
                <!--</q-item-section>-->
                <!--<q-item-section avatar top>-->
                  <!--<q-btn flat rounded @click="socialNavigate(social.linkedin)">-->
                    <!--<q-icon name="fab fa-linkedin" color="cyan-7" size="lg"></q-icon>-->
                  <!--</q-btn>-->
                <!--</q-item-section>-->
              <!--</q-item>-->
            <!--</div>-->
            <!--<div class="col-md-4">-->
              <!--<h5>TrustPilot</h5>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </q-layout>
</template>

<style>
  #homeBanner {
    background: url(../assets/images/intro.jpg) center 60% / cover no-repeat;
    overflow: auto;
    padding: 2.1rem 0 2.8rem;
    margin-top: 67px;
  }
  #flipCounterWrapper {
    font-family: 'Open Sans',sans-serif;
    font-size: 4.5em;
    line-height: 1.462;
    font-weight: 500;
    color: #6bb0c6;
    text-align: center;
  }
  #flipCounter {
    display: inline-block;
    position: relative;
    background-color: #2e8da9;
    border-radius: .123em;
    color: #fff;
    line-height: 1;
    padding: .277em;
    vertical-align: bottom;
    margin-left: .108em;
  }
  .flipCounterFrame {
    position: relative;
    display: inline-block;
    height: 1.08em;
    width: .8em;
    border-radius: .123em;
    margin: 0 .0385em;
    background-color: #89cddc;
    overflow: hidden;
    vertical-align: middle;
  }
  .flipCounterFrame:before {
     content: '';
     position: absolute;
     top: .0154em;
     left: 0;
     width: 100%;
     height: .54em;
     background-color: #6bb0c6;
     z-index: 0;
     border-top-left-radius: .1385em;
     border-top-right-radius: .1385em;
  }
  .flipCounterDigit {
    position: relative;
    z-index: 1;
    line-height: 1;
  }
  .flipCounterDigit:before {
    content: '';
    position: absolute;
    top: -.17em;
    bottom: 0;
    left: 100%;
    height: .0155em;
    width: 300%;
    margin: auto;
    background-color: #5fa3b8;
    box-sizing: border-box;
    z-index: 2;
  }
  .flipCounterDigit:after {
    content: '';
    position: absolute;
    top: .05em;
    bottom: 0;
    left: -100%;
    height: .0155em;
    width: 300%;
    margin: auto;
    background-color: #85cde5;
    box-sizing: border-box;
    z-index: 2;
  }
  .flipCounterFrame:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .54em;
    background-color: #5fa3b8;
    z-index: 0;
  }
  .testimonial {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.36;
    color: #2b2a26;
    overflow: auto;
    margin: 0;
    display: inline-block;
    vertical-align: middle;
  }
  .testimonialMeta {
    display: block;
    font-size: .56em;
    color: #999;
    margin-top: .7rem;
  }
  .testimonialMetaName {
    font-size: 1.43em;
    color: #666;
  }
  #lpContentGcCopy {
    font-size: 2em;
    line-height: 1.2;
    color: #666;
  }
  #lpContentGcCopy strong {
    font-size: 2.25em;
    color: #6ec9c0;
    font-weight: 300;
    vertical-align: middle;
    padding: 0 .5rem;
  }
  #dynamicSignupBonus {
    display: inline-block;
    position: absolute;
    top: 0;
    right: -1rem;
    z-index: 10;
    overflow: hidden;
    font-family: 'Open Sans',sans-serif;
  }
  #dynamicSignupBonus:before, #dynamicSignupBonus:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 .3rem 2rem 0;
    border-color: transparent #f3b376 transparent transparent;
  }
  #dynamicSignupBonusInner {
    display: flex;
    align-items: center;
    background-color: #f3b276;
    padding: .4rem .7rem .6rem;
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    text-shadow: 0.1rem 0.1rem #dca36f;
    margin-left: .3rem;
    margin-bottom: .5rem;
  }
  #dynamicSignupBonusInner:before, #dynamicSignupBonusInner:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: .5rem 1rem 0 0;
    border-color: #d08d4e transparent transparent transparent;
  }
  #dynamicSignupBonusAmount {
    vertical-align: top;
  }
  #dynamicSignupBonusAmount sup {
    display: inline-block;
    font-size: .55em;
    font-weight: 500;
    margin-top: .2rem;
    vertical-align: top;
  }
  #dynamicSignupBonusWord {
    display: inline-block;
    text-transform: uppercase;
    font-size: .64em;
    font-weight: 600;
    vertical-align: top;
    margin: .2rem .5rem 0;
  }
  #dynamicSignupBonusWord:before, #dynamicSignupBonusWord:after {
    display: block;
    content: '';
    width: 100%;
    height: .2rem;
    background-color: #fff;
    box-shadow: 0.1rem 0.1rem #dca36f;
  }
  #dynamicSignupBonusWord:after {
    margin-top: .2rem;
  }
  #dynamicSignupBonusAsterisk {
    display: inline-block;
    font-size: .6em;
    font-weight: 400;
    align-self: flex-start;
    margin-top: .3rem;
  }
  #dynamicSignupBonusInner:after {
    border-width: 0 10rem .5rem 0;
    border-color: transparent #000 transparent transparent;
    opacity: .15;
    right: 1rem;
  }
  #dynamicSignupBonus:after {
    border-width: 0 0 2rem .3rem;
    border-color: transparent transparent #f3b376 transparent;
    bottom: .5rem;
    top: initial;
  }
</style>

<script>
// import { Loading } from 'quasar'
// import { api } from 'src/boot/api'
export default {
  name: 'PageIndex',
  data () {
    return {
      color: 'primary',
      response: '',
      loading: false,
      userData: {
        email: '',
        password: ''
      },
      user: {},
      accept: false,
      remember: false,
      social: {
        facebook: 'https://www.facebook.com/faevaaenterprises/',
        twitter: 'https://twitter.com/Faevaa/',
        instagram: 'https://www.instagram.com/faevaaenterprises/',
        linkedin: '#',
        youtube: 'https://www.youtube.com/faevaaenterprises/'
      }
    }
  },
  created () {
    console.log('hey index.vue')
  },
  methods: {
    // async makeRequest () {
    //   let response
    //   let color = 'negative'
    //   this.loading = true

    //   try {
    //     response = ''
    //     let req = await fetch(process.env.api + '/test')

    //     if (!req.ok) throw new Error('error request')

    //     let {data} = await req.json()
    //     response = data
    //     color = 'positive'
    //   } catch (err) {
    //     console.log(err)
    //     response = err.message
    //   }

    //   setTimeout(() => {
    //     this.response = response
    //     this.color = color
    //     this.loading = false
    //   }, 700)
    // }
    // async login () {
    //   Loading.show()
    //   try {
    //     let res = await api.login(this.userData)
    //     console.log('res', res.data[0])
    //     await this.$store.dispatch('auth/login', { token: res.data.token, user: res.data.user })
    //     Loading.hide()
    //     this.$router.push('/axios-node-test')
    //   } catch (error) {
    //     Loading.hide()
    //   }
    // },
    socialNavigate (link) {
      window.open(link)
    },
    showVideo () {
      this.$refs.introVideo.show()
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hideVideo () {
      this.$refs.introVideo.hide()
    },

    onHideVideo () {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit('hideVideo')
    },

    hideVideoDlg () {
      this.hideVideo()
    },

    makeRequest () {
      //   let response
      //   let color = 'negative'
      this.loading = true
      this.$axios
        .get('/test')
        .then(res => {
          console.log('res', res)
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          console.log('err', err)
        })

      //   try {
      //     response = ''
      //     let req = await fetch(process.env.api + '/test')

      //     if (!req.ok) throw new Error('error request')

      //     let {data} = await req.json()
      //     response = data
      //     color = 'positive'
      //   } catch (err) {
      //     console.log(err)
      //     response = err.message
      //   }

      //   setTimeout(() => {
      //     this.response = response
      //     this.color = color
      //     this.loading = false
      //   }, 700)
    }
  }
}
</script>
