<template>
	<div id="app">
		<nav id="nav">
			<router-link
					v-for="menuItem in menu"
					:to="menuItem.path">
				<p class="title">
					{{menuItem.title}}
				</p>
				<div class="desc">
					{{menuItem.desc}}
				</div>
			</router-link>
		</nav>
		<section id="content">
			<router-view/>
		</section>
	</div>
</template>

<script>
	import {menu} from "./router";

	export default {
		name: "app",
		data() {
			return {
				menu,
			}
		},
	}
</script>

<style lang="scss">
	#app {
		font-family: Arial, sans-serif;
		min-height: 100vh;
		width: calc(100% - 230px);
		margin-left: auto;
		margin-right: 0;
	}
	#nav {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 230px;
		overflow-x: hidden;
		overflow-y: auto;
		background: #efefef;
		a {
			display: block;
			padding: 10px;
			color: #2d2d2d;
			text-decoration: none;
			border-bottom: 1px solid #cacaca;
			font-size: 0.8rem;
			line-height: 1.1rem;
			transition-duration: 0.3s;
			&:hover {
				background: #e5e5e5;
			}
			&.router-link-active {
				background: #d8d8d8;
				box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
			}
			.title {
				font-weight: bold;
				text-transform: uppercase;
			}
			.desc {
				margin-top: 5px;
				font-style: italic;
			}
		}
	}
	#content {
		will-change: color;
	}
</style>
