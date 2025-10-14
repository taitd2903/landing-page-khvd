import  { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./documents.css";
import Banner from "./banner/bannerab";

const Documents = () => {
  const { t } = useTranslation();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_URL_PRIVACY_POLICY);
        setContent(res.data.data || "");
      } catch (err: any) {
        console.error(err);
        setError("Không thể tải nội dung.");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) return <p>{t("Đang tải nội dung...")}</p>;
  if (error) return <p>{t(error)}</p>;

  return (
    <div className="container ctncsbm">
      <Banner/>
      <div className="documentspro">

        <div
          className="documents-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Documents;
