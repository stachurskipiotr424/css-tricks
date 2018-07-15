<template>
	<div>

		<p>Kolor tła nie ma tu znaczenia.</p>

		<syntax-highlighter>
			.element {
				display: flex;
				width: 100%;
				align-items: center;
			}
			.element:after, .element:before {
				content: '';
				flex-grow: 1;
				//style dla tła i wysokości linii
			}
		</syntax-highlighter>

		<div class="wrapper">

			<h2 class="ex left">Some text</h2>
			<h2 class="ex center">Lorem ipsum dolor sit amet</h2>
			<h2 class="ex right" contenteditable="true">Some editable text</h2>

		</div>

	</div>
</template>

<script>
	import SyntaxHighlighter from "@/components/SyntaxHighlighter.vue";

	export default {
		name: "headingMiddleBorder",
		components: {
			SyntaxHighlighter,
		},
	};
</script>

<style lang="scss" scoped>
	.wrapper {
		padding: 50px;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 2rem;
		background: linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	}

	.ex {
		margin-bottom: 70px;
		display: flex;
		width: 100%;
		align-items: center;
		&:after, &:before {
			content: '';
			flex-grow: 1;
			height: 2px;
			background: black;
		}
		&.left {
			&:after {
				margin-left: 15px;
			}
			&:before {
				flex-grow: 0;
			}
		}
		&.center {
			&:after {
				margin-left: 15px;
			}
			&:before {
				margin-right: 15px;
			}
		}
		&.right {
			&:after {
				flex-grow: 0;
			}
			&:before {
				margin-right: 15px;
			}
		}
	}
	p {
		text-align: center;
		margin: 30px 0;
	}
</style>