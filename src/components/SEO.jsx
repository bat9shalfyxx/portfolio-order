import { Helmet } from 'react-helmet-async';

const SEO = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Анастасия Рагулина",
        "description": "Инструктор-кинолог, рекомендованный инструктор Nosework от Российской ассоциации Ноузворк. Индивидуальное обучение собак всех пород (Nosework, бытовое послушание).",
        "image": "https://nosework-ragulina.ru/src/img/person.png",
        "url": "https://nosework-ragulina.ru",
        "telephone": "+79228170000",
        "email": "samboragulina@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Санкт-Петербург",
          "streetAddress": "ул. Лиственная 18, корпус 1",
          "addressCountry": "RU"
        },
        "sameAs": [
          "https://t.me/Yah_An"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "Бакалавр биологии/кинологии",
            "recognizedBy": {
              "@type": "Organization",
              "name": "СПбГАУ"
            }
          }
        ]
    }

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    )
}

export default SEO;