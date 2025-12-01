import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-lg text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg mb-4">Cette page est introuvable.</p>
        <p className="mb-6">Le lien que vous avez suivi est peut‑être erroné ou la page a été déplacée.</p>
        <div className="flex justify-center gap-4">
          <Link href="/" className="px-4 py-2 bg-black text-white rounded">Retour à l’accueil</Link>
          <Link href="/contact" className="px-4 py-2 border rounded">Contactez-moi</Link>
        </div>
      </div>
    </main>
  );
}
