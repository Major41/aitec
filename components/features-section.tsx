import { AITEC_DATA } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function FeaturesSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why Choose AITEC?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine academic excellence with industry relevance to prepare students for successful careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AITEC_DATA.features.map((feature, index) => (
            <Card key={index} className="border border-border hover:border-primary/50 transition-colors hover:shadow-lg">
              <CardHeader>
                <div className="text-4xl mb-3">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
