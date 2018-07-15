<template>
	<div>
		<p>Link: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode</a>
		</p>

		<div class="grid">

			<div class="grid-item">
				<h2 class="title">mix-blend-mode: multiply; + color: white;</h2>
				<h4 class="subtitle">Pozwala na zrobienie przezroczystego tekstu na czarnym tle</h4>
				<div class="ex multiply">
					<div class="txt">
						<p>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
			</div>

			<div class="grid-item">
				<h2 class="title">mix-blend-mode: screen; + color: black</h2>
				<h4 class="subtitle">Pozwala na zrobienie przezroczystego tekstu na białym tle</h4>
				<div class="ex screen">
					<div class="txt">
						<p>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
			</div>

		</div>

		<p>Ustawień jest cała masa, można osiągnąć efekty np. mieszkania kolorów, kontrastu...</p>
		<ul class="all-options">
			<li>mix-blend-mode: multiply;</li>
			<li>mix-blend-mode: screen;</li>
			<li>mix-blend-mode: overlay;</li>
			<li>mix-blend-mode: darken;</li>
			<li>mix-blend-mode: lighten;</li>
			<li>mix-blend-mode: color-dodge;</li>
			<li>mix-blend-mode: color-burn;</li>
			<li>mix-blend-mode: hard-light;</li>
			<li>mix-blend-mode: soft-light;</li>
			<li>mix-blend-mode: difference;</li>
			<li>mix-blend-mode: exclusion;</li>
			<li>mix-blend-mode: hue;</li>
			<li>mix-blend-mode: saturation;</li>
			<li>mix-blend-mode: color;</li>
			<li>mix-blend-mode: luminosity;</li>
		</ul>

	</div>
</template>

<script>
	export default {
		name: "mixBlendMode",
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
		margin-bottom: 10px;
		font-size: 1.1rem;
		line-height: 1.2;
	}

	.ex {
		background: url('https://gogobanana.net/images/pictures/7.jpg') no-repeat center / cover;
		padding: 50px 15px;
		font-weight: bold;
		text-transform: uppercase;
		font-size: 3rem;
		margin-top: 15px;
	}

	.txt {
		padding: 10px;
		p {
			margin: 0;
		}
	}

	.multiply .txt {
		background: black;
		color: white;
		mix-blend-mode: multiply;
	}

	.screen .txt {
		background: white;
		color: black;
		mix-blend-mode: screen;
	}

	p {
		text-align: center;
		margin: 30px 0;
	}
	.all-options{
		display: flex;
		flex-wrap: wrap;
		padding: 0 50px;
		width: 100%;
		box-sizing: border-box;
		li {
			border: 1px solid black;
			padding: 5px;
			margin: 5px;
		}
	}
</style>