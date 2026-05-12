---
layout: layouts/page
activeNav: ""
prefix: ""
permalink: /questionnaire.html
title: Request Access | Sarama
description: Request early access to Sarama. Leave your name and email and a real person on the team will be in touch.
canonical: https://sarama.ai/questionnaire.html
pageStyle: questionnaire
---

<section class="questionnaire" id="main">
<div class="container q-container">
<div class="page-label">Request access</div>
<h1>What if your dog wasn&rsquo;t a subject to <em>measure</em> but a system to <em>listen to?</em></h1>
<p class="page-lede">Most tools track steps. Few help you decode the why. Leave your name and email, and we&rsquo;ll be in touch.</p>

<form class="q-form" id="qForm" novalidate>
<div class="q-field">
<label for="qName">Name</label>
<input type="text" id="qName" name="name" autocomplete="name" required maxlength="200" />
</div>

<div class="q-field">
<label for="qEmail">Email</label>
<input type="email" id="qEmail" name="email" autocomplete="email" required maxlength="320" />
</div>

<button type="submit" class="q-submit" id="qSubmit">Submit</button>

<p class="q-error" id="qError" hidden></p>
</form>

<p class="q-thanks" id="qThanks" hidden>Thanks &mdash; we&rsquo;ll be in touch.</p>
</div>
</section>

<script>
(function () {
  var SUPABASE_URL = {{ supabase.url | dump | safe }};
  var SUPABASE_KEY = {{ supabase.publishableKey | dump | safe }};
  var SUPABASE_TBL = {{ supabase.table | dump | safe }};

  var form    = document.getElementById("qForm");
  var thanks  = document.getElementById("qThanks");
  var errorEl = document.getElementById("qError");
  var submit  = document.getElementById("qSubmit");
  if (!form) return;

  function showError(msg) {
    errorEl.textContent = msg;
    errorEl.hidden = false;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorEl.hidden = true;
    var name  = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    if (!name || !email) {
      showError("Please enter your name and email.");
      return;
    }

    submit.disabled = true;
    submit.textContent = "Submitting…";

    fetch(SUPABASE_URL + "/rest/v1/" + SUPABASE_TBL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_KEY,
        "Authorization": "Bearer " + SUPABASE_KEY,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        source: "sarama.ai"
      })
    })
      .then(function (res) {
        if (!res.ok && res.status !== 409) {
          return res.text().then(function (body) {
            throw new Error("HTTP " + res.status + ": " + body);
          });
        }
        // Button already disabled, show success
        submit.textContent = "Submitted";
      })
      .catch(function (err) {
        console.error(err);
        showError("Something went wrong. Please try again or email hello@sarama.ai.");
        submit.disabled = false;
        submit.textContent = "Submit";
      });
  });
})();
</script>
