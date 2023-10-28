function changeColor(element) {
    // 移除所有已选中项的样式
    var listItems = document.querySelectorAll(".list-unstyled li");
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("selected");
    }

    // 添加特定类来更改颜色
    element.classList.add("selected");
}
