export const clinics = [
  {
    id: "hazi-aslanov",
    name: "Həzi Aslanov Filialı",
    address:  "Xətai rayonu, İlqar Zülfüqarov küçəsi 161, Bakı, Azərbaycan",
    phone: "994503263223",
    whatsapp: "994503263223",
    doctors: [
      {
        id: 8,
        name: "Dr. İsgəndər Manafov",
        specialty: "Direktor",
        experience: "3",
        image: "/images/doctors/isgenderdoc.jpg",
        whatsapp: "994503263223",
        branch: "hazi-aslanov"
      },
      {
        id: 1,
        name: "Dr. Aytən Zamanova",
        specialty: "Baş həkim",
        experience: "4",
        image: "/images/doctors/drayten.png",
        whatsapp: "994503263223",
        branch: "hazi-aslanov"
      },
      {
        id: 2,
        name: "Dr. Nurlan Cavadzadə",
        specialty: "Ortoped Stomatoloq",
        experience: "4",
        image: "/images/doctors/javadzadeh.jpg",
        whatsapp: "994503263223",
        branch: "hazi-aslanov"
      },
      {
        id: 4,
        name: "Dr. Ayşən Abbaslı",
        specialty: "Pedodont, Ortodont",
        experience: "3",
        image: "/images/doctors/dr_aysen.jpg",
        whatsapp: "994503263223",
        branch: "hazi-aslanov"
      }
    ]
  },
  {
    id: "ganjlik",
    name: "Gənclik Filialı",
    address:"Ayna Sultanova küçəsi, Şəmsi Rəhimov 55c, Bakı, Azərbaycan" ,
    phone: "994503263223",
    whatsapp: "994503263223",
    doctors: [
      {
        id: 8,
        name: "Dr. İsgəndər Manafov",
        specialty: "Direktor",
        experience: "3",
        image: "/images/doctors/isgenderdoc.jpg",
        whatsapp: "994503263223",
        branch: "ganjlik"
      },
      {
        id: 1,
        name: "Dr. Aytən Zamanova",
        specialty: "Baş həkim",
        experience: "4",
        image: "/images/doctors/drayten.png",
        whatsapp: "994503263223",
        branch: "ganjlik"
      },
      {
        id: 4,
        name: "Dr. Ayşən Abbaslı",
        specialty: "Pedodont, Ortodont",
        experience: "3",
        image: "/images/doctors/dr_aysen.jpg",
        whatsapp: "994503263223",
        branch: "ganjlik"
      },
      {
        id: 2,
        name: "Dr. Nurlan Cavadzadə",
        specialty: "Ortoped Stomatoloq",
        experience: "4",
        image: "/images/doctors/javadzadeh.jpg",
        whatsapp: "994503263223",
        branch: "ganjlik"
      },
      {
        id: 6,
        name: "Dr. Zülfüqar Baxşılı",
        specialty: "Endodont",
        experience: "3",
        image: "/images/doctors/placeholder.jpg",
        whatsapp: "994503263223",
        branch: "ganjlik"
      },
      {
        id: 7,
        name: "Dr. Aysu İsmayılova",
        specialty: "Endodont",
        experience: "4",
        image: "/images/doctors/aysu.jpg",
        whatsapp: "994503263223",
        branch: "ganjlik"
      }
    ]
  }
];

