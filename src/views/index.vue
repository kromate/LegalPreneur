<template>
	<metainfo>
		<template v-slot:title="{ content }">{{ content ? `${content}` : `SITE_NAME` }}</template>
	</metainfo>
	<default-layout>
		<nav-bar/>
		<cta/>
		<about-us/>
		<choose-us/>
		<values/>
		<partners/>
		<expertise/>
		<footerBar/>
	</default-layout>
</template>

<script setup lang="ts">
import defaultLayout from '@/layouts/defaultLayout.vue'
import NavBar from '@/components/landing/NavBar.vue'
import cta from '@/components/landing/cta.vue'
import aboutUs from '@/components/landing/aboutUs.vue'
import chooseUs from '@/components/landing/chooseUs.vue'
import values from '@/components/landing/values.vue'
import partners from '@/components/landing/partners.vue'
import expertise from '@/components/landing/exp.vue'
import footerBar from '@/components/landing/footer.vue'

import { useMeta } from 'vue-meta'

useMeta({
	title: 'Legalprenuer Consulting',
	htmlAttrs: { lang: 'en', amp: true }
})
</script>

<style scoped>

</style>