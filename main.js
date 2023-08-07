function formatearNumero(input) {
    // Eliminar cualquier guión presente antes de formatear
    input.value = input.value.replace(/-/g, '');

    // Insertar guiones después de cada grupo de tres dígitos
    if (input.value.length > 3) {
        input.value = input.value.slice(0, 3) + '-' + input.value.slice(3);
    }
    if (input.value.length > 7) {
        input.value = input.value.slice(0, 7) + '-' + input.value.slice(7);
    }
    if (input.value.length > 11) {
        input.value = input.value.slice(0, 11);
    }
};



function formatearCodigo(input) {
    // Eliminar cualquier guión presente antes de formatear
    input.value = input.value.replace(/-/g, '');

    // Agregar guiones después de cada grupo de caracteres
    if (input.value.length > 4) {
        input.value = input.value.slice(0, 4) + '-' + input.value.slice(4);
    }
    if (input.value.length > 9) {
        input.value = input.value.slice(0, 9) + '-' + input.value.slice(9);
    }
    if (input.value.length > 14) {
        input.value = input.value.slice(0, 14) + '-' + input.value.slice(14);
    }
    if (input.value.length > 17) {
        input.value = input.value.slice(0, 17) + '-' + input.value.slice(17);
    }
    if (input.value.length > 28) {
        input.value = input.value.slice(0, 28);
    }
}