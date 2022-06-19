<template>
	<div v-if="show">
		<transition name="slide" appear :duration="500">
			<div class="bg transition-all">
				<transition appear @before-enter="beforeEnter" @leave="onLeave" @enter="enter">
					<div class="bg-white md:max-w-xl max-w-[94%] p-6">
						<p>
							We support our clients in their most strategically important and complex technology projects and transactions. We advise on the full range of legal, regulatory and commercial issues relating to all aspects of business technology and digital transformation.
							Our team’s expertise includes technology transactions and corporate tech projects. Our practical approach enables us to develop innovative solutions to the most challenging and strategically significant technology issues facing our clients.
						</p>
					</div>
				</transition>
			</div>
		</transition>
	</div>
</template>

<script setup>
import gsap from 'gsap'
import { ref } from 'vue'


const show = ref(true)
		const timeline = gsap.timeline({defaults:{duration:0.5}})
		const beforeEnter = (el) => {
			  el.style.opacity = 0
			el.style.transform = 'scale(0.5)'
		}
		const enter = (el, done) => {
			timeline.to(el, {
				opacity: 1,
				y: 0,
				scale:1,
                delay:0.5,
				duration: 0.5,
				onComplete: done,
			},)
		}
		const onLeave=(el, done)=> {
			
			gsap.to(el, {
				opacity: 0,
				y: 0,
				scale:0.1,
				duration: 0.35,
				onComplete: done,
			},)
		}

setTimeout(()=>{

})

</script>

<style scoped>
.bg {
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
	width: 100vw;
	max-width: 100vw;
	min-height: 100%;
	z-index: 10;
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