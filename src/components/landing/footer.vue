<template>
	<div class="bg-dark px-4" id="footer">

		<section class="md:pt-28 pt-12 pb-0 md:px-0 text-white">
			<div class="container items-center mx-auto mb-20">
				<div class="flex flex-wrap items-center">
					<div class="w-full md:w-1/2 md:px-3">
						<div class="w-full">
							<div class="relative mb-5">
								<h2
									class="pb-2.5 md:text-4xl text-3xl max-w-full font-extrabold text-left"
								>
									Contact us
								</h2>
							</div>

							<form id="form" ref="form">
								<div class="flex flex-col w-full mt-6">
									<label
										for="Phone"
										class="font-medium text-base text-litBlack mb-1"
									>Your name</label
									>
									<div class="flex items-center w-full">
										<input
											name="Name"
											v-model="nameRef"
											id="name"
											class="input w-full"
											placeholder="Enter your name"
											required
										/>
									</div>
								</div>
								<div class="flex flex-col w-full mt-5">
									<label
										for="Phone"
										class="font-medium text-base text-litBlack mb-1"
									>Your email</label
									>
									<div class="flex items-center w-full">
										<input
											v-model="emailRef"
											id="email"
											name="Email"
											type="email"
											class="input w-full"
											placeholder="Enter your email"
											required
										/>
									</div>
								</div>
								<div class="flex flex-col w-full mt-5">
									<label
										for="Phone"
										class="font-medium text-base text-litBlack mb-1"
									>Message</label
									>
									<div class="flex items-center w-full">
										<textarea
											v-model="messageRef"
											rows="6"
											name="Message"
											id="Message"
											class="input w-full"
											placeholder="Type here..."
											required
										/>
									</div>
								</div>

								<button class="btn mt-5 disabled:!bg-slate-500" id="sumbitBtn">
									send
								</button>
							</form>
						</div>
					</div>

					<div class="w-full md:w-1/2 pb-12 md:p-0 mt-12 md:pl-12">
						<div class="md:ml-auto flex flex-col">
							<h5 class="text-xl font-semibold">Contact info:</h5>
							<!-- <div class="flex items-center mt-4">
								<i class="las la-map-marker-alt text-primary text-2xl mr-3"></i>
								<span class="text-sm">3, Rabat way, Wuse, Abuja, FCT</span>
							</div> -->
							<div class="flex items-center mt-4">
								<i class="las la-phone text-primary text-2xl mr-3"></i>
								<span class="text-sm">+234 815 414 1095</span>
							</div>
							<div class="flex items-center mt-4">
								<i class="las la-envelope text-primary text-2xl mr-3"></i>
								<a href="mailto:contact@legalpreneurconsulting.com" target="_blank" class="text-sm">contact@legalpreneurconsulting.com</a>
							</div>
						</div>

						<div class="md:ml-auto flex flex-col mt-7">
							<h5 class="text-xl font-semibold">Follow us:</h5>
							<div class="flex items-center mt-4 gap-5">
								<a target="_blank" href="https://twitter.com/LegalpreneurLP?t=MFxbCFkaUnlUl8G3shel2A&s=09">
									<i
										class="lab la-twitter text-white bg-primary w-8 h-8 text-2xl rounded-lg flex justify-center items-center"
									></i>
								</a>

								<a target="_blank" href="https://www.linkedin.com/company/legalpreneurconsulting">
									<i
										class="lab la-linkedin text-white bg-primary w-8 h-8 text-2xl rounded-lg flex justify-center items-center"
									></i>
								</a>

								<a target="_blank" href="https://instagram.com/legalpreneurlp?igshid=YmMyMTA2M2Y=">
									<i
										class="lab la-instagram text-white bg-primary w-8 h-8 text-2xl rounded-lg flex justify-center items-center"
									></i>
								</a>
								<a target="_blank" href="#">
									<i
										class="lab la-facebook text-white bg-primary w-8 h-8 text-2xl rounded-lg flex justify-center items-center"
									></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="border-t -mx-4">
				<div
					class="container mx-auto px-4 md:px-2 p-10 flex justify-between items-center flex-wrap gap-6"
				>
					<p class="font-medium text-sm">
						© 2022 Legalpreneur Attorneys & Consulting. All rights reserved
					</p>

					<div class="flex items-center gap-4 font-medium text-sm">
						<a href="https://drive.google.com/file/d/1pSm3g_eHdlZQa5llDQBmYthemPmNQJnE/view" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
						<a href="https://drive.google.com/file/d/1bZllGe3luRQeb-Q_G3Yfa3RUBY0v7xw6/view?usp=sharing" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
					</div>

				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const nameRef = ref('')
const emailRef = ref('')
const messageRef = ref('')

const clearBox = () => {
	nameRef.value = ''
	emailRef.value = ''
	messageRef.value = ''
}

onMounted(() => {
	const form = document.querySelector('#form') as HTMLFormElement
	const btn = document.querySelector('#sumbitBtn') as HTMLButtonElement
	const scriptURL =
		'https://script.google.com/macros/s/AKfycbwXC8KitbzvW-wAj9c_8A-3qmE3ApgLC84_UhkXijL_k8jI3v49-XwiMHt_EUReRB7e/exec'

	form?.addEventListener('submit', (e) => {
		e.preventDefault()
		if (btn != null) {
			btn.innerHTML = 'Sending...'
			btn.disabled = true
		}

		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then((response) => {
				clearBox()
				btn.innerHTML = 'send'
				btn.disabled = false
				alert(`Message Sent Succesfully, ${response}`)
			})
			.catch((error) => {
				alert(`An error occurred. Error: ${error}`)
			})
	})
})
</script>

<style scoped>
h2:before {
	content: '';
	position: absolute;
	width: 50px;
	height: 1px;
	bottom: 0;
	border-bottom: 4.5px solid #009ce3;
}
</style>
