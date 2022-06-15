<template>
	<div class="bg-dark px-4" id="footer">
		<!-- <div class="relative">
			<h2 class="pb-2.5 md:text-5xl text-3xl px-3  max-w-full font-extrabold text-center">About us</h2>
		</div> -->
		

		<section class="md:pt-28 pt-12 pb-0  md:px-0 text-white" >
			<div class="container items-center  mx-auto mb-20">
				<div class="flex flex-wrap items-center">
					<div class="w-full md:w-1/2 md:px-3">
						<div class="w-full">
							<div class="relative mb-5">
								<h2 class="pb-2.5 md:text-4xl text-3xl   max-w-full font-extrabold text-left">Contact us</h2>
							</div>

						
							<form action="">
								<div class="flex flex-col w-full mt-6">
									<label for="Phone" class="font-medium text-base text-litBlack mb-1"> Your name </label>
									<div class="flex items-center w-full">
										<input name="name" class="input w-full"	placeholder="Enter your name" v-model="detail.name"	required/>
									</div>
								</div>
								<div class="flex flex-col w-full mt-5">
									<label for="Phone" class="font-medium text-base text-litBlack mb-1"> Your email </label>
									<div class="flex items-center w-full">
										<input name="name" type="email" class="input w-full"	placeholder="Enter your email" v-model="detail.email"	required/>
									</div>
								</div>
								<div class="flex flex-col w-full mt-5">
									<label for="Phone" class="font-medium text-base text-litBlack mb-1"> Message </label>
									<div class="flex items-center w-full">
										<textarea rows="6" name="name" class="input w-full"	placeholder="Type here..." v-model="detail.name"	required/>
									</div>
								</div>

								<button class="btn mt-5">send</button>
							</form>
						
						</div>
					</div>

					<div class="w-full md:w-1/2 pb-12 md:p-0 mt-12 md:pl-12">
						<div class="md:ml-auto flex flex-col ">
							<h5 class="text-xl font-semibold">Contact info:</h5>
							<div class="flex items-center mt-4">
								<i class="las la-map-marker-alt text-primary text-2xl mr-3"></i>
								<span class="text-sm">Lagos, Nigeria</span>
							</div>
							<div class="flex items-center mt-4">
								<i class="las la-phone text-primary text-2xl mr-3"></i>
								<span class="text-sm">+234 812 345 6786</span>
							</div>
							<div class="flex items-center mt-4">
								<i class="las la-envelope text-primary text-2xl mr-3"></i>
								<span class="text-sm">contact@legalprenuerconsulting.com</span>
							</div>
						</div>

						<div class="md:ml-auto flex flex-col mt-7">
							<h5 class="text-xl font-semibold">Follow us:</h5>
							<div class="flex items-center mt-4 gap-5">
								<a href="#">
									<i class="lab la-facebook text-white bg-primary w-8 h-8 text-2xl rounded-lg flex justify-center items-center"></i>
								</a>
							
								<a href="#">
									<i class="lab la-twitter text-white bg-primary w-8 h-8 text-2xl rounded-lg flex justify-center items-center"></i>
								</a>
							
								<a href="#">
									<i class="lab la-linkedin text-white bg-primary w-8 h-8 text-2xl rounded-lg flex justify-center items-center"></i>
								</a>
							
								<a href="#">
									<i class="lab la-instagram text-white bg-primary w-8 h-8 text-2xl rounded-lg flex justify-center items-center"></i>
								</a>
							
							

							</div>
						
						</div>
					</div>
				</div>
			</div>

			<div class="border-t -mx-4">
				<div class="container mx-auto px-4 md:px-2 p-10 flex justify-center items-center flex-wrap">
					<p class="font-medium text-sm">© 2022 Legalpreneur Attorneys & Consulting. All rights reserved</p>

					<!-- <div class="flex flex-col md:flex-row md:items-center justify-start items-start mt-3">
						<p>Powered by</p>
						<img src="../../assets/images/powered.svg" alt="powered by" class="bg-white px-2.5 py-1 md:ml-9 mt-2">
					</div> -->
				</div>
			
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const detail = {
	name: ref('').value,
	email:ref('').value,
	message:ref('').value
}
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