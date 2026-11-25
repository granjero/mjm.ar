
/* ========================================
   ELEMENT REFERENCES
======================================== */

// Get the hamburger button.
const menuToggle = document.getElementById("menu-toggle");

// Get the mobile sidebar.
const mobileMenu = document.getElementById("mobile-menu");

// Get the background overlay.
const menuOverlay = document.getElementById("menu-overlay");

// Get all navigation links inside the mobile sidebar.
const menuLinks = mobileMenu.querySelectorAll("a");


/* ========================================
   OPEN MENU
======================================== */

/**
 * Opens the mobile sidebar.
 *
 * Adds the "active" class to the sidebar and overlay.
 * Updates the accessibility attributes of the hamburger button.
 */
function openMenu() {

    mobileMenu.classList.add("active");

    menuOverlay.classList.add("active");

    menuToggle.setAttribute("aria-expanded", "true");

    menuToggle.setAttribute("aria-label", "Close navigation menu");

}


/* ========================================
   CLOSE MENU
======================================== */

/**
 * Closes the mobile sidebar.
 *
 * Removes the "active" class from the sidebar and overlay.
 * Resets the accessibility attributes of the hamburger button.
 */
function closeMenu() {

    mobileMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute("aria-label", "Open navigation menu");

}


/* ========================================
   TOGGLE MENU
======================================== */

/**
 * Toggles the sidebar between open and closed.
 *
 * Checks whether the sidebar is currently open.
 * If it is open, close it. Otherwise, open it.
 */
function toggleMenu() {

    if (mobileMenu.classList.contains("active")) {

        closeMenu();

    } else {

        openMenu();

    }

}


/* ========================================
   EVENT LISTENERS
======================================== */

// Open or close the sidebar when clicking the hamburger.
menuToggle.addEventListener("click", toggleMenu);


// Close the sidebar when clicking the background overlay.
menuOverlay.addEventListener("click", closeMenu);


// Close the sidebar when selecting a navigation option.
menuLinks.forEach(function(link) {

    link.addEventListener("click", closeMenu);

});


// Close the sidebar when pressing the Escape key.
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeMenu();

    }

});


/* ========================================
   WINDOW RESIZE
======================================== */

// Close the mobile sidebar when switching to desktop layout.
window.addEventListener("resize", function() {

    if (window.innerWidth > 768) {

        closeMenu();

    }

});

