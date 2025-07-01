let total = 0;

function adicionar(valor: number): number {
    // 🚫 Evita isso: total += valor;
    // ✅ Faz isso:
    return total + valor;
}

console.log(adicionar(5)); // 5
console.log(adicionar(10)); // 10
