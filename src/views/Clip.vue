<template>
	<div>

		<p>Link: <a href="https://www.w3schools.com/cssref/pr_pos_clip.asp" target="_blank">https://www.w3schools.com/cssref/pr_pos_clip.asp</a>

		<p>Ustawienie clip: auto; lub brak tej właściwości nie powoduje żadnego efektu, clip: rect(top, left, bottom, right)
			pozwala na przycięcie elementu, właściwość nie działa z nadanym overflow: visible;. Przycięcie clip nie wpływa
			wewnętrzy rozmiar elementu, osięgnięcie tego samego efektu z użyciem width spowoduje zmianę ułożenia wnętrza.
			Wymagane jest nadanie: position: abosulte/fixed.</p>

		<div class="wrapper">
			<div class="clip" :style="{clip: rect}">Play with different clip values for this yellow DIV element.</div>
		</div>

		<p>clip:rect(<input :value="top" @input="setRule($event, 1)" type="number" min="0" max="999" step="1">px,
			<input :value="right" @input="setRule($event, 2)" type="number" min="0" max="999" step="1">px,
			<input :value="bottom" @input="setRule($event, 3)" type="number" min="0" max="999" step="1">px,
			<input :value="left" @input="setRule($event, 4)" type="number" min="0" max="999" step="1">px);</p>

	</div>
</template>

<script>
	export default {
		name: "Clip",
		data() {
			return {
				top: 0,
				right: 140,
				bottom: 64,
				left: 0,
			}
		},
		methods: {
			setRule($event, argsNo) {
				switch (argsNo) {
					case 1:
						this.top = $event.target.value;
						break;
					case 2:
						this.right = $event.target.value;
						break;
					case 3:
						this.bottom = $event.target.value;
						break;
					case 4:
						this.left = $event.target.value;
						break;
				}
			}
		},
		computed: {
			rect() {
				return `rect(${this.top}px, ${this.right}px, ${this.bottom}px, ${this.left}px)`;
			}
		}
	};
</script>

<style lang="scss" scoped>
	p {
		text-align: center;
		margin: 30px 0;
	}

	.wrapper {
		height: 66px;
		margin: 40px;
		position: relative;
		border: 1px solid black;
		box-sizing: border-box;
	}

	.clip {
		background: yellow;
		width: 140px;
		position: absolute;
	}
</style>