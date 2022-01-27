<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name: 'entry' , params: {id: 1}})">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">26</span>
      <span class="mx-1 fs-5">January</span>
      <span class="mx-2 fw-light">2022, Wednesday</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae corporis dolorum expedita ipsum iusto libero,
      minus nobis non nostrum nulla quidem reiciendis sit tempora, tenetur ut velit voluptate voluptates.
    </div>
  </div>
</template>

<script>
export default {
  name: "Entry"
}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>