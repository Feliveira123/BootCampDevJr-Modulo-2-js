const prods = [
  { id: 1, name: "Bife com batata", price: 30.0 },
  { id: 2, name: "Coxa de frango crocante", price: 25.0 },
  { id: 3, name: "Carne de panela", price: 22.0 },
  { id: 4, name: "Farofa", price: 10.0 },
  { id: 5, name: "Mini salada", price: 8.0 },
  { id: 6, name: "Torresmo", price: 12.0 },
];

function calc() {
  let quantities = document.getElementsByName("quantity");

  let output = document.getElementById("output");

  let total = 0;

  let formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
  });

  const userName = document.getElementById("nome").value || "Anônimo";
  
  let selectedProducts = []; 

  for (product of prods) {
      const quantity = quantities[product.id - 1].value;

      if (quantity > 0) {
          total += quantity * product.price;
          selectedProducts.push({ name: product.name, totalPrice: quantity * product.price });
      }
  }

  
  if (selectedProducts.length > 0) {
      output.innerHTML = `Caro(a) <span style="font-weight: 600">${userName}</span>.<br><br><br>Seguem os dados do seu pedido.`;
      selectedProducts.forEach(selectedProduct => {
          output.innerHTML +=`<ul><li>${selectedProduct.name} - ${formatter.format(selectedProduct.totalPrice)}</li></ul>`;
      });
      output.innerHTML += `<p style="margin-top: 50px; margin-bottom: 10px; font-weight: 600; font-size: 17px;">Preço final: ${formatter.format(total)}</p>`;
  } else {
      output.innerHTML = `Caro(a) <span style="font-weight: 600">${userName}</span>, por favor selecione um prato`;
  }
}