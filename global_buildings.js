global.hq = null
for (let building in Game.spawns) {
	switch (Game.spawns[building].memory.type) {
		case 'HQ':
		global.hq = Game.spawns[building]
			break;
		default:
			if (!hq) {
				global.hq = Game.spawns[building]
				global.hq.memory.type = 'HQ'
			}
	}
}