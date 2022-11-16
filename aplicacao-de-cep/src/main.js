const input = document.querySelector("input");
const button = document.querySelector("button");
const pre = document.querySelector("pre");

button.addEventListener("click", async () => {
  const cep = input.value;
  try {
    const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await request.json();
    
    pre.innerHTML = JSON.stringify(data);
  } catch (error) {
    console.log(error);
  }
});
