/* ================================
   CODENOVA JAVASCRIPT
================================ */


/* ---------- THEME ---------- */

function toggleTheme() {

    document.body.classList.toggle("dark");

    const button = document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark")) {

        button.textContent = "☾";

    } else {

        button.textContent = "☀";

    }

}


/* ---------- SCROLL ---------- */

function scrollToCourses() {

    document
        .getElementById("courses")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToPlayground() {

    document
        .getElementById("playground")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ---------- COURSE ---------- */

function startCourse(course) {

    alert(
        "Great choice! 🚀\n\n" +
        course +
        " learning path selected."
    );

}


/* ---------- PLAYGROUND ---------- */

function runCode() {

    const code =
        document.getElementById("codeEditor").value;

    const preview =
        document.getElementById("preview");

    preview.srcdoc = code;

}


/* Load initial preview */

window.addEventListener("load", function () {

    runCode();

});


/* ---------- SEARCH ---------- */

function openSearch() {

    const overlay =
        document.getElementById("searchOverlay");

    overlay.classList.add("active");

    setTimeout(function () {

        document
            .getElementById("searchInput")
            .focus();

    }, 100);

}


function closeSearch() {

    document
        .getElementById("searchOverlay")
        .classList.remove("active");

}


const courses = [
    "HTML Foundations",
    "CSS Design Lab",
    "JavaScript Core",
    "Python Essentials",
    "Responsive Web Design",
    "Web Accessibility",
    "JavaScript DOM",
    "Python Data Structures",
    "Frontend Projects",
    "Coding Challenges"
];


function searchCourses() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const results =
        document.getElementById("searchResults");

    results.innerHTML = "";

    if (input.length === 0) {

        return;

    }

    const matches =
        courses.filter(function(course) {

            return course
                .toLowerCase()
                .includes(input);

        });


    if (matches.length === 0) {

        results.innerHTML =
            "<p>No courses found.</p>";

        return;

    }


    matches.forEach(function(course) {

        const div =
            document.createElement("div");

        div.className = "result";

        div.innerHTML =
            "📚 " + course;

        div.onclick = function() {

            closeSearch();

            document
                .getElementById("courses")
                .scrollIntoView({
                    behavior: "smooth"
                });

        };

        results.appendChild(div);

    });

}


/* ---------- KEYBOARD ---------- */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeSearch();

    }

});


/* ---------- NAVIGATION ---------- */

document.querySelectorAll(".nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelectorAll(".nav a")
            .forEach(function(item) {

                item.classList.remove("active");

            });

        link.classList.add("active");

    });

});
