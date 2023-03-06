const Image = document.querySelector('.image img')
const BigImage = document.querySelector('.image')
const Share = document.querySelector('.share')

Image.onclick = function(){
    Share.style.display = 'flex';
    BigImage.style.backgroundColor ='hsl(212, 23%, 69%)'
}