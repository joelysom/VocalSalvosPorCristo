import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {
  fetchPdfProxyPayload,
  sendPdfProxyError,
  sendPdfProxyResponse,
} from "./server/pdfProxy.js";

function pdfProxyPlugin() {
  return {
    name: "vocal-pdf-proxy",
    configureServer(server) {
      server.middlewares.use("/api/pdf-proxy", async (req, res) => {
        if (req.method !== "GET" && req.method !== "HEAD") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(JSON.stringify({ message: "Método não permitido." }));
          return;
        }

        try {
          const requestUrl = new URL(req.url || "/", "http://localhost");
          const payload = await fetchPdfProxyPayload(requestUrl.searchParams.get("url") || "", req.headers.range);
          sendPdfProxyResponse(res, payload, req.method === "HEAD");
        } catch (error) {
          sendPdfProxyError(res, error);
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), pdfProxyPlugin()],
});
