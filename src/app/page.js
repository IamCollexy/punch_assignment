'use client';
import { Box } from '@mui/material';
import HomeHero from '@/components/hero';
import HomeSection1 from '@/components/section1';
import HomeSection2 from '@/components/section2';
import HomeSection3 from '@/components/section3';
import HomeSection4 from '@/components/section4';
import HomeSection5 from '@/components/section5';
import FAQSection from '@/components/section6';
import FooterSection from '@/components/footer';

export default function page() {
  return (
    <Box>
      <HomeHero /> <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 /> <HomeSection4 /> <HomeSection5 />
      <FAQSection />
      <FooterSection />
    </Box>
  );
}
