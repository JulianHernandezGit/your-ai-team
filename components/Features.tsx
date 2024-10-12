import { CheckCircle } from 'lucide-react';

const features = [
  {
    name: 'Easy Integration',
    description: 'Seamlessly integrate our chatbots into your existing platforms and websites.',
  },
  {
    name: 'Customizable AI',
    description: 'Train your chatbot with your own data to provide accurate and relevant responses.',
  },
  {
    name: 'Multi-language Support',
    description: 'Communicate with customers in their preferred language with our multi-lingual chatbots.',
  },
  {
    name: 'Analytics Dashboard',
    description: 'Gain valuable insights into customer interactions and chatbot performance.',
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to engage with your customers
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI-powered chatbots come packed with features to enhance your customer interactions and streamline your business processes.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;