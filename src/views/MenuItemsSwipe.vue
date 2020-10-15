<template>
  <div >
    <div >
      <div >
        <img :src="randomMenuItem.image_url">
      </div>
    </div> 
  </div>


  <!-- <div class="menu_items_show">
    <div class="row">
      <div class="col">
        <img :src="randomMenuItem.image_url">
      </div>
    </div> 
  </div> -->
</template>

<style></style>

<script>
var axios = require("axios");
import { SwipeList, SwipeOut } from "vue-swipe-actions";

export default {
  components: {
    SwipeOut,
    SwipeList,
  },
  data: function () {
    return {
      randomMenuItem: {
        id: "",
        image_url: "",
      },
      menuItems: [],
      id: "",
      image_url: "",
      errors: [],
      enabled: true,
      mockSwipeList: [
        {
          id: 0,
          title: "Some title",
          description: "some description",
        },
        {
          id: 1,
          title: "Some title",
          description: "some description",
        },
        {
          id: 2,
          title: "Some title",
          description: "some description",
        },
      ],
    };
  },
  created: function () {
    axios.get("/menu_items/").then((response) => {
      this.menuItems = response.data;
      console.log(this.menuItems);
      this.randomMenuItem =
        response.data[Math.floor(Math.random() * response.data.length)];
      // console.log(this.randomMenuItem)
    });
  },
  methods: {
    revealFirstRight() {
      this.$refs.list.revealRight(0);
    },
    revealFirstLeft() {
      this.$refs.list.revealLeft(0);
    },
    closeFirst() {
      this.$refs.list.closeActions(0);
    },
    closeAll() {
      this.$refs.list.closeActions();
    },
    remove(item) {
      this.mockSwipeList = this.mockSwipeList.filter((i) => i !== item);
      // console.log(e, 'remove');
    },
    itemClick(e) {
      console.log(e, "item click");
    },
    fbClick(e) {
      console.log(e, "First Button Click");
    },
    sbClick(e) {
      console.log(e, "Second Button Click");
    },
  },
};
</script>

 