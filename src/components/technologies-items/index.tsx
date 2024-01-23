import { bookIcons, technologiesItemsType } from "./technologiesItems.models";

const TechnologiesItems = ({ technologies }: technologiesItemsType) => {
  return (
    <div className="w-10">
      {bookIcons[technologies] ? (
        bookIcons[technologies]
      ) : (
        <div>Ícone não encontrado</div>
      )}
    </div>
  );
};

export default TechnologiesItems;
