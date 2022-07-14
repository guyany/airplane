
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
/**
 * Predefined variables
 * Name = Bullet
 * DateTime = Fri May 06 2022 14:27:08 GMT+0800 (香港标准时间)
 * Author = guyany
 * FileBasename = Bullet.ts
 * FileBasenameNoExtension = Bullet
 * URL = db://assets/script/bullet/Bullet.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

const OUTFRANGE = -50;

@ccclass('Bullet')
export class Bullet extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property
    public bulletSpeed = 0;

    start() {
        // [3]
    }

    update(deltaTime: number) {
        const pos = this.node.position;
        const moveDistance = pos.z - this.bulletSpeed;
        this.node.setPosition(pos.x, pos.y, moveDistance);

        if (moveDistance < OUTFRANGE) {
            this.node.destroy();
            // console.log('bullet destroy');
        }
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
