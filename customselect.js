const a = document.getElementsByTagName('select')

var arr = Array.from(a);
var item;

arr.forEach((el) => {
    let whole = document.createElement('div')
    whole.setAttribute("class", "whole");

    // Create Selector
    let main = document.createElement('div')
    main.setAttribute("class", "select-selected");
    whole.appendChild(main)
    el.parentNode.insertBefore(whole, el)


    // Create placeholder
    var element = document.createElement("h4");
    element.setAttribute("class", "select-placeholder");
    element.appendChild(document.createTextNode(el.options[el.selectedIndex].innerHTML));
    main.appendChild(element);

    var arrow = document.createElement("i");
    arrow.setAttribute("class", "arrow");
    element.appendChild(arrow);



    // Create selector items
    Array.from(el.options).forEach((e, index, array) => {

        if (index > 0) {
            item = document.createElement('div')
            item.setAttribute("class", "select-items select-hide");
            item.innerHTML = e.innerHTML
    
            main.appendChild(item)

        }


    })

    // Hide or show options
    let hey = main.getElementsByClassName('select-hide')
    main.addEventListener('click', (em) => {
        Array.from(hey).forEach(el => {
            const compstyle = getComputedStyle(el)
            if (compstyle.display == 'block'){
                el.style.display = 'none'
            }else{
                el.style.display = 'block'
            }
        })
    })


    
})




