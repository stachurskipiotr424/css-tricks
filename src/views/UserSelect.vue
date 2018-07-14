<template>
	<div>
		<p>Link: <a href="https://www.w3schools.com/cssref/css3_pr_user-select.asp" target="_blank">https://www.w3schools.com/cssref/css3_pr_user-select.asp</a></p>

		<div class="grid">

			<div class="grid-item">
				<h2 class="title">user-select: auto (domyslne)</h2>
				<div class="ex auto">The user-select property specifies whether the text of an element can be selected.</div>
			</div>

			<div class="grid-item">
				<h2 class="title">user-select: none (nie pozwala na zaznaczenie tekstu)</h2>
				<div class="ex none">The user-select property specifies whether the text of an element can be selected.</div>
			</div>

			<div class="grid-item">
				<h2 class="title">user-select: all (zaznacza całość)</h2>
				<div class="ex all">The user-select property specifies whether the text of an element can be selected.</div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		name: "userSelect",
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
		line-height: 1.2;
	}
	.ex {
		border: 1px solid black;
		padding: 10px;
		box-sizing: border-box;
	}
	.none {
		user-select:none;
	}
	.all {
		user-select:all;
	}
	p {
		text-align: center;
		margin: 30px 0;
	}
</style>