export function ContactCTA() {
    const whatsappNumber = "5548996040786";
    const message = encodeURIComponent("Olá, vim pelo seu site. Quero engajar minhas redes sociais!");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <div className="flex justify-center w-full pt-6">
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto bg-orange-400 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center block"
        >
            Quero engajar minhas redes sociais
        </a>

        </div>
    );
}
