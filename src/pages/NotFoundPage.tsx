import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
        <h1>404</h1>

      <p>
       잘못된 접근입니다
      </p>

      <button onClick={handleNavigateHome}>메인페이지로 가기</button>
    </>
  );
};

export default NotFoundPage;
