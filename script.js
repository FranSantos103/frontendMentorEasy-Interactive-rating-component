let main = document.querySelector('.ratingCard')
let submitBtn = document.querySelector('.submitButton')
let thanksImage = document.querySelector('.thankYouImage')
let selectedRating = document.querySelector('.selectedRating')
let thankYouTitle = document.querySelector('.thankYouTitle')
let thankYouMessage = document.querySelector('.thankYouMessage')
let extraContainer = document.querySelector('.extraContainer')
let ratingTitle = document.querySelector('.ratingTitle')
let ratingIcon = document.querySelector('.ratingIcon')
let iconContainer = document.querySelector('.iconContainer')
let ratingDescription = document.querySelector('.ratingDescription')
let ratingButtonsContainer = document.querySelector('.ratingButtons')

// Select all rating buttons (1 to 5)
let ratingButtons = document.querySelectorAll('.ratingButton')

// Attach a click event to each button
ratingButtons.forEach(checkButton)

function checkButton(button) {



    // When a button is clicked, handle the active state
    button.addEventListener('click', removeAdd)

    function removeAdd() {

       // Removes 'active' from all buttons
       ratingButtons.forEach(btn => {
            btn.classList.remove('active')
        })


        // Then, add 'active' only to the clicked button
        button.classList.add('active')
    }
}

submitBtn.addEventListener('click', showMessage)

function showMessage() {

    ratingButtons.forEach(checkButtonActive)

    function checkButtonActive(button) {
        if (button.classList.contains('active')) {
            let activeButton = button.innerHTML
            selectedRating.innerHTML = `You selected ${activeButton} out of 5`
        }
    }

    thanksImage.style.display = 'flex'
    thanksImage.style.zIndex = '7'

    submitBtn.style.zIndex = '-2'

    selectedRating.style.display = 'flex'
    selectedRating.style.zIndex = '4'
    selectedRating.style.alignItems = 'center'
    selectedRating.style.justifyContent = 'center'

    thankYouTitle.style.display = 'flex'
    thankYouTitle.style.zIndex = '4'

    thankYouMessage.style.display = 'flex'
    thankYouMessage.style.zIndex = '4'

    extraContainer.style.zIndex = '2'

    ratingIcon.style.zIndex = '-4'
    ratingIcon.style.display = 'none'

    submitBtn.style.zIndex = '-4'
    submitBtn.style.display = 'none'

    iconContainer.style.zIndex = '-4'
    iconContainer.style.display = 'none'

    ratingTitle.style.zIndex = '-4'
    ratingTitle.style.display = 'none'

    ratingDescription.style.zIndex = '-4'
    ratingDescription.style.display = 'none'

    ratingButtonsContainer.style.zIndex = '-4'
    ratingButtonsContainer.style.display = 'none'

    ratingButtons.forEach(button => {
        button.style.display = 'none'
        button.style.zIndex = '-4'
    })
}
