<template>
	<div>
		<p>Link: <a href="https://www.w3schools.com/css/css3_object-fit.asp" target="_blank">https://www.w3schools.com/css/css3_object-fit.asp</a></p>

	<div class="grid">

		<image-cover
				v-for="option in options"
				:title="option.title"
				:css-class="option.cssClass"/>

	</div>

	</div>
</template>

<script>
	import ImageCover from "@/components/ImageCover.vue";

	export default {
		name: "objectfitCover",
		data() {
			return {
				options: [
					{
						title: 'bez object-fit',
						cssClass: null,
					},
					{
						title: 'object-fit: fill (domyślne)',
						cssClass: 'fill',
					},
					{
						title: 'object-fit: contain',
						cssClass: 'contain',
					},
					{
						title: 'object-fit: cover',
						cssClass: 'cover',
					},
					{
						title: 'object-fit: scale-down',
						cssClass: 'scale-down',
					},
					{
						title: 'object-fit: none',
						cssClass: 'none',
					},
				]
			}
		},
		components: {
			ImageCover,
		},
	};
</script>

<style lang="scss" scoped>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 40px;
		padding: 50px;
		box-sizing: border-box;
	}
	p {
		text-align: center;
		margin: 30px 0;
	}
</style>