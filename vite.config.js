import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import manageMemberHandler from "./api/members/manage.js";
import {
  fetchPdfProxyPayload,
  sendPdfProxyError,
  sendPdfProxyResponse,
} from "./server/pdfProxy.js";

function readJsonRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on("data", (chunk) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      const rawBody = Buffer.concat(chunks).toString("utf8").trim();

      if (!rawBody) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(rawBody));
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });
}

function managedMemberApiPlugin() {
  return {
    name: "vocal-managed-member-api",
    configureServer(server) {
      server.middlewares.use("/api/members/manage", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(JSON.stringify({ message: "Método não permitido." }));
          return;
        }

        try {
          req.body = await readJsonRequestBody(req);
          await manageMemberHandler(req, res);
        } catch (error) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(JSON.stringify({
            message: error instanceof Error
              ? "Corpo JSON inválido para /api/members/manage."
              : "Não foi possível processar a requisição local de membros.",
          }));
        }
      });
    },
  };
}

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
  plugins: [react(), tailwindcss(), managedMemberApiPlugin(), pdfProxyPlugin()],
});
