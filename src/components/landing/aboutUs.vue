<template>
	<div class="container mx-auto md:py-28 py-10 px-4" id="about">
		<div class="relative">
			<h2 class="pb-2.5 md:text-5xl text-3xl px-3  max-w-full font-extrabold text-center">About us</h2>
		</div>
		

		<section class="md:py-28 py-12 bg-white md:px-0 " >
			<div class="container items-center  mx-auto">
				<div class="flex flex-wrap-reverse items-center sm:-mx-3">
					<div class="w-full md:w-1/2 md:px-3">
						<div class="w-full">
							<div class="relative mb-8">
								<h2 class="pb-2.5 md:text-5xl text-3xl   max-w-full font-extrabold text-left">Who we are</h2>
							</div>
							<p class=" !leading-[25.6px] text-sm text-gray-500 md:max-w-[570px] lg:text-base ">
								Legalpreneur Consulting is a full service law firm located in Nigeria. 
								We are adapted to provide uniquely innovative solutions to clients and uncover the opportunities in the changing landscape. We provide the legal advice you need for the fast-changing and inter-connected world. We work closely with our clients, both Nigerian and international to provide specialist legal advice fuelled by a practical understanding of clients needs and the regulatory landscapes.
                                 
							</p>
							<div class="relative flex flex-col sm:flex-row sm:space-x-4">
								<router-link to="#footer" class="text-primary mt-11 font-semibold flex items-center">
									Contact us for a free consultation! 
									<i class="las la-arrow-right text-xl ml-4"></i>
								</router-link>
							</div>
						</div>
					</div>

					<div class="w-full md:w-1/2 pb-12 md:p-0">
						<img src="@/assets/images/about.png" class="md:ml-auto">
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>


h2:before{
    content: "";
    position: absolute;
    width: 50px;
    height: 1px;
    bottom: 0;
    border-bottom: 4.5px solid #009CE3;
}
</style>