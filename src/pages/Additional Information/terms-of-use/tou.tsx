import  { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import "./tou.css";

const Documents = () => {
  const { t } = useTranslation();
  const [_, setContent] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_URL_TERMS_OF_SERVICE);
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
<>  </>
  );
};

export default Documents;
