<template>
	<div>
		<p>Link: <a href="https://www.w3schools.com/cssref/css3_pr_caret-color.asp" target="_blank">https://www.w3schools.com/cssref/css3_pr_caret-color.asp</a>
		</p>

		<div class="wrapper">
			<input value="Default caret color">
			<input class="example1" value="Custom caret color">
			<input class="example2" value="Transparent caret color">
		</div>

	</div>
</template>

<script>

	export default {
		name: "caretColor",
	};
</script>

<style lang="scss" scoped>
	p {
		text-align: center;
		margin: 30px 0;
	}
	input {
		display: block;
		width: 100%;
		border: 1px solid #ddd;
		font-size: 2rem;
		padding: 1rem;
		box-sizing: border-box;
		margin-bottom: 40px;
	}
	.wrapper {
		padding: 30px;
	}
	.example1 {
		caret-color: red;
	}
	.example2 {
		caret-color: transparent;
	}
</style>