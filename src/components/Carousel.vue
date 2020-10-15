
<template>
<div class="container">
	<div class="row">
		<div class="col-md-9 col-center">
			<h2><span>Thumbnail <b>Carousel</b></span></h2>
			<br>
			<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
				<!-- Carousel indicators -->
				<ol class="carousel-indicators ">
					<li 
						data-target="#myCarousel" 
						data-slide-to="0"  
						style="width: 10px; height: 10px;" class="active "
					>
					</li>
          <li 
						data-target="#myCarousel" 
						data-slide-to="1" 
						style="width: 10px; height: 10px;"  
					>
					</li>
				</ol> 

				<!-- Wrapper for carousel items -->
				<div class="carousel-inner"  >
					<div class="item active" >
						<div class="row" >
							<div class="col-sm-4" v-for="(menu_item, index) in menu_items" v-if="index >=0 && index < 3">
                <div class="img-box">
                  <img :src="menu_item.image_url" class="img-responsive" alt="" style="width:100%;" data-toggle="modal" data-target="#exampleModal" @click="currentMenuItem = menu_item">
                </div>
              </div>
						</div>
					</div>
					<div class="item">
						<div class="row" >
							<div class="col-sm-4" v-for="(menu_item, index) in menu_items" v-if="index > 2">
                <div class="img-box">
                  <img :src="menu_item.image_url" class="img-responsive" alt="" style="width:100%;" data-toggle="modal" data-target="#exampleModal" @click="currentMenuItem = menu_item">
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
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{currentMenuItem.name}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{currentMenuItem.description}}</p>
          <!-- <img :src="currentMenuItem.image_url" style="object-fit: contain"> -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  props: ["menu_items"],
  data() {
    return {
      currentMenuItem: {}
    }
  }
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

// .carousel-indicators li {
//   width: 10px;
//   height: 10px;
// }

// .carousel-indicators li {
//   box-sizing: content-box;
//   flex: 0 1 auto;
//   width: 10px;
//   height: 10px;
//   margin-right: 3px;
//   margin-left: 3px;
//   text-indent: -999px;
//   cursor: pointer;
//   background-color: #fff;
//   background-clip: padding-box;
//   border-top: 10px solid transparent;
//   border-bottom: 10px solid transparent;
//   opacity: 0.5;
//   transition: opacity 0.6s ease;
// }
</style>
                               		