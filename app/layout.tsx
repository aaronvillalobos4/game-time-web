import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game Time - Custom Sports Travel Itineraries",
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
      <head>
        {/* Partnerize Tag Script */}
        <Script
          id="partnerize-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var tid = 'c7b6e1e8-98ca-4d8c-acd9-c2d6c30fc6bd';
                  var pztp = {"p":"pzt","mi":0,"ma":99,"e":[]};
                  var i = Math.floor(Math.random() * ((pztp.ma + 1) - pztp.mi)) + pztp.mi;
                  
                  var enc = new TextEncoder();
                  var bin = enc.encode(pztp.p + i);
                  
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
                    document.head.appendChild(s);
                  }).catch(function(err) {
                    console.error('Partnerize SHA error:', err);
                  });
                } catch (e) {
                  console.error('Partnerize init error:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}