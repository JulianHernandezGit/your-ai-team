import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const useCases = [
  {
    title: 'Customer Support',
    description: 'Provide 24/7 support and instantly answer common customer queries.',
    industry: 'E-commerce, SaaS, Telecommunications',
  },
  {
    title: 'Lead Generation',
    description: 'Engage website visitors and qualify leads through interactive conversations.',
    industry: 'Real Estate, B2B Services, Education',
  },
  {
    title: 'Appointment Scheduling',
    description: 'Allow customers to book appointments or reservations without human intervention.',
    industry: 'Healthcare, Beauty & Wellness, Professional Services',
  },
  {
    title: 'Product Recommendations',
    description: 'Offer personalized product suggestions based on customer preferences and behavior.',
    industry: 'Retail, Fashion, Travel',
  },
];

const UseCases = () => {
  return (
    <div id="use-cases" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Use Cases</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transforming industries with AI chatbots
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover how our AI chatbots can be applied across various industries to improve efficiency and customer satisfaction.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{useCase.title}</CardTitle>
                  <CardDescription>{useCase.industry}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;