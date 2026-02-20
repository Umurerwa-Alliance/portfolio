
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


const yearSpan = document.getElementById("year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}


/*GPA CALCULATOR */

const gpaForm = document.getElementById("gpa-form");

if (gpaForm) {

    gpaForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const course1 = parseFloat(document.getElementById("course1").value);
        const course2 = parseFloat(document.getElementById("course2").value);
        const course3 = parseFloat(document.getElementById("course3").value);
        const resultDiv = document.getElementById("gpa-result");

        // Validation
        if (
            isNaN(course1) || isNaN(course2) || isNaN(course3) ||
            course1 < 0 || course1 > 100 ||
            course2 < 0 || course2 > 100 ||
            course3 < 0 || course3 > 100
        ) {
            resultDiv.innerHTML = "<p style='color:red;'>Please enter valid marks (0–100).</p>";
            return;
        }

        // Convert marks to grade points
        function getGradePoint(mark) {
            if (mark >= 80) return 4.0;
            if (mark >= 70) return 3.0;
            if (mark >= 60) return 2.0;
            if (mark >= 50) return 1.0;
            return 0.0;
        }

        const g1 = getGradePoint(course1);
        const g2 = getGradePoint(course2);
        const g3 = getGradePoint(course3);

        const gpa = ((g1 + g2 + g3) / 3).toFixed(2);

        // GPA classification
        function getClassification(gpa) {
            if (gpa >= 3.5) return "First Class";
            if (gpa >= 3.0) return "Second Class Upper";
            if (gpa >= 2.0) return "Second Class Lower";
            if (gpa >= 1.0) return "Pass";
            return "Fail";
        }

        const classification = getClassification(parseFloat(gpa));

        // Display result
        resultDiv.innerHTML = `
            <p><strong>GPA:</strong> ${gpa}</p>
            <p><strong>Classification:</strong> ${classification}</p>
        `;
    });
}


/*CONTACT FORM VALIDATION*/

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("form-message");

        // Email validation regex
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (name === "" || email === "" || message === "") {
            formMessage.innerHTML = "<p style='color:red;'>All fields are required.</p>";
            return;
        }

        if (!email.match(emailPattern)) {
            formMessage.innerHTML = "<p style='color:red;'>Enter a valid email address.</p>";
            return;
        }

        // Success message
        formMessage.innerHTML = "<p style='color:green;'>Message sent successfully! (Demo only)</p>";

        contactForm.reset();
    });
}