<template>
	<div>
		<p>Link: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode</a></p>

		<div class="grid">

			<div class="grid-item">
				<h2 class="title">writing-mode: unset (domyslne)</h2>
				<div class="ex">
					<p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
					<p>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
					<p>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
					<p>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
				</div>
			</div>

			<div class="grid-item">
				<h2 class="title">writing-mode: horizontal-tb</h2>
				<div class="ex horizontal-tb">
					<p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
					<p>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
					<p>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
					<p>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
				</div>
			</div>

			<div class="grid-item">
				<h2 class="title">writing-mode: vertical-rl</h2>
				<div class="ex vertical-rl">
					<p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
					<p>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
					<p>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
					<p>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
				</div>
			</div>

			<div class="grid-item">
				<h2 class="title">writing-mode: vertical-lr</h2>
				<div class="ex vertical-lr">
					<p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
					<p>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
					<p>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
					<p>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia tempor leo, vitae accumsan erat ultricies sit amet. Ut elementum enim lorem, nec dapibus erat efficitur et.</p>
				</div>
			</div>


		</div>

	</div>
</template>

<script>
	export default {
		name: "writingMode",
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
		width: 100%;
		overflow: auto;
		p{
			margin: 0 0 15px 0; text-align: left;
		}
		&.horizontal-tb {
			writing-mode: horizontal-tb;
		}
		&.vertical-rl {
			writing-mode: vertical-rl;
		}
		&.vertical-lr {
			writing-mode: vertical-lr;
		}
	}
	p {
		text-align: center;
		margin: 30px 0;
	}
</style>