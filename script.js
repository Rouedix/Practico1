document.addEventListener("DOMContentLoaded", function()
 // Obtener referencias a los elementos del DOM 
 {
    const op1Input = document.getElementById("op1");
    const op2Input = document.getElementById("op2");
    const operatorSelect = document.getElementById("operar");
    const calculateButton = document.getElementById("calcular");
    const resultParagraph = document.getElementById("result");
 
    // Agregar evento de clic al botón de calcular
    calculateButton.addEventListener("click", function() {
        
        // Obtener operandos y operador
        const op1 = parseFloat(op1Input.value);
        const op2 = parseFloat(op2Input.value);
        const operador = operatorSelect.value;
       
        // Validar si los operandos son números válidos
        if (isNaN(op1) || isNaN(op2)) {
            resultParagraph.textContent = "Error: Solo puede ingresar numeros";
            return;
        }
        
        // Realizar la operación según el operador
        let resultado;
        switch (operador) {
            case "+":
                result = op1 + op2;
                break;
            case "-":
                result = op1 - op2;
                break;
            case "*":
                result = op1 * op2;
                break;
            case "/":
                if (op2 === 0) {
                    resultParagraph.textContent = "Error: No se puede dividir por cero";
                    return;
                }
                result = op1 / op2;
                break;
            default:
                resultParagraph.textContent = "Error: Operador no válido";
                return;
        }
        
        // Mostrar el resultado en la interfaz de usuario
        resultParagraph.textContent = "Resultado: " + result;
    });
    
    // Agregar evento de clic al botón de borrar
    const clearButton = document.getElementById("borrar");

    clearButton.addEventListener("click", function()
     // Limpiar campos y resultado 
     {
        op1Input.value = "";
        op2Input.value = ""; 
        resultParagraph.textContent = "";
    });
});