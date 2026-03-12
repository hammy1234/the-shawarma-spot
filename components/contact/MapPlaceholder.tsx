"use client";

/**
 * Shows an embedded Google Map if embedSrc is set in data/site.ts.
 * Otherwise shows a styled CTA block linking to Google Maps.
 * To add embed: Google Maps → Share → Embed a map → copy the src URL into MAP_EMBED_SRC.
 */

type MapPlaceholderProps = {
  embedSrc: string;
  mapUrl: string;
};

export function MapPlaceholder({ embedSrc, mapUrl }: MapPlaceholderProps) {
  if (embedSrc) {
    return (
      <div className="relative aspect-[4/3] w-full">
        <iframe
          src={embedSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The Shawarma Spot location on Google Maps"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <a
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 bg-muted-bg p-8 text-center transition-colors hover:bg-muted-bg/80"
    >
      <svg
        className="h-12 w-12 text-muted"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <span className="font-semibold text-foreground">View on Google Maps</span>
      <span className="text-sm text-muted">Get directions to The Shawarma Spot</span>
    </a>
  );
}
