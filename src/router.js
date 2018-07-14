import Vue from "vue";
import Router from "vue-router";
import PositionSticky from "./views/PositionSticky.vue";
import ObjectFit from "./views/ObjectFit.vue";
import BoxDecorationBreak from "./views/BoxDecorationBreak.vue";
import CaretColor from "./views/CaretColor.vue";
import Clip from "./views/Clip.vue";
import UserSelect from "./views/UserSelect.vue";
import FilterDropShadow from "./views/FilterDropShadow.vue";

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
	{
		path: "/clip",
		name: "clip",
		component: Clip,
		title: "clip",
		desc: "Pozwala na przycięcie elementu",
	},
	{
		path: "/user-select",
		name: "user-select",
		component: UserSelect,
		title: "user-select",
		desc: "Pozwala na określenie sposobu zaznaczenia tekstu lub jego wyłączenie",
	},
	{
		path: "/filter: drop-shadow",
		name: "filter: drop-shadow",
		component: FilterDropShadow,
		title: "filter: drop-shadow",
		desc: "Pozwala na tworzenie dokładnych cieni z svg i png",
	},
];

const vueMenu = menu.map(menuItem => ({
	path: menuItem.path,
	name: menuItem.name,
	component: menuItem.component,
}));

export default new Router({
	routes: [...vueMenu, {
		path: '*',
		redirect: vueMenu[0].path
	}]
});
