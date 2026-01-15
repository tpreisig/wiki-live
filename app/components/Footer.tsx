// components/Footer.tsx
import { memo } from 'react';

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="fixed bottom-0  w-full bg-slate-600/70 backdrop-blur-sm border-t border-white/50 
                       px-6 py-4 text-center text-white text-xs hover:text-sm hover:text-emerald-300
                       transition-all duration-300 shrink-0 h-16 flex items-center justify-end">
      <span className="font-medium tracking-wide">
  © <b>Wikilive {currentYear}. All rights reserved.</b> <br />
  * Patent pending on world-leading technology * <br />
</span>

    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
