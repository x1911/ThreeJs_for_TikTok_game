

import './libs/weapp-adapter.js' 
// import './libs/symbol.js'
import * as THREE from './libs/three.min.js'
import { Main } from './main/main.js';
import { Project } from './main/Project.js';


console.log(THREE)
console.log('开发字节跳动小游戏过程中可以参考以下文档:')
console.log('https://developer.toutiao.com/docs/game/');

// let systemInfo = tt.getSystemInfoSync()
// let canvas = tt.createCanvas(),  // 不要用官方的canvas
    // ctx = canvas.getContext('2d');
// const sharedCanvas = tt.getSharedCanvas();
// const context = sharedCanvas.getContext("2d");

function draw(){
    globalThis.THREE = THREE
    globalThis.DB = {}
    const main = new Main(canvas)  // 直接用全局的canvas
    main.start().then()

    DB.scene = main

    new Project()
}

function draw2() {   
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, systemInfo.windowWidth, systemInfo.windowHeight)

    ctx.fillStyle = '#000000'
    ctx.font = `${parseInt(systemInfo.windowWidth / 20)}px Arial`
    ctx.fillText('欢迎使用字节跳动开发者工具，', 10, systemInfo.windowHeight * 1 / 5)
    ctx.fillText('可在控制台中查看小游戏开发文档的地址。', 10, systemInfo.windowHeight * 1 / 5 + 30)
}

draw();