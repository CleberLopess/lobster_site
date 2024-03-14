import PreviewCard from "@/components/preview-card";
import { mockArticles } from "./articles.mock";

const Articles = () => {
  const handleClickCard = (url: string) => {
    window.open(url, "blank");
  };

  const setCards = () => {
    return mockArticles.map((item) => (
      <article key={item.url}>
        <PreviewCard
          url={item.url}
          onClickCard={() => handleClickCard(item.url)}
        />
      </article>
    ));
  };

  return (
    <section
      id="artigos"
      className="flex justify-center items-center bg-light-bg-01 dark:bg-dark-bg-01 "
    >
      <div className="container py-20 flex flex-col gap-16 m-auto">
        <div className="flex flex-col gap-8">
          <h2>Artigos</h2>
          <p className="text-center">
            Nesta sessão, vou deixando voces atualizados com artigos escritos
            por mim para ajudar a comunidade com meus conhecimentos,
            aprendizados e experiências.
          </p>
        </div>
        <div className="flex gap-5 justify-center flex-wrap">{setCards()}</div>
      </div>
    </section>
  );
};
export default Articles;
