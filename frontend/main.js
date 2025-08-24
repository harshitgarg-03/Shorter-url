// main.js

const form = document.querySelector(".form");
const longUrlInput = form.querySelector("input[name='longUrl']");
const customAliasInput = form.querySelector("input[name='customAlias']");
const expirySelect = form.querySelector("select[name='expiry']");
const resultSection = document.querySelector(".result");
const resultInput = resultSection.querySelector(".result-box input");
const copyBtn = resultSection.querySelector(".copy-btn");
const originalUrlText = resultSection.querySelector(".original-url");

// Change this to your backend URL
const API_BASE = "http://localhost:4000/api/v1";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const longUrl = longUrlInput.value.trim();
  const customAlias = customAliasInput.value.trim();
  const expiry = expirySelect.value;

  if (!longUrl) {
    alert("Please enter a valid URL.");
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/abc`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ originalurl: longUrl, customAlias, expiry }),
    });

    const data = await response.json();

    if (data.success) {
      resultSection.style.display = "block";
      resultInput.value = `${API_BASE}/abc/${data.shortUrl}`;
      originalUrlText.textContent = `Original: ${longUrl}`;
    } else {
      alert(data.message || "Failed to shorten URL.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  }
});

// Copy to Clipboard
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(resultInput.value)
    .then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
    })
    .catch(() => alert("Failed to copy URL."));
});
