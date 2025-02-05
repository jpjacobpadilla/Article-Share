function setImages(ogImage) {
    const img = document.getElementById('article-image')
    img.src = ogImage

    const storyContainer = document.getElementById('story-container')
    storyContainer.style.setProperty('--article-image', `url("${ogImage}")`)
}

function setFigCaption(title) {
    const figCaption = document.querySelector('figcaption')
    figCaption.innerText = title
}

function setFontColor(fontColor) {
    const figCaption = document.querySelector('figcaption')
    figCaption.style.color = fontColor
}
