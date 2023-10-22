<template>
    <div class="footer">
        <div class="footer-container">
            <div class="footer-img-box"><img src="/images/footer.png" alt="tesodev"></div>
            <div class="footer-text-box">
                <div class="contact-title">İletişim</div>
                <div class="adress-text">Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No:
                    151/1F İç Kapı No: 2B03 Esenler/İstanbul</div>
                <div class="email-text">
                    <address>Email: <a href="mailto:bilgi@tesodev.com" type="email"> bilgi@tesodev.com</a></address>
                </div>
            </div>
            <div class="footer-iframe-box"><iframe title="tesodev"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1095.472508460948!2d28.89196086027378!3d41.01964023009506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1658795979073!5m2!1str!2str"
                    width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>
<style scoped>
.footer {
    background: rgba(41, 78, 152, 0.72);
}

.footer-container {
    display: flex;
    padding: 2rem 3.5rem;
    justify-content: space-between;
    align-items: center;
}

.footer-text-box {
    padding: 0 30px;
    color: #fff;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 18px;
    line-height: 21px;
}

.contact-title {
    font-weight: 700;
}

.adress-text {
    margin-bottom: 60px;
}

.email-text a {
    color: #fff;
    text-decoration: none;
}

.footer-iframe-box iframe {
    width: 32rem;
    height: 13rem
}
</style>