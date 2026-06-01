type Item = {
  number: number;
  lead: string;
  body: string;
};

type Props = {
  items: Item[];
};

export function NumberedList({ items }: Props) {
  return (
    <ol className="space-y-8">
      {items.map((item) => (
        <li
          key={item.number}
          className="grid grid-cols-[3rem_1fr] gap-4 md:grid-cols-[4rem_1fr] md:gap-6"
        >
          <span className="font-serif text-3xl font-bold leading-none text-primary md:text-4xl">
            {item.number}.
          </span>
          <div>
            <p className="font-serif text-lg font-semibold text-text md:text-xl">
              {item.lead}
            </p>
            <p className="mt-2 text-base leading-relaxed text-text-light md:text-lg">
              {item.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
