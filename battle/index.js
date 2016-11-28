
$(function() {
	//战场信息
	var map
	var locations




	// var loadMap = function(id,cb){
	// 	var map

	// 	$.getJSON(".//data/map.json",function(maps){
	// 		map = maps[id]
	// 		cb(map)
	// 	})
	// }

	//地图加载
	var loadMap = function(id,cb){
		var map
		
		$.ajaxSettings.async = false;
		$.getJSON(".//data/map.json",function(maps){
			map = maps[id]
		})
		return map
	}

	//游戏结束判定
	var gameOver = function(){
		return false
	}

	// var battle{
	// 	this.map 
	// }

    $(document).ready(function() {


    	//游戏准备阶段
    	//加载地图
    	// map = loadMap(1,function(map){
    	// 	console.log("加载了地图"+map.name)
    	// 	console.log(map)
    	// })
    	map = loadMap(1)

		console.log("加载了地图"+map.name)
		console.log(map)

		// locations = new array(map.adj_list.length)

    	// hero = new Hero()

    	// console.log(hero.h_name)
    	// console.log(hero.skill_1)

    	//加载英雄
    	hero_r_1 = new Samuro()
    	hero_r_2 = new Samuro()
    	hero_r_3 = new Samuro()
    	hero_r_4 = new Samuro()
    	hero_r_5 = new Samuro()

    	hero_b_1 = new Samuro()
    	hero_b_2 = new Samuro()
    	hero_b_3 = new Samuro()
    	hero_b_4 = new Samuro()
    	hero_b_5 = new Samuro()

    	console.log(hero_r_1.h_name)
    	console.log(hero_r_1.skill_1)

    	hero_list_red = [hero_r_1,hero_r_2,hero_r_3,hero_r_4,hero_r_5]
    	hero_list_blue = [hero_b_1,hero_b_2,hero_b_3,hero_b_4,hero_b_5]

    	console.log("加载了英雄")
    	console.log(hero_list_red)
    	console.log(hero_list_blue)
    	console.log(hero_list_red[0].skill_1)

    	//初始位置分配
    	console.log("初始位置分配")
    	// hero_list_red[0].location = 19
    	// hero_list_red[1].location = 21
    	// hero_list_red[2].location = 21
    	// hero_list_red[3].location = 21
    	// hero_list_red[4].location = 23

    	// hero_list_blue[0].location = 19
    	// hero_list_blue[1].location = 21
    	// hero_list_blue[2].location = 21
    	// hero_list_blue[3].location = 21
    	// hero_list_blue[4].location = 23

    	// console.log(hero_list_red)
    	// console.log(hero_list_blue)

    	// locations["19"] = [hero_list_red[0],hero_list_blue[0]]
    	// locations["21"] = [hero_list_red[1],hero_list_red[2],hero_list_red[3],hero_list_blue[1],hero_list_blue[2],hero_list_blue[3]]
    	// locations["23"] = [hero_list_red[4],hero_list_blue[4]]

		map["locations"]=[]
		console.log(map.max_length)
		for(i=0;i<map.max_length;i++){
			map["locations"].push("none")
		}

    	map["locations"][19] = [hero_list_red[0],hero_list_blue[0]]
    	map["locations"][21] = [hero_list_red[1],hero_list_red[2],hero_list_red[3],hero_list_blue[1],hero_list_blue[2],hero_list_blue[3]]
    	map["locations"][23] = [hero_list_red[4],hero_list_blue[4]]

		console.log(map)


    	//初始位置分配完毕，游戏开始
    	console.log("初始位置分配完毕，游戏开始")

    	while(!gameOver()){
    		//等待用户输入指令
    		console.log("等待用户输入指令")

    		//假设用户输入了攻击指令
    		h_r_c_1 = attack(hero_b_1)
    		h_r_c_2 = attack(hero_b_1)
    		h_r_c_3 = attack(hero_b_1)
    		h_r_c_4 = attack(hero_b_1)
    		h_r_c_5 = attack(hero_b_1)
    	}
    });
});