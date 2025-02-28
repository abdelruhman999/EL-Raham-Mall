import Home from './pages/Home'
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <div>
      <Helmet>
        <html lang="ar" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title> الرحمه مول </title>
        <meta name="description" content="ابحث عن أفضل عروض الأجهزة الكهربائية، مثل الثلاجات والغسالات، في موقعنا. شراء مباشر مع خدمة التوصيل للمنازل." />
        <meta name="keywords" content="أجهزة كهربائية للبيع, ثلاجات, غسالات, شاشات, عروض الأجهزة, تسوق أونلاين, أجهزة منزلية, خدمة التوصيل" />
        <meta name="author" content="اسمك هنا" />
        <meta property="og:title" content="أجهزة كهربائية للبيع | أحصل على أفضل العروض الآن!" />
        <meta property="og:description" content="ابحث عن أفضل عروض الأجهزة الكهربائية، مثل الثلاجات والغسالات، في موقعنا. شراء مباشر مع خدمة التوصيل للمنازل." />
        <meta property="og:image" content="رابط_الصورة_الحقيقية" />
        <meta property="og:url" content="رابط_الصفحة_الحقيقية" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@اسم_الموقع" />
        <meta name="twitter:title" content="أجهزة كهربائية للبيع | أحصل على أفضل العروض الآن!" />
        <meta name="twitter:description" content="ابحث عن أفضل عروض الأجهزة الكهربائية، مثل الثلاجات والغسالات، في موقعنا. شراء مباشر مع خدمة التوصيل للمنازل." />
        <meta name="twitter:image" content="رابط_الصورة_الحقيقية" />
        <link rel="canonical" href="رابط_الصفحة_الحقيقية" />
      </Helmet>
      <Home />
    </div>
  )
}
