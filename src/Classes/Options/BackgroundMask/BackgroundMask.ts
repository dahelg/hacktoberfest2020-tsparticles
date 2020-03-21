import {IBackgroundMask} from "../../../Interfaces/Options/BackgroundMask/IBackgroundMask";
import {IColor} from "../../../Interfaces/Options/Particles/IColor";
import {RecursivePartial} from "../../../Types/RecursivePartial";
import { Color } from "../Particles/Color";

export class BackgroundMask implements IBackgroundMask {
    /**
     * Background covering color
     */
    public cover: IColor;

    /**
     * Background mask enabling options
     */
    public enable: boolean;

    constructor() {
        this.cover = new Color();
        this.enable = false;
    }
    
    public load(data?: RecursivePartial<IBackgroundMask>): void {
        if (data !== undefined) {
            if (data.cover !== undefined) {
                this.cover.load(data.cover);
            }

            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    }
}
