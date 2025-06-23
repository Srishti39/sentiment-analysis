let chartInstance = null;
const loader = document.getElementById('loader');
const themeToggle = document.getElementById('toggleTheme');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  themeToggle.textContent = next === 'light' ? 'Dark Mode' : 'Light Mode';
});

document.getElementById('analyze').onclick = () => {
  const text = document.getElementById("comments").value;
  const lines = text.split("\n").filter(line => line.trim());
  if (!lines.length) return alert('Please enter at least one comment.');

  loader.style.display = 'block';
  document.getElementById('analyze').disabled = true;

  fetch("/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ comments: lines })
  })
    .then(res => res.json())
    .then(data => {
      loader.style.display = 'none';
      document.getElementById('analyze').disabled = false;
      showResults(data.results);
      updateChart(data.chartData);
    })
    .catch(err => {
      loader.style.display = 'none';
      document.getElementById('analyze').disabled = false;
      console.error("Error:", err);
      alert('Error processing request.');
    });
};

function showResults(results) {
  const resultsDiv = document.getElementById("result");
  resultsDiv.innerHTML = "<h2>Results</h2>";
  results.forEach(item => {
    const p = document.createElement("p");
    p.textContent = `"${item.comment}" → ${item.sentiment}`;
    resultsDiv.appendChild(p);
  });
}

function updateChart(data) {
  const ctx = document.getElementById("sentimentChart").getContext("2d");
  chartInstance?.destroy();
  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Positive", "Negative", "Neutral"],
      datasets: [{
        label: "Sentiment Count",
        data: [data.positive, data.negative, data.neutral],
        backgroundColor: ["#10B981", "#EF4444", "#FBBF24"],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, precision: 0 }
      },
      animation: { duration: 500 }
    }
  });
}
