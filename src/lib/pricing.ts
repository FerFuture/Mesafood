export type PricingRegion = "AR" | "INTL";

type RegionPrices = {
  initial: { amount: number; currency: string; locale: string };
  pro: { amount: number; currency: string; locale: string };
};

export const PRICING_BY_REGION: Record<PricingRegion, RegionPrices> = {
  AR: {
    initial: { amount: 39900, currency: "ARS", locale: "es-AR" },
    pro: { amount: 79900, currency: "ARS", locale: "es-AR" },
  },
  INTL: {
    initial: { amount: 25, currency: "USD", locale: "en-US" },
    pro: { amount: 50, currency: "USD", locale: "en-US" },
  },
};

export type PricedPlanKey = keyof RegionPrices;

export function formatPlanPrice(region: PricingRegion, planKey: PricedPlanKey): string {
  const { amount, currency, locale } = PRICING_BY_REGION[region][planKey];

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export async function detectPricingRegion(): Promise<PricingRegion> {
  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 4000);
    const response = await fetch("https://get.geojs.io/v1/ip/country.json", {
      signal: controller.signal,
    });
    window.clearTimeout(timeout);

    if (!response.ok) {
      return "INTL";
    }

    const data = (await response.json()) as { country?: string };
    const country = data.country?.trim().toUpperCase();
    return country === "AR" ? "AR" : "INTL";
  } catch {
    return "INTL";
  }
}
