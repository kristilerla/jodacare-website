import { Card, CardTitle, CardContent } from '@/components/ui';

type Partner = {
  name: string;
  body: string;
};

type Props = {
  partners: Partner[];
};

export function PartnerBlock({ partners }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {partners.map((p) => (
        <Card
          key={p.name}
          variant="bordered"
          padding="lg"
          className="h-full hover:border-primary/40 transition-colors"
        >
          <CardTitle>{p.name}</CardTitle>
          <CardContent className="mt-3 text-base leading-relaxed">
            {p.body}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
