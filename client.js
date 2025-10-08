//Kliens oldali szkript az adatok küldésére és fogadására a REST API számára
//async/await módszer

async function calculate(operator){
    //Az input mezők adatainak az elérése
    const num1 =parseFloat( document.getElementById('num1').value);
    const num2 =parseFloat( document.getElementById('num2').value);


    if (isNaN (num1) || isNaN(num2)){
        document.getElementById('result').textContent = "Kérem adjon meg egy számot!";
    }

    const response = await fetch('http://localhost:3000/api/math', {
        method: 'POST',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify({num1, num2, operator})
    });

    const data = await response.json();
    document.getElementById('result').textContent = data.result;
}