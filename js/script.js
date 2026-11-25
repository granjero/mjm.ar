
/* ========================================
   ELEMENT REFERENCES
======================================== */

// Get the hamburger button.
const menuToggle = document.getElementById("menu-toggle");

// Get the navigation element (desktop and mobile).
const navigation = document.getElementById("navigation");

// Get the background overlay.
const menuOverlay = document.getElementById("menu-overlay");

// Get all navigation links.
const menuLinks = navigation.querySelectorAll("a");


/* ========================================
   OPEN MENU
======================================== */

/**
 * Opens the mobile navigation sidebar.
 *
 * Adds the "active" class to the navigation and overlay.
 * Updates the accessibility attributes of the hamburger button.
 */
function openMenu() {

    navigation.classList.add("active");

    menuOverlay.classList.add("active");

    menuToggle.setAttribute("aria-expanded", "true");

    menuToggle.setAttribute("aria-label", "Close navigation menu");

}


/* ========================================
   CLOSE MENU
======================================== */

/**
 * Closes the mobile navigation sidebar.
 *
 * Removes the "active" class from the navigation and overlay.
 * Resets the accessibility attributes of the hamburger button.
 */
function closeMenu() {

    navigation.classList.remove("active");

    menuOverlay.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute("aria-label", "Open navigation menu");

}


/* ========================================
   TOGGLE MENU
======================================== */

/**
 * Toggles the mobile navigation between open and closed.
 *
 * Checks whether the navigation currently has the "active" class.
 * If it does, close it. Otherwise, open it.
 */
function toggleMenu() {

    if (navigation.classList.contains("active")) {

        closeMenu();

    } else {

        openMenu();

    }

}


/* ========================================
   EVENT LISTENERS
======================================== */

// Open or close the navigation when clicking the hamburger.
menuToggle.addEventListener("click", toggleMenu);


// Close the navigation when clicking the background overlay.
menuOverlay.addEventListener("click", closeMenu);


// Close the navigation when selecting an option.
menuLinks.forEach(function(link) {

    link.addEventListener("click", closeMenu);

});


// Close the navigation when pressing the Escape key.
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeMenu();

    }

});


/* ========================================
   WINDOW RESIZE
======================================== */

// Close the mobile navigation when switching to desktop layout.
window.addEventListener("resize", function() {

    if (window.innerWidth > 768) {

        closeMenu();

    }

});

