document.addEventListener("DOMContentLoaded", function() {
    const images = ["questionpaper.jpg","pdfnotes.jpg"];
    let currentIndex = 0;
    const banner = document.getElementById("banner1");

    function changeImage() {
        banner.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 4000);
    
    changeImage();
});





document.addEventListener("DOMContentLoaded", function() {
    const images = ["coding.jpg","freenotes.jpg","handnotes.jpg"];
    let currentIndex = 0;
    const banner = document.getElementById("banner2");

    function changeImage() {
        banner.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 4000);
    
    changeImage();
});

