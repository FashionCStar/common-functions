<template>
  <q-page>
    <!-- content -->

    <div class="bg-light-blue" style="width: 100%; height: 200px; position: absolute">
    </div>
    <template>
      <div class="q-pa-md">
        <template>
          <div class="row items-center justify-between text-white" style="height: 150px; position: relative">
            <div class="items-center" style="font-size: 20px;">
              <q-btn
                class="bg-white text-primary shadow-3 q-btn--push q-mr-md"
                rounded
                @click="$router.push('/dashboard/seller')"
                :icon=" 'fas fa-arrow-left' "
              />
              <span>{{isNewPage ? 'New Seller' : 'Seller Detail'}}</span>
            </div>
          </div>
        </template>
        <q-form
          @submit="onSubmit"
          rounded
          class="text-center q-gutter-y-md q-pa-md shadow-3 bg-white"
          ref="sellerForm"
          :model="sellerForm"
          style="max-width: 600px; width:100%; border-radius: 10px; margin: auto"
        >
          <div class="row justify-between q-col-gutter-md" >
            <div class="col-12">
              <q-input outlined required label="Name" color="cyan-7" v-model="sellerForm.name"></q-input>
            </div>
            <div class="col-12">
              <q-select required outlined v-model="sellerForm.sex"
                        :options="sex"
                        :option-value="opt => opt === null ? null : opt.value"
                        :option-label="opt => opt === null ? '- Null -' : opt.label"
                        emit-value
                        map-options
                        options-cover
                        transition-show="flip-up"
                        transition-hide="flip-down"
                        ref="sex" label="Sex"
              />
            </div>
            <div class="col-12">
              <q-input
                outlined
                required
                label="Age"
                color="cyan-7"
                type="number"
                v-model="sellerForm.age"
                :rules="[val => val < 100 || 'Please input correct age']"
              ></q-input>
            </div>
          </div>
          <!--<div class="q-pa-md">-->
          <!--<q-btn :label="isNewPage ? 'Add New StatusCode' : 'Update StatusCode'" type="submit" color="primary" class="q-btn&#45;&#45;push" style="width:200px; height:50px;"/>-->
          <!--</div>-->
          <q-page-sticky position="bottom-right" :offset="[108, 18]">
            <q-btn fab icon="save" color="purple-7" type="submit" />
          </q-page-sticky>
        </q-form>
      </div>
    </template>
    <!-- place QPageScroller at end of page -->
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script>

import { api } from 'src/boot/api'
import { Loading } from 'quasar'

export default {
  name: 'Detail',
  data: function () {
    return {
      isNewPage: true,
      sellerForm: {
        id: '',
        name: '',
        sex: '',
        age: ''
      },
      sex: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
      ]
    }
  },
  created () {
    // check this is create page or update existing vehicle page
    this.isNew()
    if (!this.isNewPage) {
      this.getSellerInfo(this.sellerForm.id)
    }
  },
  methods: {
    isNew () {
      if (this.$router.currentRoute.params.id !== null && this.$router.currentRoute.params.id !== undefined && this.$router.currentRoute.params.id !== '') {
        this.isNewPage = false
        this.sellerForm.id = this.$router.currentRoute.params.id
      } else {
        this.isNewPage = true
      }
    },

    getSellerInfo: async function (id) {
      Loading.show()
      try {
        let res = await api.getBuyerInfo(id)
        Loading.hide()
        this.sellerForm = res.data.data
        // ...and turn of loading indicator
      } catch (e) {
        Loading.hide()
        this.$router.push('/dashboard/sellers')
      }
    },
    async onSubmit () {
      const params = {
        data: this.sellerForm
      }
      if (!this.isNewPage) {
        params.conditions = {
          id: this.sellerForm.id
        }
        Loading.show()
        try {
          let res = await api.updateBuyer(params)
          Loading.hide()
          console.log('result', res.data)
        } catch (error) {
          Loading.hide()
          console.log('error', error)
        }
        this.$router.push('/dashboard/sellers')
      } else {
        Loading.show()
        try {
          let res = await api.createBuyer(params)
          Loading.hide()
          console.log('result', res.data)
        } catch (error) {
          Loading.hide()
          console.log('error', error)
        }
        this.$router.push('/dashboard/sellers')
      }
    }
  }
}
</script>

<style>
</style>
