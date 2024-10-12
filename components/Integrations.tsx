import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const integrations = [
  { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png' },
  { name: 'Zendesk', logo: 'https://cdn.worldvectorlogo.com/logos/zendesk-1.svg' },
  { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png' },
  { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' },
  { name: 'Intercom', logo: 'https://cdn.worldvectorlogo.com/logos/intercom-1.svg' },
  { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg' },
  { name: 'Twilio', logo: 'https://cdn.worldvectorlogo.com/logos/twilio.svg' },
  { name: 'WhatsApp', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png' },
];

const Integrations = () => {
  return (
    <div id="integrations" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Integrations</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Connect with your favorite tools
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI chatbots seamlessly integrate with popular platforms and services to enhance your workflow.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-3 lg:grid-cols-3">
            {integrations.map((integration) => (
              <Card key={integration.name} className="flex items-center justify-center p-4">
                <CardContent className="p-0">
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    width={100}
                    height={50}
                    objectFit="contain"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;