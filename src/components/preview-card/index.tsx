import { useState, useEffect } from "react";
import { getLinkPreview } from "link-preview-js";
import { LinkPreview, PreviewCardTypes } from "./models";

const PreviewCard = ({ url, onClickCard }: PreviewCardTypes) => {
  const [preview, setPreview] = useState<LinkPreview | null>(null);

  useEffect(() => {
    // Obtém o preview do link quando a URL muda
    getLinkPreview(url)
      .then((previewData) => {
        setPreview(previewData as LinkPreview);
      })
      .catch((error) => {
        console.error("Erro ao obter o preview do link:", error);
      });
  }, [url]);

  return (
    <div
      className="flex flex-col gap-2 max-w-72 rounded-lg shadow-md  hover:cursor-pointer hover:shadow-xl hover:scale-105 bg-white  dark:bg-dark-bg-02 "
      onClick={onClickCard}
    >
      {preview && (
        <>
          {preview.images.length > 0 && (
            <img src={preview.images[0]} alt="Preview" />
          )}
          <div className="p-2">
            <h3>{preview.title}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default PreviewCard;
