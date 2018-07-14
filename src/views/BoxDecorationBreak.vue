<template>
	<div>
		<p>Link: <a href="https://www.w3schools.com/cssref/css3_pr_box-decoration-break.asp" target="_blank">https://www.w3schools.com/cssref/css3_pr_box-decoration-break.asp</a></p>

		<div class="grid">

			<div class="grid-item">
				<h2 class="title">box-decoration-break: clone:</h2>
				<span
						:class="{
						border: borderClass,
						outline: outlineClass,
						boxShadow: boxShadowClass,
						background: backgroundClass,
						borderRadius: borderRadiusClass,
						margin: marginClass,
						padding: paddingClass,
						}"
						class="ex clone">
					CSS<br>is<br>easy<br>to learn
				</span>
			</div>

			<div class="grid-item">
				<h2 class="title">box-decoration-break: slice: (domyślne)</h2>
				<span
						:class="{
						border: borderClass,
						outline: outlineClass,
						boxShadow: boxShadowClass,
						background: backgroundClass,
						borderRadius: borderRadiusClass,
						margin: marginClass,
						padding: paddingClass,
						}"
						class="ex slice">
					CSS<br>is<br>easy<br>to learn
				</span>
			</div>

		</div>

		<div class="tools">
			<button @click="togglePadding">toggle padding</button>
			<button @click="toggleMargin">toggle margin</button>
			<button @click="toggleBorder">toggle border</button>
			<button @click="toggleOutline">toggle outline</button>
			<button @click="toggleBoxShadow">toggle box-shadow</button>
			<button @click="toggleBackground">toggle background</button>
			<button @click="toggleBorderRadius">toggle border radius</button>
		</div>

	</div>
</template>

<script>
	export default {
		name: "boxDecorationBreak",
		data() {
			return {
				borderClass: false,
				outlineClass: false,
				boxShadowClass: false,
				backgroundClass: false,
				borderRadiusClass: false,
				paddingClass: false,
				marginClass: false,
			}
		},
		methods: {
			toggleBorder() {
				this.borderClass = !this.borderClass;
			},
			toggleOutline() {
				this.outlineClass = !this.outlineClass;
			},
			toggleBoxShadow() {
				this.boxShadowClass = !this.boxShadowClass;
			},
			toggleBackground() {
				this.backgroundClass = !this.backgroundClass;
			},
			toggleBorderRadius() {
				this.borderRadiusClass = !this.borderRadiusClass;
			},
			togglePadding() {
				this.paddingClass = !this.paddingClass;
			},
			toggleMargin() {
				this.marginClass = !this.marginClass;
			}
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
	.grid-item {
		border: 1px solid #a6a6a6;
		padding: 20px;
		box-sizing: border-box;
	}
	.title {
		text-transform: uppercase;
		font-weight: bold;
		margin-bottom: 20px;
		font-size: 1.1rem;
	}
	.ex {
		font-size: 24px;
		line-height: 2;
	}
	.border {
		border: 5px solid red;
	}
	.outline{
		outline: 5px solid green;
	}
	.boxShadow{
		box-shadow: 0 0 10px 5px black;
	}
	.background{
		background: yellow;
	}
	.borderRadius {
		border-radius: 15px;
	}
	.margin {
		margin: 0 1em;
	}
	.padding {
		padding: 0 1em;
	}
	.clone {
		box-decoration-break: clone;
	}
	.slice {
		box-decoration-break: slice;
	}
	p {
		text-align: center;
		margin: 30px 0;
	}
	.tools {
		text-align: center;
		padding: 0 30px;
	}
	button {
		margin: 10px;
		cursor: pointer;
	}
</style>