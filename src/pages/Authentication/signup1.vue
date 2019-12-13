<template>
  <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <router-link to="/">
          <q-img :src="require('../../assets/images/logo.png')" style="width: 150px;" />
        </router-link>
        <q-toolbar-title></q-toolbar-title>
      </q-toolbar>
    </q-header>

    <div id="bgImage">
      <div class="q-pa-md text-center" style="margin-top: 67px;">
        <q-stepper
          v-model="step"
          ref="stepper"
          animated
          class="text-center q-py-none shadow-3 bg-white q-mx-auto"
          style="max-width: 700px; border-radius: 10px;"
          active-color="cyan-7"
          done-color="cyan-7"
          header-nav
          contracted
        >
          <q-step
            :name="1"
            title="Sign up Phase 1"
            icon="settings"
            :done="validateUser"
            :model="user"
            class="q-py-none q-my-none"
          >
            <q-form
              @submit="userValidation"
            >
              <div class="row justify-between q-col-gutter-md" >
                <div class="col-12 q-py-none">
                  <q-img :src="require('../../assets/images/logo.png')" contain style="height: 100px"></q-img>
                </div>
                <div class="col-12 q-py-none">
                  <h5 class="q-my-none">Become a NXT Rep Today</h5>
                </div>
                <div class="col-12 col-sm-6">
                  <q-input outlined required label="First Name" color="cyan-7" v-model="user.first_name"></q-input>
                </div>
                <div class="col-12 col-sm-6">
                  <q-input outlined required label="Last Name" color="cyan-7" v-model="user.last_name"></q-input>
                </div>
                <div class="col-12 col-sm-6">
                  <q-input outlined required label="Address" color="cyan-7" v-model="user.address"></q-input>
                </div>
                <div class="col-12 col-sm-6">
                  <q-input outlined required label="City" color="cyan-7" v-model="user.city"></q-input>
                </div>
                <div class="col-12 col-sm-6">
                  <q-input outlined required label="State" color="cyan-7" v-model="user.state"></q-input>
                </div>
                <div class="col-12 col-sm-6">
                  <q-input outlined required label="Zip Code" color="cyan-7" v-model="user.zipcode"></q-input>
                </div>
                <div class="col-12 col-sm-6">
                  <!--<q-input outlined label="Date of Birth" color="cyan-7" v-model="user.birth_date"></q-input>-->
                  <q-input outlined required label="Date of Birth" color="cyan-7" v-model="user.birth_date" mask="date">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="birth_date" transition-show="scale" transition-hide="scale">
                          <q-date v-model="user.birth_date" color="cyan-7" @input="() => $refs.birth_date.hide()" />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
                <div class="col-12 col-sm-6">
                  <q-input outlined required label="Driver's License / ID Number" color="cyan-7" v-model="user.driver_license"></q-input>
                </div>
                <div class="col-12 col-sm-6">
                  <q-input outlined required label="Mobile Phone" color="cyan-7" v-model="user.phone"></q-input>
                </div>
                <div class="col-12 col-sm-6">
                  <q-input outlined required label="Email" type="email" color="cyan-7" v-model="user.email"></q-input>
                </div>
              </div>
              <q-stepper-navigation>
                <!--<q-btn @click="() => { validateUser = true; step = 2 }" color="primary" label="Continue" />-->
                <q-btn label="Next" type="submit" color="deep-orange-7" class="q-btn--push" style="width:200px; height:50px;"/>
              </q-stepper-navigation>
              <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
            </q-form>
          </q-step>
          <q-step
            :name="2"
            title="Email"
            icon="email"
            :done="verifyEmail"
          >
            <q-form
              @submit="emailVerification"
            >
              <div class="row justify-between q-col-gutter-md" >
                <div class="col-12">
                  <q-img :src="require('../../assets/images/logo.png')" contain style="height: 100px"></q-img>
                </div>
                <div class="col-12">
                  <h5 class="q-my-none">Please Enter The 6 Digit Code Sent To Your Email Address Provided </h5>
                </div>
                <div class="col-12">
                  <q-input outlined mask="######" :rules="[val => val.length === 6 || 'Please put 6 digits only']" required label="Verify Code" color="cyan-7" v-model="verifyCodes.email">
                    <template v-slot:hint class="q-px-none">
                      <q-btn flat color="deep-orange-7" class="q-px-none" @click="sendEmailVerification">resend code</q-btn>
                    </template>
                  </q-input>
                </div>
              </div>
              <q-stepper-navigation>
                <q-btn label="Submit Verify Code" type="submit" color="deep-orange-7" class="q-btn--push" style="width:200px; height:50px;"/>
                <q-btn v-if="step > 1" flat color="deep-orange-7" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-form>
          </q-step>

          <q-step
            :name="3"
            title="Phone"
            icon="phone"
            :done="verifyPhone"
          >
            <q-form
              @submit="phoneVerification"
            >
              <div class="row justify-between q-col-gutter-md" >
                <div class="col-12">
                  <q-img :src="require('../../assets/images/logo.png')" contain style="height: 100px"></q-img>
                </div>
                <div class="col-12">
                  <h5 class="q-my-none">Please Enter The 6 Digit Code Sent To Your Phone Provided </h5>
                </div>
                <div class="col-12">
                  <!--<q-input outlined required label="Verify Code" color="cyan-7" v-model="verifyCodes.phone"></q-input>-->
                  <q-input outlined mask="######" :rules="[val => val.length === 6 || 'Please put 6 digits only']" required label="Verify Code" color="cyan-7" v-model="verifyCodes.phone">
                    <template v-slot:hint class="q-px-none">
                      <q-btn flat color="deep-orange-7" class="q-px-none" @click="sendPhoneVerification">resend code</q-btn>
                    </template>
                  </q-input>
                </div>
              </div>
              <q-stepper-navigation>
                <q-btn label="Submit Verify Code" type="submit" color="deep-orange-7" class="q-btn--push" style="width:200px; height:50px;"/>
                <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-form>
          </q-step>
          <q-step
            :name="4"
            title="ID Card"
            icon="fas fa-id-card"
            :done="verifyId"
          >
            <q-form
              @submit="idVerification"
            >
              <div class="row justify-between q-col-gutter-md" >
                <div class="col-12">
                  <q-img :src="require('../../assets/images/logo.png')" contain style="height: 100px"></q-img>
                </div>
                <div class="col-12">
                  <h5 class="q-my-none">Please Upload your Driver License / ID card </h5>
                </div>
                <div class="col-12 row items-center justify-center">
                  <q-uploader
                    color="teal"
                    flat
                    bordered
                    extensions=".jpg, .png"
                    ref="uploader"
                    auto-expand
                    stack-label="upload ID"
                    hide-upload-btn
                    @added="addImages"
                  />
                </div>
              </div>
              <q-stepper-navigation>
                <q-btn label="ID Verify" type="submit" color="deep-orange-7" class="q-btn--push" style="width:200px; height:50px;"/>
                <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
              </q-stepper-navigation>
            </q-form>
          </q-step>
          <q-step
            :name="5"
            title="Create User"
            icon="fas fa-user"
            :done="userSignup"
            :model="user"
            class="q-py-none q-my-none"
          >
            <q-form
              @submit="registerUser"
            >
              <div class="row justify-between q-col-gutter-md" >
                <div class="col-12 q-py-none">
                  <q-img :src="require('../../assets/images/logo.png')" contain style="height: 100px"></q-img>
                </div>
                <div class="col-12 q-py-none">
                  <h5 class="q-my-none">Create User Now</h5>
                </div>
                <div class="col-12">
                  <q-input outlined required label="UserName" color="cyan-7" v-model="user.name"></q-input>
                </div>
                <div class="col-12">
                  <q-input outlined required label="Password" color="cyan-7" type="password" v-model="user.password"></q-input>
                </div>
                <div class="col-12">
                  <q-input outlined required label="Confirm Password" color="cyan-7" type="password" v-model="user.confirmPassword" :rules="[val => val === user.password  || 'Password is not match']"></q-input>
                </div>
                <div class="col-12">
                  <q-select outlined
                            required
                            color="cyan-7"
                            v-model="user.question"
                            :options="security_questions"
                            :option-value="opt => opt === null ? null : opt.id"
                            :option-label="opt => opt === null ? '- Null -' : opt.question"
                            emit-value
                            map-options
                            options-cover
                            transition-show="flip-up"
                            transition-hide="flip-down"
                            ref="security_question" label="Security Questions"
                  />
                </div>
                <div class="col-12">
                  <q-input outlined required v-if="user.question" label="Answer for Question" color="cyan-7" v-model="user.answer" ></q-input>
                </div>
                <div class="col-12">
                  <q-item tag="label" class="q-ma-none q-pa-none q-mt-none">
                    <q-item-section avatar>
                      <q-toggle color="red" v-model="accept"/>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-left">
                        Read and accept the <a href="#" target="_blank">Terms and conditions</a>,
                        the <a href="#" target="_blank">Privacy policy</a>
                        and
                        the <a href="#" target="_blank">Acceptable use policy</a>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
              <q-stepper-navigation>
                <!--<q-btn @click="() => { validateUser = true; step = 2 }" color="primary" label="Continue" />-->
                <q-btn label="Next" :disable="!accept" type="submit" color="deep-orange-7" class="q-btn--push" style="width:200px; height:50px;"/>
              </q-stepper-navigation>
            </q-form>
          </q-step>
          <q-step
            :name="6"
            title="Create User"
            icon="fas fa-check"
            active-icon="fas fa-check"
            class="q-py-none q-my-none"
          >
            <div class="row justify-between q-col-gutter-md" >
              <div class="col-12 q-py-none">
                <q-img :src="require('../../assets/images/logo.png')" contain style="height: 100px"></q-img>
              </div>
              <div class="col-12 q-py-none">
                <q-avatar>
                  <q-img :src="require('../../assets/images/icons/success.png')"></q-img>
                </q-avatar>
                <h5 class="q-my-none">Account is activated Successfully</h5>
              </div>
            </div>
            <q-stepper-navigation>
              <!--<q-btn @click="() => { validateUser = true; step = 2 }" color="primary" label="Continue" />-->
              <q-btn to="/" label="Login" color="deep-orange-7" class="q-btn--push" style="width:200px; height:50px;"/>
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </div>
    </div>
  </q-layout>
