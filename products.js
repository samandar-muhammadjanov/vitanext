/**
 * Products Database
 * Contains all product information with multilingual support (Uzbek and Russian)
 */

const productsData = [
    {
        id: 1,
        category: {
            uz: "Biologik faol qo'shimcha",
            ru: "Биологически активная добавка"
        },
        image: "assets/images/trivon.png",
        name: {
            uz: "Trivion",
            ru: "Trivion"
        },
        description: {
            uz: "Aminokislotalar va B guruhi vitaminlariga asoslangan metabolik va adaptogen kompleks. Energiya almashinuvini qo‘llab-quvvatlaydi va asab tizimini mustahkamlaydi.",
            ru: "Метаболический и адаптогенный комплекс на основе аминокислот и витаминов группы B. Поддерживает энергетический обмен и укрепляет нервную систему."
        },
        emoji: "💧",
        details: {
            composition: {
                uz: "Centauria o‘ti ekstrakti 5 mg, L-karnitin gidroxlorid 150 mg, L-lizin gidroxlorid 150 mg, L-arginin gidroxlorid 100 mg, Vitamin B1 1 mg, Vitamin B6 1 mg, Vitamin B12 2 mkg",
                ru: "Экстракт Centauria 5 мг, L-карнитин гидрохлорид 150 мг, L-лизин гидрохлорид 150 мг, L-аргинин гидрохлорид 100 мг, Витамин B1 1 мг, Витамин B6 1 мг, Витамин B12 2 мкг"
            },
            benefits: {
                uz: "Energiya ishlab chiqarishni oshiradi, charchoqni kamaytiradi, asab tizimini mustahkamlaydi, immunitetni qo‘llab-quvvatlaydi, organizmni tiklaydi",
                ru: "Повышает выработку энергии, снижает усталость, укрепляет нервную систему, поддерживает иммунитет, способствует восстановлению организма"
            },
            usage: {
                uz: "Yoshga qarab kuniga 1 marta, ovqatdan keyin. Kurs 1,5–2 oy.",
                ru: "1 раз в день в зависимости от возраста, после еды. Курс 1,5–2 месяца."
            },
            audience: {
                uz: "Bolalar va kattalar uchun (yoshga mos dozada)",
                ru: "Для детей и взрослых (с учетом возрастной дозировки)"
            }
        }
    },
    {
        id: 17,
        category: {
            uz: "Bolalar uchun",
            ru: "Для детей"
        },
        name: {
            uz: "Trivion sirop",
            ru: "Тривион сироп"
        },
        image: "assets/images/trivonsirop.png",
        description: {
            uz: "Chaqaloqlar va erta yoshdagi bolalarda o‘sish, energiya va rivojlanishni qo‘llab-quvvatlovchi aminokislota va B guruhi vitaminlari asosidagi sirop.",
            ru: "Сироп на основе аминокислот и витаминов группы B для поддержки роста, энергии и развития у младенцев и детей раннего возраста."
        },
        emoji: "🍼",
        details: {
            composition: {
                uz: "Centauria o‘ti ekstrakti 5 mg, L-karnitin gidroxlorid 150 mg, L-lizin gidroxlorid 150 mg, L-arginin gidroxlorid 100 mg, Vitamin B1 1 mg, Vitamin B6 1 mg, Vitamin B12 2 mkg (1 ml da)",
                ru: "Экстракт травы Centauria 5 мг, L-карнитин гидрохлорид 150 мг, L-лизин гидрохлорид 150 мг, L-аргинин гидрохлорид 100 мг, Витамин B1 1 мг, Витамин B6 1 мг, Витамин B12 2 мкг (в 1 мл)"
            },
            benefits: {
                uz: "Ishtahani yaxshilaydi, vazn yetishmovchiligini qoplaydi, energiyani oshiradi, asab tizimi rivojlanishini qo‘llab-quvvatlaydi, kasallikdan keyin tiklanishni tezlashtiradi",
                ru: "Улучшает аппетит, способствует набору веса, повышает энергию, поддерживает развитие нервной системы, ускоряет восстановление после болезней"
            },
            usage: {
                uz: "0–6 oy: 5–7 tomchi kuniga 1 marta; 6–12 oy: 10 tomchi kuniga 1 marta; 1–3 yosh: 12–15 tomchi kuniga 1 marta; 3 yoshdan katta bolalar: 5 ml kuniga 1–2 marta. Ovqatdan keyin qabul qilinadi. Kurs 1,5–2 oy.",
                ru: "0–6 месяцев: 5–7 капель 1 раз в день; 6–12 месяцев: 10 капель 1 раз в день; 1–3 года: 12–15 капель 1 раз в день; детям старше 3 лет: по 5 мл 1–2 раза в день. Принимать после еды. Курс 1,5–2 месяца."
            },
            audience: {
                uz: "Chaqaloqlar va erta yoshdagi bolalar",
                ru: "Младенцы и дети раннего возраста"
            }
        }
    },

    {
        id: 2,
        category: {
            uz: "Fitopreparat",
            ru: "Фитопрепарат"
        },
        name: {
            uz: "Viron tomchi",
            ru: "Viron капли"
        },
        description: {
            uz: "Immun tizimni qo‘llab-quvvatlovchi va viruslarga qarshi ta’sirga ega kompleks fitopreparat.",
            ru: "Комплексный фитопрепарат с иммуноподдерживающим и противовирусным действием."
        },
        emoji: "💧",
        details: {
            composition: {
                uz: "Calamagrostis epigeios ekstrakti 8 g, Echinacea ekstrakti 1 g, Deschampsia caespitosa ekstrakti 8 g",
                ru: "Экстракт Calamagrostis epigeios 8 г, экстракт Echinacea 1 г, экстракт Deschampsia caespitosa 8 г"
            },
            benefits: {
                uz: "Viruslarga qarshi tabiiy himoyani kuchaytiradi, immunitetni mustahkamlaydi, yallig‘lanishni kamaytiradi, umumiy tonusni oshiradi",
                ru: "Усиливает естественную противовирусную защиту, укрепляет иммунитет, снижает воспаление, повышает общий тонус"
            },
            usage: {
                uz: "Yoshga qarab kuniga 1–3 marta tomchi ko‘rinishida qabul qilinadi. Kurs 7–10 kun.",
                ru: "Принимать в каплях 1–3 раза в день в зависимости от возраста. Курс 7–10 дней."
            },
            audience: {
                uz: "Bolalar va kattalar uchun",
                ru: "Для детей и взрослых"
            }
        }
    }, {
        id: 3,
        image: "assets/images/viron.png",
        category: {
            uz: "Fitopreparat",
            ru: "Фитопрепарат"
        },
        name: {
            uz: "Viron sаше",
            ru: "Viron саше"
        },
        description: {
            uz: "Immunitetni mustahkamlash va virusli infeksiyalar profilaktikasi uchun sаше shaklidagi fitokompleks.",
            ru: "Фитокомплекс в форме саше для укрепления иммунитета и профилактики вирусных инфекций."
        },
        emoji: "📦",
        details: {
            composition: {
                uz: "Calamagrostis epigeios ekstrakti 8 g, Echinacea ekstrakti 1 g, Deschampsia caespitosa ekstrakti 8 g",
                ru: "Экстракт Calamagrostis epigeios 8 г, экстракт Echinacea 1 г, экстракт Deschampsia caespitosa 8 г"
            },
            benefits: {
                uz: "Immun javobni kuchaytiradi, shamollash va grippda profilaktika qiladi, energiyani oshiradi",
                ru: "Усиливает иммунный ответ, обеспечивает профилактику простуды и гриппа, повышает энергию"
            },
            usage: {
                uz: "Kuniga 2 mahal 1 sашени iliq suvda eritib, ovqatdan keyin ichiladi. Kurs 10–14 kun.",
                ru: "По 1 саше 2 раза в день, растворив в тёплой воде, после еды. Курс 10–14 дней."
            },
            audience: {
                uz: "Kattalar uchun",
                ru: "Для взрослых"
            }
        }
    }

    , {
        id: 4,
        category: {
            uz: "Fitopreparat",
            ru: "Фитопрепарат"
        },
        image: "assets/images/vironsvecha.png",
        name: {
            uz: "Viron shamcha",
            ru: "Viron суппозитории"
        },
        description: {
            uz: "Rektal qo‘llash uchun viruslarga qarshi va immunomodulyator ta’sirga ega fitopreparat.",
            ru: "Фитопрепарат для ректального применения с противовирусным и иммуномодулирующим действием."
        },
        emoji: "🕯️",
        details: {
            composition: {
                uz: "Calamagrostis epigeios ekstrakti 8 g, Echinacea ekstrakti 1 g, Deschampsia caespitosa ekstrakti 8 g",
                ru: "Экстракт Calamagrostis epigeios 8 г, экстракт Echinacea 1 г, экстракт Deschampsia caespitosa 8 г"
            },
            benefits: {
                uz: "Viruslarga qarshi himoyani kuchaytiradi, immunitetni oshiradi, yallig‘lanishni kamaytiradi",
                ru: "Усиливает противовирусную защиту, повышает иммунитет, снижает воспаление"
            },
            usage: {
                uz: "Yoshga qarab kuniga 1–2 marta rektal qo‘llanadi. Kurs 5–10 kun.",
                ru: "Применяется ректально 1–2 раза в день в зависимости от возраста. Курс 5–10 дней."
            },
            audience: {
                uz: "Bolalar va kattalar uchun (shifokor tavsiyasi bilan)",
                ru: "Для детей и взрослых (по рекомендации врача)"
            }
        }
    }, {
        id: 5,
        image: "assets/images/gepafor.png",
        category: { uz: "Gepatoprotektor", ru: "Гепатопротектор" },
        name: { uz: "Gepafor kapsula", ru: "Гепафор капсулы" },
        description: {
            uz: "Jigar faoliyatini qo‘llab-quvvatlash va safro ajralishini yaxshilash uchun kompleks biologik qo‘shimcha",
            ru: "Комплексная биологически активная добавка для поддержки функции печени"
        },
        emoji: "🫀",
        details: {
            composition: {
                uz: "SAMe 250 mg, Silimarin 100 mg, Ursodeoksixol kislotasi 150 mg",
                ru: "SAMe 250 мг, Силимарин 100 мг, Урсодезоксихолевая кислота 150 мг"
            },
            benefits: {
                uz: "Jigar hujayralarini himoya qiladi, detoksikatsiyani kuchaytiradi, safro oqimini yaxshilaydi",
                ru: "Защищает клетки печени, улучшает детоксикацию и желчеотделение"
            },
            usage: {
                uz: "Kuniga 1–2 marta 1 kapsula, ovqatdan oldin. Kurs 1–3 oy",
                ru: "По 1 капсуле 1–2 раза в день до еды. Курс 1–3 месяца"
            },
            audience: {
                uz: "Faqat kattalar uchun",
                ru: "Только для взрослых"
            }
        }
    }, {
        id: 6,
        category: { uz: "Mineral majmua", ru: "Минеральный комплекс" },
        name: { uz: "Kalimaks granula", ru: "Калимакс гранулы" },
        image: "assets/images/kalimax.png",
        description: {
            uz: "Suyak, tish va mushaklar uchun kaltsiy, D3 va K2 majmuasi",
            ru: "Комплекс кальция, витаминов D3 и K2 для костей и зубов"
        },
        emoji: "🦴",
        details: {
            composition: {
                uz: "Kaltsiy 200 mg, Vitamin D3 100 ME, Vitamin K2 4 mkg",
                ru: "Кальций 200 мг, Витамин D3 100 МЕ, Витамин K2 4 мкг"
            },
            benefits: {
                uz: "Suyaklarni mustahkamlaydi, osteoporozni oldini oladi, kaltsiyning to‘g‘ri so‘rilishini ta’minlaydi",
                ru: "Укрепляет кости, предотвращает остеопороз, улучшает усвоение кальция"
            },
            usage: {
                uz: "Yoshga qarab kuniga 1–4 sашe, ovqat bilan",
                ru: "В зависимости от возраста — 1–4 саше в день во время еды"
            },
            audience: {
                uz: "Bolalar, kattalar, homilador ayollar",
                ru: "Дети, взрослые, беременные"
            }
        }
    }, {
        id: 7,
        category: { uz: "Probiotik", ru: "Пробиотик" },
        name: { uz: "Laktovia + Zinc kapsula", ru: "Лактовиа + Цинк капсулы" },
        description: {
            uz: "Ichak mikroflorasini tiklash va immunitetni qo‘llab-quvvatlash uchun sinbiotik",
            ru: "Синбиотик для восстановления микрофлоры кишечника и поддержки иммунитета"
        },
        emoji: "🦠",
        details: {
            composition: {
                uz: "Probiotiklar (5+ shtamm), Inulin + FOS 100 mg, Sink 5 mg",
                ru: "Пробиотики (5+ штаммов), Инулин + ФОС 100 мг, Цинк 5 мг"
            },
            benefits: {
                uz: "Ichak faoliyatini normallashtiradi, antibiotikdan keyin tiklaydi, immunitetni kuchaytiradi",
                ru: "Нормализует работу кишечника, восстанавливает после антибиотиков"
            },
            usage: {
                uz: "Kuniga 1–2 kapsula ovqatdan keyin, 10–30 kun",
                ru: "1–2 капсулы в день после еды, курс 10–30 дней"
            },
            audience: {
                uz: "3 yoshdan katta bolalar va kattalar",
                ru: "Дети старше 3 лет и взрослые"
            }
        }
    }, {
        id: 8,
        category: { uz: "Probiotik", ru: "Пробиотик" },
        image: "assets/images/laktoviasashe.png",
        name: { uz: "Laktovia + Zinc sаше", ru: "Лактовиа + Цинк саше" },
        description: {
            uz: "Ichak va immunitet uchun probiotik, prebiotik va sink majmuasi",
            ru: "Комплекс пробиотиков, пребиотика и цинка для ЖКТ и иммунитета"
        },
        emoji: "📦",
        details: {
            composition: {
                uz: "11 probiotik shtamm, FOS 65 mg, Sink 5 mg",
                ru: "11 штаммов пробиотиков, ФОС 65 мг, Цинк 5 мг"
            },
            benefits: {
                uz: "Hazmni yaxshilaydi, ichak florasini tiklaydi, shamollashda himoya beradi",
                ru: "Улучшает пищеварение, восстанавливает микрофлору, поддерживает иммунитет"
            },
            usage: {
                uz: "1 sашeni 100 ml suvda eritib, kuniga 1–2 marta",
                ru: "Растворить 1 саше в 100 мл воды, принимать 1–2 раза в день"
            },
            audience: {
                uz: "3 yoshdan katta bolalar va kattalar",
                ru: "Дети старше 3 лет и взрослые"
            }
        }
    },
    {
        id: 9,
        category: { uz: "Fitopreparat", ru: "Фитопрепарат" },
        name: { uz: "Lorinox sprey", ru: "Лоринокс спрей" },
        image: "assets/images/lorinox.png",
        description: {
            uz: "Og‘iz bo‘shlig‘i va tomoq yallig‘lanishlarida qo‘llaniladigan o‘simlik asosidagi sprey",
            ru: "Растительный спрей при воспалениях полости рта и горла"
        },
        emoji: "💨",
        details: {
            composition: {
                uz: "Calamagrostis, Rheum, Sarimsoq, Yong‘oq bargi, Dub po‘stlog‘i ekstraktlari",
                ru: "Экстракты вейника, ревеня, чеснока, листа ореха, коры дуба"
            },
            benefits: {
                uz: "Yallig‘lanishni kamaytiradi, antiseptik ta’sir ko‘rsatadi, og‘riqni yengillashtiradi",
                ru: "Снижает воспаление, оказывает антисептическое и обезболивающее действие"
            },
            usage: {
                uz: "Kuniga 2–4 marta tomoqka sepiladi, 7–14 kun",
                ru: "Распыление 2–4 раза в день, курс 7–14 дней"
            },
            audience: {
                uz: "4 yoshdan katta bolalar va kattalar",
                ru: "Дети старше 4 лет и взрослые"
            }
        }
    },
    {
        id: 10,
        image: "assets/images/maxivel.png",
        category: { uz: "Vitamin-mineral majmua", ru: "Витаминно-минеральный комплекс" },
        name: { uz: "Maxivel sаше", ru: "Maxivel саше" },
        description: {
            uz: "Asab tizimini qo‘llab-quvvatlash va bolalarning garmoniy rivojlanishi uchun vitamin-mineral va aminokislota majmuasi.",
            ru: "Витаминно-минеральный и аминокислотный комплекс для поддержки нервной системы и гармоничного развития детей."
        },
        emoji: "🧠",
        details: {
            composition: {
                uz: "Vitamin C 50 mg, Vitamin E 10 mg, Vitamin B1 1.2 mg, Vitamin B2 1.5 mg, Vitamin B6 1.2 mg, Vitamin B9 0.2 mg, L-karnitin 100 mg, Magniy 100 mg, Rux 5 mg",
                ru: "Витамин C 50 мг, Витамин E 10 мг, Витамин B1 1.2 мг, Витамин B2 1.5 мг, Витамин B6 1.2 мг, Витамин B9 0.2 мг, L-карнитин 100 мг, Магний 100 мг, Цинк 5 мг"
            },
            benefits: {
                uz: "Asab tizimini mustahkamlaydi, diqqat va xotirani yaxshilaydi, immunitetni qo‘llab-quvvatlaydi, charchoqni kamaytiradi",
                ru: "Укрепляет нервную систему, улучшает память и концентрацию, поддерживает иммунитет, снижает утомляемость"
            },
            usage: {
                uz: "1 sашeni 50–100 ml suvda eritib, kuniga 1 marta ovqat bilan yoki ovqatdan keyin",
                ru: "Растворить 1 саше в 50–100 мл воды, принимать 1 раз в день во время или после еды"
            },
            audience: {
                uz: "3 yoshdan katta bolalar va kattalar",
                ru: "Дети старше 3 лет и взрослые"
            }
        }
    }
    , {
        id: 11,
        image: "assets/images/osteofor.png",
        category: { uz: "Bo‘g‘imlar uchun", ru: "Для суставов" },
        name: { uz: "Osteofor Life kapsula", ru: "Osteofor Life капсулы" },
        description: {
            uz: "Bo‘g‘imlar, tog‘ay va suyaklar salomatligi uchun yallig‘lanishga qarshi va tiklovchi kompleks.",
            ru: "Противовоспалительный и восстанавливающий комплекс для здоровья суставов и хрящей."
        },
        emoji: "🦴",
        details: {
            composition: {
                uz: "Kurkumin (diferuloilmetan) 500 mg, II-tur kollagen 500 mg, Piperin 180 mg",
                ru: "Куркумин (диферулоилметан) 500 мг, Коллаген II типа 500 мг, Пиперин 180 мг"
            },
            benefits: {
                uz: "Bo‘g‘im og‘rig‘ini kamaytiradi, yallig‘lanishni pasaytiradi, harakatchanlikni yaxshilaydi",
                ru: "Снижает боль и воспаление в суставах, улучшает подвижность"
            },
            usage: {
                uz: "Kuniga 1–2 marta 1 kapsula ovqatdan oldin. Kurs 1–3 oy",
                ru: "По 1 капсуле 1–2 раза в день до еды. Курс 1–3 месяца"
            },
            audience: {
                uz: "Kattalar uchun",
                ru: "Для взрослых"
            }
        }
    },
    {
        id: 12,
        image: "assets/images/puzibuu.png",
        category: { uz: "Fitopreparat", ru: "Фитопрепарат" },
        name: { uz: "Puzibuu", ru: "Пузибуу" },
        description: {
            uz: "Yangi tug‘ilgan chaqaloqlarda ichak kolikasi va gaz to‘planishini kamaytirish uchun fitokompleks.",
            ru: "Фитопрепарат для уменьшения кишечных колик и метеоризма у младенцев."
        },
        emoji: "👶",
        details: {
            composition: {
                uz: "Ukrop, fenxel, kardamon, romashka эфир мойлари, natriy gidrokarbonat",
                ru: "Эфирные масла укропа, фенхеля, кардамона, ромашки, натрия гидрокарбонат"
            },
            benefits: {
                uz: "Gazni chiqaradi, ichak spazmini kamaytiradi, kolikani yengillashtiradi",
                ru: "Уменьшает газообразование, снижает спазмы и кишечные колики"
            },
            usage: {
                uz: "Yoshga qarab 0.5–1 flakonni suvda eritib, kuniga 1–4 marta",
                ru: "В зависимости от возраста по 0.5–1 флакону, растворив в воде, 1–4 раза в день"
            },
            audience: {
                uz: "Yangi tug‘ilgan va erta yoshdagi bolalar",
                ru: "Новорожденные и дети раннего возраста"
            }
        }
    }

    , {
        image: "assets/images/testorin.png",
        id: 13,
        category: { uz: "Erkaklar salomatligi", ru: "Мужское здоровье" },
        name: { uz: "Testorin kapsula", ru: "Testorin капсулы" },
        description: {
            uz: "Testosteron almashinuvini qo‘llab-quvvatlovchi va erkaklarning jismoniy hamda jinsiy faolligini oshiruvchi kompleks.",
            ru: "Комплекс для поддержки тестостерона, физической и сексуальной активности мужчин."
        },
        emoji: "💪",
        details: {
            composition: {
                uz: "Tribulus, Eurycoma longifolia, Epimedium, Ginkgo biloba, L-arginin, Piperin, Rux",
                ru: "Tribulus, Eurycoma longifolia, Epimedium, Ginkgo biloba, L-аргинин, Пиперин, Цинк"
            },
            benefits: {
                uz: "Testosteronni qo‘llab-quvvatlaydi, libido va quvvatni oshiradi, stressga chidamlilikni yaxshilaydi",
                ru: "Поддерживает уровень тестостерона, повышает либидо, энергию и выносливость"
            },
            usage: {
                uz: "Kuniga 1–2 marta 1 kapsula ovqat vaqtida, kurs 30 kun",
                ru: "По 1 капсуле 1–2 раза в день во время еды, курс 30 дней"
            },
            audience: {
                uz: "18 yoshdan katta erkaklar",
                ru: "Мужчины старше 18 лет"
            }
        }
    }
    , {
        id: 14,
        image: "assets/images/hermitol.png",
        category: { uz: "Antiparazitar", ru: "Антипаразитарный" },
        name: { uz: "Hermitol sirop", ru: "Гермитол сироп" },
        description: {
            uz: "Parazitlarga qarshi va immunitetni mustahkamlovchi tabiiy sirop. Ovqat hazm qilishni yaxshilaydi va toksinlarni chiqarishga yordam beradi.",
            ru: "Натуральный сироп для бережного избавления от паразитов и укрепления иммунитета."
        },
        emoji: "🦠",
        details: {
            composition: {
                uz: "Tukli unkarriya po‘stlog‘i ekstrakti 100 mg, Zanjabil ekstrakti 150 mg, Tukli unkarriya ildizi ekstrakti 50 mg",
                ru: "Экстракт коры ункарии 100 мг, экстракт имбиря 150 мг, экстракт корня ункарии 50 мг"
            },
            benefits: {
                uz: "Parazitlarning hayot faoliyatini buzadi, toksinlarni chiqaradi, ichak mikroflorasini normallashtiradi, immunitetni kuchaytiradi",
                ru: "Нарушает жизнедеятельность паразитов, выводит токсины, нормализует микрофлору кишечника, укрепляет иммунитет"
            },
            usage: {
                uz: "3–12 yosh: 2,5 ml kuniga 2 marta. Kattalar: 2,5 ml kuniga 3 marta, ovqatdan 30 daqiqa oldin. Kurs 20–30 kun.",
                ru: "Дети 3–12 лет: по 2,5 мл 2 раза в день. Взрослые: по 2,5 мл 3 раза в день за 30 минут до еды. Курс 20–30 дней."
            },
            audience: {
                uz: "3 yoshdan katta bolalar va kattalar",
                ru: "Дети старше 3 лет и взрослые"
            }
        }
    }




    , {
        id: 15,
        image: "assets/images/ginova.png",
        category: { uz: "Asab tizimi", ru: "Нервная система" },
        name: { uz: "Ginova kapsula", ru: "Ginova капсулы" },
        description: {
            uz: "Miya faoliyati, xotira, diqqat va energiyani qo‘llab-quvvatlovchi kompleks.",
            ru: "Комплекс для поддержки мозга, памяти, концентрации и энергии."
        },
        emoji: "🧠",
        details: {
            composition: {
                uz: "L-karnitin 200 mg, L-lizin 200 mg, Ginkgo biloba ekstrakti 10 mg, Rux 5 mg, Vitamin B1 1 mg, B2 0.8 mg, B6 1 mg",
                ru: "L-карнитин 200 мг, L-лизин 200 мг, экстракт гинкго билоба 10 мг, Цинк 5 мг, Витамины B1, B2, B6"
            },
            benefits: {
                uz: "Xotira va diqqatni yaxshilaydi, charchoqni kamaytiradi, asab tizimini qo‘llab-quvvatlaydi, energiya beradi",
                ru: "Улучшает память и концентрацию, снижает усталость, поддерживает нервную систему, повышает энергию"
            },
            usage: {
                uz: "Kattalar uchun kuniga 1–2 marta 1 kapsula ovqat vaqtida. Kurs 4–8 hafta.",
                ru: "Взрослым по 1 капсуле 1–2 раза в день во время еды. Курс 4–8 недель."
            },
            audience: {
                uz: "Kattalar uchun",
                ru: "Для взрослых"
            }
        }
    }, {
        id: 16,
        image: "assets/images/defonra.png",
        category: { uz: "Immunitet", ru: "Иммунитет" },
        name: { uz: "De Fenra sаше", ru: "De Fenra саше" },
        description: {
            uz: "Immunitetni mustahkamlash, virusli infeksiyalardan keyin tiklanish va antioksidant himoya uchun kompleks.",
            ru: "Комплекс для поддержки иммунитета, восстановления после инфекций и антиоксидантной защиты."
        },
        emoji: "🛡️",
        details: {
            composition: {
                uz: "Deschampsia cespitosa ekstrakti 8 g, Calamagrostis ekstrakti 8 g, Echinacea purpurea 1 g, Resveratrol 1 g",
                ru: "Экстракт щучки дернистой 8 г, экстракт вейника наземного 8 г, эхинацея пурпурная 1 г, ресвератрол 1 г"
            },
            benefits: {
                uz: "Immunitetni faollashtiradi, viruslarga qarshi himoya qiladi, antioksidant ta’sir ko‘rsatadi, tiklanishni tezlashtiradi",
                ru: "Активирует иммунитет, защищает от вирусов, оказывает антиоксидантное действие, ускоряет восстановление"
            },
            usage: {
                uz: "Kattalar: kuniga 2 marta 1 sашe. 12 yoshdan katta bolalar: 0,5–1 sашe kuniga 2 marta. Kurs 14–21 kun.",
                ru: "Взрослым: по 1 саше 2 раза в день. Детям старше 12 лет: по 0,5–1 саше 2 раза в день. Курс 14–21 день."
            },
            audience: {
                uz: "12 yoshdan katta bolalar va kattalar",
                ru: "Дети старше 12 лет и взрослые"
            }
        }
    },
    {
  id: 18,
  category: {
    uz: "Immunitet",
    ru: "Иммунитет"
  },
  name: {
    uz: "De Fenra shamcha",
    ru: "Де Фенра суппозитории"
  },
  image: "assets/images/defenrasvicha.png",
  description: {
    uz: "Rektal qo‘llash uchun viruslarga qarshi va immunitetni faollashtiruvchi fitokompleks. O‘tkir respirator infeksiyalar davrida va profilaktika uchun.",
    ru: "Фитокомплекс для ректального применения с противовирусным и иммуномодулирующим действием."
  },
  emoji: "🕯️",
  details: {
    composition: {
      uz: "Deschampsia caespitosa ekstrakti, Calamagrostis epigeios ekstrakti, Echinacea purpurea ekstrakti",
      ru: "Экстракты Deschampsia caespitosa, Calamagrostis epigeios, Echinacea purpurea"
    },
    benefits: {
      uz: "Immun javobni kuchaytiradi, viruslarga qarshi himoya qiladi, yallig‘lanishni kamaytiradi, kasallik davomiyligini qisqartiradi",
      ru: "Усиливает иммунный ответ, защищает от вирусов, снижает воспаление, сокращает длительность заболевания"
    },
    usage: {
      uz: "Yoshga qarab kuniga 1–2 marta rektal qo‘llanadi. Kurs 5–10 kun.",
      ru: "Применяется ректально 1–2 раза в день в зависимости от возраста. Курс 5–10 дней."
    },
    audience: {
      uz: "Bolalar va kattalar uchun (shifokor tavsiyasi bilan)",
      ru: "Для детей и взрослых (по рекомендации врача)"
    }
  }
}





];
