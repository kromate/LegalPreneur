<template>
	<section class="bg-blue p-12 px-4">
		<div class="container mx-auto ">
			<h1 class="text-xl font-bold tracking-wide text-center text-dark mb-7"> Our trusted partners. </h1>
			<div class="relative marquee-container flex gap-12">
				<div class="marquee flex items-center justify-between  mt-0  flex-nowrap gap-12">
					<!-- <div class="flex items-center justify-center"> -->
					<img src="/logo/emurgo.png" alt="emurgo logo" class="block object-contain h-20">
					<!-- </div> -->
					<!-- <div class="flex items-center justify-center"> -->
					<img src="/logo/Adaverse.jpeg" alt="Adaverse logo" class="block object-contain h-20">
					<!-- </div> -->
					<!-- <div class="flex items-center justify-center"> -->
					<img src="/logo/convexity.png" alt="convexity logo" class="block object-contain h-20">
					<!-- </div> -->
					<!-- <div class="flex items-center justify-center"> -->
					<img src="/logo/jego.png" alt="jego logo" class="block object-contain h-20">
					<!-- </div> -->
					<!-- <div class="flex items-center justify-center"> -->
					<img src="/logo/hyvetech.png" alt="hyvetech logo" class="block object-contain h-20">
					<!-- </div> -->
					<!-- <div class="flex items-center justify-center"> -->
					<img src="/logo/hedera.png" alt="hedera logo" class="block object-contain h-20">
					<!-- </div> -->
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped> 
.marquee-container {
  height: 5rem;
  overflow: hidden;
  line-height: 30px;
  width: 100%;
    // @media screen and (max-width: 1024px) {
	// 	height:auto;
	// }

}
.marquee-container .marquee {
  top: 0;
  left: 100%;
   width: 100%;
//   overflow: hidden;
  position: absolute;
  animation: marquee 25s linear infinite;

//   @media screen and (max-width: 1024px) {
// 	animation: none;
// 	position: relative;
// 	left: 0;
// 	display: flex;

//   }
	  
  
}
.marquee-container .marquee2 {
  animation-delay: 10s;
//     @media screen and (max-width: 1024px) {
// 	 animation-delay: 15s;
//   }
}
.marquee-container b {
  padding-left: 10px;
}

@keyframes marquee {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}

</style>
