import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SmartSense Technologies | Intelligent Digital Experiences for Africa" },
      { name: "description", content: "SmartSense Technologies helps brands, institutions and governments deploy AI-powered, immersive and mobile-first digital solutions for communication, engagement, access and intelligence across Africa." },
      { name: "author", content: "SmartSense Technologies" },
      { property: "og:title", content: "SmartSense Technologies | Intelligent Digital Experiences for Africa" },
      { property: "og:description", content: "SmartSense Technologies helps brands, institutions and governments deploy AI-powered, immersive and mobile-first digital solutions for communication, engagement, access and intelligence across Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SmartSense Technologies | Intelligent Digital Experiences for Africa" },
      { name: "twitter:description", content: "SmartSense Technologies helps brands, institutions and governments deploy AI-powered, immersive and mobile-first digital solutions for communication, engagement, access and intelligence across Africa." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ac8ebc13-b2b4-4eac-b0ca-415028161ed5/id-preview-045933b6--ab3b7102-4678-4baf-a0c6-be658e23f9ee.lovable.app-1777763048890.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ac8ebc13-b2b4-4eac-b0ca-415028161ed5/id-preview-045933b6--ab3b7102-4678-4baf-a0c6-be658e23f9ee.lovable.app-1777763048890.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
