<template>
  <div>
    <q-item-label header>Menu</q-item-label>
    <q-item
      clickable
      to="/dashboard/buyers"
    >
      <q-item-section avatar>
        <q-icon name="fas fa-user-alt" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Buyers</q-item-label>
        <!--<q-item-label caption>QSelect Extension</q-item-label>-->
      </q-item-section>
    </q-item>
    <q-item
      clickable
      to="/dashboard/buyers1"
    >
      <q-item-section avatar>
        <q-icon name="school" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Buyers2</q-item-label>
        <q-item-label caption>QSelect Extension</q-item-label>
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
