$(document).ready(function() {
  $(".scroll-animation").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 500);
  });
});

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function copyLink(link, btn) {
  navigator.clipboard.writeText(link);
  let elem = document.createElement("p");
  elem.classList = "link-to-copy-info";
  elem.innerHTML = "copied!";
  insertAfter(btn, elem);
}