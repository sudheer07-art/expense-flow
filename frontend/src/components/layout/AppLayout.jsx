import { Outlet } from "react-router-dom";
import MobileLayout from "./MobileLayout";
import PageTransition from "../animations/PageTransition";

function AppLayout() {
  return (
    <MobileLayout>
      <PageTransition>
        <Outlet />
      </PageTransition>
    </MobileLayout>
  );
}

export default AppLayout;