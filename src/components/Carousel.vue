
<template>
<div class="container">
	<div class="row">
		<div class="col-md-9 col-center">
			<h2><span>Thumbnail <b>Carousel</b></span></h2>
			<br>
			<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
				<!-- Carousel indicators -->
				<ol class="carousel-indicators ">
					<li data-target="#myCarousel" data-slide-to="0" class="active "></li>
          <li data-target="#myCarousel" data-slide-to="1"   ></li>
				</ol> 

				<!-- Wrapper for carousel items -->
				<div class="carousel-inner"  >
					<div class="item active" >
						<div class="row" >
							<div class="col-sm-4" v-for="(menu_item, index) in menu_items" v-if="index >=0 && index < 3">
                <div class="img-box">
                  <img :src="menu_item.image_url" class="img-responsive" alt="" style="width:100%;">
                </div>
              </div>
						</div>
					</div>
					<div class="item">
						<div class="row" >
							<div class="col-sm-4" v-for="(menu_item, index) in menu_items" v-if="index > 2">
                <div class="img-box">
                  <img :src="menu_item.image_url" class="img-responsive" alt="" style="width:100%;">
                </div>
              </div>
						</div>
					</div>
				</div>
				<!-- Carousel controls -->
				<a class="carousel-control left" href="#myCarousel" data-slide="prev">
					<i class="fa fa-chevron-left"></i>
				</a>

				<a class="carousel-control right" href="#myCarousel" data-slide="next">
					<i class="fa fa-chevron-right"></i>
				</a>
			</div>
		</div>
	</div>
</div>

</template>

<script>
export default {
  props: ["menu_items"],
};
</script>

<style lang="scss">
.color {
  color: black;
  background-color: black;
}
body {
  background: #ebebeb;
}
.img-responsive {
  height: 130px;
  width: 130px;
}
h2 {
  color: #696969;
  font-size: 26px;
  font-weight: 300;
  text-align: center;
  position: relative;
  margin: 40px 70px;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
}
h2::after {
  content: "";
  width: 100%;
  position: absolute;
  margin: 0 auto;
  height: 1px;
  border-radius: 1px;
  background: #d4d4d4;
  left: 0;
  right: 0;
  bottom: 14px;
}
h2 span {
  display: inline-block;
  padding: 0 25px;
  background: #ebebeb;
  position: relative;
  z-index: 2;
}
.col-center {
  margin: 0 auto;
  float: none !important;
}
.carousel {
  margin: 30px auto 50px;
  padding: 0 68px;
}
.carousel .item {
  text-align: center;
  overflow: hidden;
  height: 160px;
}
.carousel .item .img-box {
  background: #fff;
  padding: 9px;
  box-shadow: 0 6px 20px -6px rgba(0, 0, 0, 0.4);
}
.carousel .item img {
  margin: 0 auto;
}
.carousel .carousel-control {
  width: 68px;
  background: none;
}
.carousel .carousel-control i {
  font-size: 28px;
  position: absolute;
  top: 50%;
  display: inline-block;
  margin-top: -15px;
  z-index: 5;
  left: 0;
  right: 0;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;
}
.carousel .carousel-indicators {
  // bottom: -40px;
  // width: 10px;
  // height: 10px;
  // border-radius: 50%;
}
.carousel-indicators li,
.carousel-indicators li.active {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 1px 4px;
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.2);
}
.carousel-indicators li {
  background-color: #999;
  border-color: transparent;
  border-radius: 50%;
}
.carousel-indicators li.active {
  background-color: #555;
}

.carousel-indicators li {
  width: 10px;
  height: 10px;
}
</style>
                               		