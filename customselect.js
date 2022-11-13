const arr = Array.from(document.getElementsByTagName('select'))

var item;


// A method that turns every select tag into custom select menu
Array.prototype.changeToCustomSelect = function() {
    console.log(this)
    this.forEach((el) => {
        let whole = document.createElement('div')
        whole.setAttribute("class", "custom-select");

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
        main.addEventListener('click', (event) => {
            document.querySelectorAll(".select-selected").forEach((el) => {
                if (el == main) {
                    console.log('nice')
                    main.style.zIndex = '999'
                } else {
                    el.style.zIndex = '0'
                    const hid = el.getElementsByClassName('select-hide')
                    Array.from(hid).forEach(el => {
                        el.style.display = 'none'

                    })
                }
            })

            Array.from(hey).forEach(el => {
                const compstyle = getComputedStyle(el)

                if (compstyle.display == 'block') {
                    el.style.display = 'none'
                } else {
                    el.style.display = 'block'
                }
            })
        })



    })


    const last = document.querySelectorAll(".custom-select")
    last[last.length - 1].style.gridArea = 'g'
}

arr.changeToCustomSelect()



