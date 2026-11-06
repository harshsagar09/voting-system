(() => {
    const config = window.SUPABASE_CONFIG;
    const isConfigured = config
        && config.url
        && config.anonKey
        && !config.url.startsWith("YOUR_")
        && !config.anonKey.startsWith("YOUR_");
    const client = isConfigured && window.supabase
        ? window.supabase.createClient(config.url, config.anonKey)
        : null;

    document.querySelectorAll("[data-submission]").forEach((form) => {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const status = form.querySelector("[data-status]");
            const button = form.querySelector('button[type="submit"]');

            if (!isConfigured) {
                status.textContent = "Database is not configured yet. Add your Supabase project URL and public anon/publishable key to supabase-config.js.";
                return;
            }

            if (!client) {
                status.textContent = "The Supabase client did not load. Check your internet connection and try again.";
                return;
            }

            button.disabled = true;
            status.textContent = "Submitting…";

            try {
                let result;

                if (form.dataset.submission === "vote") {
                    result = await client
                        .from("votes")
                        .insert({ party: form.elements.party.value });
                } else {
                    result = await client
                        .from("reason_submissions")
                        .insert({ reason: form.elements.reason.value.trim() });
                }

                if (result.error) {
                    throw result.error;
                }

                window.location.assign(form.dataset.successUrl);
            } catch (error) {
                console.error("Could not save submission to Supabase.", error);
                status.textContent = `Submission failed: ${error.message || "Supabase returned an unknown error."} Please try again.`;
                button.disabled = false;
            }
        });
    });
})();
