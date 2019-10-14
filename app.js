const crossOut = (id) => {
    
    if (document.getElementById(id).checked === true) {
        Element.classlist.add('complete');
    }
};

crossOut('ingredient-one');