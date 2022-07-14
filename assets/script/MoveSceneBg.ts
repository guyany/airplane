
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = MoveSceneBg
 * DateTime = Fri May 06 2022 09:53:00 GMT+0800 (香港标准时间)
 * Author = guyany
 * FileBasename = MoveSceneBg.ts
 * FileBasenameNoExtension = MoveSceneBg
 * URL = db://assets/script/MoveSceneBg.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass('MoveSceneBg')
export class MoveSceneBg extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Node)
    bg01: Node = null;

    @property(Node)
    bg02: Node = null


    private _bgSpeed = 10;
    private _bgMovingRange = 90;

    start() {
        // [3]
        this._init()
    }

    update(deltaTime: number) {
        // [4]
        this._moveBackgroung(deltaTime)


    }

    private _init() {
        this.bg01.setPosition(0, 0, 0);
        this.bg02.setPosition(0, 0, - this._bgMovingRange);
    }

    private _moveBackgroung(deltaTiem: number) {
        this.bg01.setPosition(0, 0, this.bg01.position.z + this._bgSpeed * deltaTiem);
        this.bg02.setPosition(0, 0, this.bg02.position.z + this._bgSpeed * deltaTiem);

        if (this.bg01.position.z > this._bgMovingRange) {
            this.bg01.setPosition(0, 0, this.bg02.position.z - this._bgMovingRange)
        } else if (this.bg02.position.z > this._bgMovingRange) {
            this.bg02.setPosition(0, 0, this.bg01.position.z - this._bgMovingRange)

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
