<template>
  <div>
    <q-item-label header>Menu</q-item-label>
    <q-item
      clickable
      to="/dashboard/scheduling"
    >
      <q-item-section avatar>
        <q-icon name="fas fa-calendar-alt" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Scheduling</q-item-label>
        <!--<q-item-label caption>QSelect Extension</q-item-label>-->
      </q-item-section>
    </q-item>
    <q-item
      clickable
      to="/dashboard/component-samples"
    >
      <q-item-section avatar>
        <q-icon name="school" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Select Sample</q-item-label>
        <q-item-label caption>QSelect Extension</q-item-label>
      </q-item-section>
    </q-item>
    <q-item
      clickable
      to="/dashboard/form-validations"
    >
      <q-item-section avatar>
        <q-icon name="chat" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Form Input Samples</q-item-label>
        <q-item-label caption>Quasar Form Input Extension with Vuelidate</q-item-label>
      </q-item-section>
    </q-item>
    <q-item
      clickable
      to="/dashboard/dialog-sample"
    >
      <q-item-section avatar>
        <q-icon name="record_voice_over" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Dialog Sample</q-item-label>
        <q-item-label caption>Dialog Sample</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
