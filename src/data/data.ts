export interface Book{
    id: number;
    title: string;
    author: string;
    price: number;
    img: string;
    description: string;
}

export const banners = [
    {
        id: 1,
       banner: "../images/700-saboq.jpg"
    },
    {
        id: 2,
        banner: "../images/Allox-sari-20-bekat.jpeg"
    },
    {
        id:3,
        banner: "../images/Metin-qoyalar.jpg"
    },
    {
        id: 4,
       banner: "../images/ishonchli-xabar.png"
    },
    {
        id: 5,
        banner: "../images/oila-saodat-maskani.jpeg"
    },
]

export const specially = [
    {
        id: 1,
       banner: "../images/Xasson Shamsiy posho.jpeg"
    },
    {
        id: 2,
        banner: "../images/Xabibimiz oramizda bolsalar.png"
    },
    {
        id:3,
        banner: "../images/Solixlar xayotidan.jpeg"
    },
    {
        id: 4,
       banner: "../images/Solih va solihalardan nasihatlar 1.jpeg"
    },
]

export const bestsellers = [
    {
        id: 1,
       banner: "../images/100 ta amaliy tavsiya.jpeg"
    },
    {
        id: 2,
        banner: "../images/700 saboq 2.jpeg"
    },
    {
        id:3,
        banner: "../images/Enteresta.png"
    },
    {
        id: 4,
       banner: "../images/fotimaning-bolasi.jpeg"
    },
]

