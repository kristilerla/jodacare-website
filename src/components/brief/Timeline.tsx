type Item = {
  year: string;
  title: string;
  body: string;
};

type Props = {
  items: Item[];
  closing?: string;
};

export function Timeline({ items, closing }: Props) {
  return (
    <div className="relative">
      <ol className="space-y-10">
        {items.map((item, i) => (
          <li key={i} className="relative pl-10">
            <span
              className="absolute left-1.5 top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-accent-light"
              aria-hidden
            />
            {i < items.length - 1 && (
              <span
                className="absolute left-[0.6rem] top-5 h-full w-px bg-secondary-dark"
                aria-hidden
              />
            )}
            <p className="font-serif text-sm font-semibold uppercase tracking-wide text-primary">
              {item.year} — {item.title}
            </p>
            <p className="mt-2 text-base leading-relaxed text-text-light sm:text-lg">
              {item.body}
            </p>
          </li>
        ))}
      </ol>

      {closing && (
        <p className="mt-12 font-serif text-xl sm:text-2xl leading-relaxed text-text italic">
          {closing}
        </p>
      )}
    </div>
  );
}
