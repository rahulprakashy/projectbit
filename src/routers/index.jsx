import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConversationPage, Home } from "../screens";
import { Layout } from "../component";
import { Router } from "./routers";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Router.Home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={Router.Conversation} element={<ConversationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
