import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Pagina nu a fost găsită",
  description: "Pagina căutată nu există sau a fost mutată permanent.",
};

export default function NotFoundPage() {
  return (
    <ErrorPage
      statusCode={404}
      title="Pagina nu a fost găsită"
      message="Pagina căutată nu există sau a fost mutată permanent."
      backLink="/"
      backLinkText="Înapoi acasă"
    />
  );
}