const HISTORICAL_DATA = [
  { date: '2019-07-01', value: 107.74 },
  { date: '2019-08-01', value: 106.29 },
  { date: '2019-09-01', value: 107.88 },
  { date: '2019-10-01', value: 108.03 },
  { date: '2019-11-01', value: 108.87 },
  { date: '2019-12-01', value: 109.56 },
  { date: '2020-01-01', value: 109.27 },
  { date: '2020-02-01', value: 108.35 },
  { date: '2020-03-01', value: 107.53 },
  { date: '2020-04-01', value: 107.14 },
  { date: '2020-05-01', value: 107.58 },
  { date: '2020-06-01', value: 107.39 },
  { date: '2020-07-01', value: 105.81 },
  { date: '2020-08-01', value: 105.93 },
  { date: '2020-09-01', value: 105.58 },
  { date: '2020-10-01', value: 104.63 },
  { date: '2020-11-01', value: 104.25 },
  { date: '2020-12-01', value: 103.52 },
  { date: '2021-01-01', value: 103.79 },
  { date: '2021-02-01', value: 105.52 },
  { date: '2021-03-01', value: 109.84 },
  { date: '2021-04-01', value: 109.30 },
  { date: '2021-05-01', value: 109.58 },
  { date: '2021-06-01', value: 110.62 },
  { date: '2021-07-01', value: 109.73 },
  { date: '2021-08-01', value: 109.90 },
  { date: '2021-09-01', value: 111.51 },
  { date: '2021-10-01', value: 113.89 },
  { date: '2021-11-01', value: 113.05 },
  { date: '2021-12-01', value: 115.08 },
  { date: '2022-01-01', value: 115.10 },
  { date: '2022-02-01', value: 115.32 },
  { date: '2022-03-01', value: 121.66 },
  { date: '2022-04-01', value: 129.83 },
  { date: '2022-05-01', value: 128.68 },
  { date: '2022-06-01', value: 135.73 },
  { date: '2022-07-01', value: 133.28 },
  { date: '2022-08-01', value: 138.96 },
  { date: '2022-09-01', value: 144.75 },
  { date: '2022-10-01', value: 148.71 },
  { date: '2022-11-01', value: 138.08 },
  { date: '2022-12-01', value: 131.12 },
  { date: '2023-01-01', value: 130.10 },
  { date: '2023-02-01', value: 136.20 },
  { date: '2023-03-01', value: 132.80 },
  { date: '2023-04-01', value: 136.56 },
  { date: '2023-05-01', value: 139.96 },
  { date: '2023-06-01', value: 144.31 },
  { date: '2023-07-01', value: 142.27 },
  { date: '2023-08-01', value: 146.14 },
  { date: '2023-09-01', value: 149.35 },
  { date: '2023-10-01', value: 149.41 },
  { date: '2023-11-01', value: 147.18 },
  { date: '2023-12-01', value: 141.06 },
  { date: '2024-01-01', value: 147.22 },
  { date: '2024-02-01', value: 150.52 },
  { date: '2024-03-01', value: 151.35 },
  { date: '2024-04-01', value: 155.66 },
  { date: '2024-05-01', value: 157.27 },
  { date: '2024-06-01', value: 160.87 },
  { date: '2024-07-01', value: 153.76 },
  { date: '2024-08-01', value: 144.53 },
  { date: '2024-09-01', value: 143.62 },
  { date: '2024-10-01', value: 152.31 },
  { date: '2024-11-01', value: 150.33 },
  { date: '2024-12-01', value: 157.35 },
  { date: '2025-01-01', value: 155.95 },
  { date: '2025-02-01', value: 149.72 },
  { date: '2025-03-01', value: 149.98 },
  { date: '2025-04-01', value: 142.97 },
  { date: '2025-05-01', value: 144.30 },
  { date: '2025-06-01', value: 155.68 },
  { date: '2025-06-18', value: 160.25 },
];

const RANGE_MONTHS = { '1M': 1, '3M': 3, '6M': 6, '1Y': 12, '5Y': 60 };
const AS_OF = parseDate('2025-06-18');
const ACCENT = '#6ee7b7';

Chart.defaults.color = '#8b93a7';
Chart.defaults.borderColor = '#2a3040';
Chart.defaults.font.family = "'DM Sans', system-ui, sans-serif";

function parseDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function filterByRange(range) {
  const months = RANGE_MONTHS[range];
  const cutoff = new Date(AS_OF);
  cutoff.setMonth(cutoff.getMonth() - months);
  return HISTORICAL_DATA.filter(d => parseDate(d.date) >= cutoff);
}

