
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";

const Help = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I sign up for Uniride?",
          answer: "You can sign up by clicking the 'Sign up' button on our homepage. You'll need to provide your university email address, create a password, and verify your account."
        },
        {
          question: "Is Uniride free to use?",
          answer: "Signing up for Uniride is free. You only pay for the rides you book, and our platform doesn't charge any booking fees."
        },
        {
          question: "Which universities does Uniride serve?",
          answer: "We currently serve over 50 universities across Nigeria, including University of Lagos, University of Ibadan, Ahmadu Bello University, and many more."
        }
      ]
    },
    {
      category: "Booking & Rides",
      questions: [
        {
          question: "How do I book a ride?",
          answer: "Simply enter your pickup and destination locations, select your preferred time, choose from available rides, and confirm your booking."
        },
        {
          question: "Can I cancel my booking?",
          answer: "Yes, you can cancel your booking up to 2 hours before the scheduled departure time for a full refund."
        },
        {
          question: "What if my driver is late?",
          answer: "If your driver is more than 15 minutes late, you can cancel the ride for a full refund or contact our support team for assistance."
        },
        {
          question: "How do I contact my driver?",
          answer: "Once your booking is confirmed, you'll receive the driver's contact information and can reach them through the in-app messaging or phone."
        }
      ]
    },
    {
      category: "Payments",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, debit cards, and mobile money payments including Paystack integration."
        },
        {
          question: "When do I pay for my ride?",
          answer: "Payment is typically made before the ride begins, either online during booking or to the driver in cash if agreed upon."
        },
        {
          question: "Can I get a refund?",
          answer: "Yes, refunds are available for cancelled rides (with proper notice) or in case of service issues. Refunds are processed within 3-5 business days."
        }
      ]
    },
    {
      category: "Safety & Security",
      questions: [
        {
          question: "How do you ensure rider safety?",
          answer: "All drivers undergo background checks, vehicles are inspected, and all rides are tracked in real-time. We also have an emergency contact feature."
        },
        {
          question: "What should I do in case of an emergency?",
          answer: "Use the emergency button in the app to contact local authorities and our support team immediately. We also recommend sharing your ride details with trusted contacts."
        },
        {
          question: "How are drivers verified?",
          answer: "Drivers must provide valid identification, driver's license, vehicle registration, insurance, and pass a background check before being approved."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
          <p className="text-lg text-gray-600 mb-8">
            Find answers to common questions or get in touch with our support team
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm">Get instant help from our support team</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-lg font-semibold mb-2">Call Support</h3>
              <p className="text-gray-600 text-sm">+234 800 123 4567</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">support@uniride.com</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          {filteredFAQ.length > 0 ? (
            <div className="space-y-8">
              {filteredFAQ.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.category}</h3>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="bg-white rounded-lg border border-gray-200"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              <p className="text-lg text-gray-600">No results found for "{searchTerm}"</p>
              <p className="text-gray-500">Try searching with different keywords or browse our categories above.</p>
            </div>
          )}
        </div>

        {/* Still Need Help */}
        <Card className="bg-black text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Contact Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;
