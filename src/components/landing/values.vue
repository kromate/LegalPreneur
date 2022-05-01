<template>
	<div class="container mx-auto md:py-28 py-10 px-4" id="values">
	
		<section class="md:py-28 py-12 bg-white md:px-0 " >
			<div class="container items-center  mx-auto">
				<div class="flex flex-wrap-reverse items-center sm:-mx-3">
					<div class="w-full md:w-1/2 md:px-3">
						<div class="w-full">
							<div class="relative mb-8">
								<h2 class="pb-2.5 md:text-5xl text-3xl   max-w-full font-extrabold text-left">Our Values</h2>
							</div>
							<p class=" !leading-[25.6px] text-sm text-gray-500 md:max-w-[570px] lg:text-base ">
								We operate in accordance with our principles of superior quality, due diligence and integrity with an aim to provide the highest possible standard of legal service.
							</p>
							<div class="flex flex-col mt-5">
								<h4 class="text-primary text-3xl font-semibold">We thrive on </h4>
								<div class="flex items-center mt-4">
									<i class="las la-check bg-primary text-white p-1 mr-4 font-bold rounded-full"></i>
									<span class="text-sm">Sustainable growth-driven legal solutions</span>
								</div>
								<div class="flex items-center mt-4">
									<i class="las la-check bg-primary text-white p-1 mr-4 font-bold rounded-full"></i>
									<span class="text-sm">Innovative thinking</span>
								</div>
								<div class="flex items-center mt-4">
									<i class="las la-check bg-primary text-white p-1 mr-4 font-bold rounded-full"></i>
									<span class="text-sm">Team efficiency with Firm management technology solution </span>
								</div>
								<div class="flex items-center mt-4">
									<i class="las la-check bg-primary text-white p-1 mr-4 font-bold rounded-full"></i>
									<span class="text-sm">Excellent client relationship</span>
								</div>
								<div class="flex items-center mt-4">
									<i class="las la-check bg-primary text-white p-1 mr-4 font-bold rounded-full"></i>
									<span class="text-sm">24/7 Client support </span>
								</div>
							</div>
						</div>
					</div>

					<div class="w-full md:w-1/2 pb-12 md:p-0">
						<img src="@/assets/images/values.png" class="md:ml-auto">
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