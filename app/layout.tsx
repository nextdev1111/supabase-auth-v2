import "server-only";
import Navbar from "../components/Navbar";
import SupabaseListner from "../components/supabaseListener";
import ToasterComponents from "../components/ToasterComponents";
import createServerClient from "../lib/supabaseServerClient";

import "../styles/globals.css";

// it will stop the Nextjs to cache this page.
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabaseClient = createServerClient();

  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <SupabaseListner accessToken={session?.access_token} />
        <ToasterComponents />
        {children}
      </body>
    </html>
  );
}
