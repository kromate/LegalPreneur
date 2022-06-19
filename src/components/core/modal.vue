<template>
	<div v-if="show">
		<transition
			appear
			@before-enter="bgBeforeEnter"
			@enter="bgEnter"
			@leave="bgLeave"
		>
			<div class="bg" @click="close($el)">
				<div
					class="bg-white border-2 border-primary shadow md:max-w-xl max-w-[94%] px-6 py-12 modal relative"
				>
					<i
						class="las la-times absolute border-2 rounded-full p-1 border-primary cursor-pointer right-4 top-4"
						@click="close($el)"
					></i>

					<h1 class="text-center text-xl font-semibold mb-4">
						{{ modalDetails.name }}
					</h1>
					<p class="text-sm md:text-md text-center">
						{{ modalDetails.details }}
					</p>
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup>
import gsap from 'gsap';
import { ref } from 'vue';
import { show, modalDetails } from '@/composables/modal';

const timeline = gsap.timeline();
const bgBeforeEnter = (el) => {
	el.style.opacity = 0;
};
const bgEnter = (el, done) => {
	timeline
		.to(el, {
			opacity: 1,
			duration: 0.2,
		})
		.fromTo(
			'.modal',
			{
				opacity: 0,
				y: -200,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.2,
				onComplete: done,
			}
		);
};

const bgLeave = () => {
	console.log('leaving');
};

const close = (el) => {
	timeline
		.to('.modal', {
			opacity: 0,
			y: -200,
			duration: 0.2,
		})
		.to('.bg', { opacity: 0, duration: 0.1 })
		.then(() => {
			console.log('ggmmmmm');
			show.value = false;
		});
	// timeline.reverse().then(() => {
	// 	show.value = false;
	// 	modalDetails.value = '';
	// });
};
</script>

<style scoped>
.bg {
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.7);
	width: 100vw;
	max-width: 100vw;
	min-height: 100%;
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
	transform: scale(0);
	opacity: 0;
}
</style>
