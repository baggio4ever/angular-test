// 武将クラス
export class Busyo {
    constructor(
        public id:number,
        public name:string,     // 名前
        public master:string,   // 主人
        public power:string,    // 戦闘力
        public intelligence:string, // 知力
        public comment?:string
    ) {}
}