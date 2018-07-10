import Vue from "vue";
import Router from "vue-router";
import PositionSticky from "./views/PositionSticky.vue";
import ObjectfitCover from "./views/ObjectfitCover.vue";

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
		path: "/object-fit-cover",
		name: "object-fit-cover",
		component: ObjectfitCover,
		title: "object-fit: cover",
		desc: "Pozwala na responsywne skalowanie obrazków w <img>",
	},
];

export default new Router({
	routes: menu.map(menuItem => ({
		path: menuItem.path,
		name: menuItem.name,
		component: menuItem.component,
	}))
});
