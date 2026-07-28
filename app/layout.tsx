import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game Time - Custom Sports Trips Itineraries",
  description: "Plan your ultimate sports trip with automated ticket, flight, and hotel options.",
  verification: {
    other: {
      "impact-site-verification": "1b0abe48-699c-47a5-afd2-96fe2538979b",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        {/* Partnerize Tag Script */}
        <Script
          id="partnerize-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var tid = 'c7b6e1e8-98ca-4d8c-acd9-c2d6c30fc6bd';
                var pztp = {"p":"pzt","mi":0,"ma":99,"e":[]};
                var i = Math.floor(Math.random() * ((pztp.ma + 1) - pztp.mi)) + pztp.mi;
                
                var enc = new TextEncoder();
                var bin = enc.encode(pztp.p + i);
                
                if (window.crypto && window.crypto.subtle) {
                  window.crypto.subtle.digest('SHA-1', bin).then(function (b) {
                    var u = new Uint8Array(b);
                    var a = [];
                    for (var j = 0; j < u.length; j++) {
                      var hex = u[j].toString(16);
                      if (hex.length < 2) hex = '0' + hex;
                      a.push(hex);
                    }
                    var hash = a.join('');
                    var domain = hash.slice(0, 6) + 'p.' + hash + '.com';
                    
                    var s = document.createElement('script');
                    s.src = 'https://' + domain + '/tag/' + tid;
                    s.async = true;
                    document.body.appendChild(s);
                  }).catch(function(e) {
                    console.error('Partnerize tag error:', e);
                  });
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}