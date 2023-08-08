import NextHead from 'next/head';
import { useRouter } from 'next/router';

// interface NovelsType {
//     url: string
// }

interface HeadProps {
    title?: string;
    description?: string;
    image?: string;
    fallbackImage?: string
}

const WEBSITE_URL = 'suachuarobotdanang.vercel.app'

export default function Head({
    title = 'Đọc Truyện Chữ Online - Website chính thức - HobaNovel',
    description = 'Website đọc truyện chữ miễn phí!',
    image = 'https://res.cloudinary.com/djrbd6ftt/image/upload/v1686325713/hobanovel/Capture_zxigta.png',
    fallbackImage = "https://res.cloudinary.com/djrbd6ftt/image/upload/v1686325713/hobanovel/Capture_zxigta.png",
}: HeadProps) {
    const { asPath } = useRouter();

    const addProductJsonLd = () => {
        return {
          __html: `{
            "@context": "https://schema.org/",
            "@type": "Service",
            "serviceType": "Sửa máy hút bụi",
            "provider": {
                "@type": "Organization",
                "name": "Dịch vụ sửa chữa máy hút bụi Đà Nẵng"
            },
            "image": [
                "https://example.com/photos/1x1/photo.jpg",
                "https://example.com/photos/4x3/photo.jpg",
                "https://example.com/photos/16x9/photo.jpg"
            ],
            "description": "Dịch vụ sửa chữa máy hút bụi hàng đầu tại Đà Nẵng, chúng tôi mang đến cho khách hàng dịch vụ chất lượng cao, nhanh chóng và tin cậy.",
            "areaServed": {
                "@type": "City",
                "name": "Đà Nẵng"
            },
            "review": {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4.8",
                    "bestRating": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "Nguyễn Văn A"
                }
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "125"
            },
            "offers": {
                "@type": "Offer",
                "url": "https://example.com/danangvacuumrepairservice",
                "priceCurrency": "VND",
                "price": "500000",
                "priceValidUntil": "2024-12-31",
                "availability": "https://schema.org/InStock"
            }
        }
      `,
        };
    }

    return (
        <NextHead>
            <title>{title}</title>
            <link rel="manifest" href="/manifest.json" />

            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:image" content={fallbackImage}></meta>
            <meta property="og:type" content="website" />
            <meta property="og:url" content={WEBSITE_URL + asPath} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={WEBSITE_URL + asPath} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="application-name" content="Sữa chữa robot hút bụi đà nẵng" />
            <meta name="apple-mobile-web-app-title" content="Sữa chữa robot hút bụi đà nẵng" />
            <meta name="theme-color" content="#ffff" />
            <meta name="msapplication-navbutton-color" content="#ffff" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
            />
            <meta name="msapplication-starturl" content="/" />


            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={addProductJsonLd()}
                key="product-jsonld"
            />
        </NextHead>
    );
}
