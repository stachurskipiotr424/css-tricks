<template>
	<div class="grid-item">
		<h2>{{title}}:</h2>
		<div class="ov">
			<div class="wrapper">
				<img
						:style="{height: height + 'px', width: width + 'px'}"
						:class="cssClass"
						src="https://www.w3schools.com/css/paris.jpg">
			</div>
		</div>
		<div class="tools">
			<div class="tool width">Szerokość:
				<button @click='add("width")'>+</button>
				<button @click='subtract("width")'>-</button>
			</div>
			<div class="tool height">Wysokość:
				<button @click='add("height")'>+</button>
				<button @click='subtract("height")'>-</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'imageCover',
		props: {
			title: {
				type: String,
				required: true,
			},
			cssClass: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				width: 300,
				height: 300,
			}
		},
		methods: {
			add(prop) {
				this[prop] += 20;
			},
			subtract(prop) {
				this[prop] -= 20;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.grid-item {
		border: 1px solid #a6a6a6;
		padding: 20px;
		box-sizing: border-box;
		text-align: center;
	}
	h2 {
		text-transform: uppercase;
		font-weight: bold;
		margin-bottom: 20px;
		font-size: 1.1rem;
	}
	.ov {
		height: 440px;
		width: 440px;
		overflow: scroll;
		margin: 0 auto;
	}
	img {
		display: inline-block;
		vertical-align: top;
	}
	.wrapper {
		display: inline-block;
		border: 1px dashed #2d2d2d;
	}
	.tools {
		display: flex;
		justify-content: center;
		width: 100%;
		align-items: center;
		border: 1px solid;
		padding: 10px;
		margin-top: 20px;
		box-sizing: border-box;
	}
	.tool {
		margin: 0 20px;
	}
	button {
		margin: 0 2px;
		cursor: pointer;
	}
	.fill {
		object-fit: fill;
	}
	.contain {
		object-fit: contain;
	}
	.cover {
		object-fit: cover;
	}
	.scale-down {
		object-fit: scale-down;
	}
	.none {
		object-fit: none;
	}
</style>