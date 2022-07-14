
import { _decorator, Component, Node } from 'cc';
import { Constant } from '../framework/Constant';
const { ccclass, property } = _decorator;


/**
 * Predefined variables
 * Name = EnemyPlane
 * DateTime = Fri May 06 2022 16:54:06 GMT+0800 (香港标准时间)
 * Author = guyany
 * FileBasename = EnemyPlane.ts
 * FileBasenameNoExtension = EnemyPlane
 * URL = db://assets/script/plane/EnemyPlane.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
const OUTOFBOUNCE = 50;

@ccclass('EnemyPlane')
export class EnemyPlane extends Component {

    private enemySpeed = 0;

    public enemyTyp = Constant.EnemyTyp.TYPE1;

    start() {
        // [3]
    }

    update(deltaTime: number) {
        const pos = this.node.position;
        const movePos = pos.z + this.enemySpeed
        this.node.setPosition(pos.x, pos.y, movePos)
        if (movePos > OUTOFBOUNCE) {
            this.node.destroy();
        }
    }

    show(speed: number) {
        this.enemySpeed = speed;
    }

}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
