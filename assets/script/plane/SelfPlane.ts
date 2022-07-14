
import { _decorator, Component, Node, SystemEvent, systemEvent, input, Input, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = SelfPlane
 * DateTime = Fri May 06 2022 11:48:14 GMT+0800 (香港标准时间)
 * Author = guyany
 * FileBasename = SelfPlane.ts
 * FileBasenameNoExtension = SelfPlane
 * URL = db://assets/script/SelfPlane.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass('SelfPlane')
export class SelfPlane extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property
    speed: number = 1

    start() {
        input.on(Input.EventType.TOUCH_MOVE, this._touchMove, this);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }


    _touchMove(event: EventTouch) {
        const delta = event.getDelta();
        let pos = this.node.position;
        this.node.setPosition(pos.x + 0.01 * this.speed * delta.x, pos.y, pos.z - 0.01 * this.speed * delta.y)
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
