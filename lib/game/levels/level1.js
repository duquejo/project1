ig.module( 'game.levels.level1' )
.requires( 'impact.image','game.entities.player' )
.defines(function(){
LevelLevel1=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 48,
			"y": 112
		}
	],
	"layer": [
		{
			"name": "_main",
			"width": 8,
			"height": 16,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "media/tileset.png",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": false,
			"data": [
				[258,260,259,1,1,1,1,1],
				[290,292,291,258,1,1,1,261],
				[322,324,323,290,292,292,291,293],
				[1,1,1,363,323,361,362,359],
				[1,1,1,1,393,394,769,392],
				[1,1,1,1,1,769,522,522],
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "main2",
			"width": 8,
			"height": 16,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "media/tileset.png",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,165,0,0,0,0],
				[0,0,0,0,165,0,0,0],
				[0,12,0,0,0,163,164,165],
				[0,0,0,0,0,0,0,0],
				[0,0,0,14,0,0,0,0],
				[0,0,0,14,0,0,12,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,14,725,0,0,0,0,0],
				[0,12,757,0,0,0,0,0],
				[0,0,0,0,890,891,0,0],
				[0,0,0,0,730,731,0,0],
				[0,0,0,0,954,955,0,0]
			]
		},
		{
			"name": "tree",
			"width": 8,
			"height": 16,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "media/tileset.png",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": true,
			"data": [
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,793,794,795,796,0],
				[0,0,0,825,826,827,828,0],
				[0,0,0,857,858,859,860,0],
				[0,0,0,889,921,921,892,0],
				[0,0,0,921,921,921,924,0],
				[0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "collision",
			"width": 8,
			"height": 16,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": true,
			"data": [
				[1,1,1,1,1,1,1,1],
				[0,0,0,0,1,1,1,1],
				[0,0,0,0,0,1,1,1],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0],
				[0,0,0,0,34,45,0,0],
				[0,0,0,0,34,45,0,0],
				[0,0,0,0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelLevel1Resources=[new ig.Image('media/tileset.png'), new ig.Image('media/tileset.png'), new ig.Image('media/tileset.png')];
});