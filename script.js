const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

// select all the cups, add an event listener, and we call a function highlight cups
// we pass in idx for index, to know which one we are clicking

function highlightCups(idx) {
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
// Line 16 checks for the scenario that there isn't a 9th cup 
// The second part checks if the current idx cup contains full (.contains)
// !smallCups[idx].nextElementSibling.classList.contains('full'))
// The above statement checks that the the NEXT element or cup DOES NOT contain full
// Then we adjust the idx by performing idx-- (if idx is 3 now its 2 ) to toggle
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

// This function adds the action of "filling" a cup, this is where we toggle the full class
// idx2 is just a variable name, we can't use idx again so we add the 2
//  On line 21 we check our idx2 against or initial idx

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        listers.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}