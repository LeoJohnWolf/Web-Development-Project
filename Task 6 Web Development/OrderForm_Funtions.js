  function orderSummary(){
    // Initialize variables to store order summary and total cost
    let buyer = document.getElementById("name").value;
    let orderSummary = "<h2>" + buyer + " Your Order Summary:</h2><ul>";
    let totalCost = 0;
    
    // Get form inputs
    let cpu = document.getElementById("cpu").value;
    let cpuQuantity = parseInt(document.getElementById("cpu-quantity").value);
    let gpu = document.getElementById("gpu").value;
    let gpuQuantity = parseInt(document.getElementById("gpu-quantity").value);
    let ram = document.getElementById("ram").value;
    let ramQuantity = parseInt(document.getElementById("ram-quantity").value);
    let storage = document.getElementById("storage").value;
    let storageQuantity = parseInt(document.getElementById("storage-quantity").value);
    let motherboard = document.getElementById("motherboard").value;
    let motherboardQuantity = parseInt(document.getElementById("motherboard-quantity").value);
    let caseItem = document.getElementById("case").value;
    let caseQuantity = parseInt(document.getElementById("case-quantity").value);
    
    // Calculate total cost for each component and add to order summary
    totalCost += cpuQuantity * 199.99; // Assuming CPU costs $100
    orderSummary += `<li>CPU: ${cpu} (Quantity: ${cpuQuantity})</li>`;
    totalCost += gpuQuantity * 349.99; // Assuming GPU costs $200
    orderSummary += `<li>GPU: ${gpu} (Quantity: ${gpuQuantity})</li>`;
    totalCost += ramQuantity * 149.99; // Assuming RAM costs $50
    orderSummary += `<li>RAM: ${ram} (Quantity: ${ramQuantity})</li>`;
    totalCost += storageQuantity * 99.99; // Assuming Storage costs $80
    orderSummary += `<li>Storage: ${storage} (Quantity: ${storageQuantity})</li>`;
    totalCost += motherboardQuantity * 129.99; // Assuming Motherboard costs $150
    orderSummary += `<li>Motherboard: ${motherboard} (Quantity: ${motherboardQuantity})</li>`;
    totalCost += caseQuantity * 49.99; // Assuming Case costs $100
    orderSummary += `<li>Case: ${caseItem} (Quantity: ${caseQuantity})</li>`;
    
    orderSummary += "</ul>";
    orderSummary += `Total Cost: $${totalCost.toFixed(2)}`;
    
    // Display order summary
    document.getElementById("order-summary").innerHTML = orderSummary;
  };
  
function resetForm(){
    // Reset form fields to their default values
    document.getElementById("order-form").reset();

    // Clear the order summary
    document.getElementById("order-summary").innerHTML = "";
}
  