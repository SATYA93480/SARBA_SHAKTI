(function () {
    function hidePreloader() {
        var preloader = document.getElementById("preloader-active");
        if (preloader) {
            preloader.style.display = "none";
        }
    }

    if (document.readyState === "complete") {
        hidePreloader();
    } else {
        window.addEventListener("load", hidePreloader);
        setTimeout(hidePreloader, 2000);
    }

    var modal = document.getElementById("newsImageModal");
    var image = document.getElementById("newsModalImage");
    var title = document.getElementById("newsImageLabel");
    if (!modal || !image) {
        return;
    }

    var closeButton = modal.querySelector(".btn-close");

    function showModal(src, heading) {
        if (src) {
            image.src = src;
        }
        if (title) {
            title.textContent = heading || "News Image";
        }
        modal.classList.add("show");
        modal.style.display = "block";
        modal.setAttribute("aria-modal", "true");
        modal.removeAttribute("aria-hidden");
        document.body.classList.add("modal-open");
    }

    function hideModal() {
        modal.classList.remove("show");
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
    }

    document.addEventListener("click", function (event) {
        var trigger = event.target.closest(".news-trigger");
        if (!trigger) {
            if (event.target === modal) {
                hideModal();
            }
            return;
        }
        event.preventDefault();
        showModal(trigger.getAttribute("data-image"), trigger.getAttribute("data-title"));
    });

    if (closeButton) {
        closeButton.addEventListener("click", hideModal);
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            hideModal();
        }
    });
})();
