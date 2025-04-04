const chickColors = {
	egg: "#FFFFF0",
	eye: "#362F1D",
	beak: "#F35300",
	head: "#E9A960",
	body: "#E9A960",
	leg: "#F0772B",
	ribbon: "#920606",
};

const otterColors = {
	egg: "#DEDEB9",
	whiskers: "#FFFFFF",
	face: "#000000",
	leg: "#1E1E1E",
	tail: "#4E3C32",
	body: "#665245",
	shell: "#B2A59C",
	shell_under: "#FBA6C5",
	shell_pearl: "#DDC8CF",
	shell_eye: "#E9DECA",
	shell_eyebrow: "#000000",
};

const monsterColors = {
	egg: "#D67F7F",
	eye: "#000000",
	tongue: "#CC6B76",
	ear: "#48484D",
	tooth: "#FFFFFF",
	body: "#FFA773",
	donut: "#C48F63",
	donut_source: "#EF72A4",
	donut_strawberry: "#EAA2A2",
};

export const colorMapping = {
	chicken_lv_1: [chickColors.egg, chickColors.beak, chickColors.body, chickColors.eye],
	chicken_lv_2: [chickColors.beak, chickColors.body, chickColors.eye],
	chicken_lv_3: [
		chickColors.ribbon,
		chickColors.ribbon,
		chickColors.ribbon,
		chickColors.beak,
		chickColors.eye,
		chickColors.eye,
		chickColors.body,
		chickColors.body,
		chickColors.body,
		chickColors.body,
		chickColors.body,
	],
	otter_lv_1: [
		otterColors.egg,
		otterColors.body,
		otterColors.face,
		otterColors.whiskers,
		otterColors.whiskers,
		otterColors.whiskers,
		otterColors.whiskers,
		otterColors.face,
		otterColors.face,
		otterColors.face,
		otterColors.body,
		otterColors.body,
	],
	otter_lv_2: [
		otterColors.tail,
		otterColors.body,
		otterColors.face,
		otterColors.whiskers,
		otterColors.whiskers,
		otterColors.whiskers,
		otterColors.whiskers,
		otterColors.face,
		otterColors.face,
		otterColors.face,
		otterColors.body,
		otterColors.body,
		otterColors.face,
		otterColors.face,
		otterColors.face,
		otterColors.body,
	],
	otter_lv_3: [
		otterColors.shell_eyebrow,
		otterColors.shell_eyebrow,
		otterColors.shell_eye,
		otterColors.shell_eye,
		otterColors.shell_eyebrow,
		otterColors.shell_eyebrow,
		otterColors.shell_pearl,
		otterColors.shell_under,
		otterColors.shell,
		otterColors.shell,
		otterColors.tail,
		otterColors.body,
		otterColors.body,
		otterColors.body,
		otterColors.leg,
		otterColors.leg,
		otterColors.body,
		otterColors.body,
		otterColors.whiskers,
		otterColors.whiskers,
		otterColors.whiskers,
		otterColors.whiskers,
		otterColors.whiskers,
		otterColors.whiskers,
		otterColors.whiskers,
		otterColors.whiskers,
		otterColors.face,
		otterColors.face,
		otterColors.face,
		otterColors.face,
		otterColors.body,
	],
	monster_lv_1: [
		monsterColors.egg,
		monsterColors.tooth,
		monsterColors.tooth,
		monsterColors.tongue,
		monsterColors.ear,
		monsterColors.eye,
		monsterColors.eye,
		monsterColors.body,
		monsterColors.body,
	],
	monster_lv_2: [
		monsterColors.tongue,
		monsterColors.tooth,
		monsterColors.tooth,
		monsterColors.tongue,
		monsterColors.ear,
		monsterColors.eye,
		monsterColors.eye,
		monsterColors.body,
		monsterColors.body,
	],
	monster_lv_3: [
		monsterColors.donut_source,
		monsterColors.donut,
		monsterColors.donut,
		monsterColors.donut_strawberry,
		monsterColors.tooth,
		monsterColors.tooth,
		monsterColors.tongue,
		monsterColors.ear,
		monsterColors.ear,
		monsterColors.eye,
		monsterColors.body,
		monsterColors.body,
		monsterColors.body,
		monsterColors.body,
		monsterColors.body,
		monsterColors.ear,
		monsterColors.ear,
	],
};
