<template>
	<div v-if="show">
		<transition appear @before-enter="bgBeforeEnter" @enter="bgEnter">
			<div class="bg" @click="close($el)">
				<div
					class="bg-white border-2 border-primary shadow md:max-w-xl max-w-[94%] p-4 py-8 modal"
				>
					<h1 class="text-center text-xl font-semibold mb-4">Technology Law</h1>
					<p class="text-sm md:text-md text-center">
						We support our clients in their most strategically important and
						complex technology projects and transactions. We advise on the full
						range of legal, regulatory and commercial issues relating to all
						aspects of business technology and digital transformation. Our
						team’s expertise includes technology transactions and corporate tech
						projects. Our practical approach enables us to develop innovative
						solutions to the most challenging and strategically significant
						technology issues facing our clients.
					</p>
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup>
import gsap from 'gsap';
import { ref } from 'vue';

const show = ref(true);
const timeline = gsap.timeline();
const bgBeforeEnter = (el) => {
	el.style.opacity = 0;
};
const modalBeforeEnter = (el) => {
	el.style.opacity = 0;
	el.style.transform = 'translateY(-500px)';
};
const bgEnter = (el, done) => {
	timeline
		.to(el, {
			opacity: 1,
			duration: 0.35,
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
				duration: 0.35,
				onComplete: done,
			}
		);
};
const modalEnter = (el, done) => {
	timeline.to(el, {
		opacity: 1,
		y: 0,
		scale: 1,
		duration: 1,
		onComplete: done,
	});
};

const close = (el) => {
	timeline.reverse().then(() => {
		el.style.display = 'none';
	});
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
	/* overflow: hidden; */
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
