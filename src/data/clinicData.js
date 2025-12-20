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
        experience: "15+",
        image: "/images/doctors/isgenderdoc.jpg",
        whatsapp: "994503263223",
        branch: "hazi-aslanov"
      },
      {
        id: 1,
        name: "Dr. Aytən Zamanova",
        specialty: "Baş həkim",
        experience: "8+",
        image: "/images/doctors/drayten.png",
        whatsapp: "994503263223",
        branch: "hazi-aslanov"
      },
      {
        id: 2,
        name: "Dr. Nurlan Cavadzadə",
        specialty: "Ortoped Stomatoloq",
        experience: "8+",
        image: "/images/doctors/javadzadeh.jpg",
        whatsapp: "994503263223",
        branch: "hazi-aslanov"
      },
      {
        id: 4,
        name: "Dr. Ayşən Abbaslı",
        specialty: "Pedodont, Ortodont",
        experience: "10+",
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
        experience: "15+",
        image: "/images/doctors/isgenderdoc.jpg",
        whatsapp: "994503263223",
        branch: "ganjlik"
      },
      {
        id: 1,
        name: "Dr. Aytən Zamanova",
        specialty: "Baş həkim",
        experience: "8+",
        image: "/images/doctors/drayten.png",
        whatsapp: "994503263223",
        branch: "ganjlik"
      },
      {
        id: 4,
        name: "Dr. Ayşən Abbaslı",
        specialty: "Pedodont, Ortodont",
        experience: "10+",
        image: "/images/doctors/dr_aysen.jpg",
        whatsapp: "994503263223",
        branch: "ganjlik"
      },
      {
        id: 2,
        name: "Dr. Nurlan Cavadzadə",
        specialty: "Ortoped Stomatoloq",
        experience: "8+",
        image: "/images/doctors/javadzadeh.jpg",
        whatsapp: "994503263223",
        branch: "ganjlik"
      },
      {
        id: 6,
        name: "Dr. Zülfüqar Baxşılı",
        specialty: "Endodont",
        experience: "12+",
        image: "/images/doctors/placeholder.jpg",
        whatsapp: "994503263223",
        branch: "ganjlik"
      },
      {
        id: 7,
        name: "Dr. Aysu İsmayılova",
        specialty: "Endodont",
        experience: "8+",
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
      specialtyFull: "Clinic Director",
      experience: "15+",
      image: "/images/doctors/isgenderdoc.jpg",
      education: "Azerbaijan Medical University, Health Management & Administration",
      bio: "Dr. İsgəndər Manafov is the Director of Dentallux Clinic, overseeing all operations to ensure the highest quality of patient care and service excellence. With over 15 years of experience in healthcare management, he leads the clinic with a vision of modern, patient-centered dentistry.",
      expertise: ["Clinic Management", "Healthcare Administration", "Strategic Planning", "Patient Relations"],
      services: ["Clinic Administration", "Patient Consultation", "Treatment Coordination", "Quality Assurance"],
      branch: "Həzi Aslanov & Gənclik",
      schedule: {
        days: "Monday - Saturday",
        hours: "09:00 - 18:00",
        note: "Available by appointment for consultations"
      }
    },
    1: {
      name: "Dr. Aytən Zamanova",
      specialty: "Baş həkim",
      specialtyFull: "Chief Doctor & General Dentistry Specialist",
      experience: "8+",
      image: "/videos/ayten.mp4",
      education: "Azerbaijan Medical University, Dentistry & Clinic Management Specialist",
      bio: "Dr. Aytən Zamanova is the Chief Doctor with over 8 years of extensive experience in general dentistry and clinic management. She ensures the highest standards of patient care across all treatments, leading our team with expertise and dedication to excellence in dental healthcare.",
      expertise: ["Clinic Management & Leadership", "General Dentistry", "Treatment Planning & Coordination", "Patient Care Standards"],
      services: ["Comprehensive Dental Checkups", "Teeth Cleaning & Hygiene", "Restorative Dentistry", "Clinic Oversight & Quality Control", "Patient Consultation", "Treatment Supervision"],
      branch: "Həzi Aslanov & Gənclik",
      schedule: {
        days: "Həftə içi (Weekdays)",
        hours: "10:00 - 17:00",
        note: "Bazar günü: Bağlı (Sunday: Closed)"
      }
    },
    2: {
      name: "Dr. Nurlan Cavadzadə",
      specialty: "Ortoped Stomatoloq",
      specialtyFull: "Orthopedic Dentist & Prosthetics Specialist",
      experience: "8+",
      image: "/images/doctors/javadzadeh.jpg",
      education: "Azerbaijan Medical University, Orthopedic Dentistry & Prosthetics Specialist",
      bio: "Dr. Nurlan Cavadzadə is a highly skilled orthopedic dentist with over 8 years of professional experience specializing in crowns, bridges, and dental prosthetics. His expertise ensures perfect functional and aesthetic results, combining advanced techniques with artistic precision to restore beautiful, natural-looking smiles.",
      expertise: ["Dental Crowns & Bridges", "Prosthetic Dentistry", "Smile Design & Restoration", "Functional Dental Rehabilitation"],
      services: ["Porcelain & Ceramic Crowns", "Fixed & Removable Bridges", "Complete & Partial Dentures", "Implant-Supported Prosthetics", "Smile Makeover", "Dental Veneers"],
      branch: "Həzi Aslanov & Gənclik",
      schedule: {
        days: "Hər gün (Every day)",
        hours: "11:00 - 19:30",
        note: "Bazar günü: Bağlı (Sunday: Closed)"
      }
    },
    4: {
      name: "Dr. Ayşən Abbaslı",
      specialty: "Pedodont, Ortodont",
      specialtyFull: "Children's Dentist & Orthodontist",
      experience: "10+",
      image: "/videos/aytenabbasli.mp4",
      education: "Azerbaijan Medical University, Pediatric Dentistry & Orthodontics Specialist",
      bio: "Dr. Ayşən Abbaslı is a highly experienced pediatric dentist and orthodontist with over 10 years of professional practice. She specializes in creating positive dental experiences for children while providing comprehensive orthodontic solutions for patients of all ages. Her gentle approach and expertise in child psychology make her the perfect choice for families seeking quality dental care.",
      expertise: ["Pediatric Dentistry", "Orthodontic Treatment Planning", "Early Intervention Orthodontics", "Child Behavior Management"],
      services: ["Children's Dental Checkups", "Orthodontic Braces & Aligners", "Preventive Care & Fluoride Treatments", "Dental Development Monitoring", "Early Orthodontic Assessment", "Cavity Treatment for Children"],
      branch: "Həzi Aslanov & Gənclik",
      schedule: {
        days: "Mon, Wed, Fri: 11:00-19:00 | Sat: 11:00-15:00",
        hours: "Varies by day",
        note: "Bazar günü: Bağlı (Sunday: Closed)"
      }
    },
    6: {
      name: "Dr. Zülfüqar Baxşılı",
      specialty: "Endodont",
      specialtyFull: "Root Canal Specialist & Endodontic Expert",
      experience: "12+",
      image: "/images/doctors/placeholder.jpg",
      education: "Azerbaijan Medical University, Advanced Endodontics & Microsurgery Specialist",
      bio: "Dr. Zülfüqar Baxşılı is a highly experienced endodontist with over 12 years of professional practice specializing in endodontic treatments. He focuses on root canal therapy and saving natural teeth with advanced techniques, ensuring pain-free procedures and successful tooth preservation.",
      expertise: ["Advanced Root Canal Therapy", "Endodontic Microsurgery", "Tooth Pain Management", "Natural Tooth Preservation"],
      services: ["Root Canal Treatment", "Endodontic Retreatment", "Apicoectomy (Root-End Surgery)", "Trauma Management", "Dental Pain Relief", "Microscopic Endodontics"],
      branch: "Gənclik Filialı",
      schedule: {
        days: "Mon, Fri: 14:00-19:30 | Tue, Thu, Sat: 10:00-14:00",
        hours: "Varies by day",
        note: "Bazar günü: Bağlı (Sunday: Closed)"
      }
    },
    7: {
      name: "Dr. Aysu İsmayılova",
      specialty: "Endodont",
      specialtyFull: "Root Canal Specialist & Endodontic Care Expert",
      experience: "8+",
      image: "/videos/aysu.mp4",
      education: "Azerbaijan Medical University, Endodontics & Pain Management Specialist",
      bio: "Dr. Aysu İsmayılova is a skilled endodontist with over 8 years of professional experience providing gentle and effective root canal treatments. She uses modern techniques and patient-centered care to ensure maximum comfort during procedures while achieving excellent treatment outcomes.",
      expertise: ["Gentle Root Canal Therapy", "Patient Comfort & Pain Management", "Modern Endodontic Techniques", "Emergency Dental Care"],
      services: ["Root Canal Treatment", "Pulp Therapy", "Emergency Toothache Relief", "Endodontic Diagnosis", "Tooth Preservation Therapy", "Post-Treatment Care"],
      branch: "Gənclik Filialı",
      schedule: {
        days: "Tue, Thu, Sat",
        hours: "10:00 - 19:30",
        note: "Bazar günü: Bağlı (Sunday: Closed)"
      }
    }
  };
