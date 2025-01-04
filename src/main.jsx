import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "../node_modules/@rohitgadekar/kimui/dist/style.css";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
} from "@rohitgadekar/kimui";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextMenu>
      <ContextMenuTrigger>
        <App />
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuLabel>Options</ContextMenuLabel>

        <ContextMenuItem onSelect={() => window.location.reload()}>
          Reload Page
        </ContextMenuItem>
        <ContextMenuItem
          onSelect={() => window.open("https://www.rohitgadekar.dev", "_blank")}
          className="flex flex-row justify-between"
        >
          Developer
          <GoLinkExternal />
        </ContextMenuItem>
        <ContextMenuItem
          onSelect={() =>
            window.open("https://www.kimui.rohitgadekar.dev", "_blank")
          }
          className="flex flex-row justify-between"
        >
          KimUI
          <GoLinkExternal />
        </ContextMenuItem>
        <ContextMenuItem
          onSelect={() =>
            window.open("https://github.com/rohitgadekar/kimui-saas", "_blank")
          }
          className="flex flex-row justify-between"
        >
          Clone
          <GoLinkExternal />
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  </StrictMode>
);
