"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                AI Chatbot SaaS
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Products</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Chatbot Builder</DropdownMenuItem>
                <DropdownMenuItem>Analytics Dashboard</DropdownMenuItem>
                <DropdownMenuItem>API Access</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Services</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Consultation</DropdownMenuItem>
                <DropdownMenuItem>Custom Development</DropdownMenuItem>
                <DropdownMenuItem>Training</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" asChild>
              <Link href="#use-cases">Use Cases</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#integrations">Integrations</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Button variant="ghost" className="w-full text-left" asChild>
              <Link href="#products">Products</Link>
            </Button>
            <Button variant="ghost" className="w-full text-left" asChild>
              <Link href="#services">Services</Link>
            </Button>
            <Button variant="ghost" className="w-full text-left" asChild>
              <Link href="#use-cases">Use Cases</Link>
            </Button>
            <Button variant="ghost" className="w-full text-left" asChild>
              <Link href="#integrations">Integrations</Link>
            </Button>
            <Button variant="ghost" className="w-full text-left" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;