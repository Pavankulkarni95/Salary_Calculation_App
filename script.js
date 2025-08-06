document.getElementById('salary-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const basic = parseFloat(document.getElementById('basic').value);
  const hra = parseFloat(document.getElementById('hra').value);
  const allowances = parseFloat(document.getElementById('allowances').value);
  const deductions = parseFloat(document.getElementById('deductions').value);

  const gross = basic + hra + allowances;
  const net = gross - deductions;

  document.getElementById('results').innerHTML =
    `<p>Gross Salary: ₹${gross.toFixed(2)}</p>
     <p>Net Salary: ₹${net.toFixed(2)}</p>`;
});
