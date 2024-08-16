const express = require('express');
const app = express();
const port = 3000;

const asmaulHusna = [
  { urutan: 1, latin: "Ar Rahman", arab: "الرحمن", arti: "Yang Maha Pengasih" },
  { urutan: 2, latin: "Ar Rahiim", arab: "الرحيم", arti: "Yang Maha Penyayang" },
  { urutan: 3, latin: "Al Malik", arab: "الملك", arti: "Yang Maha Merajai / Memerintah" },
  { urutan: 4, latin: "Al Quddus", arab: "القدوس", arti: "Yang Maha Suci" },
  { urutan: 5, latin: "As Salaam", arab: "السلام", arti: "Yang Maha Memberi Kesejahteraan" },
  { urutan: 6, latin: "Al Mu'min", arab: "المؤمن", arti: "Yang Maha Memberi Keamanan" },
  { urutan: 7, latin: "Al Muhaimin", arab: "المهيمن", arti: "Yang Maha Pemelihara" },
  { urutan: 8, latin: "Al Aziz", arab: "العزيز", arti: "Yang Maha Perkasa" },
  { urutan: 9, latin: "Al Jabbar", arab: "الجبار", arti: "Yang Memiliki Mutlak Kegagahan" },
  { urutan: 10, latin: "Al Mutakabbir", arab: "المتكبر", arti: "Yang Maha Megah, Yang Memiliki Kebesaran" },
  { urutan: 11, latin: "Al Khaliq", arab: "الخالق", arti: "Yang Maha Pencipta" },
  { urutan: 12, latin: "Al Baari", arab: "البارئ", arti: "Yang Maha Melepaskan (Membuat, Membentuk, Menyeimbangkan)" },
  { urutan: 13, latin: "Al Mushawwir", arab: "المصور", arti: "Yang Maha Membentuk Rupa (makhluknya)" },
  { urutan: 14, latin: "Al Ghaffar", arab: "الغفار", arti: "Yang Maha Pengampun" },
  { urutan: 15, latin: "Al Qahhar", arab: "القهار", arti: "Yang Maha Memaksa" },
  { urutan: 16, latin: "Al Wahhab", arab: "الوهاب", arti: "Yang Maha Pemberi Karunia" },
  { urutan: 17, latin: "Ar Razzaq", arab: "الرزاق", arti: "Yang Maha Pemberi Rezeki" },
  { urutan: 18, latin: "Al Fattah", arab: "الفتاح", arti: "Yang Maha Pembuka Rahmat" },
  { urutan: 19, latin: "Al Alim", arab: "العليم", arti: "Yang Maha Mengetahui (Memiliki Ilmu)" },
  { urutan: 20, latin: "Al Qaabidh", arab: "القابض", arti: "Yang Maha Menyempitkan" },
  { urutan: 21, latin: "Al Baasith", arab: "الباسط", arti: "Yang Maha Melapangkan" },
  { urutan: 22, latin: "Al Khaafidh", arab: "الخافض", arti: "Yang Maha Merendahkan" },
  { urutan: 23, latin: "Ar Raafi'", arab: "الرافع", arti: "Yang Maha Meninggikan" },
  { urutan: 24, latin: "Al Mu'izz", arab: "المعز", arti: "Yang Maha Memuliakan" },
  { urutan: 25, latin: "Al Mudzil", arab: "المذل", arti: "Yang Maha Merendahkan" },
  { urutan: 26, latin: "As Sami'", arab: "السميع", arti: "Yang Maha Mendengar" },
  { urutan: 27, latin: "Al Bashir", arab: "البصير", arti: "Yang Maha Melihat" },
  { urutan: 28, latin: "Al Hakam", arab: "الحكم", arti: "Yang Maha Menetapkan" },
  { urutan: 29, latin: "Al 'Adl", arab: "العدل", arti: "Yang Maha Adil" },
  { urutan: 30, latin: "Al Latif", arab: "اللطيف", arti: "Yang Maha Lembut" },
  { urutan: 31, latin: "Al Khabir", arab: "الخبير", arti: "Yang Maha Mengenal" },
  { urutan: 32, latin: "Al Haliim", arab: "الحليم", arti: "Yang Maha Penyantun" },
  { urutan: 33, latin: "Al 'Azhiim", arab: "العظيم", arti: "Yang Maha Agung" },
  { urutan: 34, latin: "Al Ghafuur", arab: "الغفور", arti: "Yang Maha Pengampun" },
  { urutan: 35, latin: "Ash Shakuur", arab: "الشكور", arti: "Yang Maha Pembalas Budi (Menghargai)" },
  { urutan: 36, latin: "Al 'Aliyy", arab: "العلي", arti: "Yang Maha Tinggi" },
  { urutan: 37, latin: "Al Kabiir", arab: "الكبير", arti: "Yang Maha Besar" },
  { urutan: 38, latin: "Al Hafizh", arab: "الحفيظ", arti: "Yang Maha Memelihara" },
  { urutan: 39, latin: "Al Muqiit", arab: "المقيت", arti: "Yang Maha Pemberi Kecukupan" },
  { urutan: 40, latin: "Al Hasiib", arab: "الحسيب", arti: "Yang Maha Membuat Perhitungan" },
  { urutan: 41, latin: "Al Jaliil", arab: "الجليل", arti: "Yang Maha Luhur" },
  { urutan: 42, latin: "Al Kariim", arab: "الكريم", arti: "Yang Maha Mulia" },
  { urutan: 43, latin: "Ar Raqiib", arab: "الرقيب", arti: "Yang Maha Mengawasi" },
  { urutan: 44, latin: "Al Mujiib", arab: "المجيب", arti: "Yang Maha Mengabulkan" },
  { urutan: 45, latin: "Al Waasi'", arab: "الواسع", arti: "Yang Maha Luas" },
  { urutan: 46, latin: "Al Hakiim", arab: "الحكيم", arti: "Yang Maha Bijaksana" },
  { urutan: 47, latin: "Al Waduud", arab: "الودود", arti: "Yang Maha Mengasihi" },
  { urutan: 48, latin: "Al Majiid", arab: "المجيد", arti: "Yang Maha Mulia" },
  { urutan: 49, latin: "Al Baa'its", arab: "الباعث", arti: "Yang Maha Membangkitkan" },
  { urutan: 50, latin: "Ash Shahiid", arab: "الشهيد", arti: "Yang Maha Menyaksikan" },
  { urutan: 51, latin: "Al Haqq", arab: "الحق", arti: "Yang Maha Benar" },
  { urutan: 52, latin: "Al Wakiil", arab: "الوكيل", arti: "Yang Maha Memelihara" },
  { urutan: 53, latin: "Al Qawiyy", arab: "القوي", arti: "Yang Maha Kuat" },
  { urutan: 54, latin: "Al Matiin", arab: "المتين", arti: "Yang Maha Kokoh" },
  { urutan: 55, latin: "Al Waliyy", arab: "الولي", arti: "Yang Maha Melindungi" },
  { urutan: 56, latin: "Al Hamiid", arab: "الحميد", arti: "Yang Maha Terpuji" },
  { urutan: 57, latin: "Al Muhshii", arab: "المحصي", arti: "Yang Maha Mengalkulasi" },
  { urutan: 58, latin: "Al Mubdi'", arab: "المبدئ", arti: "Yang Maha Memulai" },
  { urutan: 59, latin: "Al Mu'iid", arab: "المعيد", arti: "Yang Maha Mengembalikan Kehidupan" },
  { urutan: 60, latin: "Al Muhyii", arab: "المحيي", arti: "Yang Maha Menghidupkan" },
  { urutan: 61, latin: "Al Mumiit", arab: "المميت", arti: "Yang Maha Mematikan" },
  { urutan: 62, latin: "Al Hayyu", arab: "الحي", arti: "Yang Maha Hidup" },
  { urutan: 63, latin: "Al Qayyuum", arab: "القيوم", arti: "Yang Maha Mandiri" },
  { urutan: 64, latin: "Al Waajid", arab: "الواجد", arti: "Yang Maha Menemukan" },
  { urutan: 65, latin: "Al Maajid", arab: "الماجد", arti: "Yang Maha Mulia" },
  { urutan: 66, latin: "Al Waahid", arab: "الواحد", arti: "Yang Maha Tunggal" },
  { urutan: 67, latin: "Al Ahad", arab: "الاحد", arti: "Yang Maha Esa" },
  { urutan: 68, latin: "As Shamad", arab: "الصمد", arti: "Yang Maha Dibutuhkan, Tempat Meminta" },
  { urutan: 69, latin: "Al Qaadir", arab: "القادر", arti: "Yang Maha Menentukan, Maha Menyeimbangkan" },
  { urutan: 70, latin: "Al Muqtadir", arab: "المقتدر", arti: "Yang Maha Berkuasa" },
  { urutan: 71, latin: "Al Muqaddim", arab: "المقدم", arti: "Yang Maha Mendahulukan" },
  { urutan: 72, latin: "Al Mu'akhkhir", arab: "المؤخر", arti: "Yang Maha Mengakhirkan" },
  { urutan: 73, latin: "Al Awwal", arab: "الأول", arti: "Yang Maha Awal" },
  { urutan: 74, latin: "Al Aakhir", arab: "الأخر", arti: "Yang Maha Akhir" },
  { urutan: 75, latin: "Az Zhaahir", arab: "الظاهر", arti: "Yang Maha Nyata" },
  { urutan: 76, latin: "Al Baathin", arab: "الباطن", arti: "Yang Maha Ghaib" },
  { urutan: 77, latin: "Al Waali", arab: "الوالي", arti: "Yang Maha Memerintah" },
  { urutan: 78, latin: "Al Muta'aalii", arab: "المتعالي", arti: "Yang Maha Tinggi, Maha Agung" },
  { urutan: 79, latin: "Al Barr", arab: "البر", arti: "Yang Maha Penderma (Maha Pemberi Kebajikan)" },
  { urutan: 80, latin: "At Tawwaab", arab: "التواب", arti: "Yang Maha Penerima Tobat" },
  { urutan: 81, latin: "Al Muntaqim", arab: "المنتقم", arti: "Yang Maha Pemberi Balasan" },
  { urutan: 82, latin: "Al Afuww", arab: "العفو", arti: "Yang Maha Pemaaf" },
  { urutan: 83, latin: "Ar Ra'uuf", arab: "الرؤوف", arti: "Yang Maha Pengasuh" },
  { urutan: 84, latin: "Malikul Mulk", arab: "مالك الملك", arti: "Yang Maha Penguasa Kerajaan (Semesta)" },
  { urutan: 85, latin: "Dzul Jalaali Wal Ikraam", arab: "ذو الجلال و الإكرام", arti: "Yang Maha Pemilik Kebesaran dan Kemuliaan" },
  { urutan: 86, latin: "Al Muqsith", arab: "المقسط", arti: "Yang Maha Adil" },
  { urutan: 87, latin: "Al Jaami'", arab: "الجامع", arti: "Yang Maha Mengumpulkan" },
  { urutan: 88, latin: "Al Ghaniyy", arab: "الغني", arti: "Yang Maha Kaya" },
  { urutan: 89, latin: "Al Mughnii", arab: "المغني", arti: "Yang Maha Pemberi Kekayaan" },
  { urutan: 90, latin: "Al Maani'", arab: "المانع", arti: "Yang Maha Mencegah" },
  { urutan: 91, latin: "Ad Dhaar", arab: "الضار", arti: "Yang Maha Penimpa Kemudharatan" },
  { urutan: 92, latin: "An Naafi'", arab: "النافع", arti: "Yang Maha Memberi Manfaat" },
  { urutan: 93, latin: "An Nuur", arab: "النور", arti: "Yang Maha Bercahaya (Menerangi, Memberi Cahaya)" },
  { urutan: 94, latin: "Al Haadii", arab: "الهادي", arti: "Yang Maha Pemberi Petunjuk" },
  { urutan: 95, latin: "Al Badii'", arab: "البديع", arti: "Yang Maha Pencipta Yang Tiada Bandingannya" },
  { urutan: 96, latin: "Al Baaqii", arab: "الباقي", arti: "Yang Maha Kekal" },
  { urutan: 97, latin: "Al Waarits", arab: "الوارث", arti: "Yang Maha Pewaris" },
  { urutan: 98, latin: "Ar Rasyiid", arab: "الرشيد", arti: "Yang Maha Pandai" },
  { urutan: 99, latin: "As Shabuur", arab: "الصبور", arti: "Yang Maha Sabar" }
];

// Mengambil semua nama Asmaul Husna
app.get('/asmaul-husna', (req, res) => {
    res.status(200).json({
      statusCode: 200,
      total: asmaulHusna.length,
      data: asmaulHusna,
    });
  });
  
  // Mengambil nama Asmaul Husna berdasarkan urutan /asmaul-husna/1
  app.get('/asmaul-husna/:urutan', (req, res) => {
    const urutan = parseInt(req.params.urutan, 10);
    const result = asmaulHusna.find(item => item.urutan === urutan);
  
    if (result) {
      res.status(200).json({
        statusCode: 200,
        data: result,
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        message: 'Nama tidak ditemukan',
      });
    }
  });
  
  app.listen(port, () => {
    console.log(`Asmaul Husna API listening at http://localhost:${port}`);
  });
  