document.addEventListener("DOMContentLoaded", function() {
    var textElements = document.querySelectorAll('.truncate-para');

    textElements.forEach(function(element) {
        var originalText = element.innerHTML;
        if (originalText.length > 150) {
            var truncatedText = originalText.substring(0, 150) + '...';
            element.innerHTML = truncatedText;
        }
    });
});

window.addEventListener('scroll', function() {
    var getCallSection = document.getElementById('call');
    if (window.scrollY > 300) {
        getCallSection.classList.add('call-show');
    } else {
        getCallSection.classList.remove('call-show');
    }
});
