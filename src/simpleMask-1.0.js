function prefixRealMask(e) {
    let r = e.value.replace(/\D/g, '');

    r = r.replace(/(\d{1,})(\d{2})$/, '$1,$2');
    r = r.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    e.value = 'R$ ' + r;
}

function RealMask(e) {
    let r = e.value.replace(/\D/g, '');

    r = r.replace(/(\d{1,})(\d{2})$/, '$1,$2');
    r = r.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    e.value = r;
}

function cpfMask(e) {
    let r = e.value.replace(/\D/g, '');

    if (r.length > 11) {
        r = r.slice(0, 11);
    }

    r = r.replace(/(\d{3})(\d)/, '$1.$2');
    r = r.replace(/(\d{3})(\d)/, '$1.$2');
    r = r.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    e.value = r;
}

function cnpjMask(e) {
    let r = e.value.replace(/\D/g, '');

    if (r.length > 14) {
        r = r.slice(0, 14);
    }

    r = r.replace(/(\d{2})(\d)/, '$1.$2');
    r = r.replace(/(\d{3})(\d)/, '$1.$2');
    r = r.replace(/(\d{3})(\d)/, '$1/$2');
    r = r.replace(/(\d{4})(\d{1,2})$/, '$1-$2');

    e.value = r;
}

function numberMask(e) {
    let r = e.value.replace(/\D/g, '');

    e.value = r;
}

function cellPhoneMask(e) {
    let r = e.value.replace(/\D/g, '');

    if (r.length > 11) {
        r = r.slice(0, 11);
    }

    r = r.replace(/(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

    e.value = r;
}

function phoneMask(e) {
    let r = e.value.replace(/\D/g, '');

    if (r.length > 8) {
        r = r.slice(0, 8);
    }

    r = r.replace(/(\d{4})(\d{4})$/, '$1-$2');

    e.value = r;
}

function cepMask(e) {
    let r = e.value.replace(/\D/g, '');

    if (r.length > 8) {
        r = r.slice(0, 8);
    }

    r = r.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1.$2-$3');

    e.value = r;
}

function inscricaoEstadualMask(e) {
    let r = e.value.replace(/\D/g, '');

    if (r.length > 9) {
        r = r.slice(0, 9);
    }

    r = r.replace(/^(\d{2})(\d{6})(\d{1})$/, '$1.$2-$3');

    e.value = r;
}