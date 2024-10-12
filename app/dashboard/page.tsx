"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Chatbot {
  id: string;
  name: string;
  industry: string;
}

export default function Dashboard() {
  const [chatbots, setChatbots] = useState<Chatbot[]>([]);

  useEffect(() => {
    // TODO: Fetch actual chatbots from the API
    const mockChatbots: Chatbot[] = [
      { id: '1', name: 'Customer Support Bot', industry: 'E-commerce' },
      { id: '2', name: 'HR Assistant', industry: 'Human Resources' },
    ];
    setChatbots(mockChatbots);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <Link href="/create-chatbot" passHref>
        <Button className="mb-4">Create New Chatbot</Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chatbots.map((chatbot) => (
          <Card key={chatbot.id}>
            <CardHeader>
              <CardTitle>{chatbot.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Industry: {chatbot.industry}</p>
              <Link href={`/chatbot/${chatbot.id}`} passHref>
                <Button variant="outline" className="mt-2">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}