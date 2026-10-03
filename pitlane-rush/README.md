# Pitlane Rush — Açık Dünya

Tarayıcıda çalışan özgün 3D sürüş prototipi. Yedi parkur (deniz otoyolu, dağ, çöl, neon şehir, orman, kanyon ve karlı geçit), 15 seçilebilir araç, gündüz/gece, 4–64 yarışçı ve üç zorluk seviyesi içerir. Varsayılan yarış 64 katılımcı ve 8 şeritle başlar. Sert zorlukta rakipler daha hızlı hızlanır ve daha yüksek son hıza ulaşır. Gaz basılıyken seçili araca göre ayarlanmış motor kaydı, devirle beraber yükselen ses perdesi ve ses düzeyiyle çalar.

Grafik katmanı Three.js ile yerel üretilir: prosedürel asfalt dokusu, yansıtıcı boya ve jant malzemeleri, far ışık huzmeleri, yol kenarı reflektörleri, modüler aerodinamik parçalar ve drift dumanı içerir. Dışarıdan indirilmiş ticari model veya lisansı belirsiz grafik paketi kullanmaz; oyun internet bağlantısı olmadan da dosyadan açılabilir.

## Menü akışı
İlk ekranda **Garaja Gir** ile araç seçimi ve tam ekran 3D showroom açılır. Alt bölümden boya, jant, lastik, tampon, spoiler, kaput, araç yüksekliği ve taban ışığını ayarla; seçimler tarayıcının yerel deposuna kaydedilir. **Yarış Menüsüne Geç** düğmesi parkur, saat, yarışçı sayısı, şerit, zorluk, kamera, vites, müzik ve motor sesi ayarlarını açar. **Hızlı Yarış** garajı atlayıp bu ayar ekranını açar.

## Çalıştırma
`index.html` dosyasını güncel Chrome veya Edge'de aç. Three.js kütüphanesi `vendor` klasöründedir. Arayüz ekran alanına göre daralır ve seçenekleri satırlara böler; sayfa kaydırma çubukları kullanılmaz.

## Kontroller
- W / Yukarı ok: gaz
- S / Aşağı ok: fren ve geri vites
- A, D / Sol, Sağ ok: direksiyon
- Shift: nitro
- Space: el freni ve drift
- Q / E: manuel vites küçült / büyüt (ayar ekranında manuel seç)
- Kokpit / takip kamerası yarış içinde ekrandaki düğmeden veya C tuşuyla değiştirilir; araç modifiyeleri yarıştan önce garajda yapılır
- Esc: duraklat
- Enter: sürüşü başlat

Skor ve toplam mesafe tarayıcıda saklanır. Three.js MIT lisansı vendor/THREE-LICENSE.txt dosyasındadır.
## Ses kaydı ve lisans
Gerçek araç çalıştırma ve sürüş kaydı: “Starting a car and driving”, Stephan, Wikimedia Commons, kamu malı: https://commons.wikimedia.org/wiki/File:Starting_a_car_and_driving.ogg


Diğer motor kayıtları:
- Rover V8 (engine-v8.ogg), Collard, kamu malı: https://commons.wikimedia.org/wiki/File:Rover-v8-rr79.ogg
- Ferrari 250 GTO (engine-classic.ogg), Provo rossi, CC BY 4.0: https://commons.wikimedia.org/wiki/File:Ferrari_250_GTO,_Engine_Sound.ogg
- Oyun içi müzikler Web Audio ile özgün olarak üretilir.
