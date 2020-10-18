<template>
  <div class="">
    <div class="cards">
      <GameCard
        v-for="(card, index) in cards"
        :key="card"
        :card="card"
        :is-current="index === 0"
        @cardAccepted="$emit('cardAccepted', card);"
        @cardRejected="$emit('cardRejected', card);"
        @cardSkipped="$emit('cardSkipped');"
        @hideCard="$emit('hideCard');"
      />
    </div>
  </div>
</template>

<script>
import GameCard from "@/components/GameCard";

export default {
  components: {
    GameCard,
  },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  position: relative;
  display: flex;
  width: 300px;
  margin: auto;
  margin-bottom: 40%;
}
</style>
