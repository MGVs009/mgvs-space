const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <a 
          href="https://hcb.hackclub.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mb-6 hover:opacity-80 transition-opacity"
        >
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 48 48" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <rect width="48" height="48" rx="8" fill="hsl(0 0% 20%)" />
            <path 
              d="M24 8L40 16V32L24 40L8 32V16L24 8Z" 
              stroke="hsl(0 0% 70%)" 
              strokeWidth="2"
              fill="none"
            />
            <text 
              x="24" 
              y="28" 
              textAnchor="middle" 
              fill="hsl(0 0% 90%)" 
              fontSize="12"
              fontWeight="bold"
              fontFamily="Inter, sans-serif"
            >
              HCB
            </text>
          </svg>
        </a>
        
        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
          MGVs Space is fiscally sponsored by{" "}
          <a 
            href="https://hackfoundation.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            The Hack Foundation
          </a>
          {" "}(d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).
        </p>
        
        <p className="text-muted-foreground text-xs mt-2">
          Click the HCB logo to visit our HCB page!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
