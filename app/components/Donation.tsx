'use client';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CreditCard, Building2, Copy, CheckCircle, Heart, DollarSign } from 'lucide-react';
import { useState } from 'react';

export default function Donation() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankDetails = {
    accountName: "GOZI Education Foundation",
    accountNumber: "1308436771",
    currency: "NGN",
    bankName: "Providus Bank Ltd",
    bankAddress: "62 Lobito Crescent, Wuse 2, Abuja, FCT"
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const donationMethods = [
    {
      icon: Building2,
      title: "Bank Transfer",
      description: "Direct bank transfer to our foundation account",
      color: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: CreditCard,
      title: "Online Payment",
      description: "Secure online payment processing",
      color: "bg-green-50",
      iconColor: "text-green-500"
    },
    {
      icon: Heart,
      title: "Recurring Donation",
      description: "Set up monthly or yearly donations",
      color: "bg-pink-50",
      iconColor: "text-pink-500"
    }
  ];

  return (
    <section id="donation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-50 text-orange-600 border-orange-200">Support Our Mission</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Make a Donation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous contribution helps us continue our mission of empowering communities
            across Africa through education, healthcare, and agricultural initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bank Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Bank Transfer Details</h3>
              <Card className="border border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-gray-800">
                    <Building2 className="w-5 h-5 mr-2 text-orange-500" />
                    Account Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">Account Name</p>
                        <p className="font-medium text-gray-800">{bankDetails.accountName}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(bankDetails.accountName, 'accountName')}
                        className="ml-2"
                      >
                        {copiedField === 'accountName' ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">Account Number</p>
                        <p className="font-medium text-gray-800">{bankDetails.accountNumber}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(bankDetails.accountNumber, 'accountNumber')}
                        className="ml-2"
                      >
                        {copiedField === 'accountNumber' ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">Currency</p>
                        <p className="font-medium text-gray-800">{bankDetails.currency}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(bankDetails.currency, 'currency')}
                        className="ml-2"
                      >
                        {copiedField === 'currency' ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">Bank Name</p>
                        <p className="font-medium text-gray-800">{bankDetails.bankName}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(bankDetails.bankName, 'bankName')}
                        className="ml-2"
                      >
                        {copiedField === 'bankName' ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">Bank Address</p>
                        <p className="font-medium text-gray-800">{bankDetails.bankAddress}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(bankDetails.bankAddress, 'bankAddress')}
                        className="ml-2"
                      >
                        {copiedField === 'bankAddress' ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-700">
                      <strong>Note:</strong> Please include &quot;Donation&quot; in the transfer reference/description
                      when making your transfer to help us track your contribution.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Donation Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Other Ways to Donate</h3>
              <div className="space-y-4">
                {donationMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card key={index} className="cursor-pointer transition-all duration-200 border border-gray-200 bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`w-6 h-6 ${method.iconColor}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2 text-gray-800">{method.title}</h4>
                            <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                            {/* <Button
                              size="sm"
                              className="bg-orange-500 hover:bg-orange-600 text-white"
                            >
                              Learn More
                            </Button> */}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Impact Statement */}
            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 mr-3" />
                  <h4 className="text-xl font-semibold">Your Impact</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">₦50,000</p>
                    <p className="text-sm opacity-90">Sponsors a child&apos;s education for one year</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">₦100,000</p>
                    <p className="text-sm opacity-90">Provides healthcare for 50 families</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">₦200,000</p>
                    <p className="text-sm opacity-90">Supports agricultural training for 20 farmers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        {/* <Card className="bg-gray-800 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Every Donation Makes a Difference
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Join thousands of supporters who are helping us create sustainable change
              across African communities. Your contribution, no matter the size, helps us reach more people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-white hover:bg-gray-700">
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
}
