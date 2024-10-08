export const frontEndSkills = [
	{
		label: 'FRONT END',
		data: [
			{
				skillName: "HTML/CSS",
				count: "74",
			},
			{
				skillName: "JAVASCRIPT",
				count: "65",
			},
			{
				skillName: "React JS",
				count: "70",
			},
			{
				skillName: "Tailwind CSS",
				count: "70",
			},
			{
				skillName: "Android Studio",
				count: "55",
			},
		]
	}
]
export const backEndSkills = [
	{
		label: 'BACK END',
		data: [
			{
				skillName: "Express JS",
				count: "54",
			},
			{
				skillName: "Python",
				count: "40",
			},
			{
				skillName: "PHP",
				count: "42",
			},
		]
	}
]
export const DatabaseSkills = [
	{
		label: 'DATABASES',
		data: [
			{
				skillName: "MySQL",
				count: "74",
			},
			{
				skillName: "MongoDB",
				count: "70",
			},
			{
				skillName: "Oracle",
				count: "62",
			},
		]
	}
]

export const AllSkillsinOne = [
	...frontEndSkills[0].data.map(skill => ({ ...skill, category: 'FRONT END' })),
	...backEndSkills[0].data.map(skill => ({ ...skill, category: 'BACK END' })),
	...DatabaseSkills[0].data.map(skill => ({ ...skill, category: 'DATABASES' }))
];