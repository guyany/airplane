
import { _decorator, Component, Node, Prefab, instantiate, math } from 'cc';
import { Bullet } from '../bullet/Bullet';
import { EnemyPlane } from '../plane/EnemyPlane';
import { Constant } from './Constant';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GameManage
 * DateTime = Fri May 06 2022 14:42:23 GMT+0800 (香港标准时间)
 * Author = guyany
 * FileBasename = GameManage.ts
 * FileBasenameNoExtension = GameManage
 * URL = db://assets/script/framework/GameManage.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass('GameManage')
export class GameManage extends Component {

    @property(Node)
    public playerPlane: Node = null;

    @property(Prefab)
    public bullet01: Prefab = null;

    @property(Prefab)
    public bullet02: Prefab = null;

    @property(Prefab)
    public bullet03: Prefab = null;

    @property(Prefab)
    public bullet04: Prefab = null;

    @property(Prefab)
    public bullet05: Prefab = null;

    @property
    public shootTime = 0.3;

    @property
    public bulletSpeed = 1;

    @property(Prefab)
    public enemye01: Prefab = null;

    @property(Prefab)
    public enemye02: Prefab = null;

    @property
    public createEnemyTime = 1;
    @property
    public enemye1Speed = 0.5;
    @property
    public enemye2Speed = 0.7;

    private _currShootTime = 0;
    private _isShooting = false;
    private _currCreateEnemyTime = 0;
    private _combinationInterval = Constant.Combination.PLAN1;

    @property(Node)
    bulletRoot: Node = null

    start() {
        this._init();
    }

    update(deltaTime: number) {
        this._currShootTime += deltaTime;
        if (this._isShooting && this._currShootTime > this.shootTime) {
            this.cratePlayerBullet();
            this._currShootTime = 0;
        }
        this._currCreateEnemyTime += deltaTime;

        if (this._combinationInterval === Constant.Combination.PLAN1) {
            if (this._currCreateEnemyTime > this.createEnemyTime) {
                this.createEnemyPlane();
                this._currCreateEnemyTime = 0;

            }

        } else if (this._combinationInterval === Constant.Combination.PLAN2) {
            if (this._currCreateEnemyTime > this.createEnemyTime * 0.8) {
                const randomCombination = math.randomRangeInt(1, 3);
                if (randomCombination === Constant.Combination.PLAN2) {
                    this.createCombination1();
                } else {
                    this.createEnemyPlane();
                }
                this._currCreateEnemyTime = 0;
            }
        } else {

        }
    }

    public cratePlayerBullet() {
        const bullet = instantiate(this.bullet01);
        bullet.setParent(this.bulletRoot);
        const pos = this.playerPlane.position;
        bullet.setPosition(pos.x, pos.y, pos.z - 7);
        const bulletComp = bullet.getComponent(Bullet);
        bulletComp.bulletSpeed = this.bulletSpeed;
    }

    public createEnemyPlane() {
        const whichEnemy = math.randomRangeInt(1, 3);
        let prefab: Prefab = null;
        let speed = 0;
        if (whichEnemy == Constant.EnemyTyp.TYPE1) {
            prefab = this.enemye01;
            speed = this.enemye1Speed;
        } else {
            prefab = this.enemye02;
            speed = this.enemye2Speed;
        }
        const enemy = instantiate(prefab);
        enemy.setParent(this.node);
        const enemyComp = enemy.getComponent(EnemyPlane)
        enemyComp.show(speed);

        const randomPos = math.randomRangeInt(-25, 26);
        enemy.setPosition(randomPos, 0, -50);
    }

    public createCombination1() {
        const enemtArray = new Array<Node>(5);
        for (let i = 0; i < enemtArray.length; i++) {
            enemtArray[i] = instantiate(this.enemye01);
            const element = enemtArray[i];
            element.parent = this.node;
            element.setPosition(-20 + i * 20, -50);

            const enemyComp = element.getComponent(EnemyPlane)
            enemyComp.show(this.enemye1Speed);
        }
    }


    public isShooting(value: boolean) {
        this._isShooting = value;
    }

    _init() {
        this._currShootTime = this.shootTime;
        this.changePlaneNode()
    }

    private changePlaneNode() {
        this.schedule(this._modeChane, 10, 3);
    }

    private _modeChane() {
        this._combinationInterval++;
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