export const books: Book[] = [
    {
        id: 1,
        title: '101 qissa qizil kitob',
        author: "Muhammad Siddiq Minshaviy Suhajiy",
        price: 42000,
        img: "../images/101 qissa qizil kitob.jpeg",
        description: "Muhammad Siddiq Minshaviy Suhajiy qalamiga mansub ushbu asar, Rasululloh sollallohu alayhi vasallam va sahobalarning hayotidan o‘rganilgan ibratli hikoyalar orqali musulmonlarning sifatini yoritadi. Kitobda Rasulullohni yaxshi ko‘rishning to‘g‘ri yo‘llari, sahobalar va olimlarning bu muhabbatni qanday namoyish etgani haqida hikoyalar keltirilgan."

    },
    {
        id: 2,
        title: "101 qissa to'q yashil kitob",
        author: "Muhammad Siddiq Minshaviy Suhajiy",
        price: 40000,
        img: "../images/101 qissa to'q yashil kitob.jpeg",
        description: "Muhammad Siddiq Minshaviy Suhajiy qalamiga mansub ushbu asar, Rasululloh sollallohu alayhi vasallamning hayotini tug‘ilishidan boshlab vafot etgan davrgacha qisqacha va ibratli tarzda yoritadi. Kitobda, nafaqat Payg‘ambarimizning hayoti, balki sahobalar bilan sodir bo‘lgan qiziqarli voqealar ham hikoya qilib berilgan. Voqealar siyrat kitoblari va hadis to‘plamlaridan olingan bo‘lib, o‘quvchiga Rasululloh sollallohu alayhi vasallamning hayoti haqida to‘g‘ri tushuncha beradi."
    },
    {
        id: 3,
        title: '700 saboq 2',
        author: "Abdulloh Muhammad Abdulmu'ti",
        price: 60000,
        img: "../images/700 saboq 2.jpeg",
        description: "Farzand tarbiyasida 700 saboq (2-qism) – ota-onalar uchun bebaho qo‘llanma bo‘lib, farzand tarbiyasiga oid chuqur kuzatuvlar va amaliy tavsiyalar bilan boyitilgan. Bu asar orqali farzandingizni mehrli, mas’uliyatli va barkamol inson qilib voyaga yetkazish yo‘lida aniq usullarni topasiz."
    },
    {
        id: 4,
        title: "700-saboq",
        author: "Abdulloh Muhammad Abdulmu'ti",
        price: 47000,
        img: "../images/700-saboq.jpg",
        description: "Farzand tarbiyasida 700 saboq (1-qism) – ota-onalar uchun amaliy yo‘riqnoma bo‘lib, farzand tarbiyasida tajribada sinovdan o‘tgan, hayotiy va ishonchli 700 saboqni o‘z ichiga oladi. Kitob bolani barkamol shaxs qilib voyaga yetkazishda qat’iy qadriyat va mehr asosidagi yondashuvni taklif etadi."
    },
    {
        id: 5,
        title: 'Allox sari 20 bekat',
        author: "Usoma Minshaviy",
        price: 47000,
        img: "../images/Allox-sari-20-bekat.jpeg",
        description: "Alloh sari 20 bekat – qalbingizni uyg‘otuvchi, ruhingizni tozalovchi ilhom manbai. Har bir bekat – Allohga yaqinlashish sari bir qadamingiz bo‘lib, unda oyatlar, hadislardan tortib zamondoshlar hayotidan olingan ibratli qissalar va amaliy tavsiyalar jamlangan. O‘qing, o‘ylang va haqiqiy yaqinlik nima ekanini his eting. Bu safar sizni o‘zgartiradi!"
    },
    {
        id: 6,
        title: 'Fotimaning-bolasi',
        author: "Josim al-Umron",
        price: 36000,
        img: "../images/fotimaning-bolasi.jpeg",
        description: "Eng ko'p kutilgan kitob - Fotimaning bolasi endi sotuvda"
    },
    {
        id: 7,
        title: "Ikki olam sarvari",
        author: "Shayx Muhammad Hasaniy",
        price: 41000,
        img: "../images/Ikki olam sarvari.jpeg",
        description: "Ikki olam sarvari – Rasululloh sollallohu alayhi vasallamning siyratlarini sahih manbalar asosida, chuqur muhabbat bilan hikoya qiluvchi bebaho asar. Har bir fazilat alohida mavzu tarzida yoritilib, oyat, hadis va sahobalarning xotiralari bilan boyitilgan. Bu kitob – Payg‘ambarimiz hayotidan ibrat olishni istagan har bir musulmon yurak uchun ruhiy oziqdir."
    },
    {
        id: 8,
        title: 'Ikki qariya',
        author: "Ali Tantoviy",
        price: 25000,
        img: "../images/Ikki qariya.jpeg",
        description: "Ikki qariya kitobi, hayotiy hikoyalar orqali insonning taqdiriga va unga bo‘lgan qarashlariga yangi nuqtai nazar kiritadi. Har bir hikoya o‘quvchiga hayotdagi muhim saboqlarni taqdim etib, Yaratuvchiga bo‘lgan ishonch va muhabbatni kuchaytiradi."
    },
    {
        id: 9,
        title: "Ishonchli-xabar",
        author: "Adham Sharqoviy",
        price: 26000,
        img: "../images/ishonchli-xabar.png",
        description: "Ushbu kitob yozuvchi Adham Sharqoviy qalamiga mansub shoh asarlardandir. Kitobdan"
    },
    {
        id: 10,
        title: 'Kechir Allohim',
        author: "Hasan Basriy",
        price: 72000,
        img: "../images/Kechir Allohim.jpeg",
        description: "Har bir musulmon uchun kunlik istig'for to'plami. Kitobning afzallik jihati shundaki har bir kun uchun alohida istig'forlar jamlangan."
    },
    {
        id: 11,
        title: 'Labbay Allohim Labbay',
        author: "G'iyosiddin Habibulloh",
        price: 20000,
        img: "../images/Labbay Allohim Labbay.jpeg",
        description: "Labbay, Allohim, labbay – Umra safariga otlangan har bir mo‘min uchun aniq, sodda va vizual qo‘llanma. Unda Umraning tartibi, odoblari, zarur duolar hamda xaritalar va rasmlar bilan boyitilgan tushuntirishlar keltirilgan. Bu kitob – ibodat safaringizda eng yaqin yo‘lboshchingiz bo‘ladi!"
    },
    {
        id: 12,
        title: "Metin-qoyalar",
        author: "Hasson Shamsiy Posho",
        price: 29000,
        img: "../images/Metin-qoyalar.jpg",
        description: "Метин қоялар” асари инсоннинг маънавий ва руҳий оламини тарбиялашга бағишланган. Муаллиф ҳаётдаги синов ва машаққатларни қояга қиёслаб, ҳар бир мўмин улардек собитқадам бўлиши кераклигини уқтиради."
    },
    {
        id: 13,
        title: "Mo'jaz qissalar ko'k kitob",
        author: "Muhammad Siddiq Minshaviy Suhajiy",
        price: 72000,
        img: "../images/mo'jaz qissalar ko'k kitob.jpeg",
        description: "Rasululloh sollallohu alayhi vasallamning hayotlarining so‘nggi lahzasidan 101 qissa asari, Muhammad Siddiq Minshaviy Suhajiy tomonidan yozilgan bo‘lib, Rasulullohning vafotlaridan oldingi va keyingi voqealarni badiiy va tafsiliy tarzda yoritadi. Kitobda, Rasululloh sollallohu alayhi vasallamning so‘nggi kasalliklari, o‘limi, dafn marosimi va sahobalarning o‘zaro reaksiyalari haqida ibratli hikoyalar keltirilgan. Asar, Rasulullohning vafotidan keyin sahobalarning g‘am-qayg‘uga tushishi, Abu Bakr roziyallohu anhu tomonidan tinchlantirilishi, qabrga qanday qilib qo‘yilishi va qabr qazish jarayonlarini hadislar va ishonchli manbalar asosida bayon etadi. Ushbu kitob o‘quvchilarga Rasulullohning so‘nggi kunlaridan to‘g‘ri tushunchalar olish va uning hayotini to‘g‘ri anglashda yordam beradi."
    },
    {
        id: 14,
        title: "Oila-saodat-maskani",
        author: "Shayx Yusuf Xattor Muhammad",
        price: 22000,
        img: "../images/oila-saodat-maskani.jpeg",
        description: "."
    },
    {
        id: 15,
        title: 'Solixlar xayotidan',
        author: "Shayx Muhammad Avvoma",
        price: 74000,
        img: "../images/Solixlar xayotidan.jpeg",
        description: "Solihlar hayotidan sarar naql va xabarlar kitobi, jamiyat a’zolariga zarur bo‘lgan odob-axloq normalarini, hadislar va solihlarning ibratli hayotidan olingan misollar orqali bayon etadi. Shayx Muhammad Avvoma mazkur asarida ma’naviy illatlar va jaholatga qarshi kurashishning yo‘llarini yoritib, har ikki xulqning ijobiy va salbiy tomonlarini jonli misollar bilan taqdim etadi."
    },
    
]