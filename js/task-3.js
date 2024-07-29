function getElementWidth(content, padding, border) {
    const contentTotal = parseFloat(content);
    const paddingBoth = parseFloat(padding);
    const borderBoth = parseFloat(border);
    const totalContent = contentTotal + (paddingBoth * 2) + (borderBoth * 2);
    return totalContent;
}



console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));