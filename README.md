# voting-system
this is simple votng system which compromise simple steps and also very simple ui 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#f5f8f6">
    <meta name="description" content="A simple, accessible demo voting experience.">
    <title>Vote — Have your say</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="site-header">
        <a class="brand" href="index.html" aria-label="Vote home">
            <span class="brand-mark" aria-hidden="true">✓</span>
            <span>Have your say</span>
        </a>
        <a class="header-link" href="#options">Get started <span aria-hidden="true">→</span></a>
    </header>

    <main class="page-main">
        <div class="content">
            <section class="hero" aria-labelledby="page-title">
                <p class="eyebrow">Your voice matters</p>
                <h1 id="page-title">Your voice.<br> Your choice.</h1>
                <p class="hero-copy">Take a moment to make your choice. Every voice is part of the conversation.</p>
            </section>

            <section class="panel" id="options" aria-labelledby="options-title">
                <div class="panel-heading">
                    <h2 id="options-title">Would you like to cast your vote?</h2>
                    <p>Choose an option below to continue.</p>
                </div>
                <div class="choice-grid">
                    <a class="choice-card choice-card-primary" href="parties.html">
                        <span class="choice-number">OPTION 01</span>
                        <span class="choice-title">Yes <span class="choice-arrow" aria-hidden="true">→</span></span>
                    </a>
                    <a class="choice-card" href="reason.html">
                        <span class="choice-number">OPTION 02</span>
                        <span class="choice-title">Not now <span class="choice-arrow" aria-hidden="true">→</span></span>
                    </a>
                </div>
                <p class="notice">
                    <span class="notice-icon" aria-hidden="true">i</span>
                    <span>Demo only: once connected, submissions are saved to the database. Do not enter personal information.</span>
                </p>
            </section>
        </div>
    </main>

    <footer class="site-footer">A simple demo voting experience</footer>
</body>
</html>

