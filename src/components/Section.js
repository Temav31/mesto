class Section{
    constructor({renderer}, selectorContainer){
        // this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(selectorContainer);
    }
    addItem(element){     
        // console.log('hi');   
        this._container.prepend(element);
    }
    renderItem(items){
        items.forEach(element  => {
            this._renderer(element);
        });
    }
}
export default Section;
