import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ferramentas fron-end",
  description:
    "Resolva desafios reais de HTML, CSS e JavaScript enquanto trabalha com designs profissionais. Aqui você Encontrara diversos projetos de diferentes niveis para Praticar e melhorar ainda mais seu nivel de codificação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
