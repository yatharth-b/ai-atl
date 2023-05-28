
import Hero from './components/Hero/Hero'
import localFont from 'next/font/local';
import { Noto_Color_Emoji } from 'next/font/google';
import './globals.css'
 
const myFont = localFont({ src: './fonts/CabinetGrotesk-Variable.ttf', variable: '--font-cabinet' });
const myFont2 = localFont({ src: './fonts/Druk.ttf', variable: '--font-druk' });
const myFont3 = Noto_Color_Emoji({ variable: '--font-emoji', subsets: ['emoji'], weight: '400' })

export const metadata= {
  title: "AI ATL",
  description: "Atlanta's first Generative AI hackathon.",
};

export default function Home() {
  return (
    <div className={`${myFont.variable} ${myFont2.variable} ${myFont3.variable}`}>
      <Hero />
    </div>
  )
}
