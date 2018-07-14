import Vue from "vue";
import Router from "vue-router";
import PositionSticky from "./views/PositionSticky.vue";
import ObjectFit from "./views/ObjectFit.vue";
import BoxDecorationBreak from "./views/BoxDecorationBreak.vue";
import CaretColor from "./views/CaretColor.vue";

Vue.use(Router);

export const menu = [
	{
		path: "/position-sticky",
		name: "position-sticky",
		component: PositionSticky,
		title: "position: sticky",
		desc: "Pozwala na uczepienie się elementu wraz ze scrollowaniem",
	},
	{
		path: "/object-fit",
		name: "object-fit",
		component: ObjectFit,
		title: "object-fit",
		desc: "Pozwala na responsywne skalowanie obrazków w <img>",
	},
	{
		path: "/box-decoration-break",
		name: "box-decoration-break",
		component: BoxDecorationBreak,
		title: "box-decoration-break",
		desc: "Pozwala ustawić dziedziczenie odstępów, tła, obramowania, cieniów, obrysu dla elementów inlinowych wieloniowych",
	},
	{
		path: "/caret-color",
		name: "caret-color",
		component: CaretColor,
		title: "caret-color",
		desc: "Pozwala ustawić kolor karetki",
	},
];

export default new Router({
	routes: menu.map(menuItem => ({
		path: menuItem.path,
		name: menuItem.name,
		component: menuItem.component,
	}))
});
