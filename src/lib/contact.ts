import type { ContactFormValues } from "./site-data";

export interface ContactResponse {
  ok: boolean;
  message: string;
}

export async function submitContact(values: ContactFormValues): Promise<ContactResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  const data = (await response.json()) as ContactResponse;
  if (!response.ok) {
    throw new Error(data.message || "We could not send your signal.");
  }

  return data;
}
