<template>
	<div class="container mx-auto md:py-28 py-10 px-4" id="exp">
		<div class="relative">
			<h2
				class="pb-2.5 md:text-5xl text-3xl px-3 max-w-full font-extrabold text-center"
			>
				Expertise
			</h2>
		</div>

		<section class="md:py-28 py-12 bg-white md:px-0">
			<div
				class="container items-center mx-auto flex justify-center flex-wrap gap-20"
			>
				<div
					v-for="n in cards"
					:key="n.name"
					class="w-[235px] h-[200px] shadow-block border-primary border-t-[5px] px-5 rounded-b-md flex flex-col justify-center items-center"
				>
					<i
						:class="[
							`la-${n.icon}`,
							'las bg-primary text-3xl text-white rounded-full h-16 w-16 flex items-center justify-center',
						]"
					></i>
					<p class="font-bold text-dark mt-4 text-center text-sm">
						{{ n.name }}
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { cards } from '../../composables/modal';
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
