import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <>
    {/* <Header /> */}
    <main>
      <Outlet />
    </main>
    {/* <Footer /> */}
    </>
  );
};

export default RootLayout;
