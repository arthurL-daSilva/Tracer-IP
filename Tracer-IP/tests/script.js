function formatInput() {
    const input = document.getElementById('formatted-input');
    let value = input.value.replace(/\D/g, '');

    if (value.length > 4) {
        value = value.replace(/(\d{2})(\d{2})(\d{2})(\d{1})/, '$1.$2.$3.$4');
    } else if (value.length > 2) {
        value = value.replace(/(\d{2})(\d{2})(\d{0,2})/, '$1.$2.$3');
    } else if (value.length > 0) {
        value = value.replace(/(\d{2})(\d{0,2})/, '$1.$2');
    }

    input.value = value;
}