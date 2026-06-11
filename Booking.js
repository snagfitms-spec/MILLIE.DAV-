document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");
    const msg = document.getElementById("msg");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        // =========================
        // 1. COLLECT DATA (SAFE MODE)
        // =========================
        const name = document.getElementById("name")?.value?.trim();
        const email = document.getElementById("email")?.value?.trim();
        const message = document.getElementById("message")?.value?.trim();

        // 🔥 FIXED SERVICE LOGIC (NO MORE undefined / General BUG)
        const service = (
            document.getElementById("service")?.value ||
            document.getElementById("serviceInput")?.value ||
            ""
        ).trim();

        // =========================
        // 2. VALIDATION (STRICT)
        // =========================
        if (!name || !email || !message) {
            msg.innerText = "Please fill in all required fields.";
            msg.style.color = "red";
            return;
        }

        if (!service) {
            msg.innerText = "Please select a service.";
            msg.style.color = "red";
            return;
        }

        // =========================
        // 3. OPTIMISTIC UI (INSTANT FEEDBACK)
        // =========================
        msg.innerText = "Sending booking...";
        msg.style.color = "#fbbf24";

        const button = form.querySelector("button");
        button.disabled = true;
        button.innerText = "Sending...";

        // =========================
        // 4. SEND TO BACKEND
        // =========================
        try {
            const response = await fetch("https://millie-dav.onrender.com/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    service,
                    message
                })
            });

            const data = await response.json();

            // =========================
            // 5. SUCCESS STATE
            // =========================
            if (data.success) {

                msg.innerText = "Booking sent successfully!";
                msg.style.color = "lightgreen";

                form.reset();

                // clear service display too (important fix)
                const serviceDisplay = document.getElementById("serviceInput");
                if (serviceDisplay) serviceDisplay.value = "";

                const hiddenService = document.getElementById("service");
                if (hiddenService) hiddenService.value = "";

            } else {
                msg.innerText = "Failed to submit booking.";
                msg.style.color = "red";
            }

        } catch (error) {

            console.error("Booking Error:", error);

            msg.innerText = "Server error. Please try again.";
            msg.style.color = "red";

        }

        // =========================
        // 6. RESET BUTTON
        // =========================
        button.disabled = false;
        button.innerText = "Submit Booking";
    });

});
