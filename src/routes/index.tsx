import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center gap-3 px-6">
      <p className="text-xs font-medium tracking-wide text-zinc-500 uppercase">Pronto para publicar</p>
      <h1 className="text-2xl font-semibold text-zinc-900">App no ar</h1>
      <p className="text-sm leading-relaxed text-zinc-600">
        O build que bloqueava a publicação foi corrigido. Esta tela é o app mínimo que compila.
      </p>
    </main>
  );
}
