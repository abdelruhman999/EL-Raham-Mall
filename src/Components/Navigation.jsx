import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo1 from '../assets/image/app-store.svg'
import logo2 from '../assets/image/google-play.svg'
import logo3 from '../assets/image/alahly-en.svg'
import logo4 from '../assets/image/etisalatcash-en.svg'
import logo5 from '../assets/image/cib.svg'
import logo6 from '../assets/image/fawry-en.svg'
import logo7 from '../assets/image/master-card.svg'
import logo8 from '../assets/image/souhoola.svg'
import logo9 from '../assets/image/valu.svg'
import logo10 from '../assets/image/vcash-en.svg'
import logo11 from '../assets/image/visa-en.svg'
import List from './List';
export default function Navigation() {
return (
    <div className='bg-blue-800 flex gap-[20px] flex-col items-center pt-[80px] pr-[80px] pl-[80px]'>
        <div className='w-full text-white flex justify-between'>
            <div className='flex flex-col gap-[70px] items-end'>
                <div className='flex flex-col items-end gap-[20px]'>
                    <h1 className='text-xl '>كن اول من يعلم</h1>
                    <p className='text-gray-400'>احصل على إخطارات بالعروض والخصومات الجديدة</p>
                    <div className='relative'>
                        <input
                            type="text"
                            className='text-end p-[5px] bg-transparent border-white border w-[320px] outline-none h-[50px]'
                            placeholder='ادخل بريدك الالكتروني'/>
                        <div className='bg-white flex items-center cursor-pointer justify-center absolute p-[10px] w-[60px] top-0'>
                            <FaTelegramPlane className='text-3xl text-blue-700 ' />
                        </div>
                    </div>
                </div>
                <div className='flex items-end flex-col '>
                    <div className='flex gap-[30px] flex-wrap justify-end w-[280px] '>
                        <Link>
                            <FaFacebook className='text-white text-2xl'/> 
                        </Link>
                        <Link>
                            <IoLogoInstagram className='text-white text-2xl'/> 
                        </Link>
                        <Link> 
                            <FaLinkedinIn className='text-white text-2xl'/> 
                        </Link>
                        <Link>
                            <IoLogoTwitter className='text-white text-2xl'/> 
                        </Link>
                        <Link>
                            <FaYoutube className='text-white text-2xl'/> 
                        </Link>
                        <Link>
                            <FaTiktok className='text-white text-2xl'/> 
                        </Link>
                    </div>
                    <div className='flex gap-[40px]'>
                        <Link>
                            <img src={logo2} className='size-[140px]' />
                        </Link>
                        <Link>
                            <img src={logo1} className='size-[140px]' />
                        </Link>
                    </div>
                </div>
            </div>
            <List
                header='الفئات الرئيسية'
                texts={[
                    'تليفزيونات والكترونيات',
                    'الأجهزة المنزلية',
                    'تكييفات ومنقيات الهواء',
                    'منتجات الصحة والعناية الشخصية',
                    'ساعات',
                    'قطع غيار استهلاكية',
                    'منتجات حصرية',
                    'عروض وخصومات'
                ]}
            />
            <List
                header='عن الرحمه'
                texts={[
                    'من نحن ',
                    'المدونة ',
                    'فروعنا الرئيسية  ',
                    'مراكز خدمة الرحمه   ',
                    'تطبيقاتنا',
                    'خريطة الموقع  ',
                ]}
            />
            <List
                header='خدمة العملاء '
                texts={[
                    'الشروط والأحكام ',
                    'سياسة الخصوصية ',
                    'سياسة البيع ',
                    'سياسة الإستبدال و الإرجاع ',
                    'الدعم والمساعدة',
                    'اتصل بنا   '
                ]}
            />
        </div>
        <div className='flex w-full justify-between'>
            <img src={logo3} className='size-[100px]' />
            <img src={logo4} className='size-[100px]' />
            <img src={logo5} className='size-[100px]' />
            <img src={logo6} className='size-[100px]' />
            <img src={logo7} className='size-[100px]' />
            <img src={logo8} className='size-[100px]' />
            <img src={logo9} className='size-[100px]' />
            <img src={logo10} className='size-[100px]' />
            <img src={logo11} className='size-[100px]' />
        </div>
        <p className='text-white '>الرحمه جروب 2024 © جميع الحقوق محفوظة</p>
    </div>
)
}
