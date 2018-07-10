<template>
	<div>

		<syntax-highlighter>
			.element {
				position: sticky;
				top/left/bottom/right: [value] -> wymagane
			}
		</syntax-highlighter>

		<div class="parent">
			<h2 class="title">Parent 1</h2>
			<div class="child">Zwykły element 1</div>
			<div class="child">Zwykły element 2</div>
			<div class="child sticky">Przyczepiony element 1</div>
			<div class="child">Zwykły element 3</div>
			<div class="child">Zwykły element 4</div>
			<div class="child sticky">Przyczepiony element 2</div>
			<div class="child">Zwykły element 5</div>
			<div class="child">Zwykły element 6</div>
			<div class="child">Zwykły element 7</div>
			<div class="child">Zwykły element 8</div>
		</div>

		<div class="parent">
			<h2 class="title">Parent 2</h2>
			<div class="child">Zwykły element 1</div>
			<div class="child">Zwykły element 2</div>
			<div class="child sticky bottom">Przyczepiony element 1 (do dołu ekranu)</div>
			<div class="child">Zwykły element 3</div>
			<div class="child">Zwykły element 4</div>
			<div class="child sticky">Przyczepiony element 2</div>
			<div class="child">Zwykły element 5</div>
			<div class="child">Zwykły element 6</div>
			<div class="child">Zwykły element 7</div>
			<div class="child">Zwykły element 8</div>
			<div class="child">Zwykły element 9</div>
			<div class="child">Zwykły element 10</div>
		</div>

	</div>
</template>

<script>
	import SyntaxHighlighter from "@/components/SyntaxHighlighter.vue";

	export default {
		name: "positionSticky",
		components: {
			SyntaxHighlighter
		},
	};
</script>

<style lang="scss" scoped>
	.parent {
		border: 1px solid #3d3d3d;
		padding: 20px;
		box-sizing: border-box;
		width: calc(100% - 60px);
		margin: 30px;
	}

	.child {
		background: #efefef;
		margin: 30px 0;
		height: 15vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 2rem;
		box-shadow: inset 0 0 2px black;
		width: 100%;
		box-sizing: border-box;
	}

	.sticky {
		position: sticky;
		top: 0;
		background: #a0a0a0;
		color: white;
		&.bottom {
			top: auto;
			bottom: 0;
		}
	}

	.title {
		text-align: center;
		font-size: 3rem;
		text-transform: uppercase;
	}
</style>