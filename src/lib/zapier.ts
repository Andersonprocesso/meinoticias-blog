export type NewPostPayload = {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  image?: string;
  category?: string;
};

const STORAGE_KEY = "zapierWebhookUrl";

export function getZapierWebhookUrl(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setZapierWebhookUrl(url: string) {
  try {
    localStorage.setItem(STORAGE_KEY, url);
  } catch {
    // ignore
  }
}

export async function triggerNewPostWebhook(payload: NewPostPayload) {
  const webhookUrl = getZapierWebhookUrl();
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify({
        event: "new_post",
        ...payload,
        timestamp: new Date().toISOString(),
        triggered_from: window.location.origin,
      }),
    });
  } catch (e) {
    console.warn("Zapier webhook failed", e);
  }
}
