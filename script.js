// Sayfa yüklendiğinde varsayılan sekmeyi aç
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen").click();
});

function openTab(evt, tabName) {
    // Değişken tanımlamaları
    var i, tabcontent, tablinks;

    // Tüm sekme içeriklerini gizle
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Tüm sekme butonlarından "active" sınıfını kaldır
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Tıklanan sekmeyi göster ve butonuna "active" sınıfını ekle
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Sayfa yüklendiğinde varsayılan sekmeyi aç
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen").click();
});

function openTab(evt, tabName) {
    // Değişken tanımlamaları
    var i, tabcontent, tablinks;

    // Tüm sekme içeriklerini gizle
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Tüm sekme butonlarından "active" sınıfını kaldır
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Tıklanan sekmeyi göster ve butonuna "active" sınıfını ekle
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    // Sayfa yüklendiğinde varsayılan sekmeyi aç
    document.getElementById("defaultOpen").click();

    // Butonlara olay dinleyicilerini ata
    const kaydetBtn = document.getElementById('kaydetBtn');
    const yukleBtn = document.getElementById('yukleBtn');
    const dosyaYukleInput = document.getElementById('dosyaYukleInput');

    // KAYDETME İŞLEMİ
    kaydetBtn.addEventListener('click', function() {
        // Tüm form elemanlarını seç
        const formElements = document.querySelectorAll('#genelBilgilerForm input, #genelBilgilerForm textarea, #kapsamForm input, #kapsamForm textarea');
        
        let raporVerisi = {};

        // Her form elemanının id'sini anahtar, değerini ise value olarak al
        formElements.forEach(element => {
            if (element.id) {
                raporVerisi[element.id] = element.value;
            }
        });

        // JavaScript objesini JSON formatında bir string'e çevir
        const jsonString = JSON.stringify(raporVerisi, null, 2); // null, 2 -> JSON'u okunabilir formatta yazar

        // JSON string'ini bir Blob (Binary Large Object) içine koy
        const blob = new Blob([jsonString], { type: 'application/json' });

        // Blob için geçici bir URL oluştur
        const url = URL.createObjectURL(blob);

        // Geçici bir link elemanı oluştur ve dosyayı indirmeyi tetikle
        const a = document.createElement('a');
        a.href = url;
        a.download = 'rapor.json'; // İndirilecek dosyanın adı
        document.body.appendChild(a);
        a.click();

        // Geçici linki ve URL'yi temizle
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        alert('Rapor "rapor.json" olarak indirildi!');
    });

    // YÜKLEME İŞLEMİ - Buton, gizli input'u tetikler
    yukleBtn.addEventListener('click', function() {
        dosyaYukleInput.click();
    });

    // Dosya seçildiğinde çalışacak fonksiyon
    dosyaYukleInput.addEventListener('change', function(event) {
        const dosya = event.target.files[0];
        if (!dosya) {
            return;
        }

        const okuyucu = new FileReader();

        okuyucu.onload = function(e) {
            try {
                // Dosya içeriğini parse et
                const yuklenenVeri = JSON.parse(e.target.result);
                
                // Parse edilen veriyi form alanlarına doldur
                for (const key in yuklenenVeri) {
                    const element = document.getElementById(key);
                    if (element) {
                        element.value = yuklenenVeri[key];
                    }
                }
                alert('Rapor başarıyla yüklendi!');
            } catch (error) {
                alert('Hata: Geçersiz JSON dosyası veya dosya okunamadı.\n' + error);
            }
        };

        okuyucu.onerror = function() {
            alert('Dosya okunurken bir hata oluştu.');
        };

        // Dosyayı metin olarak oku
        okuyucu.readAsText(dosya);

        // Aynı dosyayı tekrar seçebilmek için input'un değerini sıfırla
        event.target.value = '';
    });
});


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    // --- SABİTLER VE DEĞİŞKENLER ---
    const testTipleri = [
        { id: 'iletisimAltyapisi', ad: 'İletişim Altyapısı ve Aktif Cihazlar' },
        { id: 'dnsServisleri', ad: 'DNS Servisleri' },
        { id: 'etkiAlani', ad: 'Etki Alanı Ve Kullanıcı Bilgisayarları' },
        { id: 'epostaServisleri', ad: 'E-posta Servisleri' },
        { id: 'veritabaniSistemleri', ad: 'Veritabanı Sistemleri' },
        { id: 'webUygulamalar', ad: 'Web Uygulamalar' },
        { id: 'mobilUygulamalar', ad: 'Mobil Uygulamalar' },
        { id: 'kablosuzAg', ad: 'Kablosuz Ağ Sistemleri' },
        { id: 'ddosTestleri', ad: 'Dağıtık Servis Dışı Bırakma Testleri' },
        { id: 'sosyalMuhendislik', ad: 'Sosyal Mühendislik Testleri' }
    ];

    const tabContainer = document.getElementById('tab-container');
    const dynamicTabContents = document.getElementById('dynamic-tab-contents');
    const testTipiSelect = document.getElementById('testTipiSelect');
    const testTipiEkleBtn = document.getElementById('testTipiEkleBtn');
    const kaydetBtn = document.getElementById('kaydetBtn');
    const yukleBtn = document.getElementById('yukleBtn');
    const dosyaYukleInput = document.getElementById('dosyaYukleInput');

    // --- İLK YÜKLEME ---
    
    // Kapsam ekleme menüsünü doldur
    testTipleri.forEach(tip => {
        const option = document.createElement('option');
        option.value = tip.id;
        option.textContent = tip.ad;
        testTipiSelect.appendChild(option);
    });

    // Varsayılan sekmeyi aç
    document.getElementById("defaultOpen").click();

    // --- OLAY DİNLEYİCİLERİ ---

    testTipiEkleBtn.addEventListener('click', () => {
        const selectedId = testTipiSelect.value;
        const selectedText = testTipiSelect.options[testTipiSelect.selectedIndex].text;
        yeniKapsamSekmesiOlustur(selectedId, selectedText);
    });

    kaydetBtn.addEventListener('click', kaydetRapor);
    yukleBtn.addEventListener('click', () => dosyaYukleInput.click());
    dosyaYukleInput.addEventListener('change', yukleRapor);

    // --- DINAMIK UI FONKSİYONLARI ---

    function yeniKapsamSekmesiOlustur(id, ad, maddeler = []) {
        if (document.getElementById(`tab-${id}`)) {
            alert(`"${ad}" sekmesi zaten mevcut.`);
            return;
        }

        const tabButton = document.createElement('button');
        tabButton.className = 'tablinks';
        tabButton.id = `tab-${id}`;
        tabButton.textContent = ad;
        tabButton.onclick = (event) => openTab(event, `content-${id}`);
        tabContainer.appendChild(tabButton);

        const tabContent = document.createElement('div');
        tabContent.id = `content-${id}`;
        tabContent.className = 'tabcontent dynamic-content';
        tabContent.dataset.kapsamId = id;

        const h3 = document.createElement('h3');
        h3.textContent = ad;
        
        const maddeListesi = document.createElement('ul');
        maddeListesi.className = 'madde-listesi';

        const maddeEkleBtn = document.createElement('button');
        maddeEkleBtn.className = 'madde-ekle-btn';
        maddeEkleBtn.textContent = 'Yeni Madde Ekle';
        maddeEkleBtn.onclick = () => yeniMaddeEkle(maddeListesi);

        tabContent.appendChild(h3);
        tabContent.appendChild(maddeListesi);
        tabContent.appendChild(maddeEkleBtn);
        dynamicTabContents.appendChild(tabContent);

        maddeler.forEach(maddeMetni => yeniMaddeEkle(maddeListesi, maddeMetni));
        tabButton.click();
    }

    function yeniMaddeEkle(listeElementi, maddeMetni = '') {
        const li = document.createElement('li');
        li.className = 'madde-item';
        const textarea = document.createElement('textarea');
        textarea.className = 'madde-text';
        textarea.rows = 1;
        textarea.placeholder = 'Kapsam maddesini buraya yazın...';
        textarea.value = maddeMetni;
        const silBtn = document.createElement('button');
        silBtn.className = 'madde-sil-btn';
        silBtn.textContent = 'Sil';
        silBtn.onclick = () => li.remove();
        li.appendChild(textarea);
        li.appendChild(silBtn);
        listeElementi.appendChild(li);
    }

    // --- KAYDETME VE YÜKLEME FONKSİYONLARI ---

    function kaydetRapor() {
        let raporVerisi = {
            genelBilgiler: {},
            kapsamlar: {}
        };
        
        document.querySelectorAll('#genelBilgilerForm input, #genelBilgilerForm textarea').forEach(element => {
            if (element.id) raporVerisi.genelBilgiler[element.id] = element.value;
        });

        document.querySelectorAll('.dynamic-content').forEach(content => {
            const kapsamId = content.dataset.kapsamId;
            const maddeler = [];
            content.querySelectorAll('.madde-text').forEach(textarea => {
                maddeler.push(textarea.value);
            });
            raporVerisi.kapsamlar[kapsamId] = maddeler;
        });
        
        const jsonString = JSON.stringify(raporVerisi, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'rapor.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function yukleRapor(event) {
        const dosya = event.target.files[0];
        if (!dosya) return;

        const okuyucu = new FileReader();
        okuyucu.onload = function(e) {
            try {
                const yuklenenVeri = JSON.parse(e.target.result);
                
                // Mevcut tüm dinamik verileri temizle
                document.querySelectorAll('.dynamic-content, .tablinks[id^="tab-"]').forEach(el => el.remove());
                document.getElementById('genelBilgilerForm').reset();

                // Genel bilgileri doldur
                if (yuklenenVeri.genelBilgiler) {
                    for (const key in yuklenenVeri.genelBilgiler) {
                        const element = document.getElementById(key);
                        if (element) element.value = yuklenenVeri.genelBilgiler[key];
                    }
                }

                // Dinamik kapsamları ve maddeleri oluştur
                if (yuklenenVeri.kapsamlar) {
                    for (const kapsamId in yuklenenVeri.kapsamlar) {
                        const tip = testTipleri.find(t => t.id === kapsamId);
                        if (tip) {
                            yeniKapsamSekmesiOlustur(tip.id, tip.ad, yuklenenVeri.kapsamlar[kapsamId]);
                        }
                    }
                }
                
                alert('Rapor başarıyla yüklendi!');
                document.getElementById('defaultOpen').click();
            } catch (error) {
                alert('Hata: Geçersiz JSON dosyası veya dosya okunamadı.\n' + error);
            }
        };
        okuyucu.readAsText(dosya);
        event.target.value = '';
    }
});

// --- SEKME YÖNETİMİ ---
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    const currentTab = document.getElementById(tabName);
    if(currentTab) {
        currentTab.style.display = "block";
    }
    if (evt.currentTarget) {
        evt.currentTarget.className += " active";
    }
}