import {
  fetchPdfProxyPayload,
  sendPdfProxyError,
  sendPdfProxyResponse,
} from "../server/pdfProxy.js";

export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.status(405).json({ message: "Método não permitido." });
    return;
  }

  try {
    const payload = await fetchPdfProxyPayload(req.query?.url || "", req.headers.range);
    sendPdfProxyResponse(res, payload, req.method === "HEAD");
  } catch (error) {
    sendPdfProxyError(res, error);
  }
}
