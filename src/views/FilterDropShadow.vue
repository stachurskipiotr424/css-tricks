<template>
	<div>
		<p>Link: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow</a>
		</p>

		<p>filter: drop-shadow(odchylenie-x, odchylenie-y, rozmycie, kolor)</p>

		<div class="grid">

			<div class="grid-item">
				<h2 class="title">filter: drop-shadow() dla svg</h2>
				<div class="ov">
					<img :style="{filter: rule}" src="https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg">
				</div>
			</div>

			<div class="grid-item">
				<h2 class="title">filter: drop-shadow() dla png z przezroczystością</h2>
				<div class="ov">
					<img :style="{filter: rule}" src="https://upload.wikimedia.org/wikipedia/en/d/db/Tibetan_mastiff_%28transparent_background%29.png"
							 alt="">
				</div>
			</div>

		</div>

		<div class="tool">
			<p>filter: drop-shadow(
				<input :value="offsetX" @input="setRule($event, 1)"/>
				<input :value="offsetY" @input="setRule($event, 2)"/>
				<input :value="blurSize" @input="setRule($event, 3)"/>
				<input :value="color" @input="setRule($event, 4)"/>)</p>
		</div>

	</div>
</template>

<script>
	export default {
		name: "filterDropShadow",
		data() {
			return {
				offsetX: '1rem',
				offsetY: '10px',
				blurSize: '2mm',
				color: 'red'
			}
		},
		methods: {
			setRule($event, attr) {
				switch (attr) {
					case 1:
						this.offsetX = $event.target.value;
						break;
					case 2:
						this.offsetY = $event.target.value;
						break;
					case 3:
						this.blurSize = $event.target.value;
						break;
					case 4:
						this.color = $event.target.value;
						break;
				}
			}
		},
		computed: {
			rule() {
				return `drop-shadow(${this.offsetX} ${this.offsetY} ${this.blurSize} ${this.color})`;
			}
		}
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

	.ov {
		will-change: color;
	}

	img {
		width: 70%;
		display: block;
		margin: 0 auto;
	}

	p {
		text-align: center;
		margin: 30px 0;
	}

	input {
		margin: 0 5px;
		width: 70px;
	}
</style>