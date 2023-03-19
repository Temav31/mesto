class Section{
    constructor({items, renderer}, selectorContainer){
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(selectorContainer);
    }
    addItem(element){        
        this._container.append(element);
    }
    renderItem(){
        this._items.forEach(element  => {
            this._renderer(element);
        });
    }
}
export default Section;
