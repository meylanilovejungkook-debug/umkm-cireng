function pesan(namaProduk) {
    const nomorWhatsApp = "6281234567890";

    const pesanWhatsApp =
        "Halo, saya ingin memesan " + namaProduk +
        " dari Cireng Crispy Mantul.";

    const url = "https://wa.me/" + nomorWhatsApp +
        "?text=" + encodeURIComponent(pesanWhatsApp);

    window.open(url, "_blank");
}

function hubungi() {
    const nomorWhatsApp = "6281234567890";

    const pesanWhatsApp =
        "Halo, saya ingin bertanya tentang produk Cireng Crispy Mantul.";

    window.open(
        "https://wa.me/" + nomorWhatsApp +
        "?text=" + encodeURIComponent(pesanWhatsApp),
        "_blank"
    );
}