</template>

<style>
  #bgImage {
    background: url(../../assets/images/background.png) 50% 50% / cover no-repeat;
    overflow: auto;
    padding: 2.1rem 0 2.8rem;
    min-height: 100vh;
  }
</style>
<script>
import { Loading, LocalStorage } from 'quasar'
import { api } from 'src/boot/api'
export default {
  name: 'SignUp',
  data () {
    return {
      user: {
        name: '',
        password: '',
        confirmPassword: '',
        phone: '',
        email: '',
        driver_license: '',
        id_path: '',
        question: '',
        answer: '',
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        birth_date: ''
      },
      security_questions: [],
      verifyCodes: {
        email: '',
        phone: '',
        driver_license: ''
      },
      step: 1,
      validateUser: false,
      verifyEmail: false,
      emailVerifyCode: '',
      verifyPhone: false,
      phoneVerifyCode: '',
      verifyId: false,
      userSignup: false,
      idCard: {},
      accept: false
    }
  },
  created () {
    this.getQuestions()
  },
  methods: {
    async userValidation () {
      Loading.show()
      try {
        await api.validateUser(this.user)
        await this.sendEmailVerification()
        Loading.hide()
      } catch (error) {
        Loading.hide()
      }
    },
    async sendEmailVerification () {
      Loading.show()
      this.verifyCodes.email = ''
      try {
        let res = await api.sendVerifyEmail(this.user)
        this.validateUser = true
        this.step = 2
        Loading.hide()
        this.$q.notify({
          color: 'positive',
          position: 'top',
          message: res.data.success
        })
        this.emailVerifyCode = String(atob(res.data.code) - 111111)
        LocalStorage.set('emailVerifyCode', this.emailVerifyCode)
      } catch (error) {
        Loading.hide()
      }
    },
    async emailVerification () {
      if (this.emailVerifyCode === this.verifyCodes.email) {
        await this.sendPhoneVerification()
        this.verifyEmail = true
        this.step = 3
      } else {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          position: 'top',
          icon: 'fas fa-exclamation-triangle',
          message: 'Verification code is not correct, Please send again'
        })
      }
    },

    async sendPhoneVerification () {
      Loading.show()
      this.verifyCodes.phone = ''
      try {
        let res = await api.sendVerifyPhone(this.user)
        Loading.hide()
        this.$q.notify({
          color: 'positive',
          position: 'top',
          message: res.data.success
        })
        this.phoneVerifyCode = String(atob(res.data.code) - 111111)
        LocalStorage.set('phoneVerifyCode', this.phoneVerifyCode)
        console.log('phone code', this.phoneVerifyCode)
        this.verifyEmail = true
        this.step = 3
      } catch (error) {
        Loading.hide()
      }
    },
    async phoneVerification () {
      if (this.phoneVerifyCode === this.verifyCodes.phone) {
        this.$q.notify({
          color: 'positive',
          position: 'top',
          message: 'Verification code is correct'
        })
        this.verifyPhone = true
        this.step = 4
      } else {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          position: 'top',
          icon: 'fas fa-exclamation-triangle',
          message: 'Verification code is not correct, Please send again'
        })
      }
    },
    addImages (files) {
      this.idCard = files[0]
    },
    async idVerification () {
      const fd = new FormData()
      fd.append('image', this.idCard)
      const headers = 'Content-Type = multipart/form-data'
      Loading.show()
      try {
        let res = await api.uploadIDCards(fd, headers)
        this.verifyId = res.data.verifyResult
        Loading.hide()
        if (this.verifyId === true) {
          this.user.id_path = res.data.path
          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: 'ID Verification is Success'
          })
          this.step = 5
        } else {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            position: 'top',
            icon: 'fas fa-exclamation-triangle',
            message: 'ID Verification is failed, Please try again'
          })
          this.step = 4
        }
      } catch (error) {
        this.verifyId = false
        Loading.hide()
      }
    },
    async getQuestions () {
      Loading.show()
      try {
        let res = await api.getQuestionList()
        this.security_questions = res.data.questions
        Loading.hide()
      } catch (error) {
        Loading.hide()
      }
    },
    async registerUser () {
      if (this.validateUser && this.verifyEmail && this.verifyPhone && this.verifyId) {
        Loading.show()
        try {
          let res = await api.registerUser(this.user)
          console.log('res', res)
          Loading.hide()
        } catch (error) {
          Loading.hide()
        }
      } else {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          position: 'top',
          icon: 'fas fa-exclamation-triangle',
          message: 'Something is wrong, Please check signup progress again'
        })
      }
    }
  }
}
</script>