export const doctorData = {
    8: {
      name: "Dr. İsgəndər Manafov",
      specialty: "Direktor",
      specialtyFull: "Klinika Direktoru",
      experience: "3",
      image: "/images/doctors/isgenderdoc.jpg",
      education: "Azərbaycan Tibb Universiteti, Səhiyyə Menecmenti və İdarəetmə",
      bio: "Dr. İsgəndər Manafov Dentallux Klinikasının direktoru olaraq, ən yüksək keyfiyyətli xəstə qayğısı və xidmət mükəmməlliyi təmin etmək üçün bütün əməliyyatlara nəzarət edir. 3 illik səhiyyə menecmenti təcrübəsi ilə müasir, pasiyent mərkəzli stomatologiya vizyonu ilə klinikaları idarə edir.",
      expertise: ["Klinika İdarəetməsi", "Səhiyyə İdarəçiliyi", "Strateji Planlaşdırma", "Pasiyent Əlaqələri"],
      services: ["Klinika İdarəçiliyi", "Pasiyent Konsultasiyası", "Müalicə Koordinasiyası", "Keyfiyyətə Nəzarət"],
      branch: "Həzi Aslanov & Gənclik",
      schedule: {
        days: "Bazar ertəsi - Şənbə",
        hours: "09:00 - 18:00",
        note: "Konsultasiyalar üçün görüşlə əlçatandır"
      }
    },
    1: {
      name: "Dr. Aytən Zamanova",
      specialty: "Baş həkim",
      specialtyFull: "Baş Həkim və Ümumi Stomatologiya Mütəxəssisi",
      experience: "4",
      image: "/videos/ayten.mp4",
      education: "Azərbaycan Tibb Universiteti, Stomatologiya və Klinika Menecmenti Mütəxəssisi",
      bio: "Dr. Aytən Zamanova 4 illik geniş təcrübəyə malik Baş Həkimdir və ümumi stomatologiya və klinika idarəetməsi sahəsində ixtisaslaşıb. O, bütün müalicələrdə ən yüksək standartlarda pasiyent qayğısını təmin edir, komandamızı ekspertiza və mükəmməlliyə sadiqlik ilə idarə edir.",
      expertise: ["Klinika İdarəetməsi və Rəhbərlik", "Ümumi Stomatologiya", "Müalicə Planlaşdırılması və Koordinasiya", "Pasiyent Qayğısı Standartları"],
      services: ["Əhatəli Diş Müayinələri", "Diş Təmizləməsi və Gigiyena", "Bərpaedici Stomatologiya", "Klinikaya Nəzarət və Keyfiyyətə Nəzarət", "Pasiyent Konsultasiyası", "Müalicəyə Nəzarət"],
      branch: "Həzi Aslanov & Gənclik",
      schedule: {
        days: "Həftə içi",
        hours: "10:00 - 17:00",
        note: "Bazar günü: Bağlı"
      }
    },
    2: {
      name: "Dr. Nurlan Cavadzadə",
      specialty: "Ortoped Stomatoloq",
      specialtyFull: "Ortoped Stomatoloq və Protez Mütəxəssisi",
      experience: "4",
      image: "/images/doctors/javadzadeh.jpg",
      education: "Azərbaycan Tibb Universiteti, Ortoped Stomatologiya və Protez Mütəxəssisi",
      bio: "Dr. Nurlan Cavadzadə 4 illik peşəkar təcrübəyə malik yüksək ixtisaslı ortoped stomaotoloqdur və kronlar, körpülər və diş protezləri üzrə ixtisaslaşıb. Onun ekspertizası mükəmməl funksional və estetik nəticələr təmin edir, qabaqcıl texnikaları bədii dəqiqliklə birləşdirərək gözəl və təbii görünüşlü təbəssümlər bərpa edir.",
      expertise: ["Diş Kronları və Körpüləri", "Protez Stomatologiya", "Təbəssüm Dizaynı və Bərpası", "Funksional Diş Reabilitasiyası"],
      services: ["Çini və Keramika Kronlar", "Sabit və Çıxarıla Bilən Körpülər", "Tam və Qismən Protezlər", "İmplantla Dəstəklənən Protezlər", "Təbəssümün Yenilənməsi", "Diş Vinirlər"],
      branch: "Həzi Aslanov & Gənclik",
      schedule: {
        days: "Hər gün",
        hours: "11:00 - 19:30",
        note: "Bazar günü: Bağlı"
      }
    },
    4: {
      name: "Dr. Ayşən Abbaslı",
      specialty: "Pedodont, Ortodont",
      specialtyFull: "Uşaq Stomatoloqu və Ortodont",
      experience: "3",
      image: "/videos/aytenabbasli.mp4",
      education: "Azərbaycan Tibb Universiteti, Pedodont və Ortodontiya Mütəxəssisi",
      bio: "Dr. Ayşən Abbaslı 3 illik peşəkar təcrübəyə malik yüksək təcrübəli pedodont və ortodontdur. O, uşaqlar üçün müsbət diş təcrübələri yaratmaqda ixtisaslaşır və eyni zamanda hər yaş qrupundakı pasiyentlər üçün əhatəli ortodontik həllər təqdim edir. Onun zərif yanaşması və uşaq psixologiyası sahəsində ekspertizası onu keyfiyyətli diş qayğısı axtaran ailələr üçün mükəmməl seçim edir.",
      expertise: ["Pedodont Stomatologiya", "Ortodontik Müalicə Planlaşdırılması", "Erkən Müdaxilə Ortodontiyası", "Uşaq Davranışı İdarəetməsi"],
      services: ["Uşaqlar üçün Diş Müayinələri", "Ortodontik Breketlər və Düzəldicilər", "Profilaktik Qayğı və Flüor Müalicələri", "Diş İnkişafına Nəzarət", "Erkən Ortodontik Qiymətləndirmə", "Uşaqlarda Çürüklərin Müalicəsi"],
      branch: "Həzi Aslanov & Gənclik",
      schedule: {
        days: "B.e, Ç.a, C: 11:00-19:00 | Şənbə: 11:00-15:00",
        hours: "Günə görə dəyişir",
        note: "Bazar günü: Bağlı"
      }
    },
    6: {
      name: "Dr. Zülfüqar Baxşılı",
      specialty: "Endodont",
      specialtyFull: "Kanal Müalicəsi Mütəxəssisi və Endodontik Ekspert",
      experience: "3",
      image: "/images/doctors/placeholder.jpg",
      education: "Azərbaycan Tibb Universiteti, Qabaqcıl Endodontika və Mikrocərrahiyyə Mütəxəssisi",
      bio: "Dr. Zülfüqar Baxşılı 3 illik peşəkar təcrübəyə malik yüksək ixtisaslı endodontistdir və kanal müalicəsi üzrə ixtisaslaşıb. O, ağrısız prosedurlar və uğurlu diş qorunması təmin edərək, qabaqcıl texnikalarla kanal müalicəsinə və təbii dişlərin xilas edilməsinə fokuslanır.",
      expertise: ["Qabaqcıl Kanal Müalicəsi", "Endodontik Mikrocərrahiyyə", "Diş Ağrısı İdarəetməsi", "Təbii Diş Qorunması"],
      services: ["Kanal Müalicəsi", "Endodontik Təkrar Müalicə", "Apikoektomiya (Kök Ucu Cərrahiyyəsi)", "Travma İdarəetməsi", "Diş Ağrısının Aradan Qaldırılması", "Mikroskopik Endodontika"],
      branch: "Gənclik Filialı",
      schedule: {
        days: "B.e, C: 14:00-19:30 | Ç.a, C.a, Ş: 10:00-14:00",
        note: "Bazar günü: Bağlı"
      }
    },
    7: {
      name: "Dr. Aysu İsmayılova",
      specialty: "Endodont",
      specialtyFull: "Kanal Müalicəsi Mütəxəssisi və Endodontik Qayğı Eksperti",
      experience: "4",
      image: "/videos/aysu.mp4",
      education: "Azərbaycan Tibb Universiteti, Endodontika və Ağrı İdarəetməsi Mütəxəssisi",
      bio: "Dr. Aysu İsmayılova 4 illik peşəkar təcrübəyə malik bacarıqlı endodontistdir və zərif və effektiv kanal müalicəsi təmin edir. O, prosedurlar zamanı maksimum rahatlığı təmin etmək və əla müalicə nəticələri əldə etmək üçün müasir texnikalardan və pasiyent mərkəzli qayğıdan istifadə edir.",
      expertise: ["Zərif Kanal Müalicəsi", "Pasiyent Rahatlığı və Ağrı İdarəetməsi", "Müasir Endodontik Texnikalar", "Təcili Diş Qayğısı"],
      services: ["Kanal Müalicəsi", "Pulp Terapiyası", "Təcili Diş Ağrısı Yardımı", "Endodontik Diaqnoz", "Diş Qorunması Terapiyası", "Müalicə Sonrası Qayğı"],
      branch: "Gənclik Filialı",
      schedule: {
        days: "Ç.a, C.a, Ş",
        hours: "10:00 - 19:30",
        note: "Bazar günü: Bağlı"
      }
    }
  };
