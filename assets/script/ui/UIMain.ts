
import { _decorator, Component, Node, input, Input, EventTouch } from 'cc';
import { GameManage } from '../framework/GameManage';
const { ccclass, property } = _decorator;
/**
 * Predefined variables
 * Name = UIMain
 * DateTime = Fri May 06 2022 14:19:28 GMT+0800 (香港标准时间)
 * Author = guyany
 * FileBasename = UIMain.ts
 * FileBasenameNoExtension = UIMain
 * URL = db://assets/script/ui/UIMain.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass('UIMain')
export class UIMain extends Component {
    @property
    public planeSpeed: number = 1;

    @property(Node)
    public playerPlane: Node = null;

    @property(GameManage)
    public gameManager: GameManage = null;

    start() {
        this.node.on(Node.EventType.TOUCH_START, this._touchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this._touchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this._touchEnd, this);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
    _touchStart(event: EventTouch) {
        this.gameManager.isShooting(true);
    }

    _touchMove(event: EventTouch) {
        const delta = event.getDelta();
        let pos = this.playerPlane.position;
        this.playerPlane.setPosition(pos.x + 0.01 * this.planeSpeed * delta.x, pos.y, pos.z - 0.01 * this.planeSpeed * delta.y)
    }

    _touchEnd(event: EventTouch) {
        this.gameManager.isShooting(false);
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