function formatDate(dateStr, range) {
  const d = parseDate(dateStr);
  if (range === '1M') return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

function initApp() {
  let currentRange = '1Y';
  let chart = null;

  function getFilteredData() {
    return filterByRange(currentRange);
  }

  function renderSummary(data) {
    const first = data[0];
    const last = data[data.length - 1];
    const high = Math.max(...data.map(d => d.value));
    const low = Math.min(...data.map(d => d.value));
    const change = last.value - first.value;
    const pct = first.value !== 0 ? (change / first.value) * 100 : 0;
    const up = change >= 0;
    const changeClass = up ? 'change-up' : 'change-down';
    const sign = up ? '+' : '';
    const cards = [
      { label: 'Latest rate', value: last.value.toFixed(2), sub: 'JPY per USD' },
      { label: 'Period start', value: first.value.toFixed(2), sub: formatDate(first.date, currentRange) },
      { label: 'High', value: high.toFixed(2), sub: 'In range' },
      { label: 'Low', value: low.toFixed(2), sub: 'In range' },
      { label: 'Change', value: `${sign}${change.toFixed(2)}`, sub: 'Start to latest', valueClass: changeClass },
      { label: '% change', value: `${sign}${pct.toFixed(2)}%`, sub: 'Start to latest', valueClass: changeClass },
    ];
    document.getElementById('summary-grid').innerHTML = cards.map(card => `
      <article class="stat-card">
        <div class="label">${card.label}</div>
        <div class="value${card.valueClass ? ` ${card.valueClass}` : ''}">${card.value}</div>
        <div class="sub">${card.sub}</div>
      </article>
    `).join('');
  }

  function createChart() {
    const canvas = document.getElementById('rateChart');
    const ctx = canvas.getContext('2d');
    const data = getFilteredData();

    if (chart) chart.destroy();

    const gradient = ctx.createLinearGradient(0, 0, 0, 320);
    gradient.addColorStop(0, ACCENT + '55');
    gradient.addColorStop(1, ACCENT + '05');

    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(d => formatDate(d.date, currentRange)),
        datasets: [{
          label: 'USD/JPY',
          data: data.map(d => d.value),
          borderColor: ACCENT,
          backgroundColor: gradient,
          borderWidth: 2,
          pointRadius: data.length > 24 ? 0 : 4,
          pointHoverRadius: 6,
          pointBackgroundColor: ACCENT,
          pointBorderColor: '#171a22',
          pointBorderWidth: 2,
          fill: true,
          tension: 0.3,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: 'index' },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1e2230',
            titleColor: '#e8eaef',
            bodyColor: '#e8eaef',
            borderColor: '#2a3040',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            titleFont: { family: Chart.defaults.font.family },
            bodyFont: { family: Chart.defaults.font.family },
            callbacks: {
              label: item => `¥${item.parsed.y.toFixed(2)}`
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: '#8b93a7',
              font: { family: Chart.defaults.font.family, size: 11 },
              maxTicksLimit: 12,
              maxRotation: 0,
            },
            border: { display: false },
          },
          y: {
            grid: { color: '#2a3040' },
            ticks: {
              color: '#8b93a7',
              font: { family: Chart.defaults.font.family, size: 11 },
              callback: value => '¥' + value.toFixed(0),
            },
            border: { display: false },
          }
        }
      }
    });
  }

  function renderTable() {
    const tbody = document.getElementById('rateTableBody');
    const data = getFilteredData();
    tbody.innerHTML = data.map((d, i) => {
      const prev = i > 0 ? data[i - 1].value : d.value;
      const change = d.value - prev;
      const pct = prev !== 0 ? (change / prev * 100) : 0;
      const isUp = change >= 0;
      const arrow = isUp ? '▲' : '▼';
      const changeClass = isUp ? 'change-up' : 'change-down';
      return `<tr>
        <td>${formatDate(d.date, currentRange)}</td>
        <td class="num">¥${d.value.toFixed(2)}</td>
        <td class="num ${changeClass}">${arrow} ${Math.abs(change).toFixed(2)}</td>
        <td class="num ${changeClass}">${isUp ? '+' : ''}${pct.toFixed(2)}%</td>
      </tr>`;
    }).reverse().join('');
  }

  function setRange(range) {
    currentRange = range;
    document.querySelectorAll('.range-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.range === range);
    });
    const data = getFilteredData();
    renderSummary(data);
    createChart();
    renderTable();
  }

  document.querySelectorAll('.range-btn').forEach(btn => {
    btn.addEventListener('click', () => setRange(btn.dataset.range));
  });

  setRange('1Y');
}

initApp();
