import { ObjectList } from '../modules/virtual-scroll';
export class ObjectListItems extends ObjectList<ListItem>{
    length = 0;
    indexOf(elem: ListItem) { return elem.index; }

    constructor(length?: number){
        super();
        if (length) this.length = length;
    }
    
}

export class ListItem {
    index?: number;
}